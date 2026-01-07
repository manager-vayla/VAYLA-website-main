import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { polygon } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'VAYLA Protocol',
    projectId: 'YOUR_PROJECT_ID',
    chains: [polygon],
    ssr: false, // Since this is a SPA
});
