'use client';

import React, { useEffect, useState } from 'react';
import { getWhitepaperUrl } from '@/utils/whitepaperUtils';

interface WhitepaperButtonProps {
    className?: string;
}

export default function WhitepaperButton({ className = '' }: WhitepaperButtonProps) {
    const [url, setUrl] = useState<string>('https://manager-vayla.github.io/VAYLA-link-tree/');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        const fetchUrl = async () => {
            try {
                const pdfUrl = await getWhitepaperUrl();
                if (mounted) {
                    setUrl(pdfUrl);
                }
            } catch (error) {
                console.error('Failed to fetch whitepaper URL:', error);
                // Fallback to link-tree
                if (mounted) {
                    setUrl('https://manager-vayla.github.io/VAYLA-link-tree/');
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

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={className}
        >
            View Whitepaper <span className="material-symbols-outlined text-[18px]">open_in_new</span>
        </a>
    );
}
