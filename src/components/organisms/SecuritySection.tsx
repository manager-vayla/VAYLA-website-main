'use client';

import React from "react";
import SpotlightCard from "@/components/molecules/SpotlightCard";

const SecuritySection = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#020202] relative z-10 border-t border-white/5">
            {/* Tech Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}>
            </div>

            <div className="max-w-[90rem] mx-auto relative z-10">
                <div className="mb-24">
                    <span className="font-mono text-gray-500 text-xs tracking-widest uppercase mb-4 block">Why Web3 Fandom & Funding</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        Evolving the Infrastructure
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
                        VAYLA does not replace the entertainment industry. It builds the participation and funding infrastructure beneath it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SpotlightCard
                        variant="solid"
                        icon="mdi:account-group-outline"
                        title="TRADITIONAL FANDOM2222"
                        desc="Consumption-driven engagement with limited transparency and no direct rewards."
                        delay={0}
                        className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                    />
                    <SpotlightCard
                        variant="solid"
                        icon="mdi:server-network"
                        title="CENTRALIZED PLATFORMS"
                        desc="Closed systems where data, revenue, and decisions are controlled by intermediaries."
                        delay={100}
                        className="opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                    />
                    <SpotlightCard
                        variant="solid"
                        icon="mdi:star-four-points"
                        title="THE VAYLA APPROACH"
                        desc="Participation-driven ecosystem designed to support high-frequency voting, and rewards."
                        delay={200}
                        className="border-teal-500/30 bg-teal-900/10 hover:bg-teal-900/20"
                    />
                </div>

                <div className="mt-12 text-center text-gray-500 font-light max-w-2xl mx-auto">
                    Web3 enables fandom participation to become transparent, autonomous, and economically meaningful.
                </div>
            </div>
        </section>
    )
}

export default SecuritySection;
