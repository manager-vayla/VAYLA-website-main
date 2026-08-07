import { Link } from 'react-router-dom';

export function Marketplace() {
  return (
    <main className="mx-auto max-w-[900px] px-6 pt-16 pb-24">
      <div className="card p-8 md:p-12">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">Marketplace | Preview</span>
        <h1 className="display text-5xl md:text-6xl mt-2">Marketplace</h1>
        <p className="text-ink-2 mt-5 leading-relaxed">No verified marketplace listings are currently published on this website. Illustrative listings and prices have been disabled until a signed, source-backed data feed is connected.</p>
        <div className="flex flex-wrap gap-3 mt-8"><Link to="/arena" className="btn btn-mint">Explore Arena</Link><Link to="/whitepaper" className="btn btn-ghost">Read whitepaper</Link></div>
      </div>
    </main>
  );
}
