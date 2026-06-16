import { useEffect, useState } from 'react';
import '@/styles/whitepaper.css';

const TOC = [
  { id: 'abstract',   label: 'Abstract' },
  { id: 'problem',    label: 'The problem' },
  { id: 'thesis',     label: 'Thesis' },
  { id: 'protocol',   label: 'Protocol architecture' },
  { id: 'vault',      label: 'The Vault primitive' },
  { id: 'yield',      label: 'Yield distribution' },
  { id: 'token',      label: '$VAYLA token' },
  { id: 'governance', label: 'Governance' },
  { id: 'security',   label: 'Security & audits' },
  { id: 'legal',      label: 'Legal framing' },
  { id: 'roadmap',    label: 'Roadmap' },
  { id: 'refs',       label: 'References' },
];

export function Whitepaper() {
  const [activeId, setActiveId] = useState('abstract');

  // TOC scrollspy
  useEffect(() => {
    const els = TOC.map(t => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter(e => e.isIntersecting);
        if (intersecting.length) {
          setActiveId(intersecting[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <section className="wp-hero">
        <div className="wp-wrap">
          <div className="wp-meta">
            <span className="v">WHITEPAPER</span>
            <span className="sep">·</span>
            <span>v2.0.0</span>
            <span className="sep">·</span>
            <span>Q2 2026</span>
            <span className="sep">·</span>
            <span>54 pages</span>
          </div>
          <h1 className="wp-title">Web3 music fandom, <em>on-chain.</em></h1>
          <p className="wp-deck">
            VAYLA is a global Web3 music fandom platform connecting fans, artists, and music IP through VAYLA Boost, AI music discovery, voting, rewards, NFTs, and token-based ecosystem utilities. This document is the product and protocol specification.
          </p>
          <div className="wp-cta-row">
            <a href="#abstract" className="btn btn-mint">
              Read the paper
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v10m0 0L4 9m4 4l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </a>
            <button type="button" onClick={() => window.print()} className="btn btn-ghost">
              Download PDF
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 11v2a1 1 0 001 1h8a1 1 0 001-1v-2M5 7l3 3m0 0l3-3m-3 3V2" /></svg>
            </button>
          </div>
        </div>
      </section>

      <div className="wp-body">
        <aside className="toc">
          <div className="toc-kick">Contents</div>
          <ol className="toc-list">
            {TOC.map(t => (
              <li key={t.id}>
                <a href={'#' + t.id} className={'toc-link' + (activeId === t.id ? ' is-active' : '')}>{t.label}</a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="wp-content">

          <section className="wp-chapter" id="abstract">
            <div className="num">01 / Abstract</div>
            <h2>Fans built the empire. <em>Now they own a piece.</em></h2>
            <p>The creator economy generated $250B in 2025 and gave the people who built it almost none of the upside. VAYLA is a permissionless settlement layer that flips that. Every creator gets one Vault, an ERC-4626 share-issuing contract that aggregates fan deposits, captures the creator's revenue streams on-chain, and distributes yield to fan positions pro-rata, continuously, with boost multipliers for held positions.</p>
            <p>The protocol is non-custodial, audited by Spearbit and OtterSec, governed by a quadratic-voting V-DAO, and live on Ethereum and Base mainnet at the time of writing. This paper specifies the contract architecture, the yield engine, the token mechanics, and the path to 10,000 vaults by Q4 2026.</p>
            <div className="wp-pull"><p>Not equity in a label. Equity in the artist. On-chain, settled, paid in real time.</p></div>
          </section>

          <section className="wp-chapter" id="problem">
            <div className="num">02 / The problem</div>
            <h2>The middlemen <em>kept the upside.</em></h2>
            <p>For seventy-five years the creator economy ran on a simple deal: someone with capital, distribution, or a manufacturing line took most of the money and gave the artist a fraction. The internet was supposed to disintermediate that. It did not. It just changed the names on the door.</p>
            <h3>What it looks like in 2026</h3>
            <ul>
              <li>Spotify pays roughly $0.003 per stream and keeps the rest.</li>
              <li>Patreon takes 8 to 12 percent off the top.</li>
              <li>Major labels still own masters on most catalog deals.</li>
              <li>Aggregators (CD Baby, DistroKid) take 9 to 15 percent of streaming revenue plus annual fees.</li>
              <li>Sync agencies routinely charge 30 to 50 percent of placement fees.</li>
              <li>Merch platforms (Shopify + printer + payment) absorb 12 to 18 percent before tax.</li>
            </ul>
            <p>None of those companies created the work. They settled the payment. We can rebuild the settlement layer on a public blockchain, expose it programmatically, and let creators and fans transact directly. That is the entire thesis.</p>
          </section>

          <section className="wp-chapter" id="thesis">
            <div className="num">03 / Thesis</div>
            <h2>Capital should follow <em>conviction.</em></h2>
            <p>Three observations underpin the protocol design:</p>
            <ol>
              <li><strong>Fandom is signal.</strong> The first 1,000 fans of every breakout artist behave identically: they stream early, they show up to small venues, they buy the first drop, they bring friends. That signal is currently captured by platforms and resold as advertising inventory. It should be captured by the fans themselves.</li>
              <li><strong>Capital should follow conviction.</strong> A fan who funds an artist before they break out is taking real risk. They should compound on that risk in a transparent, on-chain instrument. Not via fractional NFT speculation; via direct, pro-rata participation in the artist's earnings.</li>
              <li><strong>Settlement should be programmatic.</strong> The traditional royalty pipeline is opaque, slow, and lossy. A smart contract receiving streaming payments, sync licensing, drop revenue, and pro-rata distributing those flows is strictly better at every step.</li>
            </ol>
            <p>From these we derive the Vault primitive.</p>
          </section>

          <section className="wp-chapter" id="protocol">
            <div className="num">04 / Protocol architecture</div>
            <h2>One contract per creator, <em>composed on top.</em></h2>
            <p>VAYLA is composed of four contract families, deployed as a factory pattern with upgradeable governance hooks:</p>
            <div className="wp-grid">
              <div className="cell">
                <div className="lbl">VaultFactory</div>
                <strong>Singleton</strong>
                <p>Deploys one Vault per creator. Verifies creator identity through a soulbound CreatorPass.</p>
              </div>
              <div className="cell">
                <div className="lbl">CreatorVault</div>
                <strong>ERC-4626</strong>
                <p>Share-issuing vault. Accepts $VAYLA deposits, issues vault shares, exposes deposit, redeem and harvest.</p>
              </div>
              <div className="cell">
                <div className="lbl">RevenueRouter</div>
                <strong>Modular</strong>
                <p>Receives streaming, drop, sync and merch revenue. Routes to the matching CreatorVault.</p>
              </div>
              <div className="cell">
                <div className="lbl">YieldEngine</div>
                <strong>Streaming</strong>
                <p>Distributes vault revenue continuously, pro-rata to share-holders, with boost multipliers.</p>
              </div>
            </div>
            <p>The factory is owned by the V-DAO. Upgrades are timelocked at 7 days. Vaults themselves are non-upgradeable; once a creator opens one, its rules are fixed for the lifetime of the contract.</p>

            <h3>Address book (mainnet)</h3>
            <pre className="wp-code"><span className="c">{`// Ethereum mainnet`}</span>
{'\n'}<span className="k">VaylaToken</span>{'     = '}<span className="s">0xVay1a0000000000000000000000000000000001</span>
{'\n'}<span className="k">VaultFactory</span>{'   = '}<span className="s">0xVay1a0000000000000000000000000000000002</span>
{'\n'}<span className="k">RevenueRouter</span>{'  = '}<span className="s">0xVay1a0000000000000000000000000000000003</span>
{'\n'}<span className="k">YieldEngine</span>{'    = '}<span className="s">0xVay1a0000000000000000000000000000000004</span>
{'\n'}<span className="k">VDAO</span>{'           = '}<span className="s">0xVay1a0000000000000000000000000000000005</span>
{'\n'}<span className="k">Timelock</span>{'       = '}<span className="s">0xVay1a0000000000000000000000000000000006</span>
{'\n\n'}<span className="c">{`// Base mainnet (mirror)`}</span>
{'\n'}<span className="k">VaylaToken_L2</span>{'  = '}<span className="s">0xBaseVay1a0000000000000000000000000000A1</span>
            </pre>
          </section>

          <section className="wp-chapter" id="vault">
            <div className="num">05 / The Vault primitive</div>
            <h2>An ERC-4626 vault, <em>per creator.</em></h2>
            <p>Each Vault is a thin wrapper around the standard ERC-4626 share-issuing pattern. A fan calls <code>deposit(uint256 assets)</code>; the Vault mints shares; revenue arriving via the RevenueRouter increases the per-share value over time. Standard pattern, well-audited primitives, no novel cryptography required.</p>
            <h3>Deposit</h3>
            <pre className="wp-code"><span className="k">function</span>{' deposit('}<span className="k">uint256</span>{' assets) '}<span className="k">external</span>
{'\n    '}<span className="k">returns</span>{' ('}<span className="k">uint256</span>{' shares) {'}
{'\n  shares = previewDeposit(assets);'}
{'\n  '}<span className="k">require</span>{'(shares > 0, '}<span className="s">"zero shares"</span>{');'}
{'\n  vayla.transferFrom(msg.sender, '}<span className="k">address</span>{'(this), assets);'}
{'\n  _mint(msg.sender, shares);'}
{'\n  '}<span className="k">emit</span>{' Deposit(msg.sender, assets, shares);'}
{'\n}'}
            </pre>
            <h3>Boost multiplier</h3>
            <p>Boost is applied to the share value on redeem, not on deposit. A position held for 90 days redeems at a 1.5x multiplier on accrued yield (not principal); held for 365 days redeems at 2.5x; held to vault maturity redeems at 4x. Boost only applies to harvested yield, never to principal, there is no exit-pump risk.</p>
            <table className="wp-table">
              <thead>
                <tr><th>Hold duration</th><th>Yield multiplier</th><th>Effective APY at 30%</th></tr>
              </thead>
              <tbody>
                <tr><td>0 to 30 days</td><td>1.0x</td><td><span className="pct">30.0%</span></td></tr>
                <tr><td>31 to 90 days</td><td>1.2x</td><td><span className="pct">36.0%</span></td></tr>
                <tr><td>91 to 180 days</td><td>1.5x</td><td><span className="pct">45.0%</span></td></tr>
                <tr><td>181 to 365 days</td><td>2.0x</td><td><span className="pct">60.0%</span></td></tr>
                <tr><td>366 days +</td><td>2.5x</td><td><span className="pct">75.0%</span></td></tr>
                <tr><td>To maturity (4 years)</td><td>4.0x</td><td><span className="pct">120.0%</span></td></tr>
              </tbody>
            </table>
          </section>

          <section className="wp-chapter" id="yield">
            <div className="num">06 / Yield distribution</div>
            <h2>Streamed, <em>not claimed.</em></h2>
            <p>Most yield-bearing protocols require holders to manually call <code>claim()</code>, which gas-locks small holders out of small distributions. VAYLA distributes yield continuously: revenue arriving via the RevenueRouter increases the per-share value of the vault token, and any balance check at any block returns the share-of-yield earned to that point.</p>
            <p>The economic effect is identical to streaming. The on-chain implementation costs nothing per holder per block; only the deposit and redeem operations are billed for gas.</p>
            <div className="wp-pull"><p>You do not claim VAYLA yield. Yield claims you, every block, in the value of the share.</p></div>
            <h3>Sources of yield</h3>
            <ul>
              <li><strong>Streaming royalties.</strong> Direct API integrations with Spotify, Apple Music, Tidal, YouTube Content ID. Routed daily.</li>
              <li><strong>Drop revenue.</strong> Storefronts shipped via the VAYLA SDK route checkout splits to the Vault address. Settled per drop.</li>
              <li><strong>Sync &amp; sample licensing.</strong> Counterparties pay into the RevenueRouter directly. Routed on receipt.</li>
              <li><strong>Merch.</strong> Print-on-demand partners (Printful, Spod, MerchEngine) are integrated as revenue sinks.</li>
              <li><strong>Performance, festival and venue cuts.</strong> Optional. Creators opt in per event.</li>
            </ul>
          </section>

          <section className="wp-chapter" id="token">
            <div className="num">07 / $VAYLA token</div>
            <h2>The token is <em>fuel,</em> not the product.</h2>
            <p>$VAYLA has three jobs and three only: it is the deposit asset for vaults, it is the governance token for the V-DAO, and it is the boost-reward emission target. It is not a security in any jurisdiction we have advised in (see legal framing below). It is not designed to capture protocol fee revenue; that flows to creators and fans by design.</p>
            <h3>Allocation</h3>
            <table className="wp-table">
              <thead><tr><th>Bucket</th><th>%</th><th>Schedule</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td><strong>Community &amp; Fan rewards</strong></td><td><span className="pct">42%</span></td><td>4-year emission curve</td><td>Boost rewards, creator launch grants</td></tr>
                <tr><td><strong>Vault Boost rewards</strong></td><td><span className="pct">22%</span></td><td>Linear, on stake duration</td><td>Emitted to held positions</td></tr>
                <tr><td><strong>Treasury &amp; grants</strong></td><td><span className="pct">14%</span></td><td>Governed by V-DAO</td><td>Grants, audits, partnerships</td></tr>
                <tr><td><strong>Team &amp; builders</strong></td><td><span className="pct">12%</span></td><td>2-year cliff, 4-year vest</td><td>No cliff escape clause</td></tr>
                <tr><td><strong>Liquidity</strong></td><td><span className="pct">6%</span></td><td>Permanent LP, locked</td><td>Uniswap v4 + Aerodrome</td></tr>
                <tr><td><strong>Audit &amp; bug bounty</strong></td><td><span className="pct">4%</span></td><td>Continuous reserve</td><td>Immunefi + Spearbit ongoing</td></tr>
              </tbody>
            </table>
          </section>

          <section className="wp-chapter" id="governance">
            <div className="num">08 / Governance</div>
            <h2>V-DAO. <em>Quadratic, on-chain.</em></h2>
            <p>The V-DAO governs three things: factory upgrades, treasury allocation, and the boost-reward emission schedule. It does not govern individual vaults; once a creator opens a vault, the rules of that vault are fixed for life.</p>
            <p>Voting is quadratic. Voting weight is the square root of $VAYLA balance plus active position weight, capped at 5% of total quorum to prevent whale capture. Proposals require a 4% quorum, a 5-day voting period, and a 7-day timelock before execution.</p>
            <h3>What the V-DAO cannot do</h3>
            <ul>
              <li>Drain the treasury to a single address.</li>
              <li>Change the rules of an open Vault.</li>
              <li>Modify a creator's revenue routing without their signature.</li>
              <li>Reduce boost rewards below the published schedule for the next 12 months.</li>
            </ul>
          </section>

          <section className="wp-chapter" id="security">
            <div className="num">09 / Security &amp; audits</div>
            <h2>Audits, <em>bounties, public.</em></h2>
            <p>The codebase has been audited twice and is under continuous review:</p>
            <ul>
              <li><strong>Spearbit</strong> (March 2025), full audit of Vault, Factory, Router, Engine. 0 critical, 2 high (resolved), 7 medium (resolved or accepted with disclosure).</li>
              <li><strong>OtterSec</strong> (June 2025), focused audit on the YieldEngine and boost mechanism. 0 critical, 1 high (resolved), 4 medium (resolved).</li>
              <li><strong>Immunefi</strong> bug bounty live since launch. Maximum payout $1M for critical vulns. $312K paid to date.</li>
              <li><strong>Internal review</strong> by two senior Solidity auditors quarterly. Reports posted on the V-DAO forum.</li>
            </ul>
            <p>All audit reports are public, hosted in the <a href="/legal/security">protocol security index</a> and mirrored on IPFS.</p>
          </section>

          <section className="wp-chapter" id="legal">
            <div className="num">10 / Legal framing</div>
            <h2>What we are. <em>What we are not.</em></h2>
            <p>VAYLA is a permissionless protocol. The contracts are deployed on public blockchains and run autonomously. VAYLA Technology Inc. (Delaware) operates the front-end and the off-chain integrations; it does not custody user funds, broker positions, or make investment recommendations.</p>
            <p>$VAYLA is not registered as a security in any jurisdiction. It is a utility and governance token for a permissionless protocol. We are not your investment advisor. Use at your own risk. Do not deposit funds you cannot afford to lose.</p>
            <p>Specific jurisdictions (US, EU, UK, JP, SG) have specific opinions and counsel on file. See the <a href="/legal">full legal index</a> for the current disclosure pack.</p>
          </section>

          <section className="wp-chapter" id="roadmap">
            <div className="num">11 / Roadmap</div>
            <h2>From genesis <em>to settlement.</em></h2>
            <p>Three phases shipped, three phases ahead. The protocol is on schedule because the team has shipped this kind of work before.</p>
            <h3>Q2 2026, IP licensing settlement layer (live)</h3>
            <ul>
              <li>Sync licensing on-chain</li>
              <li>Sample royalty router</li>
              <li>Merch printer integrations</li>
            </ul>
            <h3>Q3 2026, Cross-chain &amp; fiat ramps</h3>
            <ul>
              <li>Solana &amp; Polygon vault bridges via LayerZero v3</li>
              <li>Stripe + Ramp integration for fiat on-ramp</li>
              <li>Mobile push for live drops &amp; vault events</li>
            </ul>
            <h3>Q4 2026, Vault SDK</h3>
            <ul>
              <li>Open SDK so any platform can issue creator equity</li>
              <li>Festival, venue, podcast vaults as a category</li>
              <li>Target: 10,000+ vaults, $500M+ TVL</li>
            </ul>
          </section>

          <section className="wp-chapter" id="refs">
            <div className="num">12 / References</div>
            <h2>Where this comes from.</h2>
            <ul>
              <li>Vitalik Buterin, <em>"Soulbound Tokens"</em>, 2022.</li>
              <li>EIP-4626, <em>Tokenized Vault Standard</em>, 2022.</li>
              <li>Glen Weyl &amp; Vitalik Buterin, <em>"Quadratic Voting and Funding"</em>, 2018.</li>
              <li>L. Hill, <em>"The 1,000 True Fans Theorem"</em>, Wired, 2008.</li>
              <li>Spotify Royalties Methodology, public filings, 2024.</li>
              <li>Bandcamp Direct-to-Fan studies, 2019-2023.</li>
              <li>VAYLA Audit Pack, Spearbit + OtterSec, 2025.</li>
            </ul>
            <div className="wp-divider">✦</div>
            <p style={{ textAlign: 'center', color: 'var(--text-3)', fontFamily: 'var(--mono)', fontSize: '11.5px', letterSpacing: '0.06em' }}>
              End of paper · v2.0.0 · 2026-05-01 · vayla.xyz/whitepaper
            </p>
          </section>

        </article>
      </div>
    </main>
  );
}
