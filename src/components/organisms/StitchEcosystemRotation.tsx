'use client';

import React from 'react';

export default function StitchEcosystemRotation() {
    return (
        <section className="px-6 py-24 bg-midnight relative overflow-hidden min-h-[700px]">
            <div className="absolute inset-0 eco-glow-bg"></div>
            <div className="text-center mb-12 relative z-30">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/80 mb-3 block font-averta">VAYLA Symmetrical Ecosystem Rotation</span>
                <h2 className="text-3xl heading-bold mb-4 font-averta">How the VAYLA Cycle Works</h2>
                <p className="sub-copy text-sm max-w-xs mx-auto font-averta">A continuous on-chain participation loop powered by the VAYLA token.</p>
            </div>
            <div className="relative w-full h-[400px] flex items-center justify-center">
                <div className="data-flow-ring-perfect"></div>
                <div className="data-flow-ring-perfect opacity-30 rotate-180 scale-[1.05]"></div>
                <div className="central-hub-wrapper">
                    <div className="central-pulse !w-24 !h-24"></div>
                    <div className="central-pulse-inner !w-16 !h-16"></div>
                    <div className="central-hub-core !w-14 !h-14">
                        <span className="material-symbols-outlined text-primary text-2xl font-bold">star</span>
                    </div>
                </div>
                <div className="eco-orbit-wrapper">
                    <div className="eco-orbit-container">
                        <div className="eco-node" style={{ top: '0%', left: '50%' }}>
                            <div className="eco-node-content">
                                <div className="eco-bubble shadow-[0_0_20px_rgba(112,243,216,0.5)] !border-primary">
                                    <div className="absolute inset-[-10px] rounded-full border border-primary/10 border-t-primary/40 -rotate-45"></div>
                                    <span className="material-symbols-outlined text-primary text-2xl">travel_explore</span>
                                </div>
                                <span className="eco-title">Discover</span>
                            </div>
                        </div>
                        <div className="eco-node" style={{ top: '25%', left: '93.3%' }}>
                            <div className="eco-node-content">
                                <div className="eco-bubble">
                                    <div className="absolute inset-[-10px] rounded-full border border-primary/10 border-t-primary/40 -rotate-45"></div>
                                    <span className="material-symbols-outlined text-primary text-2xl">hub</span>
                                </div>
                                <span className="eco-title">Participate</span>
                            </div>
                        </div>
                        <div className="eco-node" style={{ top: '75%', left: '93.3%' }}>
                            <div className="eco-node-content">
                                <div className="eco-bubble">
                                    <div className="absolute inset-[-10px] rounded-full border border-primary/10 border-t-primary/40 -rotate-45"></div>
                                    <span className="material-symbols-outlined text-primary text-2xl">how_to_vote</span>
                                </div>
                                <span className="eco-title">Vote</span>
                            </div>
                        </div>
                        <div className="eco-node" style={{ top: '100%', left: '50%' }}>
                            <div className="eco-node-content">
                                <div className="eco-bubble shadow-[0_0_20px_rgba(112,243,216,0.5)] !border-primary">
                                    <div className="absolute inset-[-10px] rounded-full border border-primary/10 border-t-primary/40 -rotate-45"></div>
                                    <span className="material-symbols-outlined text-primary text-2xl">account_balance_wallet</span>
                                </div>
                                <span className="eco-title">Fund</span>
                            </div>
                        </div>
                        <div className="eco-node" style={{ top: '75%', left: '6.7%' }}>
                            <div className="eco-node-content">
                                <div className="eco-bubble">
                                    <div className="absolute inset-[-10px] rounded-full border border-primary/10 border-t-primary/40 -rotate-45"></div>
                                    <span className="material-symbols-outlined text-primary text-2xl">payments</span>
                                </div>
                                <span className="eco-title">Earn</span>
                            </div>
                        </div>
                        <div className="eco-node" style={{ top: '25%', left: '6.7%' }}>
                            <div className="eco-node-content">
                                <div className="eco-bubble">
                                    <div className="absolute inset-[-10px] rounded-full border border-primary/10 border-t-primary/40 -rotate-45"></div>
                                    <span className="material-symbols-outlined text-primary text-2xl">cached</span>
                                </div>
                                <span className="eco-title">Reinvest</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
