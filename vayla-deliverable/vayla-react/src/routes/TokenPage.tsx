import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Token } from '@/components/sections/Token';
import { useReveal } from '@/hooks/useReveal';
import { VAYLA_EXTERNAL } from '@/lib/externalLinks';
import '@/styles/token-page.css';

const VAYLA_BSC = '0x3b6b2593475FC2Bf546F237Fd401D63a655cE53f';

const SUPPLY: { lbl: string; v: string; sub: string }[] = [
  { lbl: 'Total supply', v: '3,000,000,000', sub: 'Hard cap · BEP-20' },
  { lbl: 'Circulating', v: '637,200,000', sub: 'Illustrative · see BscScan' },
  { lbl: 'Holders', v: '57,418', sub: '↑ 218 / 24h' },
  { lbl: 'Network', v: 'BNB Smart Chain', sub: 'BSC · not Ethereum / Base' },
];

const UTILITY: { ttl: string; tag: string; body: string; icon: 'stake' | 'govern' | 'boost' }[] = [
  {
    tag: '01 · Stake',
    ttl: 'Participate with VAYLA Boost.',
    icon: 'stake',
    body: '$VAYLA powers fan participation across VAYLA Boost campaigns. Support artists and music IP you believe in; rewards and ecosystem utility flow from real engagement—not guaranteed returns.',
  },
  {
    tag: '02 · Govern',
    ttl: 'Vote on the protocol direction.',
    icon: 'govern',
    body: '$VAYLA holders steer the V-DAO. Quadratic voting on grants, audit budgets, parameter changes, and which new vault types ship next. The protocol is shaped by the people who hold the token.',
  },
  {
    tag: '03 · Boost',
    ttl: 'Earn more for showing up early.',
    icon: 'boost',
    body: 'The longer you participate, the higher your yield multiplier (up to +50% annualized). Early supporters may earn more when campaigns perform. Lockup is optional; exit stays permissionless.',
  },
];

const FLOW: { src: string; arrow: string; dest: string; note: string }[] = [
  { src: 'Streaming royalties', arrow: '→', dest: 'Vault',   note: 'Spotify / Apple / TikTok flows on-chain' },
  { src: 'Drops & merch',       arrow: '→', dest: 'Vault',   note: 'Settlement layer, no Shopify cut' },
  { src: 'Sync licensing',      arrow: '→', dest: 'Vault',   note: 'Film, ads, games' },
  { src: 'Vault revenue',       arrow: '→', dest: '$VAYLA stakers', note: 'Pro rata. Continuous. Permissionless.' },
];

const VESTING: { period: string; bucket: string; status: string }[] = [
  { period: 'Genesis',     bucket: 'Community + Liquidity', status: 'Live · 22% in market' },
  { period: 'Months 1-12', bucket: 'Boost emission begins', status: 'Linear, on-chain' },
  { period: 'Month 24',    bucket: 'Team cliff completes',  status: 'Vest starts' },
  { period: 'Months 24-72', bucket: 'Team + Builders vest', status: '4-year linear' },
  { period: 'Permanent',   bucket: 'Liquidity locked',      status: 'Cannot be withdrawn' },
];

export function TokenPage() {
  // The embedded <Token /> section uses .reveal classes that fade in via
  // IntersectionObserver. Without this hook those elements stay opacity:0
  // forever, leaving a tall blank gap where the allocation chart should be.
  useReveal();

  const sigilRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on the giant background metaball as the user scrolls
  useEffect(() => {
    const el = sigilRef.current;
    if (!el) return;
    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (el) el.style.transform = `translate3d(0, ${y * -0.08}px, 0)`;
        raf = 0;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <main className="token-page">
      {/* HERO ─────────────────────────────────────────────────────────── */}
      <section className="token-hero">
        <div ref={sigilRef} className="token-hero__sigil" aria-hidden>
          <Sigil size={780} />
        </div>
        <div className="token-hero__inner">
          <div className="token-hero__eyebrow">
            <span className="size-1.5 rounded-full bg-mint-400 inline-block" />
            <span>$VAYLA · BEP-20 · live on BNB Smart Chain</span>
          </div>
          <h1 className="token-hero__title">
            Belief, <span className="font-serif italic">made liquid.</span>
          </h1>
          <p className="token-hero__deck">
            $VAYLA is the ecosystem utility token for VAYLA Boost, Arena participation, governance, and rewards. Connect with artists and music IP through on-chain fan engagement. <em className="font-serif italic text-mint-400">One token. Ecosystem utility. Zero middlemen.</em>
          </p>
          <div className="token-hero__cta">
            <a className="btn btn-mint" href="#get">Get $VAYLA</a>
            <Link className="btn btn-ghost" to="/vaults">Browse vaults</Link>
            <Link className="btn btn-ghost" to="/whitepaper">Read the spec</Link>
          </div>

          <div className="token-hero__pricecard">
            <div>
              <div className="lbl">Last</div>
              <div className="val tabular">$0.4128</div>
              <div className="delta">↑ 3.2% / 24h</div>
            </div>
            <div className="sep" aria-hidden />
            <div>
              <div className="lbl">FDV</div>
              <div className="val tabular">$1.24B</div>
              <div className="delta neutral">@ last · vs 3B supply</div>
            </div>
            <div className="sep" aria-hidden />
            <div>
              <div className="lbl">TVL routed</div>
              <div className="val tabular">$144.6M</div>
              <div className="delta">↑ 4.8% / 24h</div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLY STRIP ─────────────────────────────────────────────────── */}
      <section className="token-strip">
        <div className="wrap">
          {SUPPLY.map((s, i) => (
            <div key={i} className="token-strip__cell">
              <div className="lbl">{s.lbl}</div>
              <div className="val tabular">{s.v}</div>
              <div className="sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* THREE UTILITIES ──────────────────────────────────────────────── */}
      <section className="token-section">
        <div className="wrap">
          <div className="token-head">
            <span className="eyebrow">Token utility</span>
            <h2>Three jobs. <span className="font-serif italic text-mint-400">All on-chain.</span></h2>
            <p>$VAYLA is not a meme. It powers VAYLA Boost participation, V-DAO voting, Arena rewards, and multipliers that recognize long-term fan support.</p>
          </div>
          <div className="util-grid">
            {UTILITY.map((u, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -8% 0px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
                className="util-card"
              >
                <UtilityIcon kind={u.icon} />
                <div className="util-card__tag">{u.tag}</div>
                <h3 className="util-card__ttl">{u.ttl}</h3>
                <p>{u.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE FLOW ───────────────────────────────────────────────────── */}
      <section className="token-section token-section--alt">
        <div className="wrap">
          <div className="token-head">
            <span className="eyebrow">Value flow</span>
            <h2>Where the value <span className="font-serif italic text-mint-400">comes from.</span></h2>
            <p>Tokens with no cash flow rely on hope. $VAYLA accrues value because real revenue from real creators settles on-chain, and stakers earn a share. Here's the path of a dollar.</p>
          </div>
          <div className="flow-list">
            {FLOW.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flow-row"
              >
                <span className="flow-row__src">{f.src}</span>
                <span className="flow-row__arrow" aria-hidden>{f.arrow}</span>
                <span className="flow-row__dest">{f.dest}</span>
                <span className="flow-row__note">{f.note}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLOCATION (re-use Home Token section) ──────────────────────── */}
      <Token />

      {/* VESTING TIMELINE ─────────────────────────────────────────────── */}
      <section className="token-section">
        <div className="wrap">
          <div className="token-head">
            <span className="eyebrow">Vesting & emissions</span>
            <h2>No surprises. <span className="font-serif italic text-mint-400">Calendar everything.</span></h2>
            <p>3B hard cap on BNB Smart Chain. No team unlock past month 24. Liquidity locked permanently. Boost emissions are linear and visible on-chain in real time.</p>
          </div>
          <div className="timeline">
            {VESTING.map((v, i) => (
              <div key={i} className="timeline__row">
                <div className="timeline__period">{v.period}</div>
                <div className="timeline__bucket">
                  <div className="dot" aria-hidden />
                  <strong>{v.bucket}</strong>
                </div>
                <div className="timeline__status">{v.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET $VAYLA ──────────────────────────────────────────────────── */}
      <section id="get" className="token-section token-section--alt">
        <div className="wrap">
          <div className="token-head">
            <span className="eyebrow">How to get $VAYLA</span>
            <h2>Three ways to <span className="font-serif italic text-mint-400">show up.</span></h2>
          </div>
          <div className="get-grid">
            <a
              className="get-card"
              href={`https://pancakeswap.finance/swap?chain=bsc&outputCurrency=${VAYLA_BSC}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="get-card__num">01</div>
              <h3>Swap on PancakeSwap</h3>
              <p>Trade BNB or stablecoins for $VAYLA on PancakeSwap (BNB Chain). Deepest routed liquidity for the BEP-20 contract.</p>
              <div className="get-card__cta">Open PancakeSwap &rsaquo;</div>
            </a>
            <a className="get-card" href={VAYLA_EXTERNAL.bscscanToken} target="_blank" rel="noopener noreferrer">
              <div className="get-card__num">02</div>
              <h3>BscScan &amp; holders</h3>
              <p>Verify supply, transfers, and top holders on the canonical BNB Smart Chain explorer.</p>
              <div className="get-card__cta">Open BscScan &rsaquo;</div>
            </a>
            <Link className="get-card" to="/marketplace">
              <div className="get-card__num">03</div>
              <h3>Marketplace one click</h3>
              <p>Inside VAYLA. Connect wallet, set amount, sign once. Routed through the best pool.</p>
              <div className="get-card__cta">Go to Marketplace &rsaquo;</div>
            </Link>
          </div>
          <div className="token-get-more" aria-label="Official listings and code">
            <a href={VAYLA_EXTERNAL.coinGecko} target="_blank" rel="noopener noreferrer">CoinGecko</a>
            <span className="token-get-more__sep" aria-hidden>·</span>
            <a href={VAYLA_EXTERNAL.coinMarketCap} target="_blank" rel="noopener noreferrer">CoinMarketCap</a>
            <span className="token-get-more__sep" aria-hidden>·</span>
            <a href={VAYLA_EXTERNAL.githubOrg} target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="token-get-more__sep" aria-hidden>·</span>
            <a href={VAYLA_EXTERNAL.linkHub} target="_blank" rel="noopener noreferrer">Official link hub</a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / FINAL ──────────────────────────────────────────── */}
      <section className="token-section">
        <div className="wrap">
          <div className="token-philo">
            <div className="token-philo__sigil" aria-hidden>
              <Sigil size={140} />
            </div>
            <div>
              <h2 className="token-philo__title">
                The community owns the majority. <span className="font-serif italic text-mint-400">From genesis.</span>
              </h2>
              <p>
                42% to the community. 22% to vault boost. 14% to the treasury, governed by V DAO. 12% to team across a 4 year vest with a 2 year cliff. 6% permanent PancakeSwap liquidity on BNB Smart Chain, locked forever. 4% audit & bug bounty. The numbers are public, the contracts are audited, and the unlock calendar is on-chain.
              </p>
              <div className="token-philo__cta">
                <Link className="btn btn-mint" to="/vaults">Stake your first vault</Link>
                <Link className="btn btn-ghost" to="/start">New here? Start with $50</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ─── components ─────────────────────────────────────────────────────── */

function Sigil({ size }: { size: number }) {
  return (
    <img
      src="/vayla_logo_new.png"
      alt=""
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
      aria-hidden
      draggable={false}
    />
  );
}

function UtilityIcon({ kind }: { kind: 'stake' | 'govern' | 'boost' }) {
  const c = '#70F3D8';
  return (
    <span className="util-icon" aria-hidden>
      {kind === 'stake' && (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <rect x="6" y="11" width="20" height="14" rx="3" stroke={c} strokeWidth="1.6" />
          <path d="M11 11V8a5 5 0 0110 0v3" stroke={c} strokeWidth="1.6" />
          <circle cx="16" cy="18" r="2.2" fill={c} />
        </svg>
      )}
      {kind === 'govern' && (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <path d="M5 26h22M8 26V14m6 12V11m6 15V14m6 12V9" stroke={c} strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="8" cy="14" r="2" fill={c} />
          <circle cx="14" cy="11" r="2" fill={c} />
          <circle cx="20" cy="14" r="2" fill={c} />
          <circle cx="26" cy="9" r="2" fill={c} />
        </svg>
      )}
      {kind === 'boost' && (
        <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
          <path d="M16 26V8m0 0l-6 6m6-6l6 6" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="16" r="13" stroke={c} strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="2 3" />
        </svg>
      )}
    </span>
  );
}
