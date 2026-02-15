import React from 'react';
import Image from 'next/image';
import ImageSwiper from '@/components/molecules/ImageSwiper';
import RotatingCircle from '@/components/molecules/RotatingCircle';

export default function ArenaPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-32 md:pt-44 px-6 md:px-24">
            {/* Hero Section */}
            <div className="w-full max-w-5xl mb-16 mt-8 md:mt-0 text-center relative flex flex-col items-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

                {/* Mobile-first adjustments for Hero */}
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 px-4">
                    VAYLA Arena
                </h1>
                <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-center px-4">
                    The on-chain operating environment <br className="hidden md:block" />
                    where discovery, participation, voting, <br className="hidden md:block" />
                    and funding take place.
                </p>
            </div>

            {/* What is VAYLA Arena - Stacked on mobile */}
            <section className="w-full max-w-5xl mb-24 grid md:grid-cols-2 gap-8 md:gap-16 items-center px-4">
                <div className="order-2 md:order-1 relative w-full">
                    <ImageSwiper />
                </div>
                <div className="order-1 md:order-2 flex flex-col justify-center text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">What is VAYLA Arena?</h2>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                        VAYLA Arena is the core platform where the VAYLA token is actively used to enable <span className="text-teal-400">fandom discovery</span>, <span className="text-teal-400">on-chain participation</span>, community voting, and Web3-native funding.
                    </p>
                </div>
            </section>

            {/* Core Modules */}
            <section className="w-full max-w-6xl mb-24 px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-white tracking-tight">CORE MODULES</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'VAYLA Discovery',
                            description: 'Discover emerging artists, projects, and IPs through on-chain data and community-driven signals.',
                            icon: 'ri:compass-discover-line'
                        },
                        {
                            title: 'V-Onchain Chart',
                            description: 'Participate in transparent, community-powered charts driven by on-chain voting and engagement.',
                            icon: 'ri:bar-chart-box-line'
                        },
                        {
                            title: 'VAYLA 3.0 Funding',
                            description: 'Enable fandom-driven funding and IP-based projects through Web3-native, on-chain settlement.',
                            icon: 'ri:funds-box-line'
                        }
                    ].map((module, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.1)] transition-all duration-300 flex flex-col items-start relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-teal-500/10"></div>

                            <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 text-teal-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon={module.icon} width="28" height="28"></iconify-icon>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-300 transition-colors">{module.title}</h3>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed text-left group-hover:text-gray-300 transition-colors">{module.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works - Dynamic Flow */}
            <section className="w-full max-w-5xl mb-24 text-center">
                <h2 className="text-3xl font-bold mb-12 text-white">HOW IT WORKS</h2>
                <div className="w-full flex items-center justify-center py-10 bg-white/5 rounded-3xl border border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 to-transparent opacity-20"></div>
                    <RotatingCircle />
                </div>
            </section>

            {/* Ecosystem Positioning */}
            <section className="w-full max-w-4xl p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-white">ECOSYSTEM POSITIONING</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-center">
                    VAYLA Arena does not replace existing entertainment platforms. It serves as a participation and funding infrastructure built on Web3 principles.
                </p>
                <div className="text-xs text-gray-500 font-mono text-center">
                    Platform features will be progressively activated in line with the roadmap.
                    <br />
                    ©2026 VAYLA. All rights reserved.
                </div>
            </section>
        </main>
    );
}
