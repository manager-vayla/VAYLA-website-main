import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const INTERESTS = ['music', 'creator', 'gaming', 'film', 'community'];
const FLOWS = ['Discover creators', 'VAYLA Boost', 'On-chain V Chart', 'Create & Earn'];

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const navigate = useNavigate();
  const toggle = (value: string) => setSelected(current => current.includes(value) ? current.filter(item => item !== value) : [...current, value]);
  function next() {
    if (step < 2) setStep(step + 1);
    else navigate('/arena');
  }
  return (
    <main className="min-h-[80vh] grid place-items-center px-6 py-16">
      <div className="card p-8 w-full max-w-lg">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">Step {step + 1} of 3</span>
        {step === 0 && <><h1 className="display text-3xl mt-2">What interests you?</h1><p className="text-ink-2 mt-2 text-sm">Choose topics for exploration. These preferences are not financial risk scores.</p><div className="flex flex-wrap gap-2 mt-6">{INTERESTS.map(item => <button type="button" key={item} onClick={() => toggle(item)} className={'btn !py-2 !px-4 text-sm ' + (selected.includes(item) ? 'btn-mint' : 'btn-ghost')}>{item}</button>)}</div></>}
        {step === 1 && <><h1 className="display text-3xl mt-2">What would you explore?</h1><p className="text-ink-2 mt-2 text-sm">Select the documented VAYLA Arena participation flows you want to learn about.</p><div className="grid gap-2 mt-6">{FLOWS.map(item => <button type="button" key={item} onClick={() => toggle(item)} className={'btn !py-3 text-left ' + (selected.includes(item) ? 'btn-mint' : 'btn-ghost')}>{item}</button>)}</div></>}
        {step === 2 && <><h1 className="display text-3xl mt-2">Verify before you act.</h1><p className="text-ink-2 mt-2 text-sm leading-relaxed">Read whitepaper v3.8, review the legal disclosures and verify the token contract on BscScan. No feature promises profits, dividends, equity or principal protection.</p><div className="flex flex-wrap gap-4 mt-6 text-sm"><Link className="text-mint-400" to="/whitepaper">Whitepaper v3.8</Link><Link className="text-mint-400" to="/legal/risk">Risk disclosure</Link></div></>}
        <div className="flex justify-between mt-8"><button type="button" onClick={() => setStep(current => Math.max(0, current - 1))} disabled={step === 0} className="btn btn-ghost disabled:opacity-30">Back</button><button type="button" onClick={next} className="btn btn-mint">{step === 2 ? 'Explore Arena' : 'Continue'}</button></div>
      </div>
    </main>
  );
}
