import { Link } from 'react-router-dom';
import { useVaultsData } from '@/hooks/useVaultsData';
import { fmtN, fmtUSD } from '@/lib/format';
import { VaultAvatar } from '@/components/VaultAvatar';
import type { Vault } from '@/types';

interface Listing {
  id: string;
  vault: Vault;
  staked: number;
  price: number;
  entryDays: number;
  tier: string;
}

function listings(vaults: Vault[]): Listing[] {
  return Array.from({ length: 10 }, (_, i) => {
    const vault = vaults[i % vaults.length];
    const staked = 500 + ((i * 137) % 7) * 1200;
    return {
      id: `L${(i + 1).toString().padStart(4, '0')}`,
      vault,
      staked,
      price: staked * 0.41 * (0.92 + (i % 5) * 0.04),
      entryDays: 14 + (i * 11) % 60,
      tier: vault.fanTier[Math.min(i % vault.fanTier.length, vault.fanTier.length - 1)].name,
    };
  });
}

export function Marketplace() {
  const { data: vaults = [] } = useVaultsData();
  const items = vaults.length ? listings(vaults) : [];

  return (
    <main className="mx-auto max-w-[1240px] px-6 pt-10 pb-24">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">Secondary · interface preview</span>
        <h1 className="display text-5xl md:text-6xl mt-2">Marketplace</h1>
        <p className="text-ink-2 mt-2 max-w-2xl">Browse the restored secondary-market layout with illustrative listings. Trading is not available in this preview.</p>
      </div>

      <div className="card overflow-hidden">
        <div className="hidden md:grid grid-cols-7 gap-4 px-6 py-4 text-[11px] uppercase tracking-widest text-ink-3 border-b border-line-1">
          <span className="col-span-2">Listing</span><span>Tier</span><span className="text-right">Staked</span><span className="text-right">Ask</span><span className="text-right">Discount</span><span className="text-right">Action</span>
        </div>
        {items.map(item => {
          const fair = item.staked * 0.41;
          const discount = (1 - item.price / fair) * 100;
          return (
            <div key={item.id} className="grid md:grid-cols-7 gap-4 items-center px-6 py-4 border-b border-line-1 last:border-0">
              <div className="col-span-2 flex items-center gap-3">
                <VaultAvatar creator={item.vault.creator} color={item.vault.avatarColor} size={40} />
                <div>
                  <Link to={`/vault/${item.vault.slug}`} className="font-semibold hover:text-mint-400">{item.vault.creator}</Link>
                  <div className="text-xs text-ink-3 tabular">{item.id} · sample entry {item.entryDays}d ago</div>
                </div>
              </div>
              <span className="text-sm text-ink-2">{item.tier}</span>
              <span className="text-right tabular">{fmtN(item.staked)}</span>
              <span className="text-right tabular">{fmtUSD(item.price)}</span>
              <span className={`text-right tabular ${discount >= 0 ? 'text-mint-400' : 'text-ink-3'}`}>{discount >= 0 ? '−' : '+'}{Math.abs(discount).toFixed(1)}%</span>
              <div className="text-right"><Link to={`/vault/${item.vault.slug}`} className="btn btn-ghost !py-1.5 !px-3 text-xs">View</Link></div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
