import { useEffect, useState } from 'react';

// Renders the body-level decorative layers + scroll progress + statusbar that
// the original index.html had. Keeps the same DOM order so original.css selectors apply.
export function GlobalChrome() {
  const [time, setTime] = useState(() => formatClock(new Date()));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTime(formatClock(new Date())), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cursor-follow spotlight + dot illumination.
  // - #bgSpot is 1100x1100; center it under the cursor via translate3d.
  // - body.has-mouse fades in .bg-dots-bright (opacity 0 → 1).
  // - --mx, --my drive the radial-gradient mask on .bg-dots-bright (220px halo).
  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return; // skip on touch devices
    let raf = 0;
    let nextX = 0, nextY = 0;
    document.body.classList.add('has-mouse');

    function apply() {
      raf = 0;
      const spot = document.getElementById('bgSpot');
      if (spot) spot.style.transform = `translate3d(${nextX - 700}px, ${nextY - 700}px, 0)`;
      document.body.style.setProperty('--mx', nextX + 'px');
      document.body.style.setProperty('--my', nextY + 'px');
    }
    function onMove(e: MouseEvent) {
      nextX = e.clientX;
      nextY = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    }
    function onLeave() { document.body.classList.remove('has-mouse'); }
    function onEnter() { document.body.classList.add('has-mouse'); }

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.body.classList.remove('has-mouse');
    };
  }, []);

  return (
    <>
      <div className="bg-mesh" />
      <div className="bg-grid" />
      <div className="bg-dots-dim" />
      <div className="bg-orbs"><span /><span /><span /></div>
      <div className="bg-dots-bright" />
      <div className="bg-spot" id="bgSpot" />
      <div className="bg-noise" />

      <div className="scroll-progress"><div className="bar" style={{ width: progress + '%' }} /></div>

      <div className="statusbar">
        <div className="ticker-track">
          {/* Six identical ticker-sets so the rail comfortably exceeds 2× viewport
              even on wide displays. The keyframe translates by exactly 1/6 (one
              set width) per cycle, so the loop is seamless and there is never
              empty space on the right edge. */}
          <div className="ticker-rail">
            <div className="ticker-set"><TickerItems /></div>
            <div className="ticker-set" aria-hidden="true"><TickerItems /></div>
            <div className="ticker-set" aria-hidden="true"><TickerItems /></div>
            <div className="ticker-set" aria-hidden="true"><TickerItems /></div>
            <div className="ticker-set" aria-hidden="true"><TickerItems /></div>
            <div className="ticker-set" aria-hidden="true"><TickerItems /></div>
          </div>
        </div>
        <span className="clock">{time}</span>
      </div>
    </>
  );
}

function TickerItems() {
  return (
    <>
      <span>$VAYLA <strong>$0.4128</strong> <span className="up">↑ 12.4%</span></span><span className="sep">/</span>
      <span>TVL <strong>$48.21M</strong> <span className="up">↑ 4.8%</span></span><span className="sep">/</span>
      <span>VAULTS <strong>1,283</strong> <span className="up">↑ 41 / 24H</span></span><span className="sep">/</span>
      <span>HOLDERS <strong>57,418</strong> <span className="up">↑ 218</span></span><span className="sep">/</span>
      <span>VOLUME 24H <strong>$3.92M</strong> <span className="up">↑ 18.7%</span></span><span className="sep">/</span>
      <span>GAS <strong>14 GWEI</strong></span><span className="sep">/</span>
    </>
  );
}

function formatClock(d: Date) {
  const pad = (n: number) => n.toString().padStart(2, '0');
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} · ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`;
}
