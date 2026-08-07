import { Link } from 'react-router-dom';

export function HeroLegacy() {
  return (
    <section className="hero" id="legacy-hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <h1 className="hero-title">
              Fans participate.<br /><em>Creators get<span className="hero-mobile-break"><br /></span> discovered.</em>
            </h1>
            <p className="hero-deck">
              VAYLA Arena is a Beta Web3 music fandom platform. Fans and creators connect through VAYLA Boost, voting, creation and participation-based rewards. Read the official source before participating.
            </p>
            <div className="hero-ctas">
              <Link to="/whitepaper" className="btn btn-mint">Read whitepaper</Link>
              <Link to="/start" className="btn btn-ghost">Start here</Link>
            </div>
            <p className="hero-tease" style={{ marginTop: 18, fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
              <span style={{ color: 'var(--mint)' }}>Official facts.</span> BNB Smart Chain | BEP-20 | 3B total supply.
            </p>
          </div>

          <div className="hero-art" id="heroArt">
            <div className="hero-art-stat s1">
              PLATFORM
              <strong className="tabular">VAYLA ARENA</strong>
              <span className="delta">BETA</span>
            </div>
            <div className="hero-art-stat s2">
              NETWORK
              <strong>BNB<em> | BSC</em></strong>
              <span className="delta">BEP-20</span>
            </div>
            <div className="hero-art-stat s3">
              TOTAL SUPPLY
              <strong className="tabular">3.0B</strong>
              <span className="delta">VAYLA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
