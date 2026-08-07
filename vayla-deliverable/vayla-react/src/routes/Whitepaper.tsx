import { useEffect, useState } from 'react';
import { VAYLA_EXTERNAL } from '@/lib/externalLinks';
import { VAYLA_FACTS } from '@/lib/officialFacts';
import '@/styles/whitepaper.css';

const TOC = [
  { id: 'abstract', label: 'Executive summary' },
  { id: 'features', label: 'Core features' },
  { id: 'token', label: 'Token facts' },
  { id: 'allocation', label: 'Token allocation' },
  { id: 'roadmap', label: 'Roadmap 2026' },
  { id: 'team', label: 'Team' },
  { id: 'risk', label: 'Risk notice' },
];

export function Whitepaper() {
  const [activeId, setActiveId] = useState('abstract');

  useEffect(() => {
    const elements = TOC.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 },
    );
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="wp-hero">
        <div className="wp-wrap">
          <div className="wp-meta">
            <span className="v">OFFICIAL WHITEPAPER</span>
            <span className="sep">|</span>
            <span>{VAYLA_FACTS.whitepaperVersion}</span>
            <span className="sep">|</span>
            <span>Updated {VAYLA_FACTS.whitepaperUpdated}</span>
            <span className="sep">|</span>
            <span>PDF currently published: 15 pages</span>
          </div>
          <h1 className="wp-title">Global music fandom, <em>on-chain.</em></h1>
          <p className="wp-deck">
            The official v3.8 whitepaper describes {VAYLA_FACTS.arenaName} as a Beta Web3 fandom platform where global music fans participate in creator support, voting and creation, with participation-based rewards.
          </p>
          <div className="wp-cta-row">
            <a href={VAYLA_EXTERNAL.whitepaper} target="_blank" rel="noopener noreferrer" className="btn btn-mint">Open official PDF</a>
            <a href={VAYLA_EXTERNAL.whitepaperRepository} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">View source repository</a>
          </div>
        </div>
      </section>

      <div className="wp-body">
        <aside className="toc">
          <div className="toc-kick">Contents</div>
          <ol className="toc-list">
            {TOC.map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={'toc-link' + (activeId === item.id ? ' is-active' : '')}>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="wp-content">
          <section className="wp-chapter" id="abstract">
            <div className="num">Executive summary</div>
            <h2>A participation platform for <em>global music fandom.</em></h2>
            <p>
              VAYLA is designed to give AI creators, independent musicians and artists from underserved markets an opportunity to be discovered by a global audience. {VAYLA_FACTS.arenaName} is the official platform through which users participate, support creators, vote and create.
            </p>
            <p>
              The v3.8 document describes the Beta as an initial live operational stage where real users, real assets and real on-chain records can be generated and validated. Features and schedules may change as the platform develops.
            </p>
          </section>

          <section className="wp-chapter" id="features">
            <div className="num">Core features</div>
            <h2>Three participation loops. <em>One Arena.</em></h2>
            <div className="wp-grid">
              <FactCard title="VAYLA Boost" text="A fan participation feature for supporting content, creators and events using USDT. The v3.8 whitepaper describes a 1.5% base fee paid in VAYLA, with fee allocation to operating funds and a reward pool." />
              <FactCard title="On-chain V Chart" text="A prediction voting system based on selected global music chart data. Correct predictions may receive NFT rewards; chart data is provided for informational purposes." />
              <FactCard title="Create & Earn" text="Campaign-based content creation where users and artists submit works, community voting selects leading entries and rewards are distributed according to campaign rules." />
            </div>
            <p>
              Rewards, NFTs and membership benefits are described as platform participation features. They do not represent investment returns, equity interests, dividend rights or debt claims.
            </p>
          </section>

          <section className="wp-chapter" id="token">
            <div className="num">Token facts</div>
            <h2>VAYLA is a <em>utility token.</em></h2>
            <p>
              The official v3.8 document describes VAYLA as the utility asset connecting participation, platform fees, rewards, NFTs and membership benefits across {VAYLA_FACTS.arenaName}.
            </p>
            <div className="wp-grid">
              <div className="cell"><div className="lbl">Token</div><strong>{VAYLA_FACTS.tokenSymbol}</strong><p>Utility token for platform participation and ecosystem functions.</p></div>
              <div className="cell"><div className="lbl">Network</div><strong>{VAYLA_FACTS.network}</strong><p>{VAYLA_FACTS.tokenStandard} token standard.</p></div>
              <div className="cell"><div className="lbl">Total supply</div><strong>3,000,000,000</strong><p>Hard cap stated in the official v3.8 whitepaper.</p></div>
              <div className="cell"><div className="lbl">Contract</div><strong className="break-anywhere">{VAYLA_FACTS.contractAddress}</strong><p><a href={VAYLA_EXTERNAL.bscscanToken} target="_blank" rel="noopener noreferrer">Verify on BscScan</a></p></div>
            </div>
          </section>

          <section className="wp-chapter" id="allocation">
            <div className="num">Token allocation</div>
            <h2>Allocation published in <em>v3.8.</em></h2>
            <table className="wp-table">
              <thead><tr><th>Category</th><th>Percentage</th></tr></thead>
              <tbody>
                {VAYLA_FACTS.tokenAllocation.map(item => (
                  <tr key={item.label}><td>{item.label}</td><td><span className="pct">{item.percentage}%</span></td></tr>
                ))}
                <tr><td><strong>Total</strong></td><td><span className="pct">100%</span></td></tr>
              </tbody>
            </table>
            <p>Detailed vesting schedules and any policy changes should be verified against current official communications.</p>
          </section>

          <section className="wp-chapter" id="roadmap">
            <div className="num">Roadmap 2026</div>
            <h2>Roadmap subject to <em>change.</em></h2>
            <ul>
              <li><strong>Q1:</strong> Global foundation, Arena Beta infrastructure, analytics dashboard and public onboarding.</li>
              <li><strong>Q2:</strong> Arena Beta launch, VAYLA Boost expansion, Create & Earn campaign system and AI Marketing Assistant Beta.</li>
              <li><strong>Q3:</strong> Online music festivals, NFT membership expansion, enhanced token utility and community voting/rewards.</li>
              <li><strong>Q4:</strong> Performance analytics, B2B sponsorship/brand partnership solutions, scalable API preparation and 2027 expansion planning.</li>
            </ul>
          </section>

          <section className="wp-chapter" id="team">
            <div className="num">Team</div>
            <h2>People building the <em>product.</em></h2>
            <p>The following developer profiles are published for project context and are linked to the profiles supplied by the project.</p>
            <div className="wp-grid">
              {VAYLA_FACTS.developers.map(developer => (
                <div className="cell" key={developer.name}>
                  <div className="lbl">{developer.role}</div>
                  <strong>{developer.name}</strong>
                  <p><a href={developer.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href={developer.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
                </div>
              ))}
            </div>
          </section>

          <section className="wp-chapter" id="risk">
            <div className="num">Disclaimer and risk notice</div>
            <h2>Read the source. <em>Assess the risk.</em></h2>
            <p>
              The whitepaper is informational and is not investment advice, an offer to sell or a solicitation to purchase securities or financial products. VAYLA token, VAYLA Boost, voting, rewards, NFTs and membership benefits are intended as platform utility or participation features and do not guarantee profits, dividends, interest, appreciation or principal protection.
            </p>
            <p>
              Digital assets and blockchain systems involve volatility, technical, operational, cybersecurity and regulatory risks. Availability, features, token utilities, schedules and policies may change. Participants are responsible for reviewing applicable laws and the latest official disclosures.
            </p>
            <p className="wp-source-note">Source: <a href={VAYLA_EXTERNAL.whitepaper} target="_blank" rel="noopener noreferrer">(EN) VAYLA WHITEPAPER v3.8</a></p>
          </section>
        </article>
      </div>
    </main>
  );
}

function FactCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="cell">
      <div className="lbl">VAYLA Arena</div>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}
