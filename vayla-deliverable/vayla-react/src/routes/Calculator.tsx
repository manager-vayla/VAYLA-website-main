import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '@/styles/calculator.css';

/* ────────────────────────────────────────────────────────────────────────
   THE BRUTAL MATH
   Public, free, no login. Anyone enters their numbers and sees where every
   dollar of a music economy actually ends up. This is an illustrative
   industry-benchmark tool, not an official VAYLA financial model.
   ──────────────────────────────────────────────────────────────────────── */

type DealKind = 'major' | 'indie' | 'diy';

const DEAL: Record<DealKind, { label: string; sub: string }> = {
  major: { label: 'Major label deal',    sub: '~14% to you on streams' },
  indie: { label: 'Indie + aggregator',  sub: '~70% to you on streams' },
  diy:   { label: 'Fully DIY',           sub: 'no admin, no manager' },
};

const PRESETS: { name: string; sub: string; streams: number; deal: DealKind; merch: number; sync: number; tour: number }[] = [
  { name: 'Bedroom artist',    sub: '50K streams/mo | DIY',                streams: 50_000,    deal: 'diy',   merch: 0,     sync: 0,    tour: 0 },
  { name: 'Touring indie',     sub: '500K streams/mo | indie + aggregator', streams: 500_000,   deal: 'indie', merch: 1_500, sync: 1,    tour: 12_000 },
  { name: 'Mid-tier signed',   sub: '5M streams/mo | major label',         streams: 5_000_000, deal: 'major', merch: 6_000, sync: 4,    tour: 80_000 },
  { name: 'Stadium artist',    sub: '50M streams/mo | major label',        streams: 50_000_000,deal: 'major', merch: 80_000,sync: 18,   tour: 1_500_000 },
];

/* All numbers below are public industry benchmarks: Spotify per-stream ~$0.004,
   Spotify keeps 30% (publicly disclosed), labels keep ~80% of artist royalties
   on standard deals, managers take ~15%, sync agencies ~40%, merch platforms
   ~12%, US effective income tax ~25%. Sources cited in tooltips. */
const PER_STREAM_USD       = 0.004;
const SPOTIFY_CUT          = 0.30;
const LABEL_CUT_OF_ROYALTY = 0.80; // major deal
const INDIE_DISTRO_CUT     = 0.07; // distrokid/aggregator on indie
const MANAGER_CUT          = 0.15;
const SYNC_AGENT_CUT       = 0.40;
const MERCH_PLATFORM_CUT   = 0.12;
const SYNC_AVG_PLACEMENT   = 8_000;
const TOUR_AGENT_CUT       = 0.10;
const TAX_EFFECTIVE        = 0.25;

function fmtUSD(n: number, decimals = 0): string {
  if (Math.abs(n) >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B';
  if (Math.abs(n) >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
  if (Math.abs(n) >= 1e3) return '$' + (n / 1e3).toFixed(1) + 'K';
  return '$' + n.toLocaleString(undefined, { maximumFractionDigits: decimals });
}

function fmtN(n: number): string {
  if (Math.abs(n) >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(1) + 'M';
  if (Math.abs(n) >= 1e3) return (n / 1e3).toFixed(0) + 'K';
  return n.toLocaleString();
}

/* Animated counter component — counts up to value, respects reduced motion. */
function Counter({ value, prefix = '', decimals = 0, suffix = '', duration = 0.9, format }:
  { value: number; prefix?: string; decimals?: number; suffix?: string; duration?: number; format?: (n: number) => string }) {
  const [n, setN] = useState(value);
  const prev = useRef(value);
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setN(value); prev.current = value; return; }
    const start = prev.current;
    const startTime = performance.now();
    let raf = 0;
    function tick(t: number) {
      const p = Math.min(1, (t - startTime) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 3);
      setN(start + (value - start) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else prev.current = value;
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  const display = format ? format(n) : `${prefix}${n.toFixed(decimals)}${suffix}`;
  return <span className="tabular">{display}</span>;
}

interface Inputs { streams: number; deal: DealKind; merch: number; sync: number; tour: number; }

function compute(input: Inputs) {
  const annualStreams = input.streams * 12;
  // ── Streaming pipeline ─────────────────────────────────────────────
  const streamGross = annualStreams * PER_STREAM_USD; // total $ Spotify pays out
  const spotifyKeeps = streamGross * SPOTIFY_CUT;
  const royaltyPool  = streamGross - spotifyKeeps;

  let labelKeeps = 0;
  let distroKeeps = 0;
  let artistStream = 0;
  if (input.deal === 'major') {
    labelKeeps   = royaltyPool * LABEL_CUT_OF_ROYALTY;
    artistStream = royaltyPool - labelKeeps;
  } else if (input.deal === 'indie') {
    distroKeeps  = royaltyPool * INDIE_DISTRO_CUT;
    artistStream = royaltyPool - distroKeeps;
  } else {
    artistStream = royaltyPool;
  }

  // ── Sync ───────────────────────────────────────────────────────────
  const syncGross  = input.sync * SYNC_AVG_PLACEMENT;
  const syncAgent  = syncGross * SYNC_AGENT_CUT;
  const artistSync = syncGross - syncAgent;

  // ── Merch ──────────────────────────────────────────────────────────
  const merchGross    = input.merch * 12;
  const merchPlatform = merchGross * MERCH_PLATFORM_CUT;
  const artistMerch   = merchGross - merchPlatform;

  // ── Touring ────────────────────────────────────────────────────────
  const tourGross  = input.tour;
  const tourAgent  = tourGross * TOUR_AGENT_CUT;
  const artistTour = tourGross - tourAgent;

  // ── Manager / tax (apply only on label-deal flow conventionally; we
  //     model manager on all earned, tax on net) ──────────────────────
  const totalGross = streamGross + syncGross + merchGross + tourGross;
  const totalArtistEarned = artistStream + artistSync + artistMerch + artistTour;
  const managerKeeps = input.deal === 'diy' ? 0 : totalArtistEarned * MANAGER_CUT;
  const afterManager = totalArtistEarned - managerKeeps;
  const taxKeeps = afterManager * TAX_EFFECTIVE;
  const artistTakeHome = afterManager - taxKeeps;

  const middlemenTotal =
    spotifyKeeps + labelKeeps + distroKeeps + syncAgent + merchPlatform +
    tourAgent + managerKeeps;

  return {
    annualStreams, totalGross,
    spotifyKeeps, labelKeeps, distroKeeps, syncAgent, merchPlatform,
    tourAgent, managerKeeps, taxKeeps, middlemenTotal,
    artistStream, artistSync, artistMerch, artistTour, artistTakeHome,
    keptPct: totalGross > 0 ? artistTakeHome / totalGross : 0,
  };
}

/* ─── route ──────────────────────────────────────────────────────────── */

export function Calculator() {
  // URL state so links are shareable.
  const initial = readURL();
  const [streams, setStreams] = useState(initial.streams);
  const [deal, setDeal] = useState<DealKind>(initial.deal);
  const [merch, setMerch] = useState(initial.merch);
  const [sync, setSync] = useState(initial.sync);
  const [tour, setTour] = useState(initial.tour);

  // Persist to URL on change so a copied link replays the same numbers.
  useEffect(() => {
    const p = new URLSearchParams();
    p.set('s', String(streams));
    p.set('d', deal);
    p.set('m', String(merch));
    p.set('y', String(sync));
    p.set('t', String(tour));
    const url = window.location.pathname + '?' + p.toString();
    window.history.replaceState(null, '', url);
  }, [streams, deal, merch, sync, tour]);

  const r = useMemo(() => compute({ streams, deal, merch, sync, tour }), [streams, deal, merch, sync, tour]);

  const [copied, setCopied] = useState(false);
  function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }
  function tweetLink() {
    const text = `Of every $1 spent in this illustrative artist-economy scenario, only ${(r.keptPct * 100).toFixed(1)}¢ reached the artist.\n\nBrutal math:`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <main className="brutal">
      {/* HERO ───────────────────────────────────────────────────────── */}
      <section className="brutal-hero">
        <div className="brutal-hero__bg" aria-hidden />
        <div className="wrap">
          <span className="brutal-eyebrow">The Brutal Math | open tool | no login</span>
          <h1 className="brutal-title">
            Where the music money <span className="font-serif italic">actually goes.</span>
          </h1>
          <p className="brutal-deck">
            Plug in any artist's numbers. See an illustrative estimate of how many cents reach them on every dollar fans spend.
            The result is an industry-benchmark scenario, not a VAYLA guarantee or official protocol output.
          </p>
        </div>
      </section>

      {/* BIG HEADLINE NUMBER ────────────────────────────────────────── */}
      <section className="brutal-headline">
        <div className="wrap brutal-headline__inner">
          <div className="brutal-headline__lead">Of every <span className="dollar">$1.00</span> fans spend, this artist actually receives</div>
          <div className="brutal-headline__big">
            <Counter value={r.keptPct * 100} decimals={1} suffix="¢" />
          </div>
          <div className="brutal-headline__sub">
            That's <Counter value={r.artistTakeHome} format={n => fmtUSD(n)} /> after middlemen and tax,
            on <Counter value={r.totalGross} format={n => fmtUSD(n)} /> of total ecosystem revenue.
          </div>
        </div>
      </section>

      {/* INPUTS + BREAKDOWN ─────────────────────────────────────────── */}
      <section className="brutal-grid">
        <div className="wrap brutal-grid__inner">
          {/* INPUTS column */}
          <div className="brutal-inputs">
            <div className="brutal-card">
              <h2 className="brutal-section-h">Inputs</h2>
              <p className="brutal-section-sub">All values monthly unless noted. Drag the sliders or pick a preset.</p>

              <div className="brutal-presets">
                {PRESETS.map(p => (
                  <button
                    key={p.name}
                    className="brutal-preset"
                    onClick={() => {
                      setStreams(p.streams); setDeal(p.deal);
                      setMerch(p.merch); setSync(p.sync); setTour(p.tour);
                    }}
                  >
                    <strong>{p.name}</strong>
                    <span>{p.sub}</span>
                  </button>
                ))}
              </div>

              <div className="brutal-input">
                <label>
                  Monthly Spotify streams
                  <span className="val tabular">{fmtN(streams)}</span>
                </label>
                <input type="range" min={10_000} max={100_000_000} step={10_000}
                       value={streams} onChange={e => setStreams(Number(e.target.value))} />
                <div className="brutal-input__range">
                  <span>10K</span><span>100M</span>
                </div>
              </div>

              <div className="brutal-input">
                <label>Distribution</label>
                <div className="brutal-deal">
                  {(Object.keys(DEAL) as DealKind[]).map(k => (
                    <button
                      key={k}
                      className={'brutal-deal__opt' + (deal === k ? ' is-on' : '')}
                      onClick={() => setDeal(k)}
                    >
                      <strong>{DEAL[k].label}</strong>
                      <span>{DEAL[k].sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="brutal-input brutal-input--num">
                <label>
                  Merch sales / month <span className="hint">USD</span>
                </label>
                <input
                  inputMode="numeric"
                  value={merch.toLocaleString()}
                  onChange={e => setMerch(parseInt(e.target.value.replace(/[^\d]/g, '')) || 0)}
                />
              </div>

              <div className="brutal-input brutal-input--num">
                <label>
                  Sync placements / year <span className="hint">avg ${SYNC_AVG_PLACEMENT.toLocaleString()} each</span>
                </label>
                <input
                  inputMode="numeric"
                  value={sync}
                  onChange={e => setSync(parseInt(e.target.value.replace(/[^\d]/g, '')) || 0)}
                />
              </div>

              <div className="brutal-input brutal-input--num">
                <label>
                  Tour gross / year <span className="hint">USD</span>
                </label>
                <input
                  inputMode="numeric"
                  value={tour.toLocaleString()}
                  onChange={e => setTour(parseInt(e.target.value.replace(/[^\d]/g, '')) || 0)}
                />
              </div>
            </div>
          </div>

          {/* BREAKDOWN column */}
          <div className="brutal-output">
            <div className="brutal-card">
              <h2 className="brutal-section-h">Where the money goes</h2>
              <p className="brutal-section-sub">Every dollar of ecosystem revenue, traced through the supply chain.</p>

              <div className="brutal-bar" aria-hidden>
                <Slice label="Spotify"      val={r.spotifyKeeps}  total={r.totalGross} kind="middleman" />
                {r.labelKeeps  > 0 && <Slice label="Label"        val={r.labelKeeps}    total={r.totalGross} kind="middleman" />}
                {r.distroKeeps > 0 && <Slice label="Aggregator"   val={r.distroKeeps}   total={r.totalGross} kind="middleman" />}
                {r.syncAgent   > 0 && <Slice label="Sync agent"   val={r.syncAgent}     total={r.totalGross} kind="middleman" />}
                {r.merchPlatform > 0 && <Slice label="Merch platform" val={r.merchPlatform} total={r.totalGross} kind="middleman" />}
                {r.tourAgent   > 0 && <Slice label="Booking agent" val={r.tourAgent}    total={r.totalGross} kind="middleman" />}
                {r.managerKeeps > 0 && <Slice label="Manager"     val={r.managerKeeps}  total={r.totalGross} kind="middleman" />}
                <Slice label="Tax"          val={r.taxKeeps}      total={r.totalGross} kind="middleman" />
                <Slice label="Artist"       val={r.artistTakeHome} total={r.totalGross} kind="artist" />
              </div>

              <ul className="brutal-rows">
                <Row label="Total ecosystem revenue (gross)"      val={r.totalGross} />
                <Row label="Spotify takes"                         val={r.spotifyKeeps} muted />
                {r.labelKeeps > 0 && <Row label="Label takes"      val={r.labelKeeps}   muted />}
                {r.distroKeeps > 0 && <Row label="Aggregator takes"  val={r.distroKeeps}  muted />}
                {r.syncAgent > 0 && <Row label="Sync agent takes" val={r.syncAgent}    muted />}
                {r.merchPlatform > 0 && <Row label="Merch platform takes" val={r.merchPlatform} muted />}
                {r.tourAgent > 0 && <Row label="Booking agent takes" val={r.tourAgent}  muted />}
                {r.managerKeeps > 0 && <Row label="Manager takes" val={r.managerKeeps} muted />}
                <Row label="Income tax (effective)"                val={r.taxKeeps}     muted />
                <Row label="Artist take-home"                      val={r.artistTakeHome} highlight />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SHARE & FOOTNOTES ───────────────────────────────────────────── */}
      <section className="brutal-share">
        <div className="wrap brutal-share__inner">
          <div className="brutal-share__card">
            <div>
              <h3>Share the brutal number</h3>
              <p>Your link replays the exact inputs. Send it to an artist, a manager, anyone who deserves to see this.</p>
            </div>
            <div className="brutal-share__btns">
              <button onClick={copyLink} className={'btn btn-ghost' + (copied ? ' is-copied' : '')}>
                {copied ? 'Copied ✓' : 'Copy link'}
              </button>
              <button onClick={tweetLink} className="btn btn-mint">Post to X</button>
            </div>
          </div>

          <details className="brutal-foot">
            <summary>How the math is built</summary>
            <ul>
              <li>Spotify per-stream payout: <strong>${PER_STREAM_USD.toFixed(3)}</strong> (publicly reported average).</li>
              <li>Spotify keeps <strong>{(SPOTIFY_CUT * 100).toFixed(0)}%</strong> of subscription revenue (Spotify Loud &amp; Clear).</li>
              <li>Major label keeps <strong>{(LABEL_CUT_OF_ROYALTY * 100).toFixed(0)}%</strong> of the artist royalty pool on standard recording deals (industry average across catalogs).</li>
              <li>Aggregator/distro: <strong>{(INDIE_DISTRO_CUT * 100).toFixed(0)}%</strong> blended (Distrokid/CDBaby/Tunecore mid-tier).</li>
              <li>Manager <strong>{(MANAGER_CUT * 100).toFixed(0)}%</strong>, sync agent <strong>{(SYNC_AGENT_CUT * 100).toFixed(0)}%</strong>, booking <strong>{(TOUR_AGENT_CUT * 100).toFixed(0)}%</strong>, merch platform <strong>{(MERCH_PLATFORM_CUT * 100).toFixed(0)}%</strong> (industry standard ranges).</li>
              <li>US effective income tax assumed <strong>{(TAX_EFFECTIVE * 100).toFixed(0)}%</strong>.</li>
              <li>This calculator is illustrative only. It does not model VAYLA fees, token returns, protocol performance, or guaranteed outcomes.</li>
              <li>Real deals, payout rates, taxes and expenses vary materially by territory, contract and platform.</li>
            </ul>
          </details>
        </div>
      </section>
    </main>
  );
}

function readURL(): Inputs {
  if (typeof window === 'undefined') return defaults();
  const p = new URLSearchParams(window.location.search);
  return {
    streams: clamp(parseInt(p.get('s') || '') || 5_000_000, 10_000, 100_000_000),
    deal:    (p.get('d') as DealKind) || 'major',
    merch:   parseInt(p.get('m') || '') || 6_000,
    sync:    parseInt(p.get('y') || '') || 4,
    tour:    parseInt(p.get('t') || '') || 80_000,
  };
}
function defaults(): Inputs { return { streams: 5_000_000, deal: 'major', merch: 6_000, sync: 4, tour: 80_000 }; }
function clamp(n: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, n)); }

function Slice({ label, val, total, kind }: { label: string; val: number; total: number; kind: 'middleman' | 'artist' }) {
  const pct = total > 0 ? (val / total) * 100 : 0;
  if (pct < 0.4) return null;
  return (
    <motion.div
      className={'brutal-bar__slice brutal-bar__slice--' + kind}
      style={{ width: pct + '%' }}
      initial={{ width: 0 }}
      animate={{ width: pct + '%' }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      title={`${label}: ${fmtUSD(val)} (${pct.toFixed(1)}%)`}
    >
      {pct > 5 && <span>{label} <em>{pct.toFixed(0)}%</em></span>}
    </motion.div>
  );
}

function Row({ label, val, muted, highlight }: { label: string; val: number; muted?: boolean; highlight?: boolean }) {
  return (
    <li className={'brutal-row' + (muted ? ' is-muted' : '') + (highlight ? ' is-highlight' : '')}>
      <span>{label}</span>
      <span className="tabular"><Counter value={val} format={n => fmtUSD(n)} /></span>
    </li>
  );
}
