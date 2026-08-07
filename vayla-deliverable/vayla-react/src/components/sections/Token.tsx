import { useState } from 'react';
import { VAYLA_FACTS } from '@/lib/officialFacts';

const COLORS = ['#70F3D8', '#9B7BFF', '#F2C661', '#B7E5FF', '#FF6B6B'];

export function Token() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const allocations = VAYLA_FACTS.tokenAllocation.map((item, index) => ({
    ...item,
    color: COLORS[index],
    tokens: Math.round(item.percentage * 30),
  }));
  const active = activeIndex == null ? null : allocations[activeIndex];

  return (
    <section className="section" id="token">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow">Token utility</span>
          <h2 className="section-title">$VAYLA <em>allocation.</em></h2>
          <p className="section-deck">
            3B total supply on BNB Smart Chain using the BEP-20 standard. The allocation below follows the official v3.8 whitepaper. <em>Hover any slice or row to inspect.</em>
          </p>
        </div>

        <div className="token-grid reveal">
          <div className="donut-wrap" aria-label="VAYLA token allocation">
            <svg className="donut-svg" viewBox="0 0 200 200" role="img" aria-label="VAYLA token allocation chart">
              <circle cx="100" cy="100" r="76" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="20" />
              <circle cx="100" cy="100" r="76" fill="none" stroke="#70F3D8" strokeWidth="20" strokeDasharray="477.5 0" opacity="0.9" />
            </svg>
            <div className="donut-center">
              <div className="total">{active ? active.label : 'Total Supply'}</div>
              <div className="num">{active ? active.percentage + '%' : '3.0B'}</div>
              <div className="ticker">{active ? active.tokens + 'M VAYLA' : 'VAYLA | BEP-20'}</div>
            </div>
            {active && (
              <div className="token-tooltip">
                <div className="token-tooltip-bar" style={{ background: active.color }} />
                <div className="token-tooltip-head"><strong>{active.label}</strong><span className="pct">{active.percentage}%</span></div>
                <p>Allocation published in the official VAYLA whitepaper v3.8.</p>
                <div className="token-tooltip-meta"><span>{active.percentage}% of total supply</span><span>{active.tokens}M tokens</span></div>
              </div>
            )}
          </div>

          <div className="alloc-list">
            {allocations.map((item, index) => (
              <button
                type="button"
                key={item.label}
                className={'alloc' + (activeIndex === index ? ' is-hovered' : '')}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onBlur={() => setActiveIndex(null)}
              >
                <span className="swatch" style={{ background: item.color }} />
                <span className="name">{item.label} <span>v3.8 allocation</span></span>
                <span className="pct" style={{ color: item.color }}>{item.percentage}%</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
