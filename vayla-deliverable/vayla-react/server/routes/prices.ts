import { Router } from 'express';

export const pricesRouter = Router();

let cache: { vayla: number; eth: number; btc: number; ts: number } | null = null;
const TTL = 30_000;

pricesRouter.get('/', async (_req, res) => {
  const now = Date.now();
  if (cache && now - cache.ts < TTL) return res.json(cache);

  // Try CoinGecko for ETH/BTC; $VAYLA is mocked (token TBD).
  let eth = 3500, btc = 96000;
  try {
    const r = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd', {
      headers: process.env.COINGECKO_API_KEY ? { 'x-cg-demo-api-key': process.env.COINGECKO_API_KEY } : {},
    });
    if (r.ok) {
      const d: any = await r.json();
      eth = d.ethereum?.usd ?? eth;
      btc = d.bitcoin?.usd ?? btc;
    }
  } catch { /* keep fallback */ }

  // Mock $VAYLA: smooth random walk anchored at $0.41
  const drift = (Math.sin(now / 120_000) + Math.cos(now / 87_000)) * 0.012;
  const vayla = Number((0.41 + drift).toFixed(4));

  cache = { vayla, eth, btc, ts: now };
  res.json(cache);
});
