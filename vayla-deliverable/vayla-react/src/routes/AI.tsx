import { useState } from 'react';

const GENRES = ['music', 'creator', 'gaming', 'film', 'sports'];

export function AI() {
  const [genres, setGenres] = useState<string[]>([]);
  const [risk, setRisk] = useState(5);
  const [horizon, setHorizon] = useState(90);
  const [message, setMessage] = useState('');

  return (
    <main className="mx-auto max-w-[1000px] px-6 pt-10 pb-24">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">AI Layer | Preview</span>
        <h1 className="display text-5xl md:text-6xl mt-2">Explore the signal.</h1>
        <p className="text-ink-2 mt-4 leading-relaxed">The assistant interface is available for UX preview. No verified live vault, market or creator data is connected, so it will not produce financial recommendations.</p>
      </div>
      <div className="card p-6 max-w-2xl mx-auto">
        <h2 className="display text-2xl">Participation preferences</h2>
        <p className="text-ink-3 text-sm mt-1">These controls are preferences only and do not measure investment risk or expected returns.</p>
        <div className="mt-6">
          <div className="text-[11px] uppercase tracking-widest text-ink-3 mb-2">Interests</div>
          <div className="flex flex-wrap gap-2">{GENRES.map(genre => <button type="button" key={genre} onClick={() => setGenres(current => current.includes(genre) ? current.filter(item => item !== genre) : [...current, genre])} className={'btn !py-1.5 !px-3 text-xs ' + (genres.includes(genre) ? 'btn-mint' : 'btn-ghost')}>{genre}</button>)}</div>
        </div>
        <label className="block mt-6 text-[11px] uppercase tracking-widest text-ink-3">Exploration preference <span className="float-right normal-case tracking-normal text-ink-2">{risk}/10</span><input aria-label="Exploration preference" type="range" min={1} max={10} value={risk} onChange={event => setRisk(Number(event.target.value))} className="w-full mt-3 accent-mint-400" /></label>
        <label className="block mt-6 text-[11px] uppercase tracking-widest text-ink-3">Participation horizon <span className="float-right normal-case tracking-normal text-ink-2">{horizon} days</span><input aria-label="Participation horizon" type="range" min={0} max={365} step={15} value={horizon} onChange={event => setHorizon(Number(event.target.value))} className="w-full mt-3 accent-mint-400" /></label>
        <button type="button" onClick={() => setMessage('Recommendations are unavailable until a verified Arena data source is connected.')} className="btn btn-mint w-full mt-6">Check availability</button>
        {message && <p className="mt-5 rounded-xl border border-line-1 p-4 text-sm text-ink-2">{message}</p>}
      </div>
    </main>
  );
}
