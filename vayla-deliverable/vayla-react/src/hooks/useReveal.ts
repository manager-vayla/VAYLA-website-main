import { useEffect } from 'react';

// Mirrors the original `.reveal` IntersectionObserver, fades in on scroll-in.
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('is-in'); });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
