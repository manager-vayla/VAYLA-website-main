/**
 * Utility to dynamically fetch the latest whitepaper URL from VAYLA link tree
 * This ensures we always link to the most current version without hardcoding
 */

const LINK_TREE_URL = 'https://manager-vayla.github.io/VAYLA-link-tree/';
const WHITEPAPER_ANCHOR = '#WHITEW';

/**
 * Fetch the latest whitepaper URL from VAYLA link tree
 * Falls back to anchor link if dynamic fetch fails
 */
export async function getWhitepaperUrl(): Promise<string> {
    try {
        // Attempt to fetch the link tree page
        const response = await fetch(LINK_TREE_URL, { 
            method: 'GET',
            headers: { 'Accept': 'text/html' }
        });
        
        if (!response.ok) throw new Error('Failed to fetch link tree');
        
        const html = await response.text();
        
        // Look for the whitepaper PDF link - matches patterns like:
        // href=".../(EN)_VAYLA_WHITEPAPER_v*.pdf" or similar
        const whitepaperMatch = html.match(/href="([^"]*(?:WHITEPAPER|whitepaper)[^"]*\.pdf)"/i);
        
        if (whitepaperMatch && whitepaperMatch[1]) {
            const pdfPath = whitepaperMatch[1];
            // Ensure full URL if relative path
            return pdfPath.startsWith('http') 
                ? pdfPath 
                : new URL(pdfPath, LINK_TREE_URL).toString();
        }
        
        // Fallback to anchor link if PDF not found in HTML
        return LINK_TREE_URL + WHITEPAPER_ANCHOR;
    } catch (error) {
        console.warn('Failed to fetch whitepaper URL dynamically:', error);
        // Fallback to anchor link on error
        return LINK_TREE_URL + WHITEPAPER_ANCHOR;
    }
}

/**
 * Get whitepaper URL - synchronous version that returns anchor link
 * Use this for server-side rendering or when async is not available
 * @returns Anchor link to VAYLA link tree whitepaper section
 */
export function getWhitepaperUrlSync(): string {
    return LINK_TREE_URL + WHITEPAPER_ANCHOR;
}

/**
 * Whitepaper link object for easy reuse
 */
export const WHITEPAPER_LINK = {
    href: getWhitepaperUrlSync(),
    text: 'Whitepaper',
    target: '_blank',
    rel: 'noopener noreferrer'
} as const;
