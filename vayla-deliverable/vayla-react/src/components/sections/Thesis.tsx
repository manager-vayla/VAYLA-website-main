export function Thesis() {
  return (
    <section className="section" id="thesis">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow">How participation works</span>
          <h2 className="section-title">Fans shape it. <em>Participation becomes visible.</em></h2>
          <p className="section-deck">
            VAYLA is designed to make fandom participation, creator support and community signals easier to record and verify. It complements the existing music industry rather than replacing it.
          </p>
        </div>
        <div className="thesis-grid reveal">
          <ThesisCard num="Participate" title={<>Fans <em>participate</em> openly.</>} body="Voting, support actions and creative contributions can be organized through campaign-based Arena flows." />
          <ThesisCard num="Discover" title={<>Creators get <em>visibility</em>.</>} body="VAYLA Arena is positioned as an entry point for AI creators, independent musicians and artists from underserved markets." />
          <ThesisCard num="Verify" title={<>Activity creates <em>signals</em>.</>} body="On-chain participation data can help communities and creators understand engagement over time. Rewards depend on the applicable platform or campaign rules." />
        </div>
      </div>
    </section>
  );
}

function ThesisCard({ num, title, body }: { num: string; title: React.ReactNode; body: string }) {
  return (
    <div className="thesis-card">
      <div className="num">{num}</div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
