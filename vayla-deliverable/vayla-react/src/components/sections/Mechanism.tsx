const STEPS = [
  { num: 'VAYLA Boost', title: <>A fan joins <em>VAYLA Boost.</em></>, body: 'VAYLA Boost is a participation feature for supporting content, creators and events. The v3.8 whitepaper describes USDT participation and a 1.5% base fee paid in VAYLA.' },
  { num: 'On-chain V Chart', title: <>Fans <em>vote</em> in the On-chain V Chart.</>, body: 'Selected global music chart data is used for prediction voting. Correct predictions may receive NFT rewards according to the applicable campaign rules.' },
  { num: 'Create & Earn', title: <>Creators <em>submit</em> work.</>, body: 'Create & Earn uses campaigns, submissions and community voting to give users and artists a way to participate in content creation.' },
  { num: 'Participation & rewards', title: <>Participation creates <em>records.</em></>, body: 'Rewards, NFTs and membership benefits are described as platform participation features. They are not guaranteed returns, equity, dividends or debt claims.' },
];

export function Mechanism() {
  return (
    <section className="section" id="mechanism">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow">Participation loops</span>
          <h2 className="section-title">How the <em>Arena</em> works.</h2>
          <p className="section-deck">The official v3.8 whitepaper describes three core participation loops and the reward context around them.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 reveal">
          {STEPS.map(step => <article key={step.num} className="card p-6"><div className="num">{step.num}</div><h3 className="display text-2xl mt-4">{step.title}</h3><p className="text-ink-2 mt-3 leading-relaxed">{step.body}</p></article>)}
        </div>
      </div>
    </section>
  );
}
