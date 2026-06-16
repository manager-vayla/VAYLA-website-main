'use client';

import React from 'react';
import Link from 'next/link';

export default function StitchHeader() {
    return (
        <header className="fixed top-0 w-full z-50 bg-midnight/80 backdrop-blur-md border-b border-white/5 py-4 px-6 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <div className="w-7 h-7 bg-primary rounded shadow-[0_0_10px_rgba(112,243,216,0.5)] flex items-center justify-center">
                    <span className="material-symbols-outlined text-midnight text-lg font-bold">layers</span>
                </div>
                <span className="heading-bold text-lg uppercase tracking-tighter">VAYLA</span>
            </Link>
            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                <span className="material-symbols-outlined text-primary">menu</span>
            </button>
        </header>
    );
}
