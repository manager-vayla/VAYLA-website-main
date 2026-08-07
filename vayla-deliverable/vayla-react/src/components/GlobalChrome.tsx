import { useEffect, useState } from 'react';
import { VAYLA_FACTS } from '@/lib/officialFacts';

export function GlobalChrome() {
  // Keep the server and first client render identical. The live UTC clock is
  // populated after hydration to avoid a timestamp-based hydration mismatch.
  const [time, setTime] = useState('UTC');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTime(formatClock(new Date()));
    const timer = setInterval(() => setTime(formatClock(new Date())), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? (root.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (matchMedia('(pointer: coarse)').matches) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    document.body.classList.add('has-mouse');
    const apply = () => {
      raf = 0;
      const spot = document.getElementById('bgSpot');
      if (spot) spot.style.transform = 'translate3d(' + (x - 700) + 'px, ' + (y - 700) + 'px, 0)';
      document.body.style.setProperty('--mx', x + 'px');
      document.body.style.setProperty('--my', y + 'px');
    };
    const onMove = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const onLeave = () => document.body.classList.remove('has-mouse');
    const onEnter = () => document.body.classList.add('has-mouse');
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
      <div className="bg-mesh" /><div className="bg-grid" /><div className="bg-dots-dim" />
      <div className="bg-orbs"><span /><span /><span /></div>
      <div className="bg-dots-bright" /><div className="bg-spot" id="bgSpot" /><div className="bg-noise" />
      <div className="scroll-progress"><div className="bar" style={{ width: progress + '%' }} /></div>
      <div className="statusbar">
        <div className="ticker-track">
          <div className="ticker-rail">
            <div className="ticker-set"><TickerItems /></div>
            <div className="ticker-set" aria-hidden><TickerItems /></div>
            <div className="ticker-set" aria-hidden><TickerItems /></div>
            <div className="ticker-set" aria-hidden><TickerItems /></div>
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
      <span>$VAYLA <strong>{VAYLA_FACTS.totalSupply}</strong></span><span className="sep">/</span>
      <span>NETWORK <strong>{VAYLA_FACTS.network}</strong></span><span className="sep">/</span>
      <span>STANDARD <strong>{VAYLA_FACTS.tokenStandard}</strong></span><span className="sep">/</span>
      <span>MARKET DATA <strong>UNAVAILABLE</strong></span><span className="sep">/</span>
      <span>WHITEPAPER <strong>{VAYLA_FACTS.whitepaperVersion}</strong></span><span className="sep">/</span>
    </>
  );
}

function formatClock(date: Date) {
  const pad = (value: number) => value.toString().padStart(2, '0');
  return date.getUTCFullYear() + '-' + pad(date.getUTCMonth() + 1) + '-' + pad(date.getUTCDate()) + ' | ' + pad(date.getUTCHours()) + ':' + pad(date.getUTCMinutes()) + ':' + pad(date.getUTCSeconds()) + ' UTC';
}
