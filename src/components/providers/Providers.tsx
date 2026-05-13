'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider } from 'connectkit';
import { Suspense, useState } from 'react';
import { WagmiProvider } from 'wagmi';

import RouteChangeTracker from '../atoms/RouteChangeTracker';

import { wagmiConfig } from '@/lib/wagmi';

/** Wallet UI (Nav ConnectKit/wagmi) runs during Next static generation — WagmiProvider must wrap the tree. */
export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { staleTime: 30_000, retry: 1 } },
      }),
  );

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          mode="dark"
          customTheme={{
            '--ck-font-family': '"Inter", system-ui, sans-serif',
            '--ck-border-radius': '14px',
            '--ck-primary-button-color': '#0A1310',
            '--ck-primary-button-background': '#3FE0BC',
            '--ck-primary-button-hover-background': '#9CFBE4',
            '--ck-body-background': '#0A1310',
            '--ck-body-color': '#E6F2EE',
            '--ck-body-color-muted': '#9FB5AE',
            '--ck-secondary-button-background': '#0E1A16',
            '--ck-modal-box-shadow':
              '0 0 0 1px #1A2E27, 0 18px 50px -10px rgba(31,184,154,0.35)',
          }}
        >
          <Suspense fallback={null}>
            <RouteChangeTracker />
          </Suspense>
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
