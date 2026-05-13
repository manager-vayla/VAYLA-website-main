import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

interface Section {
  h: string;
  body: string[];
}
interface LegalDoc {
  title: string;
  blurb: string;
  updated: string;
  effective: string;
  sections: Section[];
}

const DOCS: Record<string, LegalDoc> = {
  terms: {
    title: 'Terms of Service',
    blurb: 'The contract between you and VAYLA Technology Inc covering use of the protocol and the website.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. Acceptance', body: [
        'By accessing the VAYLA website, smart contracts, dashboards, or any related interface (collectively, the "Services"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Services.',
        'These Terms form a binding agreement between you and VAYLA Technology Inc, a Delaware corporation ("VAYLA", "we", "us"). They apply equally to fans, creators, and any other party who interacts with the Services.',
      ]},
      { h: '2. Eligibility', body: [
        'You must be at least 18 years old, have legal capacity to enter into contracts in your jurisdiction, and not be located in or a resident of any country subject to comprehensive U.S. sanctions, including (without limitation) Cuba, Iran, North Korea, Syria, and the so called Donetsk/Luhansk regions of Ukraine.',
        'You must not be listed on any sanctions list, including the U.S. Office of Foreign Assets Control Specially Designated Nationals list.',
      ]},
      { h: '3. Wallet & Account', body: [
        'The Services are non custodial. You connect a self custodial wallet that you control. VAYLA never holds your tokens. We do not have the ability to move, freeze, or recover your assets.',
        'You are solely responsible for safeguarding your private keys and seed phrase. Loss of these is unrecoverable.',
      ]},
      { h: '4. Permitted Use', body: [
        'You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services in any manner that could damage, disable, overburden, or impair them.',
      ]},
      { h: '5. Prohibited Activities', body: [
        'You will not: (a) use the Services for money laundering, terrorist financing, or any illicit activity; (b) attempt to manipulate vault prices, yield, or markets; (c) reverse engineer, scrape, or copy proprietary portions of the Services beyond what is permitted by open source license; (d) introduce malware, exploit vulnerabilities, or interfere with other users; (e) impersonate any person or entity.',
      ]},
      { h: '6. Smart Contract & Protocol Risk', body: [
        'The Services rely on smart contracts deployed to public blockchains. Smart contracts may contain bugs, exploits, or vulnerabilities. You acknowledge and accept this risk. VAYLA disclaims all liability for losses arising from smart contract failure, blockchain outages, or front running.',
      ]},
      { h: '7. No Investment Advice', body: [
        'Nothing on the Services constitutes investment, tax, or legal advice. Information presented is for educational purposes only. Consult your own advisors before making any decision involving the Services.',
      ]},
      { h: '8. Intellectual Property', body: [
        'The VAYLA name, logo, and brand assets are owned by VAYLA Technology Inc. The smart contracts are released under the licenses specified in the relevant repository. Creator content remains the property of the creator. You retain ownership of anything you submit, but grant VAYLA a non exclusive, royalty free license to display it within the Services as needed.',
      ]},
      { h: '9. Disclaimers', body: [
        'The Services are provided AS IS and AS AVAILABLE without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non infringement.',
      ]},
      { h: '10. Limitation of Liability', body: [
        'To the maximum extent permitted by law, in no event shall VAYLA, its affiliates, officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or use, arising out of or in connection with the Services.',
        'Our aggregate liability shall not exceed the greater of (i) USD 100 or (ii) the amount you paid VAYLA in the twelve months preceding the claim. Since VAYLA charges no platform fees, item (i) applies.',
      ]},
      { h: '11. Indemnification', body: [
        'You agree to indemnify and hold harmless VAYLA from any claims arising out of your use of the Services, your violation of these Terms, or your infringement of any third party right.',
      ]},
      { h: '12. Modifications', body: [
        'We may modify these Terms from time to time. Material changes will be announced on the Services and via on chain notice where reasonable. Continued use constitutes acceptance of the revised Terms.',
      ]},
      { h: '13. Governing Law & Disputes', body: [
        'These Terms are governed by the laws of the State of Delaware, USA, without regard to conflict of laws principles. Any dispute will be resolved through binding arbitration in Wilmington, Delaware, except that either party may seek injunctive relief in court.',
      ]},
      { h: '14. Contact', body: [
        'Questions about these Terms: legal@vayla.xyz.',
      ]},
    ],
  },

  privacy: {
    title: 'Privacy Policy',
    blurb: 'What information we collect, how we use it, and the choices you have.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. Summary', body: [
        'VAYLA is non custodial and minimizes data collection. We do not require you to register an account or provide personal information to use the protocol. This policy explains the limited data we do collect and what we do with it.',
      ]},
      { h: '2. Information We Collect', body: [
        'Wallet address: when you connect a wallet, your public address is visible to us in the same way it is visible to any node on the blockchain. We do not associate it with your identity unless you tell us who you are.',
        'Device & log data: standard request metadata such as IP, user agent, and referrer, used for security and abuse detection. Retained 30 days.',
        'Cookies: see our Cookie Policy.',
        'Voluntary data: any information you submit in a form (e.g. creator application, bug report, support email).',
      ]},
      { h: '3. How We Use Information', body: [
        'To operate, maintain, and improve the Services. To detect and prevent fraud, abuse, and security threats. To respond to your inquiries. To comply with legal obligations.',
      ]},
      { h: '4. Sharing', body: [
        'We do not sell your data. We share limited data with service providers (RPC node operators, hosting, analytics) under contracts that require confidentiality and limited purpose. We may disclose data in response to lawful requests.',
      ]},
      { h: '5. International Transfers', body: [
        'Data may be processed in the United States, the European Union, or other jurisdictions where our service providers operate. We use standard contractual clauses where required.',
      ]},
      { h: '6. Your Rights', body: [
        'Depending on your location, you may have rights to access, correct, delete, or port your data, and to opt out of certain processing. Submit requests to privacy@vayla.xyz. We respond within 30 days.',
      ]},
      { h: '7. Children', body: [
        'The Services are not directed at children under 18. We do not knowingly collect data from children. If you believe a child has provided us data, contact privacy@vayla.xyz and we will delete it.',
      ]},
      { h: '8. Security', body: [
        'We use commercially reasonable safeguards, including encryption in transit (TLS), encryption at rest, access controls, and quarterly reviews. No method of transmission or storage is 100 percent secure.',
      ]},
      { h: '9. Changes', body: [
        'We will post material changes on the Services and update the "Updated" date above.',
      ]},
      { h: '10. Contact', body: [
        'Privacy inquiries: privacy@vayla.xyz.',
      ]},
    ],
  },

  cookies: {
    title: 'Cookie Policy',
    blurb: 'Which cookies we use, what they do, and how you can control them.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. What Cookies Are', body: [
        'Cookies are small text files stored by your browser. They let a website remember information between visits or pages.',
      ]},
      { h: '2. Categories We Use', body: [
        'Essential: required to operate the site. Examples: wallet session token, route state, anti CSRF token. Always on, cannot be disabled.',
        'Analytics: anonymized aggregate metrics about page and vault views. Off by default, opt in via the cookie banner.',
        'Marketing: only used if you opt in for drop alerts or campaign tracking. Off by default.',
      ]},
      { h: '3. Specific Cookies', body: [
        'vayla:cookie-consent:v1, your saved preference. Essential. 12 months.',
        'wagmi.connected, your wallet connection state, set by the wallet library. Essential. Until disconnect.',
        '_va_anon, anonymized analytics ID, only set if you opt in. Analytics. 12 months.',
      ]},
      { h: '4. Third Parties', body: [
        'We do not embed third party advertising. Wallet provider scripts may set their own cookies on their domains. RPC and indexer providers do not set cookies on the VAYLA domain.',
      ]},
      { h: '5. Managing Cookies', body: [
        'Use the cookie banner shown on first visit. Reopen settings any time at /legal/cookies. You can also clear cookies in your browser settings; doing so will require you to set your preferences again.',
      ]},
    ],
  },

  risk: {
    title: 'Risk Disclosure',
    blurb: 'A plain English list of every risk you accept by using the Services. Read this before staking.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. Smart Contract Risk', body: [
        'Smart contracts are immutable code. Bugs, exploits, oracle manipulation, or unforeseen behavior may result in partial or total loss of staked tokens. VAYLA contracts are audited but no audit guarantees absence of defects.',
      ]},
      { h: '2. Creator Performance Risk', body: [
        'Yield depends on the creator earning revenue. A creator may earn nothing in a given period. In that case your stake earns no yield. Your principal is unaffected by creator performance, but you may exit later than planned.',
      ]},
      { h: '3. Market Risk', body: [
        'The market price of $VAYLA and other tokens fluctuates. The dollar value of your position may decline below your entry price. Past performance does not predict future results.',
      ]},
      { h: '4. Liquidity Risk', body: [
        'If you opted into a lockup, you cannot exit until the lockup expires unless you list your position on the secondary marketplace. Marketplace liquidity is not guaranteed.',
      ]},
      { h: '5. Regulatory Risk', body: [
        'Crypto regulation is evolving and varies by jurisdiction. Future regulation may restrict, tax, or prohibit activities you currently engage in via the Services. You are responsible for compliance in your jurisdiction.',
      ]},
      { h: '6. Tax Responsibility', body: [
        'Earnings from staking may be taxable as ordinary income, capital gains, or another category depending on your jurisdiction. VAYLA does not provide tax advice or 1099 forms. Consult a qualified tax professional.',
      ]},
      { h: '7. Custody & Key Risk', body: [
        'You are solely responsible for your wallet keys. Loss, theft, or compromise of keys leads to loss of funds. VAYLA cannot recover your keys or funds.',
      ]},
      { h: '8. Network Risk', body: [
        'Blockchain networks may experience congestion, fork events, or downtime. Transactions may be delayed, fail, or be front run.',
      ]},
      { h: '9. No Insurance', body: [
        'Funds in vaults are not FDIC insured, SIPC protected, or covered by any government program.',
      ]},
      { h: '10. Acknowledgment', body: [
        'By using the Services, you acknowledge you have read and understood these risks and accept full responsibility for any losses.',
      ]},
    ],
  },

  disclaimer: {
    title: 'Disclaimer',
    blurb: 'No financial advice. No promises. Nothing on this site is a recommendation.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. No Investment Advice', body: [
        'Content on the Services, including vault data, AI suggestions, articles, and tooltips, is for informational and educational purposes only. None of it constitutes investment, financial, legal, or tax advice.',
      ]},
      { h: '2. No Solicitation', body: [
        'Nothing on the Services is a solicitation, offer, or recommendation to buy, sell, or hold any token, security, or other instrument.',
      ]},
      { h: '3. No Warranty', body: [
        'The Services are provided AS IS without warranty of any kind. We do not guarantee uptime, accuracy, completeness, or fitness for a particular purpose.',
      ]},
      { h: '4. Forward Looking Statements', body: [
        'Any forward looking statement (roadmap, projection, expected APY) is inherently uncertain. Actual outcomes may differ materially.',
      ]},
      { h: '5. Independent Decision', body: [
        'You are responsible for your own decisions. Consult independent advisors before staking, swapping, or interacting with any vault.',
      ]},
    ],
  },

  use: {
    title: 'Acceptable Use Policy',
    blurb: 'How you may and may not use VAYLA.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. Lawful Use', body: [
        'You may use the Services only for purposes that are lawful in your jurisdiction and in any jurisdiction your activity reaches.',
      ]},
      { h: '2. Prohibited Conduct', body: [
        'You will not: use the Services to launder money or finance terrorism; attempt to manipulate vault metrics, prices, or yield; engage in front running, sandwich attacks, or wash trading; use bots, scrapers, or automation that violate rate limits; introduce malware or exploit vulnerabilities; harass, dox, or threaten any user, creator, or contributor; impersonate any person or entity.',
      ]},
      { h: '3. Creator Conduct', body: [
        'Creators must accurately represent themselves, their revenue sources, and any material risk. Misrepresentation may result in vault delisting from the official interface (the underlying smart contract is permissionless and cannot be paused).',
      ]},
      { h: '4. Reporting', body: [
        'Suspected violations: abuse@vayla.xyz. Provide as much detail as possible.',
      ]},
      { h: '5. Enforcement', body: [
        'We may, at our discretion, restrict access to the website interface for users who violate this Policy. The protocol smart contracts themselves are permissionless and unaffected.',
      ]},
    ],
  },

  rights: {
    title: 'Intellectual Property & Rights',
    blurb: 'Who owns what. The short version: creators own their content, fans own their stake, VAYLA owns the brand.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. VAYLA Brand', body: [
        'The VAYLA name, the metaball mark, the wordmark, and the visual system (color palette, typography lockups, marketing illustrations) are trademarks of VAYLA Technology Inc. You may not use them in a way that suggests endorsement without written permission.',
      ]},
      { h: '2. Protocol & Code', body: [
        'Smart contracts are released under the licenses specified in their repository (typically MIT, BSL, or AGPL depending on the contract). You may inspect, fork, and audit them per those licenses.',
        'The website source is proprietary except for components explicitly released under open source licenses.',
      ]},
      { h: '3. Creator Rights', body: [
        'Creators retain 100% of the rights to their content, masters, recordings, image, name, likeness, and intellectual property. VAYLA never claims, takes, or sub licenses any creator IP. The protocol routes revenue; it does not absorb rights.',
      ]},
      { h: '4. Fan Rights', body: [
        'Stakers own their tokens. They own their on chain positions. They own their dashboard data. VAYLA never claims any right over user assets.',
        'Stakers do not, by virtue of staking, acquire equity, voting rights in the creator entity, or revenue rights beyond what the smart contract distributes pro rata.',
      ]},
      { h: '5. Press & Media', body: [
        'Press kit and brand assets: vayla.xyz/press. You may use approved assets in editorial coverage with attribution. Modification of the logo is not permitted.',
      ]},
      { h: '6. Reporting Infringement', body: [
        'Trademark or copyright concerns: rights@vayla.xyz. See also our DMCA policy.',
      ]},
    ],
  },

  compliance: {
    title: 'Compliance, AML & Sanctions',
    blurb: 'How we comply with anti money laundering and sanctions law, and what that means for users.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. Sanctions', body: [
        'You may not use the Services if you are located in a comprehensively sanctioned country, are listed on the U.S. OFAC SDN list, or are otherwise prohibited from receiving services under U.S., EU, or U.K. law.',
        'The official VAYLA interface screens against public sanctions lists and may block access for matched addresses. Underlying smart contracts are permissionless.',
      ]},
      { h: '2. Anti Money Laundering', body: [
        'VAYLA monitors for patterns consistent with money laundering and may report suspicious activity to relevant authorities. We may freeze interface level functionality for accounts suspected of illicit activity.',
      ]},
      { h: '3. KYC', body: [
        'KYC is not required to use the protocol. Certain creator features (large vault openings, payout to fiat ramps) may require identity verification through a regulated third party provider.',
      ]},
      { h: '4. Travel Rule', body: [
        'For applicable transfers exceeding regulatory thresholds, we may collect originator and beneficiary information consistent with FATF Recommendation 16.',
      ]},
      { h: '5. Reporting', body: [
        'Compliance concerns: compliance@vayla.xyz.',
      ]},
    ],
  },

  dmca: {
    title: 'DMCA & Copyright Policy',
    blurb: 'Notice and takedown procedure for copyright infringement.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. Designated Agent', body: [
        'Copyright Agent, VAYLA Technology Inc, 1209 N Orange St, Wilmington DE 19801, USA. Email: dmca@vayla.xyz.',
      ]},
      { h: '2. Filing a Notice', body: [
        'A valid notice must include: (a) a physical or electronic signature; (b) identification of the copyrighted work; (c) identification of the allegedly infringing material with enough detail to locate it; (d) your contact information; (e) a statement of good faith belief that the use is unauthorized; (f) a statement under penalty of perjury that the information is accurate and you are authorized to act.',
      ]},
      { h: '3. Counter Notice', body: [
        'If you believe content was wrongly removed, you may submit a counter notice with similar elements. We will forward it to the original complainant. If they do not file a court action within 10 business days, we may restore the content.',
      ]},
      { h: '4. Repeat Infringers', body: [
        'Accounts of repeat infringers will be terminated from the official interface.',
      ]},
    ],
  },

  accessibility: {
    title: 'Accessibility Statement',
    blurb: 'We aim for WCAG 2.1 AA. Here is where we stand and how to flag issues.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. Commitment', body: [
        'VAYLA aims to meet WCAG 2.1 Level AA across all public surfaces. We design with high color contrast, semantic markup, keyboard navigation, and screen reader support.',
      ]},
      { h: '2. Methods', body: [
        'Each release passes automated checks (axe core, Lighthouse) and manual screen reader review (NVDA on Windows, VoiceOver on macOS and iOS, TalkBack on Android).',
      ]},
      { h: '3. Known Limitations', body: [
        'Some live data charts (recharts) provide alternative tabular text. The cursor follow visual effect is decorative and disabled when the user has prefers reduced motion enabled.',
      ]},
      { h: '4. Feedback', body: [
        'Found an accessibility issue: a11y@vayla.xyz. We aim to respond within 5 business days.',
      ]},
    ],
  },

  security: {
    title: 'Security & Vulnerability Disclosure',
    blurb: 'How to report security issues and what we do about them.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. Audits', body: [
        'Smart contracts are audited by Spearbit. Audit reports are published in the protocol repository.',
      ]},
      { h: '2. Bug Bounty', body: [
        'VAYLA runs an Immunefi bounty with payouts up to USD 1,000,000 for critical smart contract findings. Web and infra findings up to USD 50,000.',
      ]},
      { h: '3. Responsible Disclosure', body: [
        'Send vulnerability reports to security@vayla.xyz, encrypted with our PGP key (fingerprint published at /.well-known/security.txt). Do not exploit the issue beyond what is needed to demonstrate it. Do not access user data. Give us a reasonable window before public disclosure.',
      ]},
      { h: '4. Out of Scope', body: [
        'Denial of service, social engineering of staff, physical attacks, third party services we do not control, theoretical issues without proof of impact.',
      ]},
      { h: '5. Safe Harbor', body: [
        'Good faith research conducted within these guidelines is authorized. We will not pursue legal action against researchers acting in good faith.',
      ]},
    ],
  },

  refunds: {
    title: 'Withdrawal & Refund Policy',
    blurb: 'You always control your funds. There is nothing to refund because we never charged you.',
    updated: '2026-04-22',
    effective: '2026-05-01',
    sections: [
      { h: '1. Non Custodial', body: [
        'VAYLA is non custodial. Funds remain in smart contracts you control. We never debit, charge, or hold your assets.',
      ]},
      { h: '2. Withdrawal', body: [
        'Open positions without lockup may be withdrawn at any time via the dashboard. The transaction is on chain; you pay only the network gas fee.',
      ]},
      { h: '3. Lockups', body: [
        'If you opted into a lockup, you cannot withdraw the principal until the lockup expires. You may list your position on the secondary marketplace and another user may purchase it.',
      ]},
      { h: '4. Platform Fees', body: [
        'VAYLA charges a 0% platform fee on staking, withdrawal, or yield. There is no charge to refund.',
      ]},
      { h: '5. Mistaken Transfers', body: [
        'Tokens sent directly to the protocol contract address (not via the staking flow) cannot be recovered by VAYLA. Always use the official interface.',
      ]},
    ],
  },
};

const ORDER: { slug: keyof typeof DOCS; tag: string }[] = [
  { slug: 'terms',         tag: 'Core' },
  { slug: 'privacy',       tag: 'Core' },
  { slug: 'cookies',       tag: 'Core' },
  { slug: 'risk',          tag: 'Trading' },
  { slug: 'disclaimer',    tag: 'Trading' },
  { slug: 'refunds',       tag: 'Trading' },
  { slug: 'use',           tag: 'Conduct' },
  { slug: 'rights',        tag: 'Conduct' },
  { slug: 'compliance',    tag: 'Conduct' },
  { slug: 'dmca',          tag: 'Conduct' },
  { slug: 'accessibility', tag: 'Operations' },
  { slug: 'security',      tag: 'Operations' },
];

export function Legal() {
  const { slug } = useParams<{ slug?: string }>();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!slug) return <LegalIndex />;
  const doc = DOCS[slug];
  if (!doc) return <LegalNotFound />;
  return <LegalDocView doc={doc} slug={slug} />;
}

/* ── index ───────────────────────────────────────────────────────────── */

function LegalIndex() {
  const groups = ORDER.reduce<Record<string, typeof ORDER>>((acc, item) => {
    (acc[item.tag] ||= []).push(item);
    return acc;
  }, {});

  return (
    <main className="legal">
      <div className="mx-auto max-w-[920px] px-6 pt-24 pb-12 md:pt-32 md:pb-16">
        <span className="text-[11px] uppercase tracking-widest text-mint-400 font-mono">Legal</span>
        <h1 className="display text-5xl md:text-7xl mt-3 leading-[0.96] tracking-[-0.03em]">
          Plainly written. <span className="font-serif italic text-mint-400">Read once.</span>
        </h1>
        <p className="text-ink-2 mt-5 text-base md:text-lg max-w-[640px] leading-relaxed">
          We tried to write these the way we speak. They still cover what they need to cover.
          Pick a doc to read; each one is short.
        </p>
      </div>

      <div className="mx-auto max-w-[920px] px-6 pb-32 grid gap-10">
        {Object.entries(groups).map(([tag, items]) => (
          <section key={tag}>
            <div className="text-[11px] uppercase tracking-widest text-ink-3 font-mono mb-4">{tag}</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {items.map(it => {
                const d = DOCS[it.slug];
                return (
                  <Link key={it.slug} to={`/legal/${it.slug}`} className="card p-5 hover:border-mint-400/40 transition-colors group">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-mint-400 mb-2">{d.title}</div>
                    <p className="text-sm text-ink-2 leading-relaxed">{d.blurb}</p>
                    <div className="mt-3 text-xs text-ink-3 group-hover:text-mint-400 transition-colors">Read full document  &rsaquo;</div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

/* ── single doc ──────────────────────────────────────────────────────── */

function LegalDocView({ doc, slug }: { doc: LegalDoc; slug: string }) {
  return (
    <main className="legal">
      <div className="mx-auto max-w-[820px] px-6 pt-24 pb-12 md:pt-32 md:pb-12">
        <Link to="/legal" className="text-xs text-ink-3 hover:text-mint-400 font-mono uppercase tracking-widest">&lsaquo; All legal</Link>
        <span className="block text-[11px] uppercase tracking-widest text-mint-400 font-mono mt-6">Legal · /{slug}</span>
        <h1 className="display text-4xl md:text-6xl mt-3 leading-[0.98] tracking-[-0.02em]">{doc.title}</h1>
        <p className="text-ink-2 mt-4 text-base md:text-lg max-w-[640px] leading-relaxed">{doc.blurb}</p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-widest text-ink-3 font-mono">
          <span>Updated {doc.updated}</span>
          <span className="size-1 rounded-full bg-line-2" aria-hidden />
          <span>Effective {doc.effective}</span>
        </div>
      </div>

      <article className="mx-auto max-w-[820px] px-6 pb-24">
        <div className="card p-7 md:p-10">
          {doc.sections.map((s, i) => (
            <section key={i} className={i === 0 ? '' : 'mt-8 pt-8 border-t border-line-1'}>
              <h2 className="display text-xl md:text-2xl tracking-[-0.01em] text-ink-1">{s.h}</h2>
              <div className="mt-3 grid gap-3 text-ink-2 text-sm md:text-base leading-relaxed">
                {s.body.map((p, j) => <p key={j}>{p}</p>)}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 text-xs text-ink-3 font-mono uppercase tracking-widest text-center">
          Questions about this document: legal@vayla.xyz
        </div>
        <div className="mt-10 text-center">
          <Link to="/legal" className="btn btn-ghost">All legal documents</Link>
        </div>
      </article>
    </main>
  );
}

function LegalNotFound() {
  return (
    <main className="mx-auto max-w-[640px] px-6 py-32 text-center">
      <h1 className="display text-4xl">Document not found.</h1>
      <p className="text-ink-2 mt-3">That legal page does not exist.</p>
      <Link to="/legal" className="btn btn-mint mt-6 inline-flex">View all legal documents</Link>
    </main>
  );
}
