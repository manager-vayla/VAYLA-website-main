/**
 * Hook to fetch and cache the latest whitepaper URL
 * Handles dynamic URL resolution without hardcoding
 */

'use client';

import { useEffect, useState } from 'react';
import { getWhitepaperUrl, getWhitepaperUrlSync } from '@/utils/whitepaperUtils';

export function useWhitepaperUrl() {
    const [url, setUrl] = useState<string>(() => getWhitepaperUrlSync());
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let mounted = true;

        const fetchUrl = async () => {
            try {
                setIsLoading(true);
                const fetchedUrl = await getWhitepaperUrl();
                if (mounted) {
                    setUrl(fetchedUrl);
                    setError(null);
                }
            } catch (err) {
                if (mounted) {
                    setError(err instanceof Error ? err : new Error('Unknown error'));
                    // Keep the sync version as fallback
                    setUrl(getWhitepaperUrlSync());
                }
            } finally {
                if (mounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchUrl();

        return () => {
            mounted = false;
        };
    }, []);

    return { url, isLoading, error };
}
