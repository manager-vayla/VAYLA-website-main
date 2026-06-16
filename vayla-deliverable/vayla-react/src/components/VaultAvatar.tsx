import { useMemo } from 'react';

interface Props {
  creator: string;
  color: string;
  size?: number;
  /** show the small mint "live" dot in the corner */
  liveDot?: boolean;
  className?: string;
}

/* Tiny stable hash so the same creator always gets the same generated details
   (rotation, accent secondary, pattern offset). Not crypto, just consistent. */
function hash(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i);
  return h >>> 0;
}

/* Pick a contrasting accent that pairs with the creator color but isn't a dupe.
   Cycles through the existing brand palette so colors stay on-system. */
const ACCENTS = ['#9B7BFF', '#F2C661', '#B7E5FF', '#FF6B6B', '#4FE3C2', '#70F3D8'];
function accentFor(creator: string, base: string) {
  let pick = ACCENTS[hash(creator) % ACCENTS.length];
  if (pick.toUpperCase() === base.toUpperCase()) {
    pick = ACCENTS[(hash(creator) + 1) % ACCENTS.length];
  }
  return pick;
}

export function VaultAvatar({ creator, color, size = 44, liveDot = false, className }: Props) {
  const seed = useMemo(() => hash(creator), [creator]);
  const accent = useMemo(() => accentFor(creator, color), [creator, color]);
  const initial = (creator || '?').trim().charAt(0).toUpperCase();
  // Deterministic-but-varied details
  const rot = ((seed % 60) - 30) * 0.5;        // ±15° subtle tilt on the bg pattern
  const dotShift = ((seed >> 4) % 100) / 100;  // 0..1, moves the corner accent
  const ringScale = 0.78 + ((seed >> 7) % 20) / 100; // 0.78..0.97 inner ring radius
  const id = (seed.toString(36) + 'v').slice(-6);

  return (
    <span
      className={'v-avatar' + (className ? ' ' + className : '')}
      style={{ width: size, height: size }}
      aria-label={creator}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
        <defs>
          <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={color} stopOpacity="1" />
            <stop offset="0.55" stopColor={color} stopOpacity="0.92" />
            <stop offset="1" stopColor="#0E1A16" stopOpacity="1" />
          </linearGradient>
          <linearGradient id={`accent-${id}`} x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor={accent} stopOpacity="0.55" />
            <stop offset="1" stopColor={accent} stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`hi-${id}`} cx="28%" cy="22%" r="55%">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="0.6" stopColor="#FFFFFF" stopOpacity="0.06" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <pattern id={`grid-${id}`} width="14" height="14" patternUnits="userSpaceOnUse"
                   patternTransform={`rotate(${rot})`}>
            <path d="M 14 0 L 0 0 0 14" fill="none" stroke="#0A1310" strokeWidth="0.4" opacity="0.35" />
          </pattern>
          <clipPath id={`clip-${id}`}>
            <rect x="2" y="2" width="96" height="96" rx="22" />
          </clipPath>
        </defs>

        {/* base tile */}
        <rect x="2" y="2" width="96" height="96" rx="22" fill={`url(#bg-${id})`} />

        {/* clip the decorative layers to the rounded tile */}
        <g clipPath={`url(#clip-${id})`}>
          {/* accent diagonal wash from the secondary palette color */}
          <rect x="2" y="2" width="96" height="96" fill={`url(#accent-${id})`} opacity="0.7" />
          {/* faint grid texture */}
          <rect x="-20" y="-20" width="140" height="140" fill={`url(#grid-${id})`} />
          {/* inner concentric arc, decorative ring */}
          <circle
            cx="50" cy="52" r={32 * ringScale}
            fill="none"
            stroke="#0A1310" strokeOpacity="0.22" strokeWidth="0.9"
            strokeDasharray="1.5 3.5"
          />
          {/* small corner accent dot */}
          <circle
            cx={78 + dotShift * 6}
            cy={20 + dotShift * 4}
            r="2.4"
            fill={accent}
            opacity="0.85"
          />
          {/* upper-left specular highlight */}
          <rect x="2" y="2" width="96" height="96" fill={`url(#hi-${id})`} />
        </g>

        {/* hairline border */}
        <rect x="2.5" y="2.5" width="95" height="95" rx="21.5"
              fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />

        {/* serif italic initial, matches the rest of the site's "em" treatment */}
        <text
          x="50" y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Instrument Serif', Georgia, serif"
          fontStyle="italic"
          fontSize="50"
          fontWeight="400"
          fill="#0A1310"
          opacity="0.92"
        >{initial}</text>
      </svg>
      {liveDot && <span className="v-avatar__live" aria-hidden />}
    </span>
  );
}
