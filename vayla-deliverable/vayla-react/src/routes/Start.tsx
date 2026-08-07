import { useState } from 'react';
import { Link } from 'react-router-dom';
import { VAYLA_EXTERNAL } from '@/lib/externalLinks';

const FAQS = [
  ['What is VAYLA Arena?', 'VAYLA Arena is the Beta platform described in the official v3.8 whitepaper. It organizes music fandom participation, creator support, voting and creation.'],
  ['What is VAYLA Boost?', 'VAYLA Boost is a fan participation feature for supporting content, creators and events. The v3.8 whitepaper describes a base fee of 1.5% paid in VAYLA and states that rewards are participation incentives, not investment returns.'],
  ['What is On-chain V Chart?', 'It is a participation and prediction voting system based on selected global music chart data. The whitepaper describes NFT rewards for correct predictions, subject to campaign rules.'],
  ['What is Create & Earn?', 'It is a campaign-based creation flow where users and artists submit content, the community votes and rewards are distributed according to the relevant campaign.'],
  ['What network does VAYLA use?', 'The official v3.8 whitepaper identifies BNB Smart Chain and the BEP-20 standard. Verify the token contract on BscScan before interacting.'],
  ['Are rewards guaranteed?', 'No. The official documentation does not guarantee profits, dividends, interest, appreciation or principal protection. Digital assets involve technical, operational, cybersecurity and regulatory risks.'],
];

export function Start() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main>
      <section className="section pt-28">
        <div className="wrap max-w-4xl">
          <span className="section-eyebrow">New here?</span>
          <h1 className="section-title">Understand the platform <em>before participating.</em></h1>
          <p className="section-deck">A concise guide to VAYLA Arena, its public facts and its participation features. Read the official whitepaper and legal disclosures for full context.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link to="/whitepaper" className="btn btn-mint">Read whitepaper v3.8</Link>
            <a href={VAYLA_EXTERNAL.linkHub} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Open official link hub</a>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap grid md:grid-cols-3 gap-4">
          <GuideCard title="Discover" body="Explore creators, content and community signals through VAYLA Arena." />
          <GuideCard title="Participate" body="Join the applicable Boost, voting or Create & Earn campaign under its published rules." />
          <GuideCard title="Verify" body="Check the whitepaper, contract, market listing status and current legal disclosures before acting." />
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap max-w-4xl">
          <div className="section-head">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="section-title">Plain answers. <em>No promises.</em></h2>
          </div>
          <div className="mt-6 divide-y divide-line-1 border-y border-line-1">
            {FAQS.map(([question, answer], index) => (
              <div key={question}>
                <button type="button" className="w-full py-5 flex items-center justify-between text-left" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}>
                  <span className="text-base md:text-lg">{question}</span><span className="text-mint-400 text-[10px] uppercase tracking-widest" aria-hidden>{open === index ? 'Close' : 'Open'}</span>
                </button>
                {open === index && <p className="pb-5 text-ink-2 leading-relaxed max-w-3xl">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap max-w-4xl">
          <div className="p-6 rounded-2xl border border-line-1 bg-bg-1/60">
            <h2 className="text-xl text-ink-0">Important risk context</h2>
            <p className="mt-3 text-ink-2 leading-relaxed">VAYLA token, Boost, voting, rewards, NFTs and membership benefits are described as platform utility or participation features. They are not presented as securities, equity, dividends or guaranteed returns.</p>
            <div className="flex flex-wrap gap-4 mt-5 text-sm">
              <Link to="/legal/risk" className="text-mint-400">Risk disclosure</Link>
              <Link to="/legal/disclaimer" className="text-mint-400">Disclaimer</Link>
              <a href={VAYLA_EXTERNAL.bscscanToken} target="_blank" rel="noopener noreferrer" className="text-mint-400">Verify contract</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function GuideCard({ title, body }: { title: string; body: string }) {
  return <article className="p-6 rounded-2xl border border-line-1 bg-bg-1/60"><h2 className="text-xl text-ink-0">{title}</h2><p className="mt-3 text-ink-2 leading-relaxed">{body}</p></article>;
}
