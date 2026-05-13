import { createConfig, http } from 'wagmi';
import { bsc } from 'wagmi/chains';
import { getDefaultConfig } from 'connectkit';

const projectId =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID) ||
  ((import.meta as { env?: { VITE_WALLETCONNECT_PROJECT_ID?: string } })?.env
    ?.VITE_WALLETCONNECT_PROJECT_ID) ||
  'demo-project-id';

const appUrl =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_BASE_URL) ||
  ((import.meta as { env?: { VITE_PUBLIC_BASE_URL?: string } })?.env?.VITE_PUBLIC_BASE_URL) ||
  'https://vayla.xyz';

/** $VAYLA is a BEP-20 token on BNB Smart Chain (chain id 56). */
export const wagmiConfig = createConfig(
  getDefaultConfig({
    appName: 'VAYLA',
    appDescription: 'The settlement layer for fan-funded equity.',
    appUrl,
    chains: [bsc],
    transports: {
      [bsc.id]: http(),
    },
    walletConnectProjectId: projectId,
  })
);
