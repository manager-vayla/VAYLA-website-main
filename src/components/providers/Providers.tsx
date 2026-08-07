'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useState } from 'react';

import RouteChangeTracker from '../atoms/RouteChangeTracker';


/** Public site provider; wallet authentication is intentionally not required. */
export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 30_000, retry: 1 } },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
      {children}
    </QueryClientProvider>
  );
}
