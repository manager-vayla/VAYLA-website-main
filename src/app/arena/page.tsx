'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlobalBreathingEffect from '@/components/atoms/GlobalBreathingEffect';
import swipe1 from '@/assets/arena_swipe_1.png';
import swipe2 from '@/assets/arena_swipe_2.png';
import swipe3 from '@/assets/arena_swipe_3.png';

export default function ArenaPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen bg-midnight text-white pb-0">
            <GlobalBreathingEffect />
            <header className="app-header relative border-b border-white/10 z-50">
                <Link href="/" className="absolute left-4 cursor-pointer flex items-center justify-center p-2">
                    <span className="material-symbols-outlined text-white text-2xl hover:text-primary transition-colors">chevron_left</span>
                </Link>
                <h1 className="text-white text-lg font-bold tracking-tight w-full text-center">VAYLA Arena</h1>
            </header>
            <section className="pt-16 pb-12 relative overflow-hidden">
                <header className="text-center mb-8 relative z-10">
                    <h1 className="text-5xl font-bold hero-title mb-2 tracking-tight">VAYLA Arena</h1>
                    <div className="sub-headline text-[var(--light-grey)] font-medium text-[0.95rem] leading-[1.4] max-w-[340px] mx-auto text-center opacity-80">
                        <p>The on-chain operating environment</p>
                        <p>where discovery, participation, voting,</p>
                        <p>and funding take place.</p>
                    </div>
                </header>
                <div className="relative flex flex-col items-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[400px] bg-primary opacity-10 blur-[120px] rounded-full"></div>
                    <div className="device-front">
                        <div className="device-inner">
                            <div className="device-screen relative overflow-hidden bg-black">
                                <div className="flex w-[300%] h-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}>
                                    <div className="w-1/3 h-full relative">
                                        <Image src={swipe1} alt="Music Tech" fill className="object-cover" unoptimized />
                                    </div>
                                    <div className="w-1/3 h-full relative">
                                        <Image src={swipe2} alt="Concert Hologram" fill className="object-cover" unoptimized />
                                    </div>
                                    <div className="w-1/3 h-full relative">
                                        <Image src={swipe3} alt="Token Fandom" fill className="object-cover" unoptimized />
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className={`pagination-dot ${activeIndex === 0 ? 'active' : ''}`}></div>
                            <div className={`pagination-dot ${activeIndex === 1 ? 'active' : ''}`}></div>
                            <div className={`pagination-dot ${activeIndex === 2 ? 'active' : ''}`}></div>
                        </div>
                        <div className="flex items-center gap-1.5 text-primary group cursor-pointer active:scale-95 transition-transform">
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] opacity-80">Swipe to explore</span>
                            <span className="material-symbols-outlined text-base">chevron_right</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-20 px-2 lg:px-6">
                <div className="flex justify-center mb-10">
                    <div className="inline-block px-10 py-3 rounded-full pill-glow bg-black/40 backdrop-blur-md">
                        <h2 className="text-primary text-[11px] font-bold uppercase tracking-[0.4em] text-center">What is VAYLA Arena?</h2>
                    </div>
                </div>
                <div className="premium-border-card p-8 mx-auto max-w-[380px] lg:max-w-xl relative">
                    <p className="text-white/80 text-center text-[0.88rem] lg:text-base font-medium tracking-normal leading-[1.6] relative z-10">
                        VAYLA Arena is the core platform<br className="lg:hidden" />
                        where the VAYLA token is actively<br className="lg:hidden" />
                        used to enable <span className="text-primary font-bold">fandom discovery</span>,<br className="lg:hidden" />
                        <span className="text-primary font-bold">on-chain participation</span>, <span className="text-primary font-bold">community</span><br className="lg:hidden" />
                        <span className="text-primary font-bold">voting</span>, and <span className="text-primary font-bold">Web3-native funding</span>.
                    </p>
                </div>
            </section>
            <section className="mb-16 px-6">
                <div className="flex justify-center mb-10">
                    <div className="inline-block px-8 py-3 rounded-full pill-glow bg-black/40 backdrop-blur-md">
                        <h2 className="text-primary text-[12px] font-bold uppercase tracking-[0.3em] text-center">CORE MODULES</h2>
                    </div>
                </div>
                <div className="space-y-6 max-w-[400px] lg:max-w-4xl lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-6 mx-auto">
                    <div className="gradient-border-card p-6 flex lg:flex-col items-start gap-5">
                        <div className="bg-black border border-primary p-3 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(113,245,210,0.2)] flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-3xl icon-accent">explore</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-white">VAYLA Discovery</h3>
                            <p className="text-white/70 text-sm opacity-80">Discover emerging artists, projects, and IPs through on-chain data and community-driven signals.</p>
                        </div>
                    </div>
                    <div className="gradient-border-card p-6 flex lg:flex-col items-start gap-5">
                        <div className="bg-black border border-primary p-3 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(113,245,210,0.2)] flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-3xl icon-accent">monitoring</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-white">V-Onchain Chart</h3>
                            <p className="text-white/70 text-sm opacity-80">Participate in transparent, community-powered charts driven by on-chain voting and engagement.</p>
                        </div>
                    </div>
                    <div className="gradient-border-card p-6 flex lg:flex-col items-start gap-5">
                        <div className="bg-black border border-primary p-3 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(113,245,210,0.2)] flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-3xl icon-accent">account_balance_wallet</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl mb-1 text-white">VAYLA 3.0 Funding</h3>
                            <p className="text-white/70 text-sm opacity-80">Enable fandom-driven funding and IP-based projects through Web3-native, on-chain settlement.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-16 px-6">
                <div className="flex justify-center mb-10">
                    <div className="inline-block px-10 py-3 rounded-full pill-glow bg-black/40 backdrop-blur-md">
                        <h2 className="text-primary text-[11px] font-bold uppercase tracking-[0.4em] text-center">HOW IT WORKS</h2>
                    </div>
                </div>
                <div className="infographic-container">
                    <div className="outer-ring"></div>
                    <div className="central-hub">
                        <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>grade</span>
                    </div>
                    <div className="orbit-wrapper">
                        <div className="node-item node-1">
                            <div className="glass-disc">
                                <span className="material-symbols-outlined text-primary text-2xl">search</span>
                            </div>
                            <span className="node-label">Discover</span>
                        </div>
                        <div className="node-item node-2">
                            <div className="glass-disc">
                                <span className="material-symbols-outlined text-primary text-2xl">hub</span>
                            </div>
                            <span className="node-label">Participate</span>
                        </div>
                        <div className="node-item node-3">
                            <div className="glass-disc">
                                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>how_to_vote</span>
                            </div>
                            <span className="node-label">Vote</span>
                        </div>
                        <div className="node-item node-4">
                            <div className="glass-disc">
                                <span className="material-symbols-outlined text-primary text-2xl">account_balance_wallet</span>
                            </div>
                            <span className="node-label">Fund</span>
                        </div>
                        <div className="node-item node-5">
                            <div className="glass-disc">
                                <span className="material-symbols-outlined text-primary text-2xl">payments</span>
                            </div>
                            <span className="node-label">Earn</span>
                        </div>
                        <div className="node-item node-6">
                            <div className="glass-disc">
                                <span className="material-symbols-outlined text-primary text-2xl">cached</span>
                            </div>
                            <span className="node-label">Reinvest</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-24 px-6">
                <div className="glass-card-premium p-8 max-w-[400px] lg:max-w-2xl mx-auto border-[1px] border-primary">
                    <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-tight text-center">ECOSYSTEM POSITIONING</h2>
                    <p className="text-white/70 leading-relaxed text-[1.1rem] opacity-90 text-center">
                        VAYLA Arena does not replace<br className="lg:hidden" />
                        existing entertainment platforms.<br className="lg:hidden" />
                        It serves as a participation and<br className="lg:hidden" />
                        funding infrastructure built on<br className="lg:hidden" />
                        Web3 principles.
                    </p>
                </div>
                <div className="mt-10 mb-6 text-center">
                    <p className="text-primary italic font-normal text-[1rem] leading-[1.6]">
                        Platform features will be progressively<br />
                        activated in line with the roadmap.
                    </p>
                </div>
            </section>
        </main>
    );
}
