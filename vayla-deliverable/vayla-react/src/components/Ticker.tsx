const STATIC = [
  { k: 'Network', v: 'BNB Smart Chain', d: 'BEP-20' },
  { k: 'Total supply', v: '3.0B VAYLA', d: 'v3.8' },
  { k: 'Market data', v: 'Unavailable', d: 'verify source' },
  { k: 'Arena', v: 'Beta', d: 'official' },
];

export function Ticker() {
  return (
    <div className="border-y border-line-1 bg-bg-1/60 backdrop-blur overflow-hidden py-2.5 text-xs uppercase tracking-widest text-ink-2">
      <div className="ticker-track">
        {[0, 1].map(rep => (
          <div key={rep} className="inline-flex gap-12">
            {STATIC.map((item, index) => (
              <span key={rep + '-' + index} className="inline-flex items-center gap-2 tabular">
                <span className="text-ink-3">{item.k}</span>
                <strong className="text-ink-1 font-semibold">{item.v}</strong>
                <span className="text-mint-400">{item.d}</span>
                <span className="text-line-2">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
