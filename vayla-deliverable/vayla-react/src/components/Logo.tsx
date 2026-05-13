import { useId } from 'react';

export function Logo({ size = 26, withWord = true }: { size?: number; withWord?: boolean }) {
  const id = useId().replace(/:/g, '');
  return (
    <div className="inline-flex items-center gap-2.5">
      <span
        className="grid place-items-center rounded-[10px] relative"
        style={{
          width: size + 8, height: size + 8,
          background: 'radial-gradient(circle at 30% 25%, rgba(112,243,216,0.14), rgba(112,243,216,0) 70%)',
          filter: 'drop-shadow(0 4px 14px rgba(31,184,154,0.25))',
        }}
      >
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id={`g-${id}`} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#B6FFE9" />
              <stop offset="0.5" stopColor="#4DE6C0" />
              <stop offset="1" stopColor="#1FB89A" />
            </linearGradient>
            <radialGradient id={`hi-${id}`} cx="35%" cy="30%" r="55%">
              <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.65" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <filter id={`goo-${id}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.3" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" />
            </filter>
          </defs>
          <g filter={`url(#goo-${id})`} fill={`url(#g-${id})`}>
            <circle cx="8.5" cy="9" r="4.4" />
            <circle cx="23.5" cy="9" r="4.4" />
            <circle cx="16" cy="23" r="3.7" />
            <ellipse cx="12.2" cy="16" rx="2.1" ry="6" transform="rotate(-30 12.2 16)" />
            <ellipse cx="19.8" cy="16" rx="2.1" ry="6" transform="rotate(30 19.8 16)" />
          </g>
          <circle cx="7" cy="7.5" r="1.7" fill={`url(#hi-${id})`} />
          <circle cx="22" cy="7.5" r="1.7" fill={`url(#hi-${id})`} />
          <circle cx="14.8" cy="21.6" r="1.2" fill={`url(#hi-${id})`} />
        </svg>
      </span>
      {withWord && (
        <span
          className="font-bold text-[15px] tracking-[0.18em]"
          style={{
            background: 'linear-gradient(180deg, #EAFFF8 0%, #9CFBE4 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          VAYLA
        </span>
      )}
    </div>
  );
}
