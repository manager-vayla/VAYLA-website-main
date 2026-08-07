import { Link } from 'react-router-dom';
import { VAYLA_FACTS } from '@/lib/officialFacts';
import { VAYLA_EXTERNAL } from '@/lib/externalLinks';

export function Arena() {
  return (
    <main className="mx-auto max-w-[1100px] px-6 pt-12 pb-24">
      <section className="max-w-3xl">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">VAYLA Arena | Beta</span>
        <h1 className="display text-5xl md:text-7xl mt-2">A participation layer for <em>global music fandom.</em></h1>
        <p className="text-ink-2 mt-5 text-lg leading-relaxed">{VAYLA_FACTS.description} The official v3.8 whitepaper is the source for feature definitions and risk context.</p>
        <div className="flex flex-wrap gap-3 mt-8"><a href={VAYLA_EXTERNAL.arena} target="_blank" rel="noopener noreferrer" className="btn btn-mint">Open Arena</a><Link to="/whitepaper" className="btn btn-ghost">Read v3.8 whitepaper</Link></div>
      </section>
      <section className="grid md:grid-cols-3 gap-4 mt-16">
        <Feature title="VAYLA Boost" body="Fan participation for content, creators and events. The v3.8 whitepaper describes a 1.5% base fee paid in VAYLA." />
        <Feature title="On-chain V Chart" body="Prediction voting based on selected global music chart data, with participation-based NFT rewards." />
        <Feature title="Create & Earn" body="Campaign submissions, community voting and rewards according to the rules of each campaign." />
      </section>
      <p className="text-ink-3 text-sm mt-8">Rewards and membership benefits are utility or participation features. They are not guaranteed returns or investment advice.</p>
    </main>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return <article className="card p-6"><h2 className="display text-2xl">{title}</h2><p className="text-ink-2 mt-3 leading-relaxed">{body}</p></article>;
}
