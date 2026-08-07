import { useEffect, useId, useState } from 'react';

type Choice = 'all' | 'essential' | null;

const STORAGE_KEY = 'vayla:cookie-consent:v1';

function read(): Choice {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'all' || value === 'essential' ? value : null;
  } catch {
    return null;
  }
}

function write(choice: Exclude<Choice, null>) {
  try { localStorage.setItem(STORAGE_KEY, choice); } catch { /* privacy storage can be unavailable */ }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const id = useId().replace(/:/g, '');

  useEffect(() => {
    if (read() !== null) return;
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  function accept(choice: Exclude<Choice, null>) {
    write(choice);
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className={`cookie-consent${expanded ? ' is-expanded' : ''}`} role="dialog" aria-modal="false" aria-labelledby={`cc-h-${id}`}>
      <div className="cookie-consent__glow" aria-hidden="true" />
      <div className="cookie-consent__inner">
        <div className="cookie-consent__head">
          <img src="/vayla_logo_new.png" alt="" className="cookie-consent__mark" width={44} height={44} aria-hidden draggable={false} />
          <div className="cookie-consent__title">
            <span className="cookie-consent__eyebrow">privacy preferences</span>
            <h3 id={`cc-h-${id}`}>We use a few cookies.</h3>
          </div>
        </div>

        <p className="cookie-consent__body">
          Essential cookies keep consent preferences and route state working. Optional analytics help us improve the public site. You choose what to allow.
        </p>

        {expanded && (
          <div className="cookie-consent__rows">
            <div className="cookie-consent__row is-locked">
              <div>
                <strong>Essential</strong>
                <span>Consent preference and routing. Always on.</span>
              </div>
              <span className="cookie-consent__pill">Required</span>
            </div>
            <label className="cookie-consent__row">
              <div>
                <strong>Analytics</strong>
                <span>Anonymous page usage data to improve navigation. No wallet or address tracking.</span>
              </div>
              <span className="cookie-consent__toggle">
                <input type="checkbox" checked={analytics} onChange={event => setAnalytics(event.target.checked)} />
                <span className="cookie-consent__track" />
              </span>
            </label>
            <label className="cookie-consent__row">
              <div>
                <strong>Marketing</strong>
                <span>Off by default. Used only for optional project updates.</span>
              </div>
              <span className="cookie-consent__toggle">
                <input type="checkbox" checked={marketing} onChange={event => setMarketing(event.target.checked)} />
                <span className="cookie-consent__track" />
              </span>
            </label>
          </div>
        )}

        <div className="cookie-consent__actions">
          <button type="button" className="cookie-consent__btn cookie-consent__btn--ghost" onClick={() => accept('essential')}>
            Reject optional
          </button>
          {!expanded ? (
            <button type="button" className="cookie-consent__btn cookie-consent__btn--text" onClick={() => setExpanded(true)}>
              Customize
            </button>
          ) : (
            <button type="button" className="cookie-consent__btn cookie-consent__btn--text" onClick={() => accept(analytics || marketing ? 'all' : 'essential')}>
              Save choices
            </button>
          )}
          <button type="button" className="cookie-consent__btn cookie-consent__btn--mint" onClick={() => accept('all')}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
