import { Link } from 'react-router-dom';
import { ConnectKitButton } from 'connectkit';

export function FinalCTA() {
  return (
    <section className="final" id="launch">
      <div className="wrap">
        <h2>Run the math first. <br /><em>Then own the upside.</em></h2>
        <p>Plug in any artist's numbers. See exactly how much reaches them today versus what VAYLA would route. Then open a Vault, or just share the receipt.</p>
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          <Link to="/calculator" className="btn btn-mint">
            Open the Brutal Math
            <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </Link>
          <ConnectKitButton.Custom>
            {({ show, isConnected }) => (
              <button className="btn btn-ghost" onClick={show}>
                {isConnected ? 'Open Dashboard' : 'Connect Wallet'}
              </button>
            )}
          </ConnectKitButton.Custom>
        </div>
      </div>
    </section>
  );
}
