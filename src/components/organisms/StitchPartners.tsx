'use client';

import React from 'react';

export default function StitchPartners() {
    return (
        <section className="px-6 py-24 bg-charcoal">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-8">
                    <span className="inline-block px-5 py-1.5 text-[11px] font-bold tracking-[0.3em] uppercase border border-primary/40 rounded-full text-primary bg-primary/5 backdrop-blur-sm font-averta">
                        PARTNERS
                    </span>
                </div>
                <h2 className="text-3xl heading-bold mb-4 font-averta">Backers &amp; Builders</h2>
                <p className="sub-copy text-sm max-w-xs mx-auto font-averta text-center mb-4">Built by a team with experience across entertainment, Web3, and global markets.</p>
            </div>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
                <div className="glass-card p-6 border-primary/30 text-center">
                    <p className="heading-bold text-sm tracking-wide font-averta">Entertainment &amp; IP industry experience</p>
                </div>
                <div className="glass-card p-6 border-primary/30 text-center">
                    <p className="heading-bold text-sm tracking-wide font-averta">Web3 platform and token operations</p>
                </div>
                <div className="glass-card p-6 border-primary/30 text-center">
                    <p className="heading-bold text-sm tracking-wide font-averta">Global partnerships and<br />market execution.</p>
                </div>
                <div className="glass-card p-6 text-center mt-2 border-primary/60 border-[1px] bg-primary/[0.04] shadow-[0_0_35px_rgba(112,243,216,0.18)] ring-1 ring-primary/30 relative overflow-hidden group">
                    <div className="absolute -inset-20 bg-primary/3 blur-[120px] rounded-full opacity-40 pointer-events-none -z-10"></div>
                    <p className="heading-bold text-sm tracking-wide text-white font-averta uppercase mb-6 relative z-10">Strategic Partners Advisors<br />Ecosystem Contributors.</p>
                    <div className="relative overflow-hidden w-full z-10">
                        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 gap-0 no-scrollbar">
                            <div className="logo-carousel-item snap-center shrink-0">
                                <div className="logo-placeholder">
                                    <span className="font-bold tracking-tighter text-lg">NETFLIX</span>
                                </div>
                            </div>
                            <div className="logo-carousel-item snap-center shrink-0">
                                <div className="logo-placeholder">
                                    <span className="font-bold tracking-tighter text-lg">HYBE</span>
                                </div>
                            </div>
                            <div className="logo-carousel-item snap-center shrink-0">
                                <div className="logo-placeholder">
                                    <span className="font-bold tracking-tighter text-lg">SM ENT</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-1.5 mt-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(112,243,216,1)]"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        </div>
                    </div>
                </div>
                <p className="text-[14px] text-primary italic text-center mt-6 leading-relaxed font-averta px-4">
                    Additional partners and ecosystem participants<br />
                    will be progressively disclosed.
                </p>
            </div>
        </section>
    );
}
