import { useState } from 'react';
import { motion } from 'framer-motion';

const STEPS = ['Profile', 'Audience', 'Campaign', 'Review'];

export function CreatorPortal() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: '', handle: '', category: 'music', description: '',
    streams: 0, drops: 0, ip: 0, live: 0,
    capacity: 10000, lockup: 30, riskTolerance: 5,
  });

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) { setForm(s => ({ ...s, [k]: v })); }

  return (
    <main className="creator-page mx-auto max-w-[820px] min-w-0 px-6 pt-12 pb-24">
      <div className="text-center mb-10">
        <span className="text-[11px] uppercase tracking-widest text-mint-400">Creator Portal | Preview</span>
        <h1 className="display text-5xl md:text-6xl mt-2">Draft a creator<span className="creator-mobile-break"><br /></span> campaign.</h1>
      </div>

      <div className="creator-stepper flex min-w-0 items-center justify-between mb-8" aria-label="Campaign preview steps">
        {STEPS.map((s, i) => (
          <div key={s} className="creator-step flex min-w-0 flex-1 items-center">
            <div className={`creator-step-number size-8 shrink-0 rounded-full grid place-items-center text-xs font-semibold ${i <= step ? 'bg-mint-400 text-bg-0' : 'bg-line-1 text-ink-3'}`}>{i + 1}</div>
            <div className={`creator-step-label ml-2 min-w-0 truncate text-xs uppercase tracking-widest ${i <= step ? 'text-ink-1' : 'text-ink-3'}`}>{s}</div>
            {i < STEPS.length - 1 && <div className={`creator-step-connector min-w-3 flex-1 h-px mx-3 ${i < step ? 'bg-mint-400' : 'bg-line-1'}`} />}
          </div>
        ))}
      </div>

      <motion.div key={step} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="card p-6 space-y-5">
        {step === 0 && <>
          <Field label="Display name" value={form.name} onChange={v => set('name', v)} placeholder="NOOR" />
          <Field label="Handle" value={form.handle} onChange={v => set('handle', v)} placeholder="@noor" />
          <FieldSelect label="Category" value={form.category} onChange={v => set('category', v)} options={['music','creator','gaming','film','sports']} />
          <Field label="Description" value={form.description} onChange={v => set('description', v)} placeholder="Berlin-based artist" multiline />
        </>}
        {step === 1 && <>
          <p className="text-ink-2 text-sm">Illustrative annual audience/revenue inputs (USD), for preview only:</p>
          <Number label="Streaming" value={form.streams} onChange={v => set('streams', v)} />
          <Number label="Drops & Merch" value={form.drops} onChange={v => set('drops', v)} />
          <Number label="IP & Licensing" value={form.ip} onChange={v => set('ip', v)} />
          <Number label="Live & Touring" value={form.live} onChange={v => set('live', v)} />
        </>}
        {step === 2 && <>
          <Range label="Audience capacity (max fans)" value={form.capacity} min={1000} max={50000} step={1000} onChange={v => set('capacity', v)} />
          <Range label="Campaign window (days)" value={form.lockup} min={0} max={365} step={15} onChange={v => set('lockup', v)} />
          <Range label="Participation sensitivity (1-10)" value={form.riskTolerance} min={1} max={10} step={1} onChange={v => set('riskTolerance', v)} />
        </>}
        {step === 3 && <>
          <h3 className="display text-2xl">Review</h3>
          <pre className="text-xs text-ink-2 bg-bg-1 rounded-xl p-4 border border-line-1 whitespace-pre-wrap break-all">{JSON.stringify(form, null, 2)}</pre>
          <p className="text-ink-3 text-xs">This is a local product preview in development. It does not submit a campaign, deploy a contract, process a payment or connect a wallet.</p>
        </>}
      </motion.div>

      <div className="flex justify-between mt-6">
        <button onClick={() => setStep(s => Math.max(0, s - 1))} className="btn btn-ghost" disabled={step === 0}>Back</button>
        {step < STEPS.length - 1 ? (
          <button onClick={() => setStep(s => s + 1)} className="btn btn-mint">Continue</button>
        ) : (
          <button onClick={() => alert('Preview only: no campaign or contract was submitted.')} className="btn btn-mint">Finish preview</button>
        )}
      </div>
    </main>
  );
}

interface FieldProps { label: string; value: string; onChange: (v: string) => void; placeholder?: string; multiline?: boolean; }
function Field({ label, value, onChange, placeholder, multiline = false }: FieldProps) {
  const common = "w-full px-4 py-2.5 rounded-xl bg-bg-1 border border-line-1 outline-none focus:border-mint-400/50 text-sm";
  return (
    <div>
      <div className="text-[11px] uppercase tracking-widest text-ink-3 mb-1.5">{label}</div>
      {multiline
        ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} rows={3} className={common} />
        : <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} className={common} />}
    </div>
  );
}
function FieldSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-widest text-ink-3 mb-1.5">{label}</div>
      <select value={value} onChange={e => onChange(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-bg-1 border border-line-1 outline-none focus:border-mint-400/50 text-sm capitalize">
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
function Number({ label, value, onChange }: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-widest text-ink-3 mb-1.5">{label}</div>
      <input inputMode="numeric" value={value} onChange={e => onChange(Math.max(0, parseInt(e.target.value.replace(/[^\d]/g, '')) || 0))} className="w-full px-4 py-2.5 rounded-xl bg-bg-1 border border-line-1 outline-none focus:border-mint-400/50 text-sm tabular" />
    </div>
  );
}
function Range({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="flex justify-between text-[11px] uppercase tracking-widest text-ink-3 mb-1.5">
        <span>{label}</span>
        <span className="tabular text-ink-2 normal-case tracking-normal">{value}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(parseInt(e.target.value))} className="w-full accent-mint-400" />
    </div>
  );
}
