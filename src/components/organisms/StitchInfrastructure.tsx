'use client';

import React from 'react';

export default function StitchInfrastructure() {
    return (
        <section className="px-6 py-24 bg-midnight">
            <div className="text-center mb-12">
                <div className="flex justify-center mb-8">
                    <span className="inline-block px-5 py-2 text-[11px] font-extrabold tracking-[0.25em] uppercase border border-primary/40 rounded-full text-primary bg-primary/5 backdrop-blur-sm font-averta">
                        WHY WEB3 FANDOM &amp; VAYLA BOOST
                    </span>
                </div>
                <h2 className="text-3xl heading-bold mb-4 font-averta">Evolving the Infrastructure</h2>
                <p className="text-white/70 text-[15px] max-w-[300px] mx-auto font-averta leading-relaxed text-center">
                    VAYLA does not replace the entertainment industry. It builds the participation infrastructure behind VAYLA Boost.
                </p>
            </div>
            <div className="flex flex-col items-center gap-0 relative max-w-sm md:max-w-2xl mx-auto">
                <div className="flex flex-col gap-3 w-full mb-2">
                    <div className="problem-card w-full relative z-10 muted-legacy-card border-white/20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-white/90 text-[16px]">shopping_bag</span>
                                <span className="text-[14px] heading-bold uppercase tracking-widest text-white/90 block font-averta">Traditional Fandom</span>
                            </div>
                            <div className="flex items-center px-2 py-0.5 rounded border border-white/60 bg-white/5">
                                <span className="text-[8px] font-bold text-white/95 uppercase tracking-[0.15em] font-averta">Legacy</span>
                            </div>
                        </div>
                        <p className="text-sm italic text-white/85 leading-relaxed font-averta">&quot;Consumption-driven engagement with limited transparency and no direct rewards.&quot;</p>
                    </div>
                    <div className="problem-card w-full relative z-10 muted-legacy-card border-white/20">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-white/90 text-[16px]">lock</span>
                                <span className="text-[14px] heading-bold uppercase tracking-wider text-white/90 block whitespace-nowrap font-averta">Centralized Platforms</span>
                            </div>
                            <div className="flex items-center px-2 py-0.5 rounded border border-white/60 bg-white/5">
                                <span className="text-[8px] font-bold text-white/95 uppercase tracking-[0.15em] font-averta">Legacy</span>
                            </div>
                        </div>
                        <p className="text-sm italic text-white/85 leading-relaxed font-averta">&quot;Closed systems where data, revenue, and decisions are controlled by intermediaries.&quot;</p>
                    </div>
                </div>
                <div className="flex items-center justify-center h-8 w-full relative z-20 -my-2">
                    <span className="material-symbols-outlined text-primary text-2xl drop-shadow-[0_0_12px_rgba(112,243,216,1)]">arrow_drop_down</span>
                </div>
                <div className="solution-card w-full relative z-10">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-[16px]">star</span>
                            <span className="text-[14px] heading-bold uppercase tracking-widest text-primary block font-averta">The VAYLA Approach</span>
                        </div>
                        <div className="flex items-center px-2 py-0.5 rounded border border-primary/50 bg-primary/10">
                            <span className="text-[8px] font-bold text-primary uppercase tracking-wider font-averta">Web 3.0</span>
                        </div>
                    </div>
                    <p className="text-sm italic text-white leading-relaxed font-averta">&quot;Participation-driven ecosystem designed to support high-frequency voting, and rewards.&quot;</p>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-primary text-[11.5px] font-averta leading-relaxed max-w-[280px] mx-auto italic font-normal opacity-90">
                    Web3 enables fandom participation to become transparent, autonomous, and economically meaningful.
                </p>
            </div>
        </section>
    );
}
