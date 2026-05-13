import { Link } from 'react-router-dom';
import { useVaultsData } from '@/hooks/useVaultsData';
import { fmtN, fmtPct, fmtUSD } from '@/lib/format';
import { VaultAvatar } from '@/components/VaultAvatar';

interface Listing {
  id: string; vaultId: string; seller: string;
  staked: number; price: number; entryDays: number; tier: string;
}

function listings(vaults: any[]): Listing[] {
  if (!vaults.length) return [];
  const out: Listing[] = [];
  for (let i = 0; i < 10; i++) {
    const v = vaults[i % vaults.length];
    const staked = 500 + ((i * 137) % 7) * 1200;
    const price = staked * 0.41 * (1 - 0.08 + (i % 5) * 0.04);
    out.push({
      id: 'L' + (i + 1).toString().padStart(4, '0'),
      vaultId: v.id, seller: '0x' + (0xab12 + i * 0x57).toString(16).padStart(8, '0') + '…' + (0xfa30 + i).toString(16),
      staked, price, entryDays: 14 + (i * 11) % 60,
      tier: v.fanTier[Math.min(i % v.fanTier.length, v.fanTier.length - 1)].name,
    });
  }
  return out;
}

export function Marketplace() {
  const { data: vaults = [] } = useVaultsData();
  const ls = listings(vaults);

  return (
    <main className="mx-auto max-w-[1240px] px-6 pt-10 pb-24">
      <div className="mb-8">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">Secondary</span>
        <h1 className="display text-5xl md:text-6xl mt-2">Marketplace</h1>
        <p className="text-ink-2 mt-2 max-w-2xl">Trade Vault positions before lockup expires. Real settlement on-chain, no platform between you and the buyer.</p>
      </div>

      <div className="card overflow-hidden">
        <div className="hidden md:grid grid-cols-7 gap-4 px-6 py-4 text-[11px] uppercase tracking-widest text-ink-3 border-b border-line-1">
          <span className="col-span-2">Listing</span>
          <span>Tier</span>
          <span className="text-right">Staked</span>
          <span className="text-right">Ask</span>
          <span className="text-right">Discount</span>
          <span className="text-right">Action</span>
        </div>
        {ls.length === 0 && (
          <div className="px-6 py-14 text-center text-ink-2">
            <p className="mb-4">
              Listing feed needs vault data — when the demo loads you&apos;ll see sample secondary positions tied to creators.
            </p>
            <Link to="/vaults" className="btn btn-mint !py-2 !px-5 text-sm inline-flex">
              Browse vaults
            </Link>
          </div>
        )}
        {ls.map(l => {
          const v = vaults.find(x => x.id === l.vaultId);
          if (!v) return null;
          const fair = l.staked * 0.41;
          const disc = (1 - l.price / fair) * 100;
          return (
            <div key={l.id} className="grid md:grid-cols-7 gap-4 items-center px-6 py-4 border-b border-line-1 last:border-0">
              <div className="col-span-2 flex items-center gap-3">
                <VaultAvatar creator={v.creator} color={v.avatarColor} size={40} />
                <div>
                  <Link to={`/vault/${v.slug}`} className="font-semibold hover:text-mint-400">{v.creator}</Link>
                  <div className="text-xs text-ink-3 tabular">{l.id} · entry {l.entryDays}d ago</div>
                </div>
              </div>
              <span className="text-sm text-ink-2">{l.tier}</span>
              <span className="text-right tabular">{fmtN(l.staked)}</span>
              <span className="text-right tabular">{fmtUSD(l.price)}</span>
              <span className={`text-right tabular ${disc >= 0 ? 'text-mint-400' : 'text-ink-3'}`}>{disc >= 0 ? '−' : '+'}{Math.abs(disc).toFixed(1)}%</span>
              <div className="text-right">
                <button className="btn btn-ghost !py-1.5 !px-3 text-xs">Buy</button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
