import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { fmtPct } from '@/lib/format';

const STATIC = [
  { k: 'TVL', v: '$48.21M', d: '+4.8%' },
  { k: 'Vaults', v: '1,283', d: '+41/24h' },
  { k: 'Avg APY 90D', v: '34.7%', d: '+4.2pts' },
  { k: 'Holders', v: '57,418', d: '+218' },
  { k: 'Avg Boost', v: '1.31×', d: '+0.04' },
  { k: 'Settlements/24h', v: '12,402', d: '+312' },
];

export function Ticker() {
  const { data } = useQuery({
    queryKey: ['prices'],
    queryFn: api.prices,
    refetchInterval: 15_000,
    retry: false,
  });
  const items = [
    ...(data ? [
      { k: '$VAYLA', v: '$' + data.vayla.toFixed(4), d: '↑' },
      { k: 'ETH',    v: '$' + data.eth.toFixed(2),   d: '·' },
      { k: 'BTC',    v: '$' + data.btc.toFixed(0),   d: '·' },
    ] : []),
    ...STATIC,
  ];
  return (
    <div className="border-y border-line-1 bg-bg-1/60 backdrop-blur overflow-hidden py-2.5 text-xs uppercase tracking-widest text-ink-2">
      <div className="ticker-track">
        {[0, 1].map(rep => (
          <div key={rep} className="inline-flex gap-12">
            {items.map((it, i) => (
              <span key={rep + '-' + i} className="inline-flex items-center gap-2 tabular">
                <span className="text-ink-3">{it.k}</span>
                <strong className="text-ink-1 font-semibold">{it.v}</strong>
                <span className="text-mint-400">{it.d}</span>
                <span className="text-line-2">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
