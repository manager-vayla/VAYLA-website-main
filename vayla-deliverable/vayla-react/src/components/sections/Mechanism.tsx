import { useEffect, useRef, useState } from 'react';

const FRAMES = [
  { num: '01 / FAN', h: <>A fan joins <em>VAYLA Boost.</em></>, p: 'One flow. Participate with $VAYLA in a campaign you believe in. Non-custodial, smart-contract enforced, lockups optional. Direct fan-to-artist engagement.' },
  { num: '02 / ARENA', h: <>VAYLA Arena <em>surfaces</em> music IP.</>, p: 'Fans discover artists through AI-assisted discovery, voting, and community signals. Submit tracks via YouTube links and support emerging talent.' },
  { num: '03 / ARTIST', h: <>Artists <em>grow.</em></>, p: 'Streams, drops, sync licensing, merch, and festival participation feed campaign outcomes. Revenue and rewards route on-chain with transparent rules.' },
  { num: '04 / REWARDS', h: <>Rewards flow to <em>participants.</em></>, p: 'Ecosystem utility and campaign rewards distribute to engaged fans. Multipliers may compound for sustained support. Early participation is recognized—not guaranteed returns.' },
];

export function Mechanism() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    function onScroll() {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const t = total > 0 ? scrolled / total : 0;
      setFill(t * 100);
      const idx = Math.min(FRAMES.length - 1, Math.floor(t * FRAMES.length));
      setActive(idx);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function jump(i: number) {
    const el = trackRef.current;
    if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    const target = el.offsetTop + (i / FRAMES.length) * total + 4;
    window.scrollTo({ top: target, behavior: 'smooth' });
  }

  return (
    <section className="pin" id="mechanism">
      <div className="wrap reveal" style={{ paddingTop: 120, paddingBottom: 40 }}>
        <div className="section-head">
          <span className="section-eyebrow"><span className="num">04</span> Mechanism</span>
          <h2 className="section-title">How the <em>protocol</em> works.</h2>
          <p className="section-deck">Scroll through the four phases. The visual on the right updates as you go.</p>
        </div>
      </div>

      <div className="pin-track" ref={trackRef}>
        <div className="pin-stage">
          <div className="pin-frames">
            {FRAMES.map((f, i) => (
              <div key={i} className={`pin-frame${i === active ? ' is-active' : ''}`} data-frame={i}>
                <div className="num">{f.num}</div>
                <h3>{f.h}</h3>
                <p>{f.p}</p>
              </div>
            ))}
          </div>

          <div className="pin-art">
            <ArtFan       active={active === 0} />
            <ArtVault     active={active === 1} />
            <ArtCreator   active={active === 2} />
            <ArtYield     active={active === 3} />
          </div>
        </div>
      </div>

      <div className="pin-rail" aria-hidden="true">
        <div className="fill" style={{ width: fill + '%' }} />
      </div>

      <div className="pin-dots">
        {FRAMES.map((_, i) => (
          <span key={i} className={`pin-dot${i === active ? ' is-on' : ''}`} onClick={() => jump(i)} />
        ))}
      </div>
    </section>
  );
}

function ArtFan({ active }: { active: boolean }) {
  // Fan dots are clustered around the outer ring (r≈200). Each one streams a
  // particle inward toward the central VAULT to visualize "fans depositing".
  const fans: [number, number, number, number][] = [
    [120,180,2.0,4],[480,200,2.4,4],[160,380,2.8,4],[450,400,2.2,4],
    [80,270,2.6,4],[520,270,3.0,4],[300,100,2.3,4],[300,440,2.7,4],
    [220,120,2.1,3],[380,120,2.5,3],[220,420,2.9,3],[380,420,2.4,3],
  ];
  return (
    <svg className={`pin-art-svg${active ? ' is-active' : ''}`} data-art="0" viewBox="0 0 600 540" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="fanCore">
          <stop offset="0%"  stopColor="#70F3D8" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#1FB89A" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1FB89A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft breathing halo behind the center */}
      <circle className="pin-halo" cx="300" cy="270" r="90" fill="url(#fanCore)" />

      {/* Rotating concentric rings (rotation comes from CSS .ha-rings) */}
      <g className="ha-rings" stroke="#70F3D8" strokeWidth="1" fill="none" opacity="0.4">
        <circle cx="300" cy="270" r="200" strokeDasharray="2 6" />
        <circle cx="300" cy="270" r="160" strokeDasharray="1 10" opacity="0.55" />
        <circle cx="300" cy="270" r="120" />
      </g>

      {/* Counter-rotating inner ring for parallax */}
      <g style={{ transformOrigin: '300px 270px', animation: 'pinRingsSpin 90s linear infinite reverse' }}
         stroke="#70F3D8" strokeWidth="0.8" fill="none" opacity="0.25">
        <circle cx="300" cy="270" r="80" strokeDasharray="3 8" />
      </g>

      {/* Fan dots: pulse + per-dot inward photon trail */}
      <g>
        {fans.map(([x, y, dur, r], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={r} fill="#70F3D8">
              <animate attributeName="opacity" values={r === 4 ? '0.3;1;0.3' : '0.2;0.8;0.2'} dur={`${dur}s`} repeatCount="indefinite" />
              <animate attributeName="r" values={`${r};${r + 1.5};${r}`} dur={`${dur}s`} repeatCount="indefinite" />
            </circle>
            {/* Inward-flowing photon, fan → center */}
            <circle r="2" fill="#9CFBE4" opacity="0">
              <animate attributeName="opacity" values="0;0.95;0.95;0" keyTimes="0;0.15;0.85;1" dur={`${4 + (i % 4)}s`} begin={`${i * 0.35}s`} repeatCount="indefinite" />
              <animateMotion dur={`${4 + (i % 4)}s`} begin={`${i * 0.35}s`} repeatCount="indefinite"
                path={`M${x},${y} L300,270`} />
            </circle>
          </g>
        ))}
      </g>

      {/* Center disc with subtle inward gradient */}
      <circle cx="300" cy="270" r="48" fill="rgba(112,243,216,0.10)" stroke="#70F3D8" strokeWidth="1.3" />
      <text x="300" y="276" textAnchor="middle" fill="#ECF7F4" fontFamily="Bricolage Grotesque" fontSize="32" fontWeight="600" letterSpacing="-0.02em">FAN</text>
      <text x="300" y="300" textAnchor="middle" fill="#98AAA5" fontFamily="Geist Mono" fontSize="11" letterSpacing="0.12em">DEPOSITS</text>
    </svg>
  );
}

function ArtVault({ active }: { active: boolean }) {
  const paths = [
    'M80,80 L280,250', 'M520,80 L320,250', 'M80,460 L280,290',
    'M520,460 L320,290', 'M40,270 L240,270', 'M560,270 L360,270',
  ];
  const durs = [2, 2.3, 2.6, 2.1, 1.9, 2.4];
  return (
    <svg className={`pin-art-svg${active ? ' is-active' : ''}`} data-art="1" viewBox="0 0 600 540" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="vaultCore">
          <stop offset="0%"  stopColor="#70F3D8" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#70F3D8" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle className="pin-halo" cx="300" cy="270" r="120" fill="url(#vaultCore)" />
      <g stroke="#70F3D8" strokeWidth="1.4" fill="none" opacity="0.55">
        {paths.map((d, i) => (
          <path key={i} d={d} strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" values="0;-50" dur={`${durs[i]}s`} repeatCount="indefinite" />
          </path>
        ))}
      </g>
      <g>
        <rect x="240" y="230" width="120" height="80" rx="14" fill="rgba(112,243,216,0.12)" stroke="#70F3D8" strokeWidth="2" />
        <rect x="240" y="230" width="120" height="80" rx="14" fill="none" stroke="#70F3D8" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="width" values="120;160;120" dur="3.6s" repeatCount="indefinite" />
          <animate attributeName="height" values="80;110;80" dur="3.6s" repeatCount="indefinite" />
          <animate attributeName="x" values="240;220;240" dur="3.6s" repeatCount="indefinite" />
          <animate attributeName="y" values="230;215;230" dur="3.6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="3.6s" repeatCount="indefinite" />
        </rect>
        <text x="300" y="270" textAnchor="middle" fill="#70F3D8" fontFamily="Bricolage Grotesque" fontSize="24" fontWeight="700">VAULT</text>
        <text x="300" y="290" textAnchor="middle" fill="#98AAA5" fontFamily="Geist Mono" fontSize="10" letterSpacing="0.12em">$48.21M TVL</text>
      </g>
      <g fill="#70F3D8">
        {paths.map((d, i) => (
          <circle key={i} r="3"><animateMotion dur={`${durs[i]}s`} repeatCount="indefinite" path={d} /></circle>
        ))}
      </g>
    </svg>
  );
}

function ArtCreator({ active }: { active: boolean }) {
  return (
    <svg className={`pin-art-svg${active ? ' is-active' : ''}`} data-art="2" viewBox="0 0 600 540" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="creatorCore">
          <stop offset="0%"  stopColor="#9B7BFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#9B7BFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle className="pin-halo" cx="300" cy="270" r="100" fill="url(#creatorCore)" />
      <rect x="60" y="230" width="120" height="80" rx="14" fill="rgba(112,243,216,0.12)" stroke="#70F3D8" strokeWidth="1.5" />
      <text x="120" y="276" textAnchor="middle" fill="#70F3D8" fontFamily="Bricolage Grotesque" fontSize="20" fontWeight="700">VAULT</text>
      <circle cx="300" cy="270" r="60" fill="rgba(155,123,255,0.1)" stroke="#9B7BFF" strokeWidth="1.5" />
      <text x="300" y="276" textAnchor="middle" fill="#ECF7F4" fontFamily="Bricolage Grotesque" fontSize="22" fontWeight="600">CREATOR</text>
      {[
        ['STREAMS', '+$24,180 / 24h', 80, 102, 118],
        ['DROPS', '+$8,402 / 24h', 170, 192, 208],
        ['SYNC IP', '+$12,000 / 24h', 260, 282, 298],
        ['MERCH', '+$3,210 / 24h', 350, 372, 388],
      ].map(([label, sub, y, ty1, ty2], i) => (
        <g key={i}>
          <rect x="450" y={y as number} width="120" height="50" rx="8" fill="rgba(242,198,97,0.08)" stroke="#F2C661" strokeWidth="1" />
          <text x="510" y={ty1 as number} textAnchor="middle" fill="#F2C661" fontFamily="Geist Mono" fontSize="10" letterSpacing="0.08em">{label}</text>
          <text x="510" y={ty2 as number} textAnchor="middle" fill="#98AAA5" fontFamily="Geist Mono" fontSize="9">{sub}</text>
        </g>
      ))}
      <g stroke="#F2C661" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.6">
        <path d="M450,105 Q380,180 360,260"><animate attributeName="stroke-dashoffset" values="0;-30" dur="3s" repeatCount="indefinite" /></path>
        <path d="M450,195 L360,265"><animate attributeName="stroke-dashoffset" values="0;-30" dur="3s" repeatCount="indefinite" /></path>
        <path d="M450,285 L360,275"><animate attributeName="stroke-dashoffset" values="0;-30" dur="3s" repeatCount="indefinite" /></path>
        <path d="M450,375 Q380,340 360,290"><animate attributeName="stroke-dashoffset" values="0;-30" dur="3s" repeatCount="indefinite" /></path>
      </g>
      <path d="M240,270 L180,270" stroke="#70F3D8" strokeWidth="2" fill="none">
        <animate attributeName="stroke-dasharray" values="0 60;60 0" dur="2s" repeatCount="indefinite" />
      </path>
      <circle r="3" fill="#F2C661"><animateMotion dur="3s" repeatCount="indefinite" path="M510,105 Q380,180 300,270 L120,270" /></circle>
      <circle r="3" fill="#F2C661"><animateMotion dur="3.3s" repeatCount="indefinite" path="M510,195 L300,270 L120,270" /></circle>
      <circle r="3" fill="#F2C661"><animateMotion dur="3.6s" repeatCount="indefinite" path="M510,285 L300,270 L120,270" /></circle>
    </svg>
  );
}

function ArtYield({ active }: { active: boolean }) {
  const fans = [
    [120,120,'+$42'],[480,120,'+$118'],[120,420,'+$28'],[480,420,'+$67'],
    [80,270,'+$15'],[520,270,'+$210'],[300,80,'+$54'],[300,460,'+$92'],
  ];
  const yieldPreamble = (
    <>
      <defs>
        <radialGradient id="yieldCore">
          <stop offset="0%"  stopColor="#9B7BFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#9B7BFF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle className="pin-halo" cx="300" cy="270" r="160" fill="url(#yieldCore)" />
      {/* Outward expanding ripples */}
      {[0, 1.5, 3].map((delay, i) => (
        <circle key={i} cx="300" cy="270" r="60" fill="none" stroke="#9B7BFF" strokeWidth="1" opacity="0">
          <animate attributeName="r" from="60" to="240" dur="4.5s" begin={`${delay}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.5;0" dur="4.5s" begin={`${delay}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </>
  );
  const lines = [
    { d: 'M260,250 L140,140', dur: 2 },
    { d: 'M340,250 L460,140', dur: 2.2 },
    { d: 'M260,290 L140,400', dur: 2.4 },
    { d: 'M340,290 L460,400', dur: 2.6 },
    { d: 'M240,270 L100,270', dur: 2.1 },
    { d: 'M360,270 L500,270', dur: 2.5 },
    { d: 'M300,230 L300,100', dur: 2.3 },
    { d: 'M300,310 L300,440', dur: 2.7 },
  ];
  return (
    <svg className={`pin-art-svg${active ? ' is-active' : ''}`} data-art="3" viewBox="0 0 600 540" preserveAspectRatio="xMidYMid meet">
      {yieldPreamble}
      <rect x="240" y="230" width="120" height="80" rx="14" fill="rgba(112,243,216,0.15)" stroke="#70F3D8" strokeWidth="2" />
      <text x="300" y="270" textAnchor="middle" fill="#70F3D8" fontFamily="Bricolage Grotesque" fontSize="22" fontWeight="700">VAULT</text>
      <text x="300" y="290" textAnchor="middle" fill="#98AAA5" fontFamily="Geist Mono" fontSize="10">DISTRIBUTING</text>
      {fans.map(([x, y, t], i) => (
        <g key={i}>
          <circle cx={x as number} cy={y as number} r={(x === 520 || x === 480 && y === 120) ? 22 : 20} fill="rgba(155,123,255,0.15)" stroke="#9B7BFF" strokeWidth="1" />
          <text x={x as number} y={(y as number) + 4} textAnchor="middle" fill="#ECF7F4" fontFamily="Geist Mono" fontSize="9">{t}</text>
        </g>
      ))}
      <g stroke="#9B7BFF" strokeWidth="1.2" strokeDasharray="4 4" fill="none" opacity="0.6">
        {lines.map((l, i) => (
          <path key={i} d={l.d}><animate attributeName="stroke-dashoffset" values="0;-30" dur={`${l.dur}s`} repeatCount="indefinite" /></path>
        ))}
      </g>
      <g fill="#9B7BFF">
        {[
          ['M300,270 L120,120', 2], ['M300,270 L480,120', 2.3],
          ['M300,270 L120,420', 2.5], ['M300,270 L480,420', 2.7],
          ['M300,270 L80,270', 2.1], ['M300,270 L520,270', 2.4],
        ].map(([p, d], i) => (
          <circle key={i} r="3"><animateMotion dur={`${d}s`} repeatCount="indefinite" path={p as string} /></circle>
        ))}
      </g>
    </svg>
  );
}
