export function VaultsArena() {
  return (
    <section className="section" id="vaults">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow">VAYLA Arena</span>
          <h2 className="section-title">Discover campaigns, <em>participate openly.</em></h2>
          <p className="section-deck">
            VAYLA Arena is designed to surface creators, content and campaigns for community participation. The current public website does not publish a verified live catalogue or performance metrics here.
          </p>
        </div>
        <div className="vault-grid reveal">
          <Feature title="VAYLA Boost" body="Fan participation for creators, content and events under published campaign rules." />
          <Feature title="On-chain V Chart" body="Participation and prediction voting using selected global music chart data." />
          <Feature title="Create & Earn" body="Campaign-based submissions, community voting and participation-based rewards." />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <article className="vault-card">
      <div className="vault-head">
        <div className="vault-id"><strong>{title}</strong><span>Official v3.8 feature</span></div>
        <span className="vault-status"><span className="dot" /> Documented</span>
      </div>
      <p className="vault-tagline">{body}</p>
    </article>
  );
}
