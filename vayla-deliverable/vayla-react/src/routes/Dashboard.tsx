import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <main className="mx-auto max-w-[900px] px-6 pt-16 pb-24">
      <div className="card p-8 md:p-12 text-center">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">Public data | Preview</span>
        <h1 className="display text-4xl md:text-6xl mt-3">Public dashboard preview</h1>
        <p className="text-ink-2 mt-5 leading-relaxed">Verified portfolio, position and reward data is not published in this public deployment. Balances, APY, TVL and rewards are intentionally not shown as estimates.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-8"><Link to="/whitepaper" className="btn btn-mint">Read platform facts</Link><Link to="/start" className="btn btn-ghost">Start with VAYLA</Link></div>
      </div>
    </main>
  );
}
