'use client';

import React from "react";
import TextReveal from "@/components/atoms/TextReveal";
import SpotlightCard from "@/components/molecules/SpotlightCard";

const CoreUtilitySection = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-16">
                    <span className="font-mono text-teal-500 text-xs tracking-widest uppercase mb-4 block">Core Utility & Settlement</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        <TextReveal>The VAYLA Token</TextReveal>
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
                        VAYLA is the core utility, settlement, and funding token of the VAYLA ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    {/* @ts-ignore */}
                    <SpotlightCard
                        variant="glass"
                        icon="mdi:vote-outline"
                        title="Participation & Voting"
                        desc="Used for on-chain participation, voting, and community actions."
                        delay={0}
                    />

                    {/* Card 2 */}
                    {/* @ts-ignore */}
                    <SpotlightCard
                        variant="glass"
                        icon="mdi:finance"
                        title="Web3 Funding & Settlement"
                        desc="The primary asset for fan-driven funding and on-chain settlement."
                        delay={100}
                    />

                    {/* Card 3 */}
                    {/* @ts-ignore */}
                    <SpotlightCard
                        variant="glass"
                        icon="mdi:wallet-giftcard"
                        title="Rewards & Circulation"
                        desc={
                            <>
                                Collected fees are redistributed through rewards and ecosystem circulation.
                                <br /><span className="text-teal-500/80 text-sm mt-4 block font-mono">Built for discovery, participation, voting, and funding — on-chain.</span>
                            </>
                        }
                        delay={200}
                    />
                </div>
            </div>
        </section>
    );
};

export default CoreUtilitySection;
