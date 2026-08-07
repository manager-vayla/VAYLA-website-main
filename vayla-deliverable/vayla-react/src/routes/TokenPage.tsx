import { Link } from 'react-router-dom';
import { VAYLA_EXTERNAL } from '@/lib/externalLinks';
import { VAYLA_FACTS } from '@/lib/officialFacts';
import '@/styles/token-page.css';

const UTILITIES = [
  {
    label: 'Boost',
    title: 'Participate in VAYLA Boost.',
    body: 'VAYLA is used for the fee flow described in the official whitepaper. VAYLA Boost is a participation feature for creators, content and events; rewards are not investment returns.',
  },
  {
    label: 'Vote',
    title: 'Take part in community voting.',
    body: 'VAYLA Arena includes participation and prediction voting flows. Campaign rules, chart data and reward conditions may vary by event.',
  },
  {
    label: 'Benefits',
    title: 'Connect rewards and membership.',
    body: 'The v3.8 whitepaper describes platform rewards, NFTs and membership benefits as utility and participation features within the ecosystem.',
  },
];

export function TokenPage() {
  return (
    <main className="token-page">
      <section className="token-hero">
        <div className="token-hero__sigil" aria-hidden><Sigil size={780} /></div>
        <div className="token-hero__inner">
          <div className="token-hero__eyebrow">
            <span>$VAYLA | {VAYLA_FACTS.tokenStandard} | {VAYLA_FACTS.network}</span>
          </div>
          <h1 className="token-hero__title">VAYLA, <span className="font-serif italic">utility for participation.</span></h1>
          <p className="token-hero__deck">
            {VAYLA_FACTS.tokenSymbol} is the utility token described in the official v3.8 whitepaper for VAYLA Arena participation, platform fees, rewards, NFTs and membership benefits.
          </p>
          <div className="token-hero__cta">
            <a className="btn btn-mint" href={VAYLA_EXTERNAL.bscscanToken} target="_blank" rel="noopener noreferrer">Verify contract</a>
            <Link className="btn btn-ghost" to="/whitepaper">Read whitepaper</Link>
            <Link className="btn btn-ghost" to="/start">Start here</Link>
          </div>

          <div className="token-hero__pricecard">
            <Metric label="Market price" value="Unavailable" note="No verified live value" />
            <div className="sep" aria-hidden />
            <Metric label="Market cap" value="Unavailable" note="No verified live value" />
            <div className="sep" aria-hidden />
            <Metric label="Source status" value="Verified facts" note="Market data requires timestamp" />
          </div>
        </div>
      </section>

      <section className="token-strip">
        <div className="wrap">
          <Metric label="Total supply" value="3,000,000,000" note="Official v3.8 whitepaper" />
          <Metric label="Circulating supply" value="Unavailable" note="Verify current provider data" />
          <Metric label="Network" value={VAYLA_FACTS.network} note={VAYLA_FACTS.tokenStandard} />
          <Metric label="Contract" value={`${VAYLA_FACTS.contractAddress.slice(0, 8)}...`} note="BscScan" />
        </div>
      </section>

      <section className="token-section">
        <div className="wrap">
          <div className="token-head">
            <span className="eyebrow">Token utility</span>
            <h2>Three participation <span className="font-serif italic text-mint-400">functions.</span></h2>
            <p>These descriptions are aligned to the official v3.8 whitepaper. They are not a promise of returns or token price performance.</p>
          </div>
          <div className="util-grid">
            {UTILITIES.map(item => (
              <article className="util-card" key={item.label}>
                <div className="util-card__tag">{item.label}</div>
                <h3 className="util-card__ttl">{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="token-section token-section--alt" id="allocation">
        <div className="wrap">
          <div className="token-head">
            <span className="eyebrow">Token allocation</span>
            <h2>Published in <span className="font-serif italic text-mint-400">whitepaper v3.8.</span></h2>
          </div>
          <div className="token-allocation-list">
            {VAYLA_FACTS.tokenAllocation.map(item => (
              <div className="timeline__row" key={item.label}>
                <div className="timeline__period">{item.label}</div>
                <div className="timeline__bucket"><div className="dot" aria-hidden /><strong>{item.percentage}%</strong></div>
                <div className="timeline__status">3B supply basis</div>
              </div>
            ))}
          </div>
          <p className="token-source-note">Source: <a href={VAYLA_EXTERNAL.whitepaper} target="_blank" rel="noopener noreferrer">official VAYLA whitepaper v3.8</a></p>
        </div>
      </section>

      <section className="token-section" id="verify">
        <div className="wrap">
          <div className="token-head">
            <span className="eyebrow">Verify public information</span>
            <h2>Use the <span className="font-serif italic text-mint-400">primary sources.</span></h2>
            <p>Market values can change or be unavailable. Check the source and timestamp before relying on any public metric.</p>
          </div>
          <div className="get-grid">
            <a className="get-card" href={VAYLA_EXTERNAL.bscscanToken} target="_blank" rel="noopener noreferrer"><h3>BscScan</h3><p>Verify the BNB Smart Chain token contract and on-chain records.</p><div className="get-card__cta">Open BscScan</div></a>
            <a className="get-card" href={VAYLA_EXTERNAL.coinGecko} target="_blank" rel="noopener noreferrer"><h3>CoinGecko</h3><p>Check listing status and market data when available from the provider.</p><div className="get-card__cta">Open CoinGecko</div></a>
            <a className="get-card" href={VAYLA_EXTERNAL.coinMarketCap} target="_blank" rel="noopener noreferrer"><h3>CoinMarketCap</h3><p>Check listing status, market data and provider labels such as untracked.</p><div className="get-card__cta">Open CoinMarketCap</div></a>
          </div>
          <div className="token-get-more" aria-label="Official documentation links">
            <a href={VAYLA_EXTERNAL.linkHub} target="_blank" rel="noopener noreferrer">Official link hub</a>
            <span className="token-get-more__sep" aria-hidden>/</span>
            <a href={VAYLA_EXTERNAL.githubOrg} target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="token-get-more__sep" aria-hidden>/</span>
            <Link to="/legal">Legal disclosures</Link>
          </div>
        </div>
      </section>

      <section className="token-section token-section--alt">
        <div className="wrap">
          <div className="token-philo">
            <div className="token-philo__sigil" aria-hidden><Sigil size={140} /></div>
            <div>
              <h2 className="token-philo__title">Utility first. <span className="font-serif italic text-mint-400">Verify everything.</span></h2>
              <p>The v3.8 whitepaper describes VAYLA as a utility token. Nothing on this page should be read as an investment recommendation, a promise of returns, equity, dividends or principal protection.</p>
              <div className="token-philo__cta"><Link className="btn btn-mint" to="/whitepaper">Read v3.8 whitepaper</Link><Link className="btn btn-ghost" to="/legal/risk">Read risk disclosure</Link></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value, note }: { label: string; value: string; note: string }) {
  return <div><div className="lbl">{label}</div><div className="val tabular">{value}</div><div className="sub">{note}</div></div>;
}

function Sigil({ size }: { size: number }) {
  return <img src="/vayla_logo_new.png" alt="" width={size} height={size} className="object-contain" aria-hidden draggable={false} />;
}
