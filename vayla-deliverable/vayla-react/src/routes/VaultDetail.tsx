import { Link, useParams } from 'react-router-dom';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { findVault } from '@/data/vaults';
import { Stat } from '@/components/Stat';
import { VaultAvatar } from '@/components/VaultAvatar';
import { fmtN, fmtPct, fmtUSD } from '@/lib/format';

export function VaultDetail() {
  const { slug = '' } = useParams();
  const vault = findVault(slug);

  if (!vault) return <main className="mx-auto max-w-[1240px] px-6 py-24 text-center">
    <h1 className="display text-3xl">Vault not found</h1>
    <Link to="/vaults" className="btn btn-mint mt-6">Browse Vaults</Link>
  </main>;

  return (
    <main className="mx-auto max-w-[1240px] px-6 pt-10 pb-24">
      <div className="card relative overflow-hidden p-8">
        <div className="absolute -top-24 -right-24 size-72 rounded-full opacity-30" style={{ background: `radial-gradient(circle, ${vault.avatarColor}, transparent 70%)`, filter: 'blur(40px)' }} />
        <div className="flex flex-col md:flex-row gap-8 items-start relative">
          <VaultAvatar creator={vault.creator} color={vault.avatarColor} size={96} liveDot />
          <div className="flex-1">
            <div className="text-[11px] uppercase tracking-widest text-mint-400">{vault.category} · interface preview</div>
            <h1 className="display text-5xl md:text-6xl mt-1">{vault.creator}</h1>
            <div className="text-ink-3 mt-1 tabular text-sm">{vault.handle}</div>
            <p className="text-ink-2 mt-4 max-w-2xl leading-relaxed">{vault.description}</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <Link to="/marketplace" className="btn btn-mint">View marketplace</Link>
              <Link to="/vaults" className="btn btn-ghost">All vaults</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
        <Stat label="TVL" value={fmtUSD(vault.tvl)} delta="illustrative" />
        <Stat label="APY 90D" value={fmtPct(vault.apy90d)} delta={`${(vault.apy30d - vault.apy90d).toFixed(1)} pts vs 30d`} />
        <Stat label="Boost" value={`${vault.boost.toFixed(2)}×`} delta={`Lockup ${vault.lockup}d`} />
        <Stat label="Risk" value={`${vault.riskScore}/10`} delta={`Momentum ${vault.momentum.toFixed(2)}`} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <section className="card p-6 lg:col-span-2">
          <div className="flex items-end justify-between mb-4">
            <h2 className="display text-2xl">TVL & Revenue</h2>
            <span className="text-[10px] uppercase tracking-widest text-ink-3">Illustrative history</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={vault.monthly}>
                <defs><linearGradient id="tvlG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#70F3D8" stopOpacity={0.5} /><stop offset="1" stopColor="#70F3D8" stopOpacity={0} /></linearGradient></defs>
                <CartesianGrid stroke="#1A2E27" vertical={false} />
                <XAxis dataKey="m" stroke="#5C6F69" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#5C6F69" fontSize={11} tickLine={false} axisLine={false} tickFormatter={fmtUSD} />
                <Tooltip contentStyle={{ background: '#0A1310', border: '1px solid #234038', borderRadius: 12, fontSize: 12 }} formatter={(value: number) => fmtUSD(value)} />
                <Area type="monotone" dataKey="tvl" stroke="#70F3D8" fill="url(#tvlG)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="card p-6">
          <h2 className="display text-2xl mb-4">Revenue Mix</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={vault.revenue} layout="vertical" margin={{ left: 0 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="source" type="category" stroke="#9FB5AE" fontSize={11} tickLine={false} axisLine={false} width={120} />
                <Tooltip cursor={false} contentStyle={{ background: '#0A1310', border: '1px solid #234038', borderRadius: 12, fontSize: 12 }} formatter={(value: number) => fmtUSD(value)} />
                <Bar dataKey="usd" fill="#3FE0BC" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <section className="card p-6">
          <h2 className="display text-2xl mb-4">Fan Tiers</h2>
          <div className="space-y-3">
            {vault.fanTier.map(tier => <div key={tier.name} className="rounded-xl border border-line-1 p-4">
              <div className="flex justify-between items-baseline"><div className="font-semibold text-ink-0">{tier.name}</div><div className="tabular text-mint-400 text-sm">≥ {fmtN(tier.min)} VAYLA</div></div>
              <ul className="mt-2 text-sm text-ink-2 list-disc list-inside space-y-0.5">{tier.perks.map(perk => <li key={perk}>{perk}</li>)}</ul>
            </div>)}
          </div>
        </section>

        <section className="card p-6">
          <h2 className="display text-2xl mb-4">Vault Health</h2>
          <div className="space-y-4">
            <Progress label="Capacity filled" value={vault.fans / vault.capacity * 100} detail={`${fmtN(vault.fans)} / ${fmtN(vault.capacity)} fans`} />
            <Progress label="Risk score" value={vault.riskScore * 10} detail={`${vault.riskScore}/10 (lower = safer)`} accent="#9CFBE4" />
            <Progress label="Momentum" value={(vault.momentum + 1) * 50} detail={vault.momentum.toFixed(2)} />
            <Progress label="Revenue diversity" value={100 - Math.max(...vault.revenue.map(revenue => revenue.share)) * 100} detail={`Top stream ${(Math.max(...vault.revenue.map(revenue => revenue.share)) * 100).toFixed(0)}%`} />
          </div>
        </section>
      </div>
    </main>
  );
}

function Progress({ label, value, detail, accent = '#3FE0BC' }: { label: string; value: number; detail: string; accent?: string }) {
  const width = Math.max(0, Math.min(100, value));
  return <div>
    <div className="flex justify-between text-[11px] uppercase tracking-widest text-ink-3 mb-1.5"><span>{label}</span><span className="text-ink-2 normal-case tracking-normal tabular">{detail}</span></div>
    <div className="h-2 rounded-full bg-line-1 overflow-hidden"><div className="h-full rounded-full" style={{ width: `${width}%`, background: `linear-gradient(90deg, ${accent}, #1FB89A)` }} /></div>
  </div>;
}
