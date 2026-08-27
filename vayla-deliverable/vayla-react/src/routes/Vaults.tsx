import { useMemo, useState } from 'react';
import { VaultCard } from '@/components/VaultCard';
import { useVaultsData } from '@/hooks/useVaultsData';
import type { VaultCategory } from '@/types';

const CATS: { k: VaultCategory | 'all'; label: string }[] = [
  { k: 'all', label: 'All' },
  { k: 'music', label: 'Music' },
  { k: 'creator', label: 'Creator' },
  { k: 'gaming', label: 'Gaming' },
  { k: 'film', label: 'Film' },
  { k: 'sports', label: 'Sports' },
];
const SORTS: { k: string; label: string }[] = [
  { k: 'apy', label: 'APY (high → low)' },
  { k: 'tvl', label: 'TVL' },
  { k: 'momentum', label: 'Momentum' },
  { k: 'risk', label: 'Risk (low → high)' },
];

export function Vaults() {
  const { data: vaults = [], isLoading } = useVaultsData();
  const [cat, setCat] = useState<VaultCategory | 'all'>('all');
  const [sort, setSort] = useState('apy');
  const [q, setQ] = useState('');

  const filtered = useMemo(() => {
    let list = [...vaults];
    if (cat !== 'all') list = list.filter(v => v.category === cat);
    if (q) list = list.filter(v => (v.creator + ' ' + v.handle + ' ' + v.tagline).toLowerCase().includes(q.toLowerCase()));
    list.sort((a, b) => {
      switch (sort) {
        case 'tvl': return b.tvl - a.tvl;
        case 'momentum': return b.momentum - a.momentum;
        case 'risk': return a.riskScore - b.riskScore;
        case 'apy': default: return b.apy90d - a.apy90d;
      }
    });
    return list;
  }, [vaults, cat, sort, q]);

  return (
    <main className="mx-auto max-w-[1240px] px-6 pt-12 pb-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <span className="text-[11px] uppercase tracking-widest text-mint-400">Browse · interface preview</span>
          <h1 className="display text-5xl md:text-6xl mt-2">Vaults</h1>
          <p className="text-ink-2 mt-2 max-w-xl">Explore the restored catalogue layout with illustrative creator and campaign data.</p>
        </div>
        <input
          value={q} onChange={e => setQ(e.target.value)}
          placeholder="Search creator, handle, tag…"
          className="px-4 py-2.5 rounded-full bg-bg-1 border border-line-1 outline-none focus:border-mint-400/50 text-sm w-full md:w-72"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        {CATS.map(c => (
          <button
            key={c.k}
            onClick={() => setCat(c.k)}
            className={`btn !py-1.5 !px-4 text-xs ${cat === c.k ? 'btn-mint' : 'btn-ghost'}`}
          >{c.label}</button>
        ))}
        <span className="ml-auto text-xs text-ink-3">Sort:</span>
        <select
          value={sort} onChange={e => setSort(e.target.value)}
          className="bg-bg-1 border border-line-1 rounded-full px-3 py-1.5 text-xs"
        >
          {SORTS.map(s => <option key={s.k} value={s.k}>{s.label}</option>)}
        </select>
      </div>

      {isLoading ? (
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="card h-64 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">
          {filtered.map((v, i) => <VaultCard key={v.id} v={v} index={i} />)}
        </div>
      )}

      {!isLoading && vaults.length > 0 && filtered.length === 0 && (
        <div className="card p-12 text-center max-w-xl mx-auto">
          <p className="text-ink-2 mb-4">No vaults match those filters.</p>
          <button
            type="button"
            className="btn btn-mint !py-2 !px-6 text-sm"
            onClick={() => {
              setCat('all');
              setQ('');
              setSort('apy');
            }}
          >
            Reset filters
          </button>
        </div>
      )}

    </main>
  );
}
