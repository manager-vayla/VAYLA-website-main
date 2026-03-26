'use client';

import React from 'react';
import HoloDocEntry from '../molecules/HoloDocEntry';
import { getWhitepaperUrlSync } from '@/utils/whitepaperUtils';

const documents = [
    {
        title: 'Project Whitepaper',
        description: "Vision, platform structure, and roadmap.",
        icon: getWhitepaperUrlSync()
        link: 'https://manager-vayla.github.io/VAYLA-link-tree/#WHITEW',
        highlight: true
    },
    {
        title: 'Arena Overview',
        description: 'Discovery, On-chain Chart, and Funding modules.',
        icon: 'ri:layout-grid-line',
        link: '/docs/1_(EN)VAYLA_Arena__Project_Overview.pdf',
        highlight: false
    },
    {
        title: 'Token Economics',
        description: 'Utility, circulation, and settlement details.',
        icon: 'ri:coin-line',
        link: '/docs/2_(EN)VAYLA_Token_Economics.pdf'
    },
    {
        title: 'Legal Compliance',
        description: 'Participation infrastructure disclaimer.',
        icon: 'ri:scales-3-line',
        link: '/docs/4_(EN)VAYLA_Legal__Compliance.pdf'
    },
    {
        title: 'GitHub Repository',
        description: 'Development structure and updates.',
        icon: 'ri:github-fill',
        link: 'https://github.com/manager-vayla',
        highlight: true
    }
];

export default function HoloDocList() {
    return (
        <section className="w-full max-w-4xl mx-auto mb-32 px-4">
            <div className="mb-12 border-b border-white/20 pb-4 flex justify-between items-end">
                <h2 className="text-3xl md:text-5xl font-bold text-white font-['Space_Grotesk'] tracking-tighter uppercase">
                    Confidential <span className="text-gray-600">Dossier</span>
                </h2>
                <span className="font-mono text-xs text-gray-500 hidden md:block">
                    CLASSIFIED LEVEL 1
                </span>
            </div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg overflow-hidden">
                {/* Header Row */}
                <div className="flex justify-between p-4 bg-white/5 border-b border-white/10 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    <span>Document Name</span>
                    <span className="hidden md:block">Type / Origin</span>
                </div>

                {documents.map((doc, i) => (
                    <HoloDocEntry
                        key={i}
                        index={i}
                        {...doc}
                    />
                ))}
            </div>
        </section>
    );
}
