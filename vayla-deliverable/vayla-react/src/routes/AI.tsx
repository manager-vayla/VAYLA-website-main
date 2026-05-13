import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { api } from '@/lib/api';
import { useVaultsData } from '@/hooks/useVaultsData';
import { AIChat } from '@/components/AIChat';
import { VaultAvatar } from '@/components/VaultAvatar';
import { useApp } from '@/store/useApp';
import { fmtPct, fmtUSD } from '@/lib/format';

const GENRES = ['music', 'creator', 'gaming', 'film', 'sports'];

export function AI() {
  const { taste, setTaste } = useApp();
  const { data: vaults = [] } = useVaultsData();

  const [recs, setRecs] = useState<{ vaultId: string; reason: string; score: number }[]>([]);
  const [loadingRec, setLoadingRec] = useState(false);

  async function recommend() {
    setLoadingRec(true);
    try {
      const r = await api.recommend({ genres: taste.genres, risk: taste.risk, horizon: taste.horizon });
      setRecs(r);
    } finally { setLoadingRec(false); }
  }

  const { data: pulse = [] } = useQuery({
    queryKey: ['pulse'],
    queryFn: () => api.pulse(vaults.slice(0, 3).map(v => v.id)),
    enabled: vaults.length > 0,
    refetchInterval: 60_000,
  });

  return (
    <main className="mx-auto max-w-[1240px] px-6 pt-10 pb-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">AI Layer</span>
        <h1 className="display text-5xl md:text-6xl mt-2">Read the signal. <em className="display-italic text-mint-300">Then act.</em></h1>
        <p className="text-ink-2 mt-4 leading-relaxed">
          Streaming Claude analyst. Personalized vault recommender. Daily pulse across your watchlist. Backed by on-chain context, live revenue mix, and momentum signals.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recommender */}
        <div className="card p-6">
          <h2 className="display text-2xl">Recommender</h2>
          <p className="text-ink-3 text-sm mt-1">Tell us your taste, get vaults ranked by fit.</p>

          <div className="mt-6">
            <div className="text-[11px] uppercase tracking-widest text-ink-3 mb-2">Genres</div>
            <div className="flex flex-wrap gap-2">
              {GENRES.map(g => {
                const on = taste.genres.includes(g);
                return (
                  <button
                    key={g}
                    onClick={() => setTaste({ genres: on ? taste.genres.filter(x => x !== g) : [...taste.genres, g] })}
                    className={`btn !py-1.5 !px-3 text-xs ${on ? 'btn-mint' : 'btn-ghost'}`}
                  >{g}</button>
                );
              })}
            </div>
          </div>

          <div className="mt-5">
            <div className="flex justify-between text-[11px] uppercase tracking-widest text-ink-3 mb-2">
              <span>Risk tolerance</span>
              <span className="tabular text-ink-2 normal-case tracking-normal">{taste.risk}/10</span>
            </div>
            <input type="range" min={1} max={10} value={taste.risk} onChange={e => setTaste({ risk: Number(e.target.value) })} className="w-full accent-mint-400" />
          </div>

          <div className="mt-5">
            <div className="flex justify-between text-[11px] uppercase tracking-widest text-ink-3 mb-2">
              <span>Horizon (days)</span>
              <span className="tabular text-ink-2 normal-case tracking-normal">{taste.horizon}d</span>
            </div>
            <input type="range" min={0} max={365} step={15} value={taste.horizon} onChange={e => setTaste({ horizon: Number(e.target.value) })} className="w-full accent-mint-400" />
          </div>

          <button onClick={recommend} disabled={loadingRec} className="btn btn-mint w-full mt-6">
            {loadingRec ? 'Reading signal…' : 'Recommend vaults'}
          </button>

          {recs.length > 0 && (
            <div className="mt-6 space-y-3">
              {recs.map((r, i) => {
                const v = vaults.find(x => x.id === r.vaultId);
                if (!v) return null;
                return (
                  <motion.div
                    key={r.vaultId}
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  >
                    <Link to={`/vault/${v.slug}`} className="block rounded-xl border border-line-1 p-4 hover:border-mint-400/40 transition">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <VaultAvatar creator={v.creator} color={v.avatarColor} size={40} />
                          <div>
                            <div className="font-semibold">{v.creator}</div>
                            <div className="text-xs text-ink-3 uppercase tracking-widest">{v.category}</div>
                          </div>
                        </div>
                        <div className="text-right tabular">
                          <div className="text-mint-400 text-sm">{fmtPct(v.apy90d)}</div>
                          <div className="text-[10px] text-ink-3 uppercase tracking-widest">fit {(r.score * 100).toFixed(0)}%</div>
                        </div>
                      </div>
                      <p className="text-sm text-ink-2 mt-3">{r.reason}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        {/* Vault Analyst */}
        <div>
          <AIChat
            title="Protocol Analyst"
            placeholder="Ask about VAYLA, vaults, or any creator…"
            starter={[
              'Which vault has the best risk-adjusted yield?',
              'What does momentum 0.91 mean for KOVA?',
              'Explain how pro-rata yield is calculated',
            ]}
          />
        </div>
      </div>

      {/* Pulse */}
      <section className="mt-12">
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-mint-400">Daily pulse</span>
            <h2 className="display text-3xl mt-1">Across your watchlist</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {pulse.map((p, i) => {
            const v = vaults.find(x => x.id === p.vaultId);
            if (!v) return null;
            return (
              <motion.div
                key={p.vaultId}
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              >
                <Link to={`/vault/${v.slug}`} className="card glass-hover p-5 block">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{v.creator}</div>
                    <span className={`text-xs tabular ${p.sentiment > 0.5 ? 'text-mint-400' : p.sentiment > 0 ? 'text-ink-1' : 'text-ink-3'}`}>
                      {p.sentiment > 0 ? '↑' : '↓'} {(p.sentiment * 100).toFixed(0)}
                    </span>
                  </div>
                  <div className="text-sm text-ink-2 mt-2">{p.headline}</div>
                  <ul className="mt-3 space-y-1 text-xs text-ink-3">
                    {p.bullets.map(b => <li key={b}>· {b}</li>)}
                  </ul>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
