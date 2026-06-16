import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Allocation {
  c: string;
  name: string;
  sub: string;
  pct: string;
  pctNum: number;
  detail: string;
  schedule: string;
}

const ALLOCS: Allocation[] = [
  { c: '#70F3D8', name: 'Community & Fan Rewards', sub: '4-year emission curve', pct: '42%', pctNum: 42, detail: 'Boost rewards, creator launch grants and fan acquisition incentives. The largest bucket, fans take majority by design.', schedule: '4-year emission' },
  { c: '#9B7BFF', name: 'Vault Boost Rewards', sub: 'linear, on stake duration', pct: '22%', pctNum: 22, detail: 'Linear emission to held positions. Longer hold → higher boost multiplier (up to +50%/yr).', schedule: 'Linear over hold' },
  { c: '#F2C661', name: 'Treasury & Grants', sub: 'governed by V-DAO', pct: '14%', pctNum: 14, detail: 'Grants for new vaults, audit budget, partnerships. Allocated by quadratic V-DAO vote.', schedule: 'On-demand' },
  { c: '#B7E5FF', name: 'Team & Builders', sub: '2-year cliff, 4-year vest', pct: '12%', pctNum: 12, detail: 'Core contributors and protocol engineers. 2-year cliff, 4-year vest, no escape clause.', schedule: '2y cliff · 4y vest' },
  { c: '#FF6B6B', name: 'Liquidity', sub: 'permanent LP, locked', pct: '6%', pctNum: 6, detail: 'Permanent PancakeSwap (BNB Chain) liquidity, locked.', schedule: 'Locked perma' },
  { c: '#4FE3C2', name: 'Audit & Bug Bounty', sub: 'continuous reserve', pct: '4%', pctNum: 4, detail: 'Continuous reserve for Immunefi bounties + ongoing Spearbit retainer.', schedule: 'Continuous' },
];

// Donut maths: r=76, circumference 2π*76 ≈ 477.5
const C = 477.5;
function arcDash(pctNum: number) { return (pctNum / 100) * C; }

const AUTO_INTERVAL_MS = 2200;

export function Token() {
  const [manualHover, setManualHover] = useState<number | null>(null);
  const [autoIndex, setAutoIndex] = useState<number>(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Pause auto-cycle when the section isn't visible (saves cycles, also
  // means the user's first glance always lands on slice 0). Threshold 0.3 so
  // the cycle only runs when ~a third of the donut is in viewport.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-advance the highlighted slice every AUTO_INTERVAL_MS while the
  // section is in view AND the user isn't manually hovering anything. The
  // cleanup pauses the timer; clearing manualHover resumes from the slice
  // we left off on (autoIndex isn't reset).
  useEffect(() => {
    if (!inView || manualHover != null) return;
    const t = setInterval(() => {
      setAutoIndex(i => (i + 1) % ALLOCS.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(t);
  }, [inView, manualHover]);

  // Display index: user hover wins, otherwise the auto-cycle drives it.
  // When the section is offscreen we suppress auto so chart sits at "Total
  // Supply" idle state.
  const hovered: number | null =
    manualHover != null ? manualHover : (inView ? autoIndex : null);

  // Cumulative offset for each segment (start position around the ring)
  let cumulative = 0;
  const segments = ALLOCS.map(a => {
    const dash = arcDash(a.pctNum);
    const offset = -cumulative;
    cumulative += dash;
    return { ...a, dash, offset };
  });

  const active = hovered != null ? segments[hovered] : null;

  return (
    <section className="section" id="token" ref={sectionRef}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow"><span className="num">05</span> Token</span>
          <h2 className="section-title">$VAYLA <em>allocation.</em></h2>
          <p className="section-deck">
            3B total supply (hard cap) on BNB Smart Chain (BEP-20). No team unlock past month 24. The community owns the majority from genesis. Boost rewards are emitted on-chain, transparently. <em>Hover any slice or row to inspect.</em>
          </p>
        </div>

        <div className="token-grid reveal">
          <div className="donut-wrap" onMouseLeave={() => setManualHover(null)}>
            <svg className="donut-svg" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="76" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="20" />
              {segments.map((s, i) => {
                const isActive = hovered === i;
                const isDimmed = hovered != null && hovered !== i;
                return (
                  <circle
                    key={i}
                    cx="100" cy="100" r="76"
                    fill="none"
                    stroke={s.c}
                    strokeWidth={isActive ? 26 : 20}
                    strokeDasharray={`${s.dash} ${C - s.dash}`}
                    strokeDashoffset={s.offset}
                    className="donut-seg"
                    style={{
                      cursor: 'pointer',
                      transition: 'stroke-width 0.25s, opacity 0.25s, filter 0.25s',
                      opacity: isDimmed ? 0.32 : 1,
                      filter: isActive ? `drop-shadow(0 0 8px ${s.c})` : 'none',
                    }}
                    onMouseEnter={() => setManualHover(i)}
                  />
                );
              })}
            </svg>
            <div className="donut-center">
              <div className="total">{active ? active.schedule : 'Total Supply'}</div>
              <div className="num">{active ? active.pct : '3.0B'}</div>
              <div className="ticker">{active ? active.name : '$VAYLA · $0.4128'}</div>
            </div>

            {/* Floating glass tooltip */}
            <AnimatePresence>
              {active && (
                <motion.div
                  key={active.name}
                  className="token-tooltip"
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <div className="token-tooltip-bar" style={{ background: active.c }} />
                  <div className="token-tooltip-head">
                    <span className="swatch" style={{ background: active.c }} />
                    <strong>{active.name}</strong>
                    <span className="pct" style={{ color: active.c }}>{active.pct}</span>
                  </div>
                  <p>{active.detail}</p>
                  <div className="token-tooltip-meta">
                    <span>{active.schedule}</span>
                    <span>{Math.round(active.pctNum * 30)}M tokens</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="alloc-list">
            {ALLOCS.map((a, i) => (
              <div
                key={i}
                className={'alloc' + (hovered === i ? ' is-hovered' : '') + (hovered != null && hovered !== i ? ' is-dimmed' : '')}
                onMouseEnter={() => setManualHover(i)}
                onMouseLeave={() => setManualHover(null)}
              >
                <span className="swatch" style={{ background: a.c }} />
                <span className="name">{a.name} <span>{a.sub}</span></span>
                <span className="pct" style={{ color: hovered === i ? a.c : undefined }}>{a.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
