'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function RouteChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page view on route change
    if (typeof window !== 'undefined' && typeof (window as any).gtag !== 'undefined') {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
      (window as any).gtag('config', 'G-ER53NBTHGD', {
        page_path: url,
        page_title: document.title,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
