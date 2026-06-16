import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useVaultsData } from '@/hooks/useVaultsData';
import { useApp } from '@/store/useApp';
import { Stat } from '@/components/Stat';
import { ConnectButton } from '@/components/ConnectButton';
import { VaultAvatar } from '@/components/VaultAvatar';
import { fmtN, fmtPct, fmtUSD, fmtAddr, timeAgo } from '@/lib/format';

export function Dashboard() {
  // If `address` is set, the wallet is providing it, treat as connected.
  // Avoids the wagmi `status` race that briefly reports 'connecting' on
  // already-connected sessions during route transitions.
  const { address } = useAccount();
  const { positions, vaylaBalance, totalEarned, exit } = useApp();
  const { data: vaults = [] } = useVaultsData();

  const enriched = positions.map(p => ({ p, v: vaults.find(v => v.id === p.vaultId) })).filter(x => x.v);
  const portfolioValue = enriched.reduce((s, { p }) => s + p.staked * 0.41, 0);
  const portfolioYield = enriched.reduce((s, { p, v }) => s + p.staked * 0.41 * (v!.apy / 100), 0);
  const series = Array.from({ length: 30 }, (_, i) => ({
    d: 'D-' + (29 - i),
    value: portfolioValue * (0.95 + 0.05 * Math.sin(i / 4) + i * 0.002) || 0,
  }));

  if (!address) {
    return (
      <main className="mx-auto max-w-[800px] px-6 py-32 text-center">
        <h1 className="display text-5xl">Connect to see your dashboard.</h1>
        <p className="text-ink-2 mt-4">Read-only by default. We never see your private keys.</p>
        <div className="mt-8"><ConnectButton /></div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[1240px] px-6 pt-10 pb-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-mint-400">Connected · {fmtAddr(address)}</span>
          <h1 className="display text-5xl md:text-6xl mt-2">Dashboard</h1>
        </div>
        <Link to="/vaults" className="btn btn-mint">Browse vaults →</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Portfolio value" value={fmtUSD(portfolioValue)} delta={`+${fmtUSD(portfolioYield)} / yr est.`} size="lg" />
        <Stat label="Available" value={`${fmtN(vaylaBalance)}`} delta="VAYLA" size="lg" />
        <Stat label="Lifetime earned" value={fmtUSD(totalEarned)} delta="exited positions" size="lg" />
        <Stat label="Open positions" value={enriched.length} delta={`${enriched.length === 0 ? 'None yet' : 'across vaults'}`} size="lg" />
      </div>

      <div className="card p-6 mt-8">
        <div className="flex items-end justify-between mb-4">
          <h3 className="display text-2xl">Portfolio · 30 days</h3>
          <span className="text-[10px] uppercase tracking-widest text-ink-3">Estimated</span>
        </div>
        <div className="h-72">
          <ResponsiveContainer>
            <AreaChart data={series}>
              <defs>
                <linearGradient id="pfG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#3FE0BC" stopOpacity={0.5} />
                  <stop offset="1" stopColor="#3FE0BC" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#1A2E27" vertical={false} />
              <XAxis dataKey="d" stroke="#5C6F69" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#5C6F69" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(n) => fmtUSD(n)} />
              <Tooltip contentStyle={{ background: '#0A1310', border: '1px solid #234038', borderRadius: 12, fontSize: 12 }} formatter={(n: number) => fmtUSD(n)} />
              <Area type="monotone" dataKey="value" stroke="#3FE0BC" fill="url(#pfG)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2 className="display text-3xl mt-12 mb-4">Open positions</h2>
      {enriched.length === 0 ? (
        <div className="card p-12 text-center">
          <p className="text-ink-2">No open positions yet. Find a vault and stake.</p>
          <Link to="/vaults" className="btn btn-mint mt-4">Browse Vaults</Link>
        </div>
      ) : (
        <div className="card divide-y divide-line-1 overflow-hidden">
          {enriched.map(({ p, v }) => {
            const usd = p.staked * 0.41;
            const yld = usd * (v!.apy / 100);
            return (
              <div key={p.vaultId} className="p-5 flex flex-col md:flex-row md:items-center gap-4">
                <Link to={`/vault/${v!.slug}`} className="flex items-center gap-3 flex-1 min-w-0">
                  <VaultAvatar creator={v!.creator} color={v!.avatarColor} size={44} className="shrink-0" />
                  <div className="min-w-0">
                    <div className="font-semibold truncate">{v!.creator}</div>
                    <div className="text-xs text-ink-3">Opened {timeAgo(p.entry)} ago · APY {fmtPct(v!.apy)}</div>
                  </div>
                </Link>
                <div className="grid grid-cols-3 gap-6 text-sm tabular md:text-right">
                  <div><div className="text-[10px] uppercase tracking-widest text-ink-3">Staked</div><div className="text-ink-1">{fmtN(p.staked)} VAYLA</div></div>
                  <div><div className="text-[10px] uppercase tracking-widest text-ink-3">Value</div><div className="text-ink-1">{fmtUSD(usd)}</div></div>
                  <div><div className="text-[10px] uppercase tracking-widest text-ink-3">Yield/yr</div><div className="text-mint-400">{fmtUSD(yld)}</div></div>
                </div>
                <div className="flex gap-2 md:ml-4">
                  <Link to={`/vault/${v!.slug}`} className="btn btn-ghost !py-2 !px-3 text-xs">Manage</Link>
                  <button onClick={() => exit(p.vaultId)} className="btn btn-ghost !py-2 !px-3 text-xs">Exit</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
