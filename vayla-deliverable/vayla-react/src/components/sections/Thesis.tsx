export function Thesis() {
  return (
    <section className="section" id="thesis">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow"><span className="num">01</span> Thesis</span>
          <h2 className="section-title">Fans built it. <em>They should own a piece.</em></h2>
          <p className="section-deck">
            Every creator economy platform extracts upside from the people who created it. Spotify pays per-stream pennies, Patreon takes 8%, labels keep masters. VAYLA flips that. Pro-rata ownership, on-chain, paid out automatically.
          </p>
        </div>

        <div className="thesis-grid reveal">
          <div className="thesis-card">
            <div className="num">01 / SIGNAL</div>
            <svg className="glyph" viewBox="0 0 40 40" fill="none" stroke="#70F3D8" strokeWidth="1.4">
              <circle cx="20" cy="20" r="3" fill="#70F3D8" />
              <circle cx="20" cy="20" r="9" />
              <circle cx="20" cy="20" r="15" />
            </svg>
            <h3>Fans <em>signal</em> early.</h3>
            <p>The first 1,000 fans of every breakout artist are unmistakable on-chain: streams, attendance, drops bought. VAYLA reads that signal and rewards it.</p>
          </div>
          <div className="thesis-card">
            <div className="num">02 / STAKE</div>
            <svg className="glyph" viewBox="0 0 40 40" fill="none" stroke="#70F3D8" strokeWidth="1.4">
              <rect x="6" y="14" width="28" height="20" rx="2" />
              <path d="M6 22h28" />
              <circle cx="20" cy="11" r="4" />
            </svg>
            <h3>Capital <em>follows</em> conviction.</h3>
            <p>One transaction opens a Vault position. Funds stake against future creator earnings. The protocol streams the yield, not the platform.</p>
          </div>
          <div className="thesis-card">
            <div className="num">03 / COMPOUND</div>
            <svg className="glyph" viewBox="0 0 40 40" fill="none" stroke="#70F3D8" strokeWidth="1.4">
              <path d="M6 30 L14 22 L20 26 L34 10" />
              <circle cx="34" cy="10" r="2.5" fill="#70F3D8" />
              <path d="M28 10h6v6" />
            </svg>
            <h3>Early belief <em>compounds</em>.</h3>
            <p>Vault positions accrue from streams, drops and IP licensing. Held positions earn boost multipliers. The earliest believers compound the longest.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
