import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectKitProvider } from 'connectkit';
import { wagmiConfig } from '@/lib/wagmi';
import { App } from './App';
import './styles/globals.css';
import './styles/original.css';
import './styles/react-fixes.css';
import './styles/nav-menu.css';
import './styles/production-audit.css';

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 30_000, retry: 1 } },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
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
            '--ck-modal-box-shadow': '0 0 0 1px #1A2E27, 0 18px 50px -10px rgba(31,184,154,0.35)',
          }}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
