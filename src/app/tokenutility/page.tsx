import React from 'react';
import Link from 'next/link';
import GlobalBreathingEffect from '@/components/atoms/GlobalBreathingEffect';

export default function TokenUtilityPage() {
    return (
        <main className="min-h-screen bg-midnight text-white pb-0">
            <GlobalBreathingEffect />


            <div className="px-6 pb-12 space-y-12 max-w-5xl mx-auto">
                <section className="pt-16 md:pt-24 text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight font-averta">
                        VAYLA Token <span className="text-primary italic">Utility</span>
                    </h1>
                    <p className="text-[17px] md:text-xl leading-relaxed text-primary italic font-normal max-w-xl mx-auto font-averta px-4">
                        The core utility and settlement token powering participation, funding, and circulation within the VAYLA ecosystem.
                    </p>
                </section>

                <section>
                    <div className="glass-card glow-mint rounded-[2rem] p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                        <div className="inline-block px-4 py-1.5 border border-primary/30 bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-[0.25em] rounded-full mb-6 relative z-10 backdrop-blur-sm">
                            What is the VAYLA Token?
                        </div>
                        <p className="text-white/80 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto relative z-10 font-averta">
                            VAYLA is not designed as a speculative asset. It functions as the core utility, settlement, and circulation token across the <span className="text-white font-bold">VAYLA Arena</span>.
                        </p>
                    </div>
                </section>

                <section className="space-y-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center">
                            <div className="px-5 py-2 border border-primary/30 bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-[0.25em] rounded-full mb-4">
                                The Vayla Token
                            </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-averta">Core Utilities</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-charcoal border border-white/5 p-6 rounded-2xl group transition-all duration-300 hover:border-primary/30">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-outlined text-primary">how_to_vote</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white font-averta">Participation &amp; Voting</h3>
                            <p className="text-sm text-white/60 leading-relaxed font-averta">
                                Used for on-chain participation, community voting, and engagement actions within the VAYLA Arena.
                            </p>
                        </div>
                        <div className="bg-charcoal border border-white/5 p-6 rounded-2xl group transition-all duration-300 hover:border-primary/30">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-outlined text-primary">payments</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white font-averta">Funding &amp; Settlement</h3>
                            <p className="text-sm text-white/60 leading-relaxed font-averta">
                                Primary asset for fandom-driven funding and IP-based projects, with transparent on-chain settlement.
                            </p>
                        </div>
                        <div className="bg-charcoal border border-white/5 p-6 rounded-2xl group transition-all duration-300 hover:border-primary/30">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-outlined text-primary">cached</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white font-averta">Rewards &amp; Circulation</h3>
                            <p className="text-sm text-white/60 leading-relaxed font-averta">
                                Collected fees are redistributed through rewards, ecosystem incentives, and continuous circulation.
                            </p>
                        </div>
                        <div className="bg-charcoal border border-white/5 p-6 rounded-2xl group transition-all duration-300 hover:border-primary/30">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                <span className="material-symbols-outlined text-primary">smart_toy</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white font-averta">Future Utility (AI/AGI)</h3>
                            <p className="text-sm text-white/60 leading-relaxed font-averta">
                                Designed to support future AI and AGI participation as verified contributors within the ecosystem.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 pb-4">
                    <a href="https://bscscan.com/token/0x3b6b2593475FC2Bf546F237Fd401D63a655cE53f" target="_blank" rel="noopener noreferrer" className="group p-6 bg-charcoal border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(112,243,216,0.1)]">
                        <span className="iconify text-4xl text-white/50 group-hover:text-primary transition-colors" data-icon="simple-icons:binance"></span>
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/80 group-hover:text-white font-averta">BSCScan</span>
                    </a>
                    <a href="https://www.coingecko.com/en/coins/vayla-2" target="_blank" rel="noopener noreferrer" className="group p-6 bg-charcoal border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(112,243,216,0.1)]">
                        <span className="iconify text-4xl text-white/50 group-hover:text-primary transition-colors" data-icon="simple-icons:coingecko"></span>
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/80 group-hover:text-white font-averta">CoinGecko</span>
                    </a>
                    <a href="https://coinmarketcap.com/currencies/vayla/" target="_blank" rel="noopener noreferrer" className="group p-6 bg-charcoal border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(112,243,216,0.1)]">
                        <span className="iconify text-4xl text-white/50 group-hover:text-primary transition-colors" data-icon="simple-icons:coinmarketcap"></span>
                        <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/80 group-hover:text-white font-averta">CoinMarketCap</span>
                    </a>
                </section>

                <section className="py-12 glass-card rounded-[2.5rem] relative overflow-hidden border border-white/10 bg-white/[0.02]">
                    <div className="absolute inset-0 bg-primary/5 opacity-10 pointer-events-none"></div>
                    <div className="text-center mb-10 relative z-10">
                        <h2 className="text-2xl font-black tracking-[0.2em] uppercase text-white font-averta drop-shadow-md">Utility Flow</h2>
                    </div>
                    <div className="flex flex-col items-center gap-2 px-8 relative z-10 max-w-sm mx-auto">
                        <div className="w-full bg-charcoal/80 backdrop-blur-md border border-white/10 shadow-lg py-5 px-6 rounded-2xl text-center">
                            <span className="text-sm font-black tracking-widest uppercase text-white font-averta">PARTICIPATION</span>
                        </div>
                        <span className="material-symbols-outlined text-primary text-2xl drop-shadow-[0_0_8px_rgba(112,243,216,0.8)] py-1">arrow_downward</span>
                        <div className="w-full bg-charcoal/80 backdrop-blur-md border border-white/10 shadow-lg py-5 px-6 rounded-2xl text-center">
                            <span className="text-sm font-black tracking-widest uppercase text-white font-averta">FEES &amp; SETTLEMENT</span>
                        </div>
                        <span className="material-symbols-outlined text-primary text-2xl drop-shadow-[0_0_8px_rgba(112,243,216,0.8)] py-1">arrow_downward</span>
                        <div className="w-full bg-charcoal/80 backdrop-blur-md border border-white/10 shadow-lg py-5 px-6 rounded-2xl text-center">
                            <span className="text-sm font-black tracking-widest uppercase text-white font-averta">FUNDING &amp; REWARDS</span>
                        </div>
                        <span className="material-symbols-outlined text-primary text-2xl drop-shadow-[0_0_8px_rgba(112,243,216,0.8)] py-1">arrow_downward</span>
                        <div className="w-full bg-charcoal/80 backdrop-blur-md border border-white/10 shadow-lg py-5 px-6 rounded-2xl text-center">
                            <span className="text-sm font-black tracking-widest uppercase text-white font-averta">CIRCULATION</span>
                        </div>
                    </div>
                </section>

                <div className="space-y-8 pb-16">
                    <section className="px-0">
                        <div className="bg-charcoal border border-white/10 rounded-3xl p-8 compliance-border relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
                            <div className="flex flex-col items-center gap-5">
                                <h2 className="text-xl font-extrabold tracking-[0.2em] text-white uppercase font-averta text-center">Positioning &amp; Compliance</h2>
                                <p className="text-white/80 text-[15px] leading-relaxed text-center font-averta">
                                    The VAYLA token enables platform participation and settlement. It does not represent ownership, profit-sharing rights, or financial guarantees. Usage strictly within the VAYLA Arena.
                                </p>
                            </div>
                        </div>
                    </section>
                    <p className="text-[15px] leading-relaxed text-primary italic font-normal text-center font-averta">
                        Token utility is directly tied to real platform<br className="hidden md:block" />usage within the VAYLA Arena.
                    </p>
                </div>
            </div>
        </main>
    );
}
