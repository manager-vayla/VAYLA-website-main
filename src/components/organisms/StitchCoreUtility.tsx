'use client';

import React from 'react';

export default function StitchCoreUtility() {
    return (
        <section className="px-6 py-24 bg-charcoal">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-8">
                    <span className="inline-block px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase border border-primary/30 rounded-full text-primary bg-primary/5 backdrop-blur-sm">
                        THE VAYLA TOKEN
                    </span>
                </div>
                <h2 className="text-3xl heading-bold mb-4 font-averta">Core Utility &amp; Settlement</h2>
                <p className="text-white/85 text-sm max-w-[320px] mx-auto font-averta leading-relaxed text-center">
                    VAYLA is the core utility, settlement, and<br />
                    funding token of the VAYLA ecosystem.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
                <div className="glass-card p-8 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                        <span className="material-symbols-outlined text-primary">how_to_vote</span>
                    </div>
                    <h3 className="text-xl heading-bold mb-3">Participation &amp; Voting</h3>
                    <p className="card-copy text-sm">
                        Used for on-chain participation, voting, and community actions.
                    </p>
                </div>
                <div className="glass-card p-8 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                        <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                    </div>
                    <h3 className="text-xl heading-bold mb-3">Web3 Funding &amp; Settlement</h3>
                    <p className="card-copy text-sm">
                        The primary asset for fan-driven funding and on-chain settlement.
                    </p>
                </div>
                <div className="glass-card p-8 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 border border-primary/20">
                        <span className="material-symbols-outlined text-primary">sync_alt</span>
                    </div>
                    <h3 className="text-xl heading-bold mb-3">Rewards &amp; Circulation</h3>
                    <p className="card-copy text-sm">
                        Collected fees are redistributed through rewards and ecosystem circulation.
                    </p>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-primary italic text-sm font-averta font-normal tracking-tight leading-relaxed">
                    Built for discovery, participation, voting,<br />
                    and funding — on-chain.
                </p>
            </div>
        </section>
    );
}
