import { Link } from 'react-router-dom';
import { useState } from 'react';

const FEATURES = [
  {
    title: 'VAYLA Boost',
    body: 'Fan participation for creators, content and events under published campaign rules.',
    detail: 'Review the published rules, entry points and official disclosures that frame participation.',
    href: '/whitepaper',
    action: 'Read the whitepaper',
  },
  {
    title: 'On-chain V Chart',
    body: 'Participation and prediction voting using selected global music chart data.',
    detail: 'Follow the public chart pathway and see how selected global music data supports prediction voting.',
    href: '/chart',
    action: 'Open V Chart',
  },
  {
    title: 'Create & Earn',
    body: 'Campaign-based submissions, community voting and participation-based rewards.',
    detail: 'Review campaign participation and creator entry points before deciding how to take part.',
    href: '/creator',
    action: 'Creator preview',
  },
];

export function VaultsArena() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = FEATURES[activeIndex];

  return (
    <section className="section" id="vaults">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow">VAYLA Arena</span>
          <h2 className="section-title">Discover campaigns, <em>participate openly.</em></h2>
          <p className="section-deck">
            VAYLA Arena is designed to surface creators, content and campaigns for community participation. The current public website does not publish a verified live catalogue or performance metrics here.
          </p>
        </div>
        <div className="vault-grid reveal" aria-label="VAYLA Arena features">
          {FEATURES.map((feature, index) => (
            <Feature
              key={feature.title}
              title={feature.title}
              body={feature.body}
              active={index === activeIndex}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div className="vault-explorer reveal" aria-live="polite">
          <div>
            <span className="vault-explorer__eyebrow">Explore {activeFeature.title}</span>
            <p>{activeFeature.detail}</p>
          </div>
          <Link className="vault-explorer__action" to={activeFeature.href}>{activeFeature.action}</Link>
        </div>
      </div>
    </section>
  );
}

function Feature({ title, body, active, onSelect }: { title: string; body: string; active: boolean; onSelect: () => void }) {
  return (
    <button type="button" className="vault-card vault-card--interactive" aria-pressed={active} onClick={onSelect}>
      <div className="vault-head">
        <div className="vault-id"><strong>{title}</strong><span>Official v3.8 feature</span></div>
        <span className="vault-status">{active ? 'Selected' : 'Explore'}</span>
      </div>
      <p className="vault-tagline">{body}</p>
    </button>
  );
}
