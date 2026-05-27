import { useRef } from 'react';

const PHASES = [
  { stage: 'Phase 01 · Shipped', when: <>Q2 <em>2025</em></>, desc: 'VAYLA Arena launch, mainnet contracts deployed, first 50 artists onboarded.', items: ['Smart contracts audited (Spearbit + OtterSec)','$VAYLA token launch on BNB Smart Chain','50 VAYLA Boost campaigns live'], done: true },
  { stage: 'Phase 02 · Shipped', when: <>Q3 <em>2025</em></>, desc: 'Streaming yield distribution and Vault Boost multipliers.', items: ['Continuous yield streams (no claim required)','Boost multipliers for long-held positions','Mobile-first app launched'], done: true },
  { stage: 'Phase 03 · Shipped', when: <>Q1 <em>2026</em></>, desc: 'V-DAO governance + creator economy aggregator integrations.', items: ['V-DAO with quadratic voting','Spotify / Apple Music / Patreon read APIs','1,000+ vaults, $40M+ TVL'], done: true },
  { stage: 'Phase 04 · Live now', when: <>Q2 <em>2026</em></>, desc: 'IP licensing settlement layer for sync, sample and merch.', items: ['Sync licensing on-chain','Sample royalty router','Merch printer integration'], done: false },
  { stage: 'Phase 05', when: <>Q3 <em>2026</em></>, desc: 'Cross-chain vaults, mobile push, fiat on/off-ramp partners.', items: ['Solana & Polygon vault bridges','Stripe + Ramp integration','Notifications for live drops'], done: false },
  { stage: 'Phase 06', when: <>Q4 <em>2026</em></>, desc: 'Open participation SDK for partners and venues.', items: ['Open SDK for any platform','Festival & venue campaigns','10K+ Arena campaigns target'], done: false },
];

export function Roadmap() {
  const trackRef = useRef<HTMLDivElement>(null);
  function scroll(dir: number) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: 'smooth' });
  }
  return (
    <section className="section" id="road">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow"><span className="num">06</span> Roadmap</span>
          <h2 className="section-title">From <em>genesis</em> to settlement.</h2>
          <p className="section-deck">
            Six phases. Three already shipped. The protocol is ahead of schedule because the team has been here before.
          </p>
        </div>

        <div className="road-wrap reveal">
          <div className="road-arrows">
            <button className="road-arrow" onClick={() => scroll(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button className="road-arrow" onClick={() => scroll(1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
          <div className="road-track" ref={trackRef}>
            {PHASES.map((p, i) => (
              <div key={i} className={`road-card${p.done ? ' is-done' : ''}`}>
                <div className="stage">{p.stage}</div>
                <div className="when">{p.when}</div>
                <p className="desc">{p.desc}</p>
                <ul>{p.items.map(x => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
