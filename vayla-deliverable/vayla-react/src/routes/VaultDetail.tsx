import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from 'recharts';
import { api } from '@/lib/api';
import { Stat } from '@/components/Stat';
import { AIChat } from '@/components/AIChat';
import { DepositModal } from '@/components/DepositModal';
import { ConnectButton } from '@/components/ConnectButton';
import { fmtN, fmtPct, fmtUSD, fmtAddr } from '@/lib/format';
import { useAccount } from 'wagmi';
import { VaultAvatar } from '@/components/VaultAvatar';

export function VaultDetail() {
  const { slug = '' } = useParams();
  // Address-based check, same pattern as Dashboard / CreatorPortal so the
  // reconnecting state from a persisted session does not flip the CTA.
  const { address } = useAccount();
  const isConnected = !!address;
  const { data: v, isLoading, error } = useQuery({ queryKey: ['vault', slug], queryFn: () => api.vault(slug), enabled: !!slug });
  const [open, setOpen] = useState(false);

  if (isLoading) return <main className="mx-auto max-w-[1240px] px-6 py-24"><div className="card h-96 animate-pulse" /></main>;
  if (error || !v) return <main className="mx-auto max-w-[1240px] px-6 py-24 text-center">
    <h1 className="display text-3xl">Vault not found</h1>
    <Link to="/vaults" className="btn btn-mint mt-6">Browse Vaults</Link>
  </main>;

  return (
    <main className="mx-auto max-w-[1240px] px-6 pt-10 pb-24">
      <div className="card relative overflow-hidden p-8">
        <div className="absolute -top-24 -right-24 size-72 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${v.avatarColor}, transparent 70%)`, filter: 'blur(40px)' }} />
        <div className="flex flex-col md:flex-row gap-8 items-start relative">
          <VaultAvatar creator={v.creator} color={v.avatarColor} size={96} liveDot />
          <div className="flex-1">
            <div className="text-[11px] uppercase tracking-widest text-mint-400">{v.category}</div>
            <h1 className="display text-5xl md:text-6xl mt-1">{v.creator}</h1>
            <div className="text-ink-3 mt-1 tabular text-sm">{v.handle} · {fmtAddr(v.contract)}</div>
            <p className="text-ink-2 mt-4 max-w-2xl leading-relaxed">{v.description}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              {isConnected ? (
                <button onClick={() => setOpen(true)} className="btn btn-mint">Stake into Vault</button>
              ) : <ConnectButton />}
              <Link to="/vaults" className="btn btn-ghost">All vaults</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
        <Stat label="TVL" value={fmtUSD(v.tvl)} delta="↑ 4.8% / 24h" />
        <Stat label="APY 90D" value={fmtPct(v.apy90d)} delta={`↑ ${(v.apy30d - v.apy90d).toFixed(1)} pts vs 30d`} />
        <Stat label="Boost" value={`${v.boost.toFixed(2)}×`} delta={`Lockup ${v.lockup}d`} />
        <Stat label="Risk" value={`${v.riskScore}/10`} delta={`Momentum ${v.momentum.toFixed(2)}`} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="card p-6 lg:col-span-2">
          <div className="flex items-end justify-between mb-4">
            <h3 className="display text-2xl">TVL & Revenue</h3>
            <span className="text-[10px] uppercase tracking-widest text-ink-3">Last 5 months</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={v.monthly}>
                <defs>
                  <linearGradient id="tvlG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#70F3D8" stopOpacity={0.5} />
                    <stop offset="1" stopColor="#70F3D8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#1A2E27" vertical={false} />
                <XAxis dataKey="m" stroke="#5C6F69" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#5C6F69" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(n) => fmtUSD(n)} />
                <Tooltip
                  contentStyle={{ background: '#0A1310', border: '1px solid #234038', borderRadius: 12, fontSize: 12 }}
                  formatter={(n: number) => fmtUSD(n)}
                />
                <Area type="monotone" dataKey="tvl" stroke="#70F3D8" fill="url(#tvlG)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="display text-2xl mb-4">Revenue Mix</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={v.revenue} layout="vertical" margin={{ left: 0 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="source" type="category" stroke="#9FB5AE" fontSize={11} tickLine={false} axisLine={false} width={120} />
                <Tooltip
                  cursor={false}
                  contentStyle={{ background: '#0A1310', border: '1px solid #234038', borderRadius: 12, fontSize: 12 }}
                  formatter={(n: number) => fmtUSD(n)}
                />
                <Bar dataKey="usd" fill="#3FE0BC" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="card p-6">
          <h3 className="display text-2xl mb-4">Fan Tiers</h3>
          <div className="space-y-3">
            {v.fanTier.map(t => (
              <div key={t.name} className="rounded-xl border border-line-1 p-4">
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-ink-0">{t.name}</div>
                  <div className="tabular text-mint-400 text-sm">≥ {fmtN(t.min)} VAYLA</div>
                </div>
                <ul className="mt-2 text-sm text-ink-2 list-disc list-inside space-y-0.5">
                  {t.perks.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="display text-2xl mb-4">Vault Health</h3>
          <div className="space-y-4">
            <Bar2 label="Capacity filled" pct={v.fans / v.capacity * 100} sub={`${fmtN(v.fans)} / ${fmtN(v.capacity)} fans`} />
            <Bar2 label="Risk score" pct={v.riskScore * 10} sub={`${v.riskScore}/10 (lower = safer)`} accent="#9CFBE4" />
            <Bar2 label="Momentum" pct={(v.momentum + 1) * 50} sub={v.momentum.toFixed(2)} />
            <Bar2 label="Revenue diversity" pct={100 - Math.max(...v.revenue.map(r => r.share)) * 100} sub={`Top stream ${(Math.max(...v.revenue.map(r => r.share)) * 100).toFixed(0)}%`} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <AIChat
            vaultId={v.id}
            title="Ask the Vault Analyst"
            starter={[
              `What's driving ${v.creator}'s momentum?`,
              `What's the biggest risk holding this vault?`,
              `Compare APY vs other ${v.category} vaults`,
            ]}
          />
        </div>
      </div>

      <DepositModal vault={v} open={open} onClose={() => setOpen(false)} />
    </main>
  );
}

function Bar2({ label, pct, sub, accent = '#3FE0BC' }: { label: string; pct: number; sub: string; accent?: string }) {
  const w = Math.max(0, Math.min(100, pct));
  return (
    <div>
      <div className="flex justify-between text-[11px] uppercase tracking-widest text-ink-3 mb-1.5">
        <span>{label}</span>
        <span className="text-ink-2 normal-case tracking-normal tabular">{sub}</span>
      </div>
      <div className="h-2 rounded-full bg-line-1 overflow-hidden">
        <div className="h-full rounded-full" style={{ width: w + '%', background: `linear-gradient(90deg, ${accent}, #1FB89A)` }} />
      </div>
    </div>
  );
}
