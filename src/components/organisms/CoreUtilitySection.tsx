'use client';

import React from "react";

const CoreUtilitySection = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-16">
                    <span className="font-mono text-teal-500 text-xs tracking-widest uppercase mb-4 block">Core Utility & Settlement</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        The VAYLA Token
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
                        VAYLA is the core utility, settlement, and funding token of the VAYLA ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-xl font-bold text-white mb-4 font-['Space_Grotesk'] relative z-10">Participation & Voting</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            Used for on-chain participation, voting, and community actions.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-xl font-bold text-white mb-4 font-['Space_Grotesk'] relative z-10">Web3 Funding & Settlement</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            The primary asset for fan-driven funding and on-chain settlement.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 relative overflow-hidden group hover:border-teal-500/30 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-xl font-bold text-white mb-4 font-['Space_Grotesk'] relative z-10">Rewards & Circulation</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            Collected fees are redistributed through rewards and ecosystem circulation.
                        </p>
                        <p className="text-teal-500/60 text-sm mt-4 font-mono relative z-10">
                            Built for discovery, participation, voting, and funding — on-chain.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreUtilitySection;
