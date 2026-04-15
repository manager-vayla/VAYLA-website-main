'use client';

import React from 'react';

export default function StitchRoadmap() {
    return (
        <section className="px-6 py-24 bg-midnight">
            <div className="text-center mb-16">
                <div className="flex justify-center mb-8">
                    <span className="inline-block px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase border border-primary/50 rounded-full text-primary bg-primary/5 backdrop-blur-sm font-averta">
                        ROADMAP
                    </span>
                </div>
                <h2 className="text-3xl heading-bold mb-4 font-averta">Strategic Execution</h2>
                <p className="sub-copy text-sm max-w-[320px] mx-auto font-averta">A phased execution plan focused on real usage, token utility, and global expansion.</p>
            </div>
            <div className="space-y-12 relative max-w-sm md:max-w-2xl mx-auto mb-16">
                <div className="roadmap-connector !w-px !bg-primary/20"></div>
                <div className="relative pl-12">
                    <div className="neon-dot top-[28px] !left-[16.5px]"></div>
                    <div className="glass-card p-6 border-primary/20 bg-primary/5">
                        <span className="text-[10px] heading-bold text-primary uppercase mb-2 block tracking-widest leading-none font-averta">Phase 1</span>
                        <h4 className="text-lg heading-bold mb-2 text-white font-averta">Foundation</h4>
                        <p className="text-white/60 text-sm leading-relaxed font-averta">Launch VAYLA Arena core modules: Discovery, On-chain Chart, and VAYLA Boost. Establish token utility and on-chain participation flow.</p>
                    </div>
                </div>
                <div className="relative pl-12">
                    <div className="neon-dot top-[28px] !left-[16.5px]"></div>
                    <div className="glass-card p-6 border-primary/20 bg-primary/5">
                        <span className="text-[10px] heading-bold text-primary uppercase mb-2 block tracking-widest leading-none font-averta">Phase 2</span>
                        <h4 className="text-lg heading-bold mb-2 text-white font-averta">Expansion</h4>
                        <p className="text-white/60 text-sm leading-relaxed font-averta">Expand VAYLA Boost use cases for fandom, enhance creator onboarding, and scale community participation.</p>
                    </div>
                </div>
                <div className="relative pl-12">
                    <div className="neon-dot top-[28px] !left-[16.5px]"></div>
                    <div className="glass-card p-6 border-primary/20 bg-primary/5">
                        <span className="text-[10px] heading-bold text-primary uppercase mb-2 block tracking-widest leading-none font-averta">Phase 3</span>
                        <h4 className="text-lg heading-bold mb-2 text-white font-averta">Intelligence</h4>
                        <p className="text-white/60 text-sm leading-relaxed font-averta">Introduce AI-assisted discovery and participation logic across the ecosystem.</p>
                    </div>
                </div>
                <div className="relative pl-12">
                    <div className="neon-dot top-[28px] !left-[16.5px]"></div>
                    <div className="glass-card p-6 border-primary/20 bg-primary/5">
                        <span className="text-[10px] heading-bold text-primary uppercase mb-2 block tracking-widest leading-none font-averta">Phase 4</span>
                        <h4 className="text-lg heading-bold mb-2 text-white font-averta">Global Scale</h4>
                        <p className="text-white/60 text-sm leading-relaxed font-averta">Global exchange expansion, ecosystem partnerships, and long-term protocol evolution.</p>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <p className="text-primary italic text-sm font-averta max-w-[300px] mx-auto leading-relaxed">
                    Each phase is designed to reinforce real usage, transparency, and sustainable token circulation.
                </p>
            </div>
        </section>
    );
}
