import { Link } from 'react-router-dom';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { VAULTS } from '@/data/vaults';
import { Stat } from '@/components/Stat';
import { VaultAvatar } from '@/components/VaultAvatar';
import { fmtN, fmtPct, fmtUSD } from '@/lib/format';

const positions = [
  { vault: VAULTS[0], staked: 4_200, entryDays: 18 },
  { vault: VAULTS[2], staked: 2_850, entryDays: 42 },
];

const portfolioValue = positions.reduce((total, { staked }) => total + staked * 0.41, 0);
const portfolioYield = positions.reduce((total, { staked, vault }) => total + staked * 0.41 * (vault.apy / 100), 0);
const series = Array.from({ length: 30 }, (_, i) => ({
  d: `D-${29 - i}`,
  value: portfolioValue * (0.95 + 0.05 * Math.sin(i / 4) + i * 0.002),
}));

export function Dashboard() {
  return (
    <main className="mx-auto max-w-[1240px] px-6 pt-10 pb-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-mint-400">Interface preview · sample portfolio</span>
          <h1 className="display text-5xl md:text-6xl mt-2">Dashboard</h1>
        </div>
        <Link to="/vaults" className="btn btn-mint">Browse vaults →</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Stat label="Portfolio value" value={fmtUSD(portfolioValue)} delta={`+${fmtUSD(portfolioYield)} / yr est.`} size="lg" />
        <Stat label="Available" value="18.4K" delta="VAYLA" size="lg" />
        <Stat label="Lifetime earned" value="$1.3K" delta="sample total" size="lg" />
        <Stat label="Open positions" value={positions.length} delta="across vaults" size="lg" />
      </div>

      <div className="card p-6 mt-8">
        <div className="flex items-end justify-between mb-4">
          <h2 className="display text-2xl">Portfolio · 30 days</h2>
          <span className="text-[10px] uppercase tracking-widest text-ink-3">Illustrative</span>
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
              <YAxis stroke="#5C6F69" fontSize={11} tickLine={false} axisLine={false} tickFormatter={fmtUSD} />
              <Tooltip contentStyle={{ background: '#0A1310', border: '1px solid #234038', borderRadius: 12, fontSize: 12 }} formatter={(value: number) => fmtUSD(value)} />
              <Area type="monotone" dataKey="value" stroke="#3FE0BC" fill="url(#pfG)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <h2 className="display text-3xl mt-12 mb-4">Open positions</h2>
      <div className="card divide-y divide-line-1 overflow-hidden">
        {positions.map(({ vault, staked, entryDays }) => {
          const value = staked * 0.41;
          const yieldPerYear = value * (vault.apy / 100);
          return (
            <div key={vault.id} className="p-5 flex flex-col md:flex-row md:items-center gap-4">
              <Link to={`/vault/${vault.slug}`} className="flex items-center gap-3 flex-1 min-w-0">
                <VaultAvatar creator={vault.creator} color={vault.avatarColor} size={44} className="shrink-0" />
                <div className="min-w-0">
                  <div className="font-semibold truncate">{vault.creator}</div>
                  <div className="text-xs text-ink-3">Sample entry {entryDays}d ago · APY {fmtPct(vault.apy)}</div>
                </div>
              </Link>
              <div className="grid grid-cols-3 gap-6 text-sm tabular md:text-right">
                <Metric label="Staked" value={`${fmtN(staked)} VAYLA`} />
                <Metric label="Value" value={fmtUSD(value)} />
                <Metric label="Yield/yr" value={fmtUSD(yieldPerYear)} mint />
              </div>
              <Link to={`/vault/${vault.slug}`} className="btn btn-ghost !py-2 !px-3 text-xs md:ml-4">View</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

function Metric({ label, value, mint = false }: { label: string; value: string; mint?: boolean }) {
  return <div><div className="text-[10px] uppercase tracking-widest text-ink-3">{label}</div><div className={mint ? 'text-mint-400' : 'text-ink-1'}>{value}</div></div>;
}
