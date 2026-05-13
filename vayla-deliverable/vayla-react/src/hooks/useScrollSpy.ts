import { useEffect, useState } from 'react';

/**
 * Watches a list of element ids on the current page and returns the id of
 * whichever is most-prominently in viewport. Used by the nav to highlight
 * the active home section as the user scrolls.
 */
export function useScrollSpy(ids: string[], rootMargin = '-30% 0px -55% 0px'): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    elements.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [ids.join('|'), rootMargin]);

  return active;
}
