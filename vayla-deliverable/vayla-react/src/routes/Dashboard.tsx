'use client';

import { Link } from 'react-router-dom';
import { ConnectWalletButton } from '@/components/ConnectWalletButton';
import { useWallet } from '@/store/wallet';

export function Dashboard() {
  const { address: walletAddress } = useWallet();

  return (
    <main className="mx-auto max-w-[900px] px-6 pt-16 pb-24">
      <div className="card p-8 text-center md:p-12">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">Personal dashboard</span>
        <h1 className="display mt-3 text-4xl md:text-6xl">{walletAddress ? 'Wallet connected' : 'Connect your wallet to access your personal dashboard.'}</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-ink-2">
          {walletAddress
            ? 'Your personal dashboard is ready.'
            : 'You can still explore public platform information and risk disclosures without connecting.'}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {!walletAddress && <ConnectWalletButton />}
          <Link to="/whitepaper" className="btn btn-ghost">Read platform facts</Link>
          <Link to="/legal/risk" className="btn btn-ghost">Risk disclosure</Link>
        </div>
      </div>
    </main>
  );
}
