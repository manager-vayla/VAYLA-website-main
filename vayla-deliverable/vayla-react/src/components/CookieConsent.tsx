import { useEffect, useState, useId } from 'react';

type Choice = 'all' | 'essential' | null;

const STORAGE_KEY = 'vayla:cookie-consent:v1';

function read(): Choice {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'all' || v === 'essential' ? v : null;
  } catch { return null; }
}

function write(c: Exclude<Choice, null>) {
  try { localStorage.setItem(STORAGE_KEY, c); } catch { /* ignore */ }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const id = useId().replace(/:/g, '');

  useEffect(() => {
    if (read() === null) {
      const t = setTimeout(() => setOpen(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  function accept(kind: Exclude<Choice, null>) {
    write(kind);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className={`cookie-consent${expanded ? ' is-expanded' : ''}`} role="dialog" aria-labelledby={`cc-h-${id}`}>
      <div className="cookie-consent__glow" aria-hidden="true" />
      <div className="cookie-consent__inner">
        <div className="cookie-consent__head">
          <CookieMark id={id} />
          <div className="cookie-consent__title">
            <span className="cookie-consent__eyebrow">cookie · settlement</span>
            <h3 id={`cc-h-${id}`}>We use a few cookies.</h3>
          </div>
        </div>

        <p className="cookie-consent__body">
          Essential cookies keep wallet sessions and route state working. Optional ones help us understand
          which vaults the most curious eyes click on. Your call.
        </p>

        {expanded && (
          <div className="cookie-consent__rows">
            <div className="cookie-consent__row is-locked">
              <div>
                <strong>Essential</strong>
                <span>Wallet session, routing, anti-CSRF. Always on.</span>
              </div>
              <span className="cookie-consent__pill">Required</span>
            </div>
            <label className="cookie-consent__row">
              <div>
                <strong>Analytics</strong>
                <span>Anonymized vault & page views. No address tracking.</span>
              </div>
              <span className="cookie-consent__toggle">
                <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} />
                <span className="cookie-consent__track" />
              </span>
            </label>
            <label className="cookie-consent__row">
              <div>
                <strong>Marketing</strong>
                <span>Off by default. Used only if you opt in for drop alerts.</span>
              </div>
              <span className="cookie-consent__toggle">
                <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} />
                <span className="cookie-consent__track" />
              </span>
            </label>
          </div>
        )}

        <div className="cookie-consent__actions">
          <button className="cookie-consent__btn cookie-consent__btn--ghost" onClick={() => accept('essential')}>
            Reject optional
          </button>
          {!expanded ? (
            <button className="cookie-consent__btn cookie-consent__btn--text" onClick={() => setExpanded(true)}>
              Customize
            </button>
          ) : (
            <button
              className="cookie-consent__btn cookie-consent__btn--text"
              onClick={() => accept(analytics || marketing ? 'all' : 'essential')}
            >
              Save choices
            </button>
          )}
          <button className="cookie-consent__btn cookie-consent__btn--mint" onClick={() => accept('all')}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

/* Metaball mark, same construction as the VAYLA logo, scaled up to read as a
   "cookie" cluster. Uses a goo filter so the three nodes fuse into one shape. */
function CookieMark({ id }: { id: string }) {
  return (
    <span className="cookie-consent__mark" aria-hidden="true">
      <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id={`cc-g-${id}`} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#B6FFE9" />
            <stop offset="0.5" stopColor="#4DE6C0" />
            <stop offset="1" stopColor="#1FB89A" />
          </linearGradient>
          <radialGradient id={`cc-hi-${id}`} cx="35%" cy="30%" r="55%">
            <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>
          <filter id={`cc-goo-${id}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.3" />
            <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" />
          </filter>
        </defs>
        <g filter={`url(#cc-goo-${id})`} fill={`url(#cc-g-${id})`}>
          <circle cx="8.5" cy="9" r="4.4" />
          <circle cx="23.5" cy="9" r="4.4" />
          <circle cx="16" cy="23" r="3.7" />
          <ellipse cx="12.2" cy="16" rx="2.1" ry="6" transform="rotate(-30 12.2 16)" />
          <ellipse cx="19.8" cy="16" rx="2.1" ry="6" transform="rotate(30 19.8 16)" />
        </g>
        {/* Highlights, same as the brand logo, no dark chips */}
        <circle cx="7" cy="7.5" r="1.7" fill={`url(#cc-hi-${id})`} />
        <circle cx="22" cy="7.5" r="1.7" fill={`url(#cc-hi-${id})`} />
        <circle cx="14.8" cy="21.6" r="1.2" fill={`url(#cc-hi-${id})`} />
      </svg>
    </span>
  );
}
