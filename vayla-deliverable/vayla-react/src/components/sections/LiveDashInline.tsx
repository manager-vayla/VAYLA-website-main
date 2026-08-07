import { Link } from 'react-router-dom';

/** Public preview only. Wallet and portfolio data are intentionally not required. */
export function LiveDashInline() {
  return (
    <section className="section" id="dashboard">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow">Public dashboard preview</span>
          <h2 className="section-title">Public facts. <em>No wallet required.</em></h2>
          <p className="section-deck">
            Verified wallet balances, positions, rewards and performance data are not published in this deployment.
            We show unavailable states instead of estimates.
          </p>
        </div>

        <div className="dash reveal">
          <div className="dash-locked">
            <div className="lock-icon" aria-hidden="true">i</div>
            <h3>Personal wallet data is <em>Unavailable.</em></h3>
            <p>Explore the public platform information, official sources and risk disclosures without connecting a wallet.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/whitepaper" className="btn btn-mint">Read platform facts</Link>
              <Link to="/legal/risk" className="btn btn-ghost">Risk disclosure</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
