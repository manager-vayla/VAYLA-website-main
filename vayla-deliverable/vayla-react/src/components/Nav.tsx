import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { VAYLA_EXTERNAL } from '@/lib/externalLinks';

const LINKS: [string, string, string?][] = [
  ['/', 'Home', '__home__'],
  ['/vaults', 'Vaults', 'vaults'],
  ['/token', 'Token'],
  ['/dashboard', 'Dashboard', 'dashboard'],
  ['/marketplace', 'Marketplace'],
  ['/ai', 'AI'],
  ['/whitepaper', 'Whitepaper'],
];

const HOME_SECTIONS = ['thesis', 'dashboard', 'vaults', 'mechanism', 'token', 'road'];

/** Public navigation. Wallet authentication is not required for this deployment. */
export function Nav() {
  const { pathname } = useLocation();
  const onHome = pathname === '/' || pathname === '';
  const activeSection = useScrollSpy(onHome ? HOME_SECTIONS : []);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  function handleHomeNav(e: React.MouseEvent) {
    setOpen(false);
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  useEffect(() => {
    if (!menuOpen) return;
    function onDoc(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav className="nav" id="nav">
      <Link to="/" className="nav-brand" onClick={handleHomeNav} aria-label="VAYLA home"><Logo size={80} /></Link>

      <div className={'nav-links' + (open ? ' is-open' : '')}>
        {LINKS.map(([to, label, sectionId]) => {
          const isHomeLink = to === '/';
          const routeActive = isHomeLink
            ? onHome && !activeSection
            : pathname === to || pathname.startsWith(to + '/');
          const sectionActive = !isHomeLink && onHome && sectionId && sectionId === activeSection;
          const isActive = routeActive || sectionActive;
          return (
            <NavLink
              key={to}
              to={to}
              onClick={isHomeLink ? handleHomeNav : () => setOpen(false)}
              className={() => 'nav-link' + (isActive ? ' is-active' : '')}
              end={isHomeLink}
            >
              {label}
            </NavLink>
          );
        })}
      </div>

      <div className="nav-cta-cluster">
        <div className="nav-menu" ref={menuRef}>
          <button
            type="button"
            className={'nav-menu-trigger' + (menuOpen ? ' is-open' : '')}
            aria-label="Quick menu"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(value => !value)}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <circle cx="10" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3.6 17c.5-3 3.3-5 6.4-5s5.9 2 6.4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="15.5" cy="4.5" r="1.6" fill="currentColor" />
            </svg>
          </button>
          {menuOpen && (
            <div className="nav-menu-panel" role="menu">
              <Link to="/creator" className="nav-menu-item" role="menuitem">
                <span className="nav-menu-item__body"><strong>For creators</strong><span>Open the creator preview</span></span>
              </Link>
              <Link to="/dashboard" className="nav-menu-item" role="menuitem">
                <span className="nav-menu-item__body"><strong>Dashboard preview</strong><span>Public data availability</span></span>
              </Link>
              <Link to="/start" className="nav-menu-item" role="menuitem">
                <span className="nav-menu-item__body"><strong>New here?</strong><span>Guide for first-time fans</span></span>
              </Link>
              <Link to="/calculator" className="nav-menu-item" role="menuitem">
                <span className="nav-menu-item__body"><strong>Public calculator</strong><span>Educational estimates only</span></span>
              </Link>
              <div className="nav-menu-divider" aria-hidden />
              <span className="nav-menu-heading" role="presentation">Official sources</span>
              <a href={VAYLA_EXTERNAL.linkHub} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem"><span className="nav-menu-item__body"><strong>Docs &amp; link hub</strong></span></a>
              <a href={VAYLA_EXTERNAL.githubOrg} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem"><span className="nav-menu-item__body"><strong>GitHub</strong></span></a>
              <a href={VAYLA_EXTERNAL.coinGecko} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem"><span className="nav-menu-item__body"><strong>CoinGecko</strong></span></a>
              <a href={VAYLA_EXTERNAL.bscscanToken} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem"><span className="nav-menu-item__body"><strong>BscScan | token</strong></span></a>
              <a href={VAYLA_EXTERNAL.twitter} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem"><span className="nav-menu-item__body"><strong>X (Twitter)</strong></span></a>
              <div className="nav-menu-divider" aria-hidden />
              <Link to="/legal" className="nav-menu-item nav-menu-item--small" role="menuitem"><span className="nav-menu-item__body"><strong>Legal &amp; docs</strong></span></Link>
              <a href={VAYLA_EXTERNAL.contact} className="nav-menu-item nav-menu-item--small" role="menuitem"><span className="nav-menu-item__body"><strong>Contact</strong></span></a>
            </div>
          )}
        </div>

        <Link to="/dashboard" className="nav-cta" title="Open public dashboard preview">
          <span className="nav-cta-label">Dashboard Preview</span>
        </Link>
        <button type="button" className="nav-burger" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(value => !value)}><span /></button>
      </div>
    </nav>
  );
}
