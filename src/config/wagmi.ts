import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bsc } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'VAYLA Protocol',
    projectId: 'YOUR_PROJECT_ID',
    chains: [bsc],
    ssr: false, // Since this is a SPA
});
