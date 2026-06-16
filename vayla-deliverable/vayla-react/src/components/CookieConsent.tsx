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
          <img src="/vayla_logo_new.png" alt="" className="cookie-consent__mark" width={44} height={44} aria-hidden draggable={false} />
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

