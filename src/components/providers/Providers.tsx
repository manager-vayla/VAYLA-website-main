'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import RouteChangeTracker from '@/components/atoms/RouteChangeTracker';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <RouteChangeTracker />
      {children}
    </QueryClientProvider>
  );
}

