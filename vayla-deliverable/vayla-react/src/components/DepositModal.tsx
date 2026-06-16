import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Vault } from '@/types';
import { useApp } from '@/store/useApp';
import { fmtN, fmtUSD } from '@/lib/format';
import { VaultAvatar } from './VaultAvatar';

export function DepositModal({ vault, open, onClose }: { vault: Vault | null; open: boolean; onClose: () => void }) {
  const { vaylaBalance, deposit } = useApp();
  const [amount, setAmount] = useState(0);
  const [lockup, setLockup] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) { setAmount(0); setLockup(vault?.lockup ?? 0); setDone(false); }
  }, [open, vault]);

  if (!vault) return null;
  const lockupBoost = 1 + lockup / 365 * 0.5; // up to +50% boost over a year
  const estApy = vault.apy * lockupBoost;
  const valid = amount > 0 && amount <= vaylaBalance;

  async function submit() {
    if (!valid || !vault) return;
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    deposit(vault.id, amount, lockup);
    setSubmitting(false);
    setDone(true);
    setTimeout(() => onClose(), 1100);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="card glass w-full max-w-md p-6 relative"
            initial={{ y: 20, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 22 }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute right-4 top-4 size-8 rounded-full hover:bg-line-1 grid place-items-center text-ink-3 hover:text-ink-0">×</button>
            <div className="flex items-center gap-3 mb-5">
              <VaultAvatar creator={vault.creator} color={vault.avatarColor} size={48} />
              <div>
                <div className="text-[11px] uppercase tracking-widest text-ink-3">Stake into</div>
                <div className="display text-xl text-ink-0">{vault.creator}</div>
              </div>
            </div>

            {!done ? (
              <>
                <label className="block text-[11px] uppercase tracking-widest text-ink-3 mb-2">Amount</label>
                <div className="card !rounded-xl px-4 py-3 flex items-center justify-between">
                  <input
                    inputMode="decimal" value={amount || ''}
                    onChange={e => setAmount(Math.max(0, Number(e.target.value.replace(/[^\d.]/g, '')) || 0))}
                    placeholder="0.00"
                    className="bg-transparent outline-none flex-1 display tabular text-2xl text-ink-0"
                  />
                  <span className="text-ink-3 text-sm">VAYLA</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {[0.25, 0.5, 0.75, 1].map(p => (
                    <button key={p} onClick={() => setAmount(Math.floor(vaylaBalance * p))} className="btn btn-ghost !px-3 !py-1.5 text-xs flex-1">{Math.round(p*100)}%</button>
                  ))}
                </div>
                <div className="text-xs text-ink-3 mt-2">Available: <span className="tabular text-ink-1">{fmtN(vaylaBalance)} VAYLA</span></div>

                <label className="block text-[11px] uppercase tracking-widest text-ink-3 mt-5 mb-2">Lockup (boost multiplier)</label>
                <div className="grid grid-cols-4 gap-2">
                  {[0, 30, 90, 365].map(d => (
                    <button
                      key={d}
                      onClick={() => setLockup(d)}
                      className={`btn !rounded-xl !py-2.5 ${lockup === d ? 'btn-mint' : 'btn-ghost'} flex-col gap-0`}
                    >
                      <span className="text-xs">{d === 0 ? 'None' : d + 'd'}</span>
                      <span className="text-[10px] opacity-70">{d === 0 ? '1.00×' : (1 + d / 365 * 0.5).toFixed(2) + '×'}</span>
                    </button>
                  ))}
                </div>

                <div className="card mt-5 p-4 space-y-2 text-sm">
                  <Row k="Effective APY" v={<span className="text-mint-400 tabular">{estApy.toFixed(1)}%</span>} />
                  <Row k="Est. yield (annual)" v={<span className="tabular">{fmtUSD(amount * 0.41 * estApy / 100)}</span>} />
                  <Row k="Vault share after" v={<span className="tabular">{((amount / (vault.tvl + amount)) * 100).toFixed(3)}%</span>} />
                  <Row k="Lockup ends" v={<span className="tabular text-ink-2">{lockup === 0 ? 'No lockup' : new Date(Date.now() + lockup * 86400_000).toLocaleDateString()}</span>} />
                </div>

                <button
                  disabled={!valid || submitting}
                  onClick={submit}
                  className={`btn btn-mint w-full mt-5 ${(!valid || submitting) ? 'opacity-40 cursor-not-allowed' : ''}`}
                >
                  {submitting ? 'Confirming on-chain…' : `Stake ${fmtN(amount)} VAYLA`}
                </button>
              </>
            ) : (
              <div className="text-center py-10">
                <div className="size-16 mx-auto rounded-full grid place-items-center bg-mint-400/10 border border-mint-400/30 mb-4">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 8" stroke="#70F3D8" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="display text-xl text-ink-0">Position opened</div>
                <div className="text-ink-2 text-sm mt-1">{fmtN(amount)} VAYLA staked into {vault.creator}</div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return <div className="flex justify-between"><span className="text-ink-3">{k}</span><span className="text-ink-1">{v}</span></div>;
}
