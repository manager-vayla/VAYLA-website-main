import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/store/useApp';

const GENRES = ['music', 'creator', 'gaming', 'film', 'sports'];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const { taste, setTaste, finishOnboarding } = useApp();
  const navigate = useNavigate();

  function next() {
    if (step < 2) setStep(s => s + 1);
    else { finishOnboarding(); navigate('/ai'); }
  }

  return (
    <main className="min-h-[80vh] grid place-items-center px-6 py-16">
      <div className="card p-8 w-full max-w-lg">
        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
            {step === 0 && <>
              <span className="text-[11px] uppercase tracking-widest text-mint-400">Step 1 / 3</span>
              <h2 className="display text-3xl mt-2">What do you back?</h2>
              <p className="text-ink-2 mt-2 text-sm">Pick the categories you want surfaced first.</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {GENRES.map(g => {
                  const on = taste.genres.includes(g);
                  return (
                    <button key={g} onClick={() => setTaste({ genres: on ? taste.genres.filter(x => x !== g) : [...taste.genres, g] })}
                      className={`btn !py-2 !px-4 text-sm ${on ? 'btn-mint' : 'btn-ghost'}`}>{g}</button>
                  );
                })}
              </div>
            </>}
            {step === 1 && <>
              <span className="text-[11px] uppercase tracking-widest text-mint-400">Step 2 / 3</span>
              <h2 className="display text-3xl mt-2">Risk tolerance</h2>
              <p className="text-ink-2 mt-2 text-sm">Lower = safer, lower yield. Higher = more upside, more variance.</p>
              <div className="flex justify-between text-xs text-ink-3 mt-6 mb-2"><span>Safe (1)</span><span className="tabular text-ink-1">{taste.risk}/10</span><span>Wild (10)</span></div>
              <input type="range" min={1} max={10} value={taste.risk} onChange={e => setTaste({ risk: Number(e.target.value) })} className="w-full accent-mint-400" />
            </>}
            {step === 2 && <>
              <span className="text-[11px] uppercase tracking-widest text-mint-400">Step 3 / 3</span>
              <h2 className="display text-3xl mt-2">Time horizon</h2>
              <p className="text-ink-2 mt-2 text-sm">Longer lockups buy more boost (up to +50%/yr).</p>
              <div className="flex justify-between text-xs text-ink-3 mt-6 mb-2"><span>0d</span><span className="tabular text-ink-1">{taste.horizon}d</span><span>1y</span></div>
              <input type="range" min={0} max={365} step={15} value={taste.horizon} onChange={e => setTaste({ horizon: Number(e.target.value) })} className="w-full accent-mint-400" />
            </>}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between mt-8">
          <button onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0} className="btn btn-ghost disabled:opacity-30">Back</button>
          <button onClick={next} className="btn btn-mint">{step === 2 ? 'See my matches →' : 'Continue'}</button>
        </div>
      </div>
    </main>
  );
}
