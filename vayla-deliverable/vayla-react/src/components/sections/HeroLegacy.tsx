import { Link } from 'react-router-dom';

// Char-by-char title, mirrors the original .ch/--i staggered reveal.
function Title() {
  const lines: (string | { em: string })[] = [
    'Fans', 'built', 'the', { em: 'empire.' }, 'BREAK',
    'Now', 'they', 'own', 'it.',
  ];
  let idx = 0;
  return (
    <h1 className="hero-title">
      {lines.map((token, i) => {
        if (token === 'BREAK') return <br key={i} />;
        const text = typeof token === 'string' ? token : token.em;
        const Wrapper = typeof token === 'string'
          ? ({ children }: any) => <span className="word">{children}</span>
          : ({ children }: any) => <em>{children}</em>;
        const space = typeof token === 'string' && lines[i + 1] !== 'BREAK';
        return (
          <span key={i}>
            <Wrapper>
              {text.split('').map((ch) => {
                const el = <span key={idx} className="ch" style={{ ['--i' as any]: idx }}>{ch}</span>;
                idx++;
                return el;
              })}
            </Wrapper>
            {space ? ' ' : null}
          </span>
        );
      })}
    </h1>
  );
}

export function HeroLegacy() {
  return (
    <section className="hero" id="legacy-hero">
      <div className="hero-streaks" aria-hidden="true">
        <span className="hero-streak s1" />
        <span className="hero-streak s2" />
        <span className="hero-streak s3" />
        <span className="hero-streak s4" />
        <span className="hero-streak s5" />
        <span className="hero-streak s6" />
        <span className="hero-streak s7" />
      </div>
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <Title />
            <p className="hero-deck">
              VAYLA is a global Web3 music fandom platform. Fans, artists, and music IP connect through <strong>VAYLA Boost</strong>, AI discovery, voting, rewards, and on-chain participation. <strong>Support artists you believe in—not passive speculation.</strong>
            </p>
            <div className="hero-ctas">
              <Link to="/calculator" className="btn btn-mint">
                Run the Brutal Math
                <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </Link>
              <Link to="/vaults" className="btn btn-ghost">Browse Vaults</Link>
            </div>
            <p className="hero-tease" style={{ marginTop: 18, fontSize: 13, color: 'var(--text-3)', fontFamily: 'var(--mono)', letterSpacing: '0.04em' }}>
              <span style={{ color: 'var(--mint)' }}>Free public tool.</span> See where every $1 fans spend on an artist actually ends up. No wallet required.
            </p>
          </div>

          {/* Hero protocol art */}
          <div className="hero-art" id="heroArt">
            <svg className="hero-art-svg" viewBox="0 0 600 540" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#70F3D8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#70F3D8" stopOpacity="0.1" />
                </linearGradient>
                <radialGradient id="nodeGrad">
                  <stop offset="0%" stopColor="#70F3D8" stopOpacity="1" />
                  <stop offset="60%" stopColor="#70F3D8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#70F3D8" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="centerGrad">
                  <stop offset="0%" stopColor="#70F3D8" />
                  <stop offset="100%" stopColor="#1FB89A" />
                </radialGradient>
              </defs>

              <g stroke="url(#lineGrad)" strokeWidth="1" fill="none" opacity="0.7">
                <line x1="300" y1="270" x2="120" y2="120" strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" from="0" to="-100" dur="6s" repeatCount="indefinite" /></line>
                <line x1="300" y1="270" x2="480" y2="120" strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" from="0" to="-100" dur="7s" repeatCount="indefinite" /></line>
                <line x1="300" y1="270" x2="120" y2="420" strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" from="0" to="-100" dur="8s" repeatCount="indefinite" /></line>
                <line x1="300" y1="270" x2="480" y2="420" strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" from="0" to="-100" dur="9s" repeatCount="indefinite" /></line>
                <line x1="300" y1="270" x2="60"  y2="270" strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" from="0" to="-100" dur="5s" repeatCount="indefinite" /></line>
                <line x1="300" y1="270" x2="540" y2="270" strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" from="0" to="-100" dur="5.5s" repeatCount="indefinite" /></line>
                <line x1="300" y1="270" x2="300" y2="60"  strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" from="0" to="-100" dur="6.5s" repeatCount="indefinite" /></line>
                <line x1="300" y1="270" x2="300" y2="480" strokeDasharray="4 6"><animate attributeName="stroke-dashoffset" from="0" to="-100" dur="7.5s" repeatCount="indefinite" /></line>
                <line x1="120" y1="120" x2="60" y2="270" />
                <line x1="120" y1="120" x2="300" y2="60" />
                <line x1="480" y1="120" x2="540" y2="270" />
                <line x1="480" y1="120" x2="300" y2="60" />
                <line x1="120" y1="420" x2="60" y2="270" />
                <line x1="120" y1="420" x2="300" y2="480" />
                <line x1="480" y1="420" x2="540" y2="270" />
                <line x1="480" y1="420" x2="300" y2="480" />
              </g>

              <g className="ha-nodes">
                {[
                  [120,120,3], [480,120,3.6], [120,420,3.2], [480,420,3.8],
                  [60,270,3.4], [540,270,3.1], [300,60,3.5], [300,480,3.7],
                ].map(([cx, cy, dur], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="20" fill="url(#nodeGrad)" />
                    <circle cx={cx} cy={cy} r="6" fill="#70F3D8">
                      <animate attributeName="r" values="6;9;6" dur={`${dur}s`} repeatCount="indefinite" />
                    </circle>
                  </g>
                ))}
              </g>

              <g>
                <circle cx="300" cy="270" r="48" fill="url(#centerGrad)" opacity="0.95" />
                <circle cx="300" cy="270" r="64" fill="none" stroke="#70F3D8" strokeWidth="1" opacity="0.5">
                  <animate attributeName="r" values="64;88;64" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="300" cy="270" r="64" fill="none" stroke="#70F3D8" strokeWidth="1" opacity="0.5">
                  <animate attributeName="r" values="64;88;64" dur="4s" begin="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" begin="2s" repeatCount="indefinite" />
                </circle>
                <text x="300" y="276" textAnchor="middle" fill="#050706" fontFamily="Bricolage Grotesque" fontWeight="700" fontSize="16" letterSpacing="-0.02em">VAULT</text>
              </g>

              <g>
                <circle r="3" fill="#70F3D8"><animateMotion dur="3s" repeatCount="indefinite" path="M120,120 L300,270" /></circle>
                <circle r="3" fill="#70F3D8"><animateMotion dur="3.3s" repeatCount="indefinite" path="M480,120 L300,270" /></circle>
                <circle r="3" fill="#70F3D8"><animateMotion dur="3.6s" repeatCount="indefinite" path="M120,420 L300,270" /></circle>
                <circle r="3" fill="#70F3D8"><animateMotion dur="3.9s" repeatCount="indefinite" path="M480,420 L300,270" /></circle>
                <circle r="2.5" fill="#9B7BFF"><animateMotion dur="4.2s" repeatCount="indefinite" path="M300,270 L300,60" /></circle>
                <circle r="2.5" fill="#F2C661"><animateMotion dur="4.5s" repeatCount="indefinite" path="M300,270 L60,270" /></circle>
              </g>
            </svg>

            <div className="hero-art-stat s1">
              ACTIVE VAULTS
              <strong className="tabular">1,283</strong>
              <span className="delta">+41 / 24H</span>
            </div>
            <div className="hero-art-stat s2">
              AVG APY (90D)
              <strong>34.7<em>%</em></strong>
              <span className="delta">↑ 4.2 pts</span>
            </div>
            <div className="hero-art-stat s3">
              TOTAL DEPOSITS
              <strong className="tabular">$48.21M</strong>
              <span className="delta">↑ $187K / HR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
