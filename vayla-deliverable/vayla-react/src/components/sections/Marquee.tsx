interface Item { text: string; em?: boolean }

export function Marquee({ items, reverse = false }: { items: Item[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee${reverse ? ' reverse' : ''}`}>
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span key={`s-${i}`}>
            {it.em ? <em>{it.text.replace(/^EM:/, '')}</em> : it.text}
            {it.em ? null : null}
            <span className="star">✦</span>
          </span>
        )).flatMap((el, i, arr) => i < arr.length ? [el] : [])}
      </div>
    </div>
  );
}

// Pre-built bands. The seamless loop pattern: render TWO identical .marquee-set
// halves inside .marquee-track. Animate translateX(-50%) so the rail slides by
// exactly one half. All spacing lives INSIDE each set, no gap between halves.
function MarqueeOneSet() {
  return (
    <div className="marquee-set">
      <span>FAN VAULTS</span><span className="star">✦</span>
      <span><em>creator</em> equity</span><span className="star">✦</span>
      <span>ON-CHAIN SETTLEMENT</span><span className="star">✦</span>
      <span><em>fans</em> own it.</span><span className="star">✦</span>
    </div>
  );
}
function MarqueeTwoSet() {
  return (
    <div className="marquee-set">
      <span>NOT EQUITY IN A LABEL</span><span className="star">✦</span>
      <span><em>equity</em> in the artist.</span><span className="star">✦</span>
      <span>1,283 ACTIVE VAULTS</span><span className="star">✦</span>
      <span>$48.21M <em>TVL</em></span><span className="star">✦</span>
    </div>
  );
}

export function MarqueeOne() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <MarqueeOneSet />
        <MarqueeOneSet />
      </div>
    </div>
  );
}

export function MarqueeTwo() {
  return (
    <div className="marquee reverse">
      <div className="marquee-track">
        <MarqueeTwoSet />
        <MarqueeTwoSet />
      </div>
    </div>
  );
}
