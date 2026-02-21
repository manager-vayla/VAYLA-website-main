'use client';

import React from 'react';
import Link from 'next/link';

export default function StitchHero() {
    return (
        <section className="relative px-6 pt-32 pb-24 overflow-hidden bg-midnight">
            <div className="v-icon-container opacity-60">
                <div className="v-icon-inner"></div>
                <div className="absolute inset-0 hero-v-glow"></div>
            </div>
            <div className="relative z-10 max-w-md mx-auto text-center">
                <span className="inline-block px-4 py-1.5 mb-8 text-[11px] font-bold tracking-[0.25em] uppercase border border-primary/40 rounded-full text-primary bg-midnight/60 backdrop-blur-sm">
                    The Future of Fandom Economy
                </span>
                <h1 className="text-4xl sm:text-5xl heading-bold leading-[1.05] mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    The Protocol for <br /><span className="text-primary italic font-normal">Borderless</span> Fandom.
                </h1>
                <p className="sub-copy text-[17px] mb-40 max-w-[340px] mx-auto drop-shadow-lg leading-relaxed text-center font-averta italic">
                    A Web3-native fandom platform<br />
                    where humans, creators, and<br />
                    AI/AGI participate together.
                </p>
                <p className="text-primary text-[17px] font-bold uppercase tracking-[0.2em] mb-12 mt-[-1.5rem] font-averta leading-relaxed mx-auto text-center neon-text-glow">
                    THE UTILITY TOKEN POWERING<br />THE NEXT-GEN FANDOM ECONOMY
                </p>
                <div className="flex flex-col gap-4">
                    <Link href="/arena" className="bg-primary text-midnight heading-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(112,243,216,0.3)]">
                        Explore VAYLA Arena <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                    <Link href="/tokenutility" className="bg-transparent backdrop-blur-md border-2 border-primary text-primary heading-bold flex items-center justify-center py-4 rounded-xl hover:bg-primary/5 transition-colors">
                        Token Utility
                    </Link>
                    <a href="https://manager-vayla.github.io/VAYLA-link-tree/" target="_blank" rel="noopener noreferrer" className="bg-transparent backdrop-blur-md border border-white/20 text-white/80 heading-bold flex items-center justify-center py-3 rounded-xl hover:bg-white/5 transition-colors mt-2 text-sm uppercase tracking-widest">
                        Official Linktree
                    </a>
                </div>
            </div>
        </section>
    );
}
