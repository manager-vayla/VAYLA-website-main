interface Item { text: string; em?: boolean }

export function Marquee({ items, reverse = false }: { items: Item[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className={'marquee' + (reverse ? ' reverse' : '')}>
      <div className="marquee-track">
        {doubled.map((item, index) => (
          <span key={item.text + '-' + index}>{item.em ? <em>{item.text}</em> : item.text}</span>
        ))}
      </div>
    </div>
  );
}

function MarqueeSet({ children }: { children: React.ReactNode }) {
  return <div className="marquee-set">{children}</div>;
}

export function MarqueeOne() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <MarqueeSet><span>VAYLA BOOST</span><span><em>music</em> fandom</span><span>AI DISCOVERY</span><span><em>fans</em> participate.</span></MarqueeSet>
        <MarqueeSet><span>VAYLA BOOST</span><span><em>music</em> fandom</span><span>AI DISCOVERY</span><span><em>fans</em> participate.</span></MarqueeSet>
      </div>
    </div>
  );
}

export function MarqueeTwo() {
  return (
    <div className="marquee reverse">
      <div className="marquee-track">
        <MarqueeSet><span>VAYLA ARENA</span><span><em>community</em> discovery.</span><span>WHITEPAPER v3.8</span><span>BNB Smart Chain / BEP-20</span></MarqueeSet>
        <MarqueeSet><span>VAYLA ARENA</span><span><em>community</em> discovery.</span><span>WHITEPAPER v3.8</span><span>BNB Smart Chain / BEP-20</span></MarqueeSet>
      </div>
    </div>
  );
}
