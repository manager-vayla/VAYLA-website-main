'use client';

import React from "react";
import SpotlightCard from "@/components/molecules/SpotlightCard";
import TextReveal from "@/components/atoms/TextReveal";

const RevenueSection = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#050505] relative z-10 overflow-hidden">
            <div className="max-w-[90rem] mx-auto relative z-10">
                <div className="mb-24 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-8">
                        VAYLA ARENA
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        <TextReveal>The On-chain</TextReveal><br />
                        <TextReveal delay={0.1}>Operating Layer</TextReveal>
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
                        where the VAYLA token is actively used, earned, and settled.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SpotlightCard
                        variant="glass"
                        image="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop"
                        title="[VAYLA DISCOVERY]"
                        desc={
                            <>
                                <strong className="block text-white mb-2 text-lg">Discover and support new creators</strong>
                                Discover emerging artists, projects, and IPs through on-chain signals and community-driven insights.
                            </>
                        }
                        delay={0}
                    />
                    <SpotlightCard
                        variant="glass"
                        image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
                        title="[V-ONCHAIN CHART]"
                        desc={
                            <>
                                <strong className="block text-white mb-2 text-lg">Vote and influence on-chain rankings</strong>
                                Community-powered on-chain charts driven by transparent voting and participation.
                            </>
                        }
                        delay={100}
                    />
                    <SpotlightCard
                        variant="glass"
                        image="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2070&auto=format&fit=crop"
                        title="[VAYLA 3.0 FUNDING]"
                        desc={
                            <>
                                <strong className="block text-white mb-2 text-lg">Participate in Web3 funding projects</strong>
                                Web3-native fandom funding powered by participation-based on-chain settlement.
                            </>
                        }
                        delay={200}
                    />
                </div>

                <div className="mt-16 text-center text-teal-500/80 font-mono text-xs uppercase tracking-widest max-w-2xl mx-auto">
                    Together, these modules form a continuous on-chain participation and funding ecosystem.
                </div>
            </div>
        </section>
    )
}

export default RevenueSection;
