import { Router } from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { findVault, VAULTS } from '../data';

export const aiRouter = Router();

const apiKey = process.env.ANTHROPIC_API_KEY;
const client = apiKey ? new Anthropic({ apiKey }) : null;

const MODEL_FAST = 'claude-haiku-4-5-20251001';
const MODEL_SMART = 'claude-sonnet-4-6';

function vaultContextBlock(vaultId: string) {
  const v = findVault(vaultId);
  if (!v) return null;
  const lines = [
    `# Vault: ${v.creator} (${v.handle})`,
    `Category: ${v.category}`,
    `Tagline: ${v.tagline}`,
    `Description: ${v.description}`,
    ``,
    `## Stats`,
    `TVL: $${v.tvl.toLocaleString()}`,
    `APY current / 30d / 90d: ${v.apy}% / ${v.apy30d}% / ${v.apy90d}%`,
    `Fans: ${v.fans} of ${v.capacity} capacity`,
    `Boost multiplier: ${v.boost}x`,
    `Lockup: ${v.lockup} days`,
    `Risk score (1-10, lower=safer): ${v.riskScore}`,
    `Momentum signal (-1..1): ${v.momentum}`,
    ``,
    `## Revenue mix (last quarter)`,
    ...v.revenue.map(r => `- ${r.source}: $${r.usd.toLocaleString()} (${(r.share*100).toFixed(0)}%)`),
    ``,
    `## Fan tiers`,
    ...v.fanTier.map(t => `- ${t.name} (>= ${t.min} VAYLA): ${t.perks.join('; ')}`),
    ``,
    `## Monthly trend (TVL · revenue)`,
    ...v.monthly.map(m => `- ${m.m}: $${m.tvl.toLocaleString()} · $${m.revenue.toLocaleString()}`),
  ];
  return lines.join('\n');
}

const SYSTEM_BASE = `You are the VAYLA Vault Analyst, an on-chain research assistant for fans and stakers.

VAYLA is a settlement layer for fan-funded equity. Each creator has one Vault. Fans deposit $VAYLA and earn pro-rata yield from streams, drops, IP licensing and merch. Lockups boost yield up to +50%/year.

Style:
- Direct, terse, numbers-first.
- Use the provided Vault context as ground truth. Never invent facts not in context.
- Quote specific numbers when relevant.
- 3-5 sentence answers. Bullet only when asked to compare.
- If asked about price targets or guarantees, refuse and remind: not financial advice.
- Surface risk plainly when relevant (lockup, capacity fill, momentum, revenue concentration).`;

aiRouter.post('/chat', async (req, res) => {
  const { vaultId, messages } = req.body || {};
  if (!Array.isArray(messages)) return res.status(400).json({ error: 'messages required' });

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');

  const send = (chunk: string) => { res.write(`data: ${chunk}\n\n`); };

  if (!client) {
    send('AI is not configured. Set `ANTHROPIC_API_KEY` in `.env` and restart the API server.');
    send('[DONE]');
    return res.end();
  }

  const ctx = vaultId ? vaultContextBlock(vaultId) : null;
  const systemBlocks: any[] = [
    { type: 'text', text: SYSTEM_BASE, cache_control: { type: 'ephemeral' } },
  ];
  if (ctx) systemBlocks.push({ type: 'text', text: ctx, cache_control: { type: 'ephemeral' } });

  try {
    const stream = await client.messages.stream({
      model: MODEL_SMART,
      max_tokens: 1024,
      system: systemBlocks,
      messages: messages.map((m: any) => ({ role: m.role, content: m.content })),
    });

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && (event.delta as any).type === 'text_delta') {
        send((event.delta as any).text);
      }
    }
    send('[DONE]');
    res.end();
  } catch (e: any) {
    console.error('[ai/chat]', e?.message || e);
    send('Sorry — AI service hit an error. ' + (e?.message || ''));
    send('[DONE]');
    res.end();
  }
});

aiRouter.post('/recommend', async (req, res) => {
  const { genres = [], risk = 5, horizon = 90, address } = req.body || {};

  // Always-on heuristic ranking so the UI works even without a key.
  const scored = VAULTS.map(v => {
    const genreMatch = genres.some((g: string) =>
      g === v.category || (g === 'fan' && true)
    ) ? 0.35 : 0;
    const riskFit = 1 - Math.abs(v.riskScore - risk) / 10;
    const momentum = (v.momentum + 1) / 2;
    const horizonFit = horizon >= v.lockup ? 1 : 0.6;
    const score = genreMatch * 0.25 + riskFit * 0.30 + momentum * 0.30 + horizonFit * 0.15;
    return { vaultId: v.id, vault: v, score: Number(score.toFixed(3)) };
  }).sort((a, b) => b.score - a.score).slice(0, 4);

  // If Claude is available, ask it to write 1-line reasons grounded in Vault stats.
  if (client) {
    try {
      const summary = scored.map(s => {
        const v = s.vault;
        return `${v.creator}: ${v.category}, APY90d ${v.apy90d}%, risk ${v.riskScore}/10, momentum ${v.momentum}, lockup ${v.lockup}d`;
      }).join('\n');
      const r = await client.messages.create({
        model: MODEL_FAST,
        max_tokens: 600,
        system: [{ type: 'text', text: 'You write one-sentence reasons (max 22 words) explaining why each vault matches the user. Output ONLY a JSON array of {vaultId, reason}. No prose.', cache_control: { type: 'ephemeral' } }],
        messages: [{
          role: 'user',
          content: `User taste: genres=${genres.join(',')||'any'}, risk=${risk}/10, horizon=${horizon}d, address=${address||'none'}.\n\nVaults to explain:\n${summary}\n\nReturn JSON array only with vaultId from these: ${scored.map(s=>s.vaultId).join(', ')}.`,
        }],
      });
      const text = (r.content[0] as any).text || '[]';
      const m = text.match(/\[[\s\S]*\]/);
      const reasons: { vaultId: string; reason: string }[] = m ? JSON.parse(m[0]) : [];
      const merged = scored.map(s => ({
        vaultId: s.vaultId, score: s.score,
        reason: reasons.find(x => x.vaultId === s.vaultId)?.reason
          || `Risk ${s.vault.riskScore}/10, ${s.vault.apy90d}% 90d APY, ${s.vault.category}.`,
      }));
      return res.json(merged);
    } catch (e: any) {
      console.warn('[ai/recommend] Claude path failed, falling back', e?.message);
    }
  }

  res.json(scored.map(s => ({
    vaultId: s.vaultId,
    score: s.score,
    reason: `Risk ${s.vault.riskScore}/10 fits your ${risk}/10 target. ${s.vault.apy90d}% 90d APY. ${s.vault.category}.`,
  })));
});

aiRouter.post('/pulse', async (req, res) => {
  const { vaultIds = [] } = req.body || {};
  const vaults = vaultIds.length ? vaultIds.map((id: string) => findVault(id)).filter(Boolean) : VAULTS.slice(0, 3);
  const results = vaults.map((v: any) => {
    const sentiment = v.momentum;
    return {
      vaultId: v.id,
      headline: `${v.creator}: ${sentiment > 0.5 ? 'Strong momentum' : sentiment > 0 ? 'Steady trend' : 'Cooling off'}`,
      bullets: [
        `${v.fans}/${v.capacity} fans (${Math.round(v.fans/v.capacity*100)}% of cap)`,
        `Top revenue: ${v.revenue[0].source} (${Math.round(v.revenue[0].share*100)}%)`,
        `Risk ${v.riskScore}/10 · Boost ${v.boost.toFixed(2)}× · Lockup ${v.lockup}d`,
      ],
      sentiment,
    };
  });
  res.json(results);
});
