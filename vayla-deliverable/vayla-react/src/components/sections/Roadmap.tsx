import { useRef } from 'react';

const PHASES = [
  { stage: 'Q1 | Global foundation', desc: 'Arena Beta infrastructure, public onboarding and traffic analytics.', items: ['Core Arena architecture', 'Public source and feature onboarding', 'VAYLA Boost / Voting / Create & Earn base flows'] },
  { stage: 'Q2 | Beta launch', desc: 'Official VAYLA Arena Beta launch and expansion of participation campaigns.', items: ['VAYLA Boost system enhancement', 'Create & Earn campaign system', 'AI Marketing Assistant Beta'] },
  { stage: 'Q3 | Utility scaling', desc: 'Community engagement, NFT membership and expanded participation utility.', items: ['Online music festivals and Arena events', 'NFT Membership System expansion', 'Community voting and reward system'] },
  { stage: 'Q4 | Ecosystem expansion', desc: 'Performance analytics, partnerships and preparation for the next expansion phase.', items: ['B2B sponsorship and brand partnership solutions', 'Advanced Performance Analytics', 'Scalable API preparation'] },
];

export function Roadmap() {
  const trackRef = useRef<HTMLDivElement>(null);
  function scroll(direction: number) {
    trackRef.current?.scrollBy({ left: direction * 360, behavior: 'smooth' });
  }
  return (
    <section className="section" id="road">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow">Product roadmap</span>
          <h2 className="section-title">A roadmap for <em>participation.</em></h2>
          <p className="section-deck">The official v3.8 roadmap is directional. Features, timing and availability may change.</p>
        </div>
        <div className="road-wrap reveal">
          <div className="road-arrows">
            <button className="road-arrow" onClick={() => scroll(-1)} aria-label="Previous">Previous</button>
            <button className="road-arrow" onClick={() => scroll(1)} aria-label="Next">Next</button>
          </div>
          <div className="road-track" ref={trackRef}>
            {PHASES.map(phase => (
              <div key={phase.stage} className="road-card">
                <div className="stage">{phase.stage}</div>
                <p className="desc">{phase.desc}</p>
                <ul>{phase.items.map(item => <li key={item}>{item}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
