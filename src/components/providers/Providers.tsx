'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
import RouteChangeTracker from '../atoms/RouteChangeTracker';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={null}>
        <RouteChangeTracker />
      </Suspense>
      {children}
    </QueryClientProvider>
  );
}

