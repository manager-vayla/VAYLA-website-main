import { Link, useParams } from 'react-router-dom';

export function VaultDetail() {
  const { slug = '' } = useParams();
  return (
    <main className="mx-auto max-w-[900px] px-6 pt-16 pb-24">
      <div className="card p-8 md:p-12">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">VAYLA Arena</span>
        <h1 className="display text-4xl md:text-6xl mt-3">Creator campaign</h1>
        <p className="text-ink-2 mt-5 leading-relaxed">
          The public website does not currently have a verified live catalogue for <strong className="text-ink-0">{slug}</strong>. The previous interface displayed illustrative vault values and should not be treated as live financial, user or performance data.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link to="/vaults" className="btn btn-mint">Back to catalogue</Link>
          <Link to="/whitepaper" className="btn btn-ghost">Read official whitepaper</Link>
        </div>
      </div>
    </main>
  );
}
