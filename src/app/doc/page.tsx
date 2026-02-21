import React from 'react';
import Link from 'next/link';
import GlobalBreathingEffect from '@/components/atoms/GlobalBreathingEffect';
import StitchFooter from '@/components/organisms/StitchFooter';

export default function DocPage() {
    return (
        <main className="min-h-screen bg-midnight text-white pb-0">
            <GlobalBreathingEffect />
            <nav className="fixed top-0 left-0 right-0 z-[60] header-glass h-16 flex items-center px-4 bg-midnight/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center w-full relative">
                    <Link href="/" className="flex items-center justify-center w-10 h-10 -ml-2 text-white hover:text-primary transition-colors">
                        <span className="material-symbols-outlined !text-[28px]">chevron_left</span>
                    </Link>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <h1 className="text-[17px] font-bold text-white tracking-tight">VAYLA Documentation</h1>
                    </div>
                </div>
            </nav>
            <div className="pt-16 max-w-5xl mx-auto">
                <header className="px-6 pt-16 md:pt-24 pb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-10"></div>
                    <div className="max-w-xl mx-auto text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight font-averta">
                            VAYLA <span className="text-primary italic font-normal">Documentation</span>
                        </h2>
                        <p className="text-[19px] md:text-xl text-primary italic font-normal leading-snug font-averta">
                            Official documents and disclosures<br className="hidden md:block" />
                            providing a comprehensive overview<br className="hidden md:block" />
                            of the VAYLA project and ecosystem.
                        </p>
                    </div>
                </header>
                <div className="px-6 space-y-16 pb-24 max-w-xl mx-auto">
                    <section className="space-y-8">
                        <div className="flex md:justify-start justify-center">
                            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-center">
                                <span className="text-sm font-bold uppercase tracking-widest text-primary font-averta">Core Documents</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-[15px] leading-relaxed px-1 md:text-left text-center font-averta">
                            VAYLA is not designed as a speculative asset. It functions as the core utility, settlement, and circulation token across the VAYLA Arena.
                        </p>
                        <div className="grid gap-6">
                            <div className="glass-card p-8 rounded-2xl glow-subtle text-left border border-white/10 hover:border-primary/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-3 text-white font-averta">Whitepaper</h3>
                                <p className="text-white/60 text-sm mb-8 leading-relaxed font-averta">
                                    Comprehensive overview of VAYLA&apos;s vision, platform structure, token utility, and roadmap.
                                </p>
                                <a href="https://manager-vayla.github.io/VAYLA-link-tree/(EN)_VAYLA_WHITEPAPER_v3.5.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-primary text-midnight font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-averta">
                                    View Whitepaper <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                </a>
                            </div>
                            <div className="glass-card p-8 rounded-2xl text-left border border-white/10 hover:border-primary/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-3 text-white font-averta">Platform Overview</h3>
                                <p className="text-white/60 text-sm mb-8 leading-relaxed font-averta">
                                    High-level explanation of VAYLA Arena, including Discovery, On-chain Chart, and Funding modules.
                                </p>
                                <a href="/docs/1_(EN)VAYLA_Arena__Project_Overview.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-primary text-midnight font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-averta">
                                    View Overview <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                </a>
                            </div>
                            <div className="glass-card p-8 rounded-2xl text-left border border-white/10 hover:border-primary/30 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-3 text-white font-averta">Token Utility &amp; Economics</h3>
                                <p className="text-white/60 text-sm mb-8 leading-relaxed font-averta">
                                    Detailed explanation of how the VAYLA token is used, circulated, and settled within the ecosystem.
                                </p>
                                <a href="/docs/2_(EN)VAYLA_Token_Economics.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-primary text-midnight font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-averta">
                                    View Token Docs <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <div className="flex md:justify-start justify-center">
                            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-center">
                                <span className="text-sm font-bold uppercase tracking-widest text-primary font-averta">Governance &amp; Positioning</span>
                            </div>
                        </div>
                        <div className="glass-card p-8 rounded-2xl glow-subtle text-left border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-3 text-white font-averta">Legal &amp; Positioning Notes</h3>
                            <p className="text-white/60 text-sm mb-8 leading-relaxed font-averta">
                                Clarification of VAYLA&apos;s role as a participation infrastructure, not a financial product issuer.
                            </p>
                            <a href="/docs/4_(EN)VAYLA_Legal__Compliance.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-primary text-midnight font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-averta">
                                View Notes <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                            </a>
                        </div>
                    </section>

                    <section className="space-y-8 relative">
                        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-primary/5 blur-[80px] -z-10"></div>
                        <div className="flex md:justify-start justify-center">
                            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-center">
                                <span className="text-sm font-bold uppercase tracking-widest text-primary font-averta">Development &amp; Transparency</span>
                            </div>
                        </div>
                        <div className="glass-card p-8 rounded-2xl text-left border border-white/10 hover:border-primary/30 transition-all duration-300">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10 shadow-lg">
                                    <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white font-averta">GitHub Repository</h3>
                            </div>
                            <p className="text-white/60 text-sm mb-8 leading-relaxed font-averta">
                                Public disclosures, development structure, and ongoing project updates.
                            </p>
                            <a href="https://github.com/manager-vayla" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-primary text-midnight font-bold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-averta">
                                View GitHub <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                            </a>
                        </div>
                    </section>
                </div>

                <footer className="px-6 border-t border-white/5 bg-black/20 pb-0">
                    <div className="max-w-md mx-auto flex flex-col items-center">
                        <div className="flex flex-col items-center py-12">
                            <p className="text-white/70 text-sm leading-relaxed max-w-[280px] text-center mb-6 font-averta">
                                All documents are periodically updated to reflect the latest developments of the VAYLA project.
                            </p>
                            <p className="text-white/40 text-sm font-medium text-center font-averta">
                                ©2026 VAYLA. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
            <StitchFooter />
        </main>
    );
}
