/**
 * Utility to dynamically fetch the latest whitepaper PDF URL from VAYLA link tree
 * This ensures we always link to the most current version without hardcoding the filename
 */

const LINK_TREE_URL = 'https://manager-vayla.github.io/VAYLA-link-tree/';

/**
 * Fetch the latest whitepaper PDF URL from VAYLA link tree
 * Scrapes the HTML to find the actual PDF file
 */
export async function getWhitepaperUrl(): Promise<string> {
    try {
        const response = await fetch(LINK_TREE_URL, { 
            method: 'GET',
            headers: { 'Accept': 'text/html' }
        });
        
        if (!response.ok) throw new Error('Failed to fetch link tree');
        
        const html = await response.text();
        
        // Look for the whitepaper PDF link - matches patterns like:
        // href="(EN)_VAYLA_WHITEPAPER_v3.7__consolidated.pdf" or similar
        const whitepaperMatch = html.match(/href="([^"]*WHITEPAPER[^"]*\.pdf)"/i);
        
        if (whitepaperMatch && whitepaperMatch[1]) {
            const pdfPath = whitepaperMatch[1];
            // Ensure full URL if relative path
            const fullUrl = pdfPath.startsWith('http') 
                ? pdfPath 
                : new URL(pdfPath, LINK_TREE_URL).toString();
            console.log('Fetched whitepaper URL:', fullUrl);
            return fullUrl;
        }
        
        throw new Error('Whitepaper PDF not found in link tree');
    } catch (error) {
        console.error('Failed to fetch whitepaper URL dynamically:', error);
        // Return link-tree as fallback with a note
        throw error;
    }
}

/**
 * Get whitepaper URL - synchronous version (returns fallback for SSR)
 * For client-side, prefer async getWhitepaperUrl()
 * @returns Default link tree URL
 */
export function getWhitepaperUrlSync(): string {
    // For SSR/SSG, return generic link-tree URL
    // Client components should use getWhitepaperUrl() async function
    return LINK_TREE_URL;
}
