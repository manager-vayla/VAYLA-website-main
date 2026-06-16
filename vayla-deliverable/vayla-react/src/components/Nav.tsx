import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { Logo } from './Logo';
import { ConnectKitButton, useModal } from 'connectkit';
import { fmtAddr } from '@/lib/format';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { VAYLA_EXTERNAL } from '@/lib/externalLinks';

/* Nav primary destinations. Home is explicit (left of Vaults) even though the
 * brand logo also routes there, because users expect a "Home" word to click.
 * Start/Creators are reachable via the role dropdown + footer + hero CTAs. */
const LINKS: [string, string, string?][] = [
  ['/',           'Home',       '__home__'],
  ['/vaults',     'Vaults',     'vaults'],
  ['/token',      'Token'],
  ['/dashboard',  'Dashboard',  'dashboard'],
  ['/marketplace','Marketplace'],
  ['/ai',         'AI'],
  ['/whitepaper', 'Whitepaper'],
];

const HOME_SECTIONS = ['thesis', 'dashboard', 'vaults', 'mechanism', 'token', 'road'];

export function Nav() {
  const { pathname } = useLocation();
  const onHome = pathname === '/' || pathname === '';
  const activeSection = useScrollSpy(onHome ? HOME_SECTIONS : []);
  const [open, setOpen] = useState(false);
  const { disconnect } = useDisconnect();
  const [hoverDisconnect, setHoverDisconnect] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { address } = useAccount();
  const isWalletConnected = !!address;
  const { setOpen: setWalletModalOpen } = useModal();

  function openSignIn() {
    setMenuOpen(false);
    setWalletModalOpen(true);
  }

  // Clicking the logo OR the Home link while already on home scrolls to the
  // hero instead of being a no-op (router doesn't re-navigate to the same path).
  function handleHomeNav(e: React.MouseEvent) {
    setOpen(false);
    if (onHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Close the role/help dropdown on outside click and on Escape.
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

  // Close the dropdown when navigating to a new route.
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav className="nav" id="nav">
      <Link to="/" className="nav-brand" onClick={handleHomeNav} aria-label="VAYLA home"><Logo size={80} /></Link>

      <div className={'nav-links' + (open ? ' is-open' : '')}>
        {LINKS.map(([to, label, sectionId]) => {
          const isHomeLink = to === '/';
          // Home is active only on the home route AND when not scrolled into
          // any tracked section yet (i.e. still looking at the hero).
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
        {/* Quick-access dropdown: creator portal + newcomer onboarding + legal.
            These are important destinations that don't belong in the primary
            nav pill (different user types or ancillary). One icon, one click. */}
        <div className="nav-menu" ref={menuRef}>
          <button
            type="button"
            className={'nav-menu-trigger' + (menuOpen ? ' is-open' : '')}
            aria-label="Quick menu"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <circle cx="10" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.6" />
              <path d="M3.6 17c0.5-3 3.3-5 6.4-5s5.9 2 6.4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="15.5" cy="4.5" r="1.6" fill="currentColor" />
            </svg>
          </button>
          {menuOpen && (
            <div className="nav-menu-panel" role="menu">
              <Link to="/creator" className="nav-menu-item" role="menuitem">
                <span className="nav-menu-item__icon" aria-hidden>
                  {/* Pencil icon, slanted, with tip + body + eraser */}
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M14 3.5l2.5 2.5L7 15.5l-3.5 1 1-3.5L14 3.5z"
                          stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M12.5 5l2.5 2.5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M4.5 13l2.5 2.5" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <span className="nav-menu-item__body">
                  <strong>For creators</strong>
                  <span>Open your Vault, get fan capital</span>
                </span>
              </Link>
              {isWalletConnected ? (
                <Link to="/dashboard" className="nav-menu-item" role="menuitem">
                  <span className="nav-menu-item__icon" aria-hidden>
                    {/* User/account icon: head + shoulders */}
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M3.5 17c0.7-3 3.4-5 6.5-5s5.8 2 6.5 5"
                            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="nav-menu-item__body">
                    <strong>My account</strong>
                    <span>Dashboard &middot; positions &middot; balance</span>
                  </span>
                </Link>
              ) : (
                <button type="button" onClick={openSignIn} className="nav-menu-item" role="menuitem">
                  <span className="nav-menu-item__icon" aria-hidden>
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M11 3h4a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M3 10h9m0 0L9 7m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="nav-menu-item__body">
                    <strong>Sign in</strong>
                    <span>Connect a wallet to get started</span>
                  </span>
                </button>
              )}
              <Link to="/start" className="nav-menu-item" role="menuitem">
                <span className="nav-menu-item__icon" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M8 7l4 3-4 3z" fill="currentColor" />
                  </svg>
                </span>
                <span className="nav-menu-item__body">
                  <strong>New here?</strong>
                  <span>5 step guide for first-time fans</span>
                </span>
              </Link>
              <Link to="/calculator" className="nav-menu-item" role="menuitem">
                <span className="nav-menu-item__icon" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <rect x="4" y="3" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 7h6M7 10h6M7 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="nav-menu-item__body">
                  <strong>Brutal Math</strong>
                  <span>Where every $1 fans spend really goes</span>
                </span>
              </Link>
              <div className="nav-menu-divider" aria-hidden />
              <span className="nav-menu-heading" role="presentation">Official &amp; on-chain</span>
              <a href={VAYLA_EXTERNAL.marketingSite} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem">
                <span className="nav-menu-item__body">
                  <strong>vayla.io</strong>
                </span>
                <span className="nav-menu-item__chev" aria-hidden>&rsaquo;</span>
              </a>
              <Link to="/whitepaper" className="nav-menu-item nav-menu-item--small" role="menuitem" onClick={() => setMenuOpen(false)}>
                <span className="nav-menu-item__body">
                  <strong>Whitepaper</strong>
                </span>
                <span className="nav-menu-item__chev" aria-hidden>&rsaquo;</span>
              </Link>
              <a href={VAYLA_EXTERNAL.linkHub} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem">
                <span className="nav-menu-item__body">
                  <strong>Docs &amp; link hub</strong>
                </span>
                <span className="nav-menu-item__chev" aria-hidden>&rsaquo;</span>
              </a>
              <a href={VAYLA_EXTERNAL.githubOrg} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem">
                <span className="nav-menu-item__body">
                  <strong>GitHub</strong>
                </span>
                <span className="nav-menu-item__chev" aria-hidden>&rsaquo;</span>
              </a>
              <a href={VAYLA_EXTERNAL.coinGecko} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem">
                <span className="nav-menu-item__body">
                  <strong>CoinGecko</strong>
                </span>
                <span className="nav-menu-item__chev" aria-hidden>&rsaquo;</span>
              </a>
              <a href={VAYLA_EXTERNAL.bscscanToken} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem">
                <span className="nav-menu-item__body">
                  <strong>BscScan · token</strong>
                </span>
                <span className="nav-menu-item__chev" aria-hidden>&rsaquo;</span>
              </a>
              <a href={VAYLA_EXTERNAL.twitter} target="_blank" rel="noopener noreferrer" className="nav-menu-item nav-menu-item--small" role="menuitem">
                <span className="nav-menu-item__body">
                  <strong>X (Twitter)</strong>
                </span>
                <span className="nav-menu-item__chev" aria-hidden>&rsaquo;</span>
              </a>
              <div className="nav-menu-divider" aria-hidden />
              <Link to="/legal" className="nav-menu-item nav-menu-item--small" role="menuitem">
                <span className="nav-menu-item__body">
                  <strong>Legal &amp; docs</strong>
                </span>
                <span className="nav-menu-item__chev" aria-hidden>&rsaquo;</span>
              </Link>
              <a href="mailto:manager@vayla.io" className="nav-menu-item nav-menu-item--small" role="menuitem">
                <span className="nav-menu-item__body">
                  <strong>Contact</strong>
                </span>
                <span className="nav-menu-item__chev" aria-hidden>&rsaquo;</span>
              </a>
            </div>
          )}
        </div>

        <ConnectKitButton.Custom>
          {({ show, isConnected, address, ensName }) => (
            <button
              onClick={() => (isConnected ? disconnect() : show?.())}
              onMouseEnter={() => isConnected && setHoverDisconnect(true)}
              onMouseLeave={() => setHoverDisconnect(false)}
              className={'nav-cta' + (isConnected ? ' is-connected' : '') + (hoverDisconnect ? ' is-disconnect-hover' : '')}
              title={isConnected ? 'Click to disconnect' : 'Connect a wallet'}
            >
              {isConnected ? (
                hoverDisconnect ? (
                  <>
                    <span className="dot is-off" />
                    <span>Disconnect</span>
                  </>
                ) : (
                  <>
                    <span className="dot" />
                    <span>{ensName || fmtAddr(address)}</span>
                  </>
                )
              ) : (
                <>
                  <span className="nav-cta-icon" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M2.5 5h10.5a1 1 0 011 1v5.5a1 1 0 01-1 1H3a1 1 0 01-1-1V5.5A1.5 1.5 0 013.5 4h7.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="11.4" cy="9" r="0.95" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>Connect Wallet</span>
                  <span className="nav-cta-arrow" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </>
              )}
            </button>
          )}
        </ConnectKitButton.Custom>
        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        ><span /></button>
      </div>
    </nav>
  );
}
