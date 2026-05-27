import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ConnectButton } from '@/components/ConnectButton';

const STEPS = [
  {
    n: '01',
    t: 'Get a wallet',
    short: 'Like a phone passcode for your money. Two minutes, free.',
    body: 'A crypto wallet is just an app on your phone or browser. We recommend Rainbow or MetaMask, both are free, take two minutes, and never ask for personal info. The wallet is yours; it lives on your device. We never see it. You can think of it like a debit card you generate yourself.',
    nudge: 'Don\'t have one? Open the connect button at the top, it shows a list with download links.',
  },
  {
    n: '02',
    t: 'Get some $VAYLA',
    short: 'The token you stake into vaults. You can buy it on Uniswap or any DEX.',
    body: 'You\'ll need $VAYLA, the protocol\'s token. It works like a chip you place at the table. You can swap ETH or USDC for $VAYLA on Uniswap, Aerodrome, or directly on the Marketplace tab. Start with whatever feels okay to lose, $20, $50, $200. There\'s no minimum.',
    nudge: 'New to swaps? The Marketplace tab has a one-click "Get $VAYLA" button.',
  },
  {
    n: '03',
    t: 'Pick a creator you believe in',
    short: 'Browse the Vaults. Read the thesis. Bet on the artist, not the meme.',
    body: 'Each creator has a Vault, their own on-chain account. The Vaults page shows their TVL (how much fan capital is behind them), 90-day APY (what fans have actually earned), and a tagline. If you genuinely believe a creator is going to make it, that\'s your signal.',
    nudge: 'Tip: high TVL is a popularity signal, but smaller vaults usually pay higher APY.',
  },
  {
    n: '04',
    t: 'Stake into their vault',
    short: 'You deposit $VAYLA. The creator now has fans betting on their growth.',
    body: 'Hit "Stake into Vault" on the creator\'s page, choose how much, and pick a lockup (none, 30 days, 90 days). Longer lockup = higher boost multiplier, up to +50% per year. You can also exit any time, just without the boost.',
    nudge: 'Your $VAYLA never leaves the smart contract. We can\'t touch it. Only you can withdraw.',
  },
  {
    n: '05',
    t: 'Earn while they earn',
    short: 'When the creator gets paid (streams, drops, sync, merch), you get a slice.',
    body: 'Every dollar that flows into the vault, Spotify royalties, NFT drops, sync licensing, merch, gets distributed pro-rata to every staker, continuously. There\'s no claim button. Yield streams in. Early stakers earn the most because they were there first.',
    nudge: 'Watch your dashboard. The "value" line moves in real time as the creator gets paid.',
  },
];

const FAQ: { q: string; a: string }[] = [
  {
    q: 'Do I need to be rich to start?',
    a: 'No. There\'s no minimum. You can stake $10 and it works the same way as someone staking $10,000. Your share of yield is proportional, that\'s it.',
  },
  {
    q: 'Is my money safe?',
    a: 'Your funds sit in audited smart contracts on Ethereum, Base, or Arbitrum, not on a company server. Nobody at VAYLA can touch them. The only risk is the creator under-performing your expectations (in which case the yield is just smaller). Contracts are audited by Spearbit and have an active Immunefi bounty.',
  },
  {
    q: 'What if the creator doesn\'t earn anything?',
    a: 'Then your stake earns no yield. Your principal ($VAYLA) is still there and you can exit any time. Worst case: you held a token for a while. There\'s no scenario where the creator running out of luck takes your principal.',
  },
  {
    q: 'Can I take my money out?',
    a: 'Yes, any time, unless you opted into a lockup. Even with a lockup, you can list your position on the Marketplace and someone else can buy it from you instantly.',
  },
  {
    q: 'What\'s the difference between this and just buying a creator\'s NFT?',
    a: 'NFTs are static. A vault position is a continuous claim on every dollar the creator earns going forward, streams, IP licensing, merch, sync deals. It compounds. NFTs don\'t.',
  },
  {
    q: 'What\'s "staking" anyway?',
    a: 'Staking is just locking a token into a smart contract that pays you yield in return. Like putting money into a high-yield savings account, except instead of a bank promising you a rate, the rate comes from real revenue a creator generates on-chain.',
  },
  {
    q: 'Why would a creator agree to this?',
    a: 'Because they keep more of their revenue, connect directly with fans through VAYLA Boost, and grow through community-driven discovery in VAYLA Arena—without giving up ownership of their work.',
  },
  {
    q: 'How do I know which vault to pick?',
    a: 'Easiest path: open the AI tab. Tell it your taste, budget, and risk tolerance. It surfaces 3-5 vaults that match. Or just browse the Vaults page and pick a creator whose music/art/work you actually love. Belief beats spreadsheets.',
  },
];

const GLOSSARY: { term: string; def: string }[] = [
  { term: 'Wallet', def: 'A small app that holds your tokens. Like an email account, but for money. You hold the password, no one else.' },
  { term: 'Stake', def: 'Locking tokens into a smart contract that pays you yield while they sit there.' },
  { term: 'Vault', def: 'The on-chain account for a single creator. Holds fan deposits, receives revenue, distributes yield.' },
  { term: 'Yield', def: 'The money your stake earns over time. Comes from creator revenue, paid pro-rata.' },
  { term: 'APY', def: 'Annualized yield rate. "12% APY" = if it kept paying at this rate for a year you\'d earn 12%.' },
  { term: 'Lockup', def: 'Optional commitment to leave your stake in for N days. Longer = higher boost.' },
  { term: 'Boost', def: 'Multiplier that increases your yield share. Up to 1.5× for long lockups.' },
  { term: 'Gas', def: 'Tiny fee paid to the network for each on-chain action. Usually under $1 on Base/Arb.' },
  { term: 'TVL', def: 'Total Value Locked. How much capital fans have collectively staked into a vault.' },
  { term: 'Pro-rata', def: 'Proportional. If you hold 5% of a vault, you get 5% of the yield.' },
  { term: 'Non-custodial', def: 'Means VAYLA never holds your tokens. Only your wallet can move them.' },
  { term: 'On-chain', def: 'Recorded on the public blockchain. Anyone can verify, no one can fake it.' },
];

export function Start() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="start-page">
      {/* HERO */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="absolute inset-x-0 -top-12 h-[460px] -z-10 pointer-events-none"
             style={{ background: 'radial-gradient(900px 380px at 50% 0%, rgba(112,243,216,0.18), transparent 70%)' }} />
        <div className="mx-auto max-w-[920px] px-6 text-center">
          <span className="pill mx-auto"><span className="size-1.5 rounded-full bg-mint-400" /> First time here? Read this.</span>
          <h1 className="display mt-6 text-5xl md:text-7xl leading-[0.96] tracking-[-0.03em]">
            Brand new? <span className="font-serif italic font-normal text-mint-400">Start here.</span>
          </h1>
          <p className="text-ink-2 mt-5 text-base md:text-lg max-w-[640px] mx-auto leading-relaxed">
            If "stake" and "yield" sound like another language, relax.
            This page walks you through what VAYLA is, what you can actually do, and how to start <em className="font-serif italic text-mint-400">today, with $50</em>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a href="#steps" className="btn btn-mint">Show me the 5 steps ↓</a>
            <Link to="/calculator" className="btn btn-ghost">Run the Brutal Math first</Link>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-[560px] mx-auto mt-12 text-center">
            <Stat n="2 min" l="To get a wallet" />
            <Stat n="$10" l="Min stake" />
            <Stat n="0%" l="Platform fee" />
          </div>
        </div>
      </section>

      {/* WHAT IS VAYLA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-widest text-mint-400 font-mono">01 · what it is</span>
            <h2 className="display mt-3 text-3xl md:text-5xl tracking-[-0.02em]">VAYLA, in <span className="font-serif italic text-mint-400">plain English.</span></h2>
          </div>
          <div className="card p-8 md:p-12 text-lg md:text-xl leading-relaxed text-ink-1 mb-8">
            <p>
              Imagine you spotted a small band when they had 200 fans on Spotify. Today they fill stadiums.
              You can't go back and "invest" in early-Taylor or pre-fame Bad Bunny, that money flowed to a label.
            </p>
            <p className="mt-5">
              VAYLA flips that. <em className="font-serif italic text-mint-400">Every creator gets a Vault.</em> Fans deposit
              tokens. Streams, drops, sync deals, merch, all of it pours back into the vault, and yield streams to the people who
              showed up first. <strong className="text-ink-0">No label. No middleman. No "platform" between fan and artist.</strong>
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <Compare label="It's like" right="Buying stock in your favorite musician" />
            <Compare label="It's not" right="Gambling, or a meme coin, or an NFT mint" />
            <Compare label="It feels like" right="Patreon, except you actually earn back" />
          </div>
        </div>
      </section>

      {/* 5 STEPS */}
      <section id="steps" className="py-16 md:py-24 bg-bg-1/30">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-widest text-mint-400 font-mono">02 · the path</span>
            <h2 className="display mt-3 text-3xl md:text-5xl tracking-[-0.02em]">How to start. <span className="font-serif italic text-mint-400">Five steps.</span></h2>
            <p className="text-ink-2 mt-3 max-w-[560px] mx-auto">No order. No hurry. You can pause at any step.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {STEPS.map((s, i) => <StepCard key={s.n} step={s} delay={i * 0.05} />)}
          </div>
        </div>
      </section>

      {/* CONCRETE EXAMPLE */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-widest text-mint-400 font-mono">03 · the math</span>
            <h2 className="display mt-3 text-3xl md:text-5xl tracking-[-0.02em]">An example, <span className="font-serif italic text-mint-400">in actual numbers.</span></h2>
          </div>
          <div className="card overflow-hidden">
            <div className="grid md:grid-cols-2 divide-line-1 md:divide-x divide-y md:divide-y-0">
              <div className="p-7 md:p-10">
                <div className="text-[10px] uppercase tracking-widest text-ink-3 font-mono">Setup</div>
                <p className="mt-2 text-ink-1">You stake <strong className="text-mint-400">1,000 $VAYLA</strong> (≈ $400 today) into <strong>Noor's Vault</strong>. Total in the vault: $80,000. Your share: 0.5%.</p>
                <ul className="mt-5 space-y-3 text-sm text-ink-2">
                  <li><Bullet/> Lockup: <span className="text-ink-1">90 days (boost 1.25×)</span></li>
                  <li><Bullet/> Vault APY (90D average): <span className="text-mint-400">26%</span></li>
                  <li><Bullet/> No fee. Non-custodial.</li>
                </ul>
              </div>
              <div className="p-7 md:p-10 bg-gradient-to-br from-mint-400/[0.06] via-transparent to-transparent">
                <div className="text-[10px] uppercase tracking-widest text-ink-3 font-mono">In month 1</div>
                <p className="mt-2 text-ink-1">Noor releases a single. Spotify pays <strong>$50K</strong> in royalties. A film licenses a track for <strong>$20K</strong>. Total month 1 revenue: $70K → flows into the vault → distributed pro-rata.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <BigStat n="$350" l="Your slice (0.5% of $70K)" />
                  <BigStat n="+$87" l="Boost on top (1.25×)" />
                </div>
                <p className="mt-5 text-xs text-ink-3">Streamed in continuously. No claim button. Visible in your dashboard live.</p>
              </div>
            </div>
            <div className="p-5 border-t border-line-1 bg-bg-2/40 text-center text-sm text-ink-3">
              <strong className="text-ink-1">After 90 days</strong>: position value ≈ $400 (principal) + ~$1,300 in streamed yield.
              You can exit, re-stake, or list on the Marketplace. Your call.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-bg-1/30">
        <div className="mx-auto max-w-[820px] px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-widest text-mint-400 font-mono">04 · honest answers</span>
            <h2 className="display mt-3 text-3xl md:text-5xl tracking-[-0.02em]">Questions you're <span className="font-serif italic text-mint-400">probably asking.</span></h2>
          </div>
          <div className="grid gap-2.5">
            {FAQ.map((f, i) => (
              <FaqRow key={i} q={f.q} a={f.a} open={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* GLOSSARY */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1080px] px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] uppercase tracking-widest text-mint-400 font-mono">05 · translations</span>
            <h2 className="display mt-3 text-3xl md:text-5xl tracking-[-0.02em]">Crypto words, <span className="font-serif italic text-mint-400">in human.</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {GLOSSARY.map(g => (
              <div key={g.term} className="card p-5 hover:border-mint-400/40 transition-colors">
                <div className="font-mono text-xs uppercase tracking-widest text-mint-400 mb-2">{g.term}</div>
                <p className="text-sm text-ink-2 leading-relaxed">{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-400/40 to-transparent" />
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <h2 className="display text-4xl md:text-6xl tracking-[-0.02em]">
            Ready? <span className="font-serif italic text-mint-400">Start with whatever feels safe.</span>
          </h2>
          <p className="text-ink-2 mt-5 text-lg max-w-[560px] mx-auto">
            $20 is fine. $200 is fine. The point is showing up early for someone you believe in.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <ConnectButton />
            <Link to="/vaults" className="btn btn-ghost">Browse vaults →</Link>
            <Link to="/ai" className="btn btn-ghost">Or ask the AI →</Link>
          </div>
          <p className="text-xs text-ink-3 mt-8 font-mono uppercase tracking-widest">
            non-custodial · audited · 0% platform fee
          </p>
        </div>
      </section>
    </main>
  );
}

/* ─── components ──────────────────────────────────────────────────────── */

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="display text-2xl md:text-3xl text-mint-400 tabular">{n}</div>
      <div className="text-[10px] uppercase tracking-widest text-ink-3 mt-1">{l}</div>
    </div>
  );
}

function Compare({ label, right }: { label: string; right: string }) {
  return (
    <div className="card p-5">
      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-3">{label}</div>
      <div className="mt-2 text-ink-1">{right}</div>
    </div>
  );
}

function StepCard({ step, delay }: { step: typeof STEPS[number]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.45, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className="card p-7 md:p-8 relative overflow-hidden group hover:border-mint-400/40 transition-colors"
    >
      <div aria-hidden className="absolute -top-12 -right-12 size-40 rounded-full opacity-30 group-hover:opacity-60 transition"
           style={{ background: 'radial-gradient(circle, rgba(112,243,216,0.5), transparent 70%)', filter: 'blur(40px)' }} />
      <div className="relative">
        <div className="flex items-baseline gap-3">
          <span className="display text-5xl text-mint-400/80 tabular">{step.n}</span>
          <h3 className="display text-2xl md:text-3xl">{step.t}</h3>
        </div>
        <p className="text-ink-1 mt-3 leading-relaxed">{step.short}</p>
        <p className="text-sm text-ink-2 mt-4 leading-relaxed">{step.body}</p>
        <div className="mt-5 pl-3 border-l-2 border-mint-400/40">
          <p className="text-xs text-ink-3 italic"><span className="font-mono uppercase tracking-widest text-mint-400 not-italic mr-2">Tip</span>{step.nudge}</p>
        </div>
      </div>
    </motion.div>
  );
}

function BigStat({ n, l }: { n: string; l: string }) {
  return (
    <div className="card p-4 text-center">
      <div className="display text-2xl text-mint-400 tabular">{n}</div>
      <div className="text-[10px] uppercase tracking-widest text-ink-3 mt-1 leading-tight">{l}</div>
    </div>
  );
}

function FaqRow({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className={'card overflow-hidden transition-colors ' + (open ? 'border-mint-400/40' : '')}>
      <button onClick={onClick} className="w-full text-left p-5 flex items-center justify-between gap-4">
        <span className={'text-base md:text-lg ' + (open ? 'text-ink-0' : 'text-ink-1')}>{q}</span>
        <span aria-hidden className={'text-mint-400 text-xl leading-none transition-transform ' + (open ? 'rotate-45' : '')}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="px-5 pb-5 text-ink-2 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Bullet() {
  return <span className="inline-block size-1.5 rounded-full bg-mint-400 mr-2 align-middle" />;
}
