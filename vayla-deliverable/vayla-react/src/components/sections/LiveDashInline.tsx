'use client';

import { Link } from 'react-router-dom';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';
import { useWallet } from '@/store/wallet';

export function LiveDashInline() {
  const { address: walletAddress } = useWallet();

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
            <div className="lock-icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3>{walletAddress ? <>Wallet <em>connected.</em></> : <>Connect your wallet to access your <em>personal dashboard.</em></>}</h3>
            <p>{walletAddress ? 'Your personal dashboard is ready.' : 'You can still explore public platform information and risk disclosures without connecting.'}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {!walletAddress && <ConnectWalletButton />}
              <Link to="/whitepaper" className="btn btn-ghost">Read platform facts</Link>
              <Link to="/legal/risk" className="btn btn-ghost">Risk disclosure</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
