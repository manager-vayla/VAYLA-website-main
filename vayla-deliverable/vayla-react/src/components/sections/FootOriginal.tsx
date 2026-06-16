import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { VAYLA_EXTERNAL } from '@/lib/externalLinks';

export function FootOriginal() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="f-grid">
          <div className="f-brand">
            <div className="logo"><Logo size={22} /></div>
            <p className="lede">The protocol for borderless fandom economy. Empowering creators and fans through verifiable, on-chain participation. <em>The missing settlement layer.</em></p>
          </div>
          <div className="f-col">
            <h6>Protocol</h6>
            <ul>
              <li><Link to="/vaults">Vaults</Link></li>
              <li><Link to="/token">$VAYLA token</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/start">Start here</Link></li>
            </ul>
          </div>
          <div className="f-col">
            <h6>Resources</h6>
            <ul>
              <li><Link to="/whitepaper">Whitepaper</Link></li>
              <li><Link to="/token">VAYLA token (in-app)</Link></li>
              <li><a href={VAYLA_EXTERNAL.marketingSite} target="_blank" rel="noopener noreferrer">vayla.io</a></li>
              <li><a href={VAYLA_EXTERNAL.linkHub} target="_blank" rel="noopener noreferrer">Docs &amp; disclosures hub</a></li>
              <li><a href={VAYLA_EXTERNAL.githubOrg} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href={VAYLA_EXTERNAL.coinGecko} target="_blank" rel="noopener noreferrer">CoinGecko</a></li>
              <li><a href={VAYLA_EXTERNAL.coinMarketCap} target="_blank" rel="noopener noreferrer">CoinMarketCap</a></li>
              <li><a href={VAYLA_EXTERNAL.bscscanToken} target="_blank" rel="noopener noreferrer">BscScan · contract</a></li>
              <li><Link to="/calculator">Brutal Math</Link></li>
              <li><Link to="/ai">AI analyst</Link></li>
              <li><Link to="/marketplace">Marketplace</Link></li>
              <li><Link to="/start">For newcomers</Link></li>
            </ul>
          </div>
          <div className="f-col">
            <h6>Community</h6>
            <ul>
              <li><a href={VAYLA_EXTERNAL.twitter} target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              <li><a href={VAYLA_EXTERNAL.telegramOfficial} target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="mailto:manager@vayla.io">Contact</a></li>
              <li><Link to="/creator">For creators</Link></li>
            </ul>
          </div>
          <div className="f-col f-col--legal">
            <h6>Legal</h6>
            <ul>
              <li><Link to="/legal/terms">Terms</Link></li>
              <li><Link to="/legal/privacy">Privacy</Link></li>
              <li><Link to="/legal/cookies">Cookies</Link></li>
              <li><Link to="/legal/risk">Risk disclosure</Link></li>
              <li><Link to="/legal/disclaimer">Disclaimer</Link></li>
              <li><Link to="/legal" className="legal-all-link">All legal &rsaquo;</Link></li>
            </ul>
          </div>
        </div>
        <div className="f-bottom">
          <span className="f-copy">© 2026 VAYLA TECHNOLOGY INC · ALL RIGHTS RESERVED</span>
          <div className="f-socials">
            <a href={VAYLA_EXTERNAL.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
            <a href={VAYLA_EXTERNAL.telegramOfficial} target="_blank" rel="noopener noreferrer" aria-label="Telegram"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" /></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
