/**
 * Utility to get the latest whitepaper PDF URL from VAYLA link tree
 * Points directly to the current version of the whitepaper PDF
 */

const WHITEPAPER_URL = 'https://manager-vayla.github.io/VAYLA-link-tree/(EN)_VAYLA_WHITEPAPER_v3.8.pdf';
const LINK_TREE_URL = 'https://manager-vayla.github.io/VAYLA-link-tree/';

/**
 * Get the whitepaper PDF URL
 * Returns the direct link to the current whitepaper version
 */
export async function getWhitepaperUrl(): Promise<string> {
    return WHITEPAPER_URL;
}

/**
 * Get whitepaper URL - synchronous version (returns fallback for SSR)
 * For client-side, prefer async getWhitepaperUrl()
 * @returns Direct link to the current whitepaper PDF
 */
export function getWhitepaperUrlSync(): string {
    // For SSR/SSG, return direct PDF URL
    // Client components should use getWhitepaperUrl() async function
    return WHITEPAPER_URL;
}
