import React from 'react';
import HoloDocList from '@/components/organisms/HoloDocList';

export default function DocPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-32 md:pt-44 px-6 md:px-24">
            {/* Header */}
            <div className="w-full max-w-5xl mb-20 mt-8 md:mt-0 text-center relative flex flex-col items-center px-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                    VAYLA Documentation
                </h1>
                <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                    Official documents and disclosures <br className="hidden md:block" />
                    providing a comprehensive overview of <br className="hidden md:block" />
                    the VAYLA project and ecosystem.
                </p>
            </div>

            {/* Document Links */}
            <HoloDocList />

            {/* Footer Note */}
            <div className="text-center text-gray-500 text-sm max-w-2xl mx-auto font-mono">
                <p className="mb-4">
                    All documents are periodically updated to reflect the latest developments of the VAYLA project.
                </p>
                <p>
                    VAYLA is not designed as a speculative asset. It functions as the core utility, settlement, and circulation token across the VAYLA Arena.
                </p>
                <br />
                ©2026 VAYLA. All rights reserved.
            </div>
        </main>
    );
}
