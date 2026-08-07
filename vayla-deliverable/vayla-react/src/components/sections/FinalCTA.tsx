import { Link } from 'react-router-dom';

export function FinalCTA() {
  return (
    <section className="final" id="launch">
      <div className="wrap">
        <h2>Read the facts first. <br /><em>Then participate thoughtfully.</em></h2>
        <p>Review the educational calculator, official whitepaper and public risk disclosures before using any VAYLA Arena feature.</p>
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          <Link to="/calculator" className="btn btn-mint">
            Open the Brutal Math
          </Link>
          <Link to="/whitepaper" className="btn btn-ghost">Read whitepaper v3.8</Link>
        </div>
      </div>
    </section>
  );
}
