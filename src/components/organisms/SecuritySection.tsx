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
                    <span className="font-mono text-gray-500 text-xs tracking-widest uppercase mb-4 block">Infrastructure</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        Sustainability & Security
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
                        Built on robust decentralized foundations ensuring transparency and longevity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SpotlightCard
                        variant="solid"
                        icon="eos-icons:hardware-circuit"
                        title="Decentralized Processing"
                        desc="All funding, purchases, and reward distribution are handled automatically on-chain, ensuring transparency and integrity."
                        delay={0}
                    />
                    <SpotlightCard
                        variant="solid"
                        icon="eos-icons:content-lifecycle-management"
                        title="Transparent Records"
                        desc="All activities—funding history, reward distribution, merch delivery—are recorded on-chain."
                        delay={100}
                    />
                    <SpotlightCard
                        variant="solid"
                        icon="logos:polygon"
                        title="Polygon L2 Solution"
                        desc="Ensures global scalability with low fees and fast transaction speeds."
                        delay={200}
                    />
                    <SpotlightCard
                        variant="solid"
                        icon="mdi:gift-outline"
                        title="Re-engagement Incentives"
                        desc="NFT holders receive re-engagement rewards (discounts, priority access, etc.) to enhance loyalty."
                        delay={300}
                    />
                    <SpotlightCard
                        variant="solid"
                        icon="mdi:fire"
                        title="Deflationary Mechanics"
                        desc="Automatic burn or lock-up of a portion of revenue prevents oversupply and stabilizes token value."
                        delay={400}
                    />
                    <SpotlightCard
                        variant="solid"
                        icon="eos-icons:organization"
                        title="DAO Governance"
                        desc="Voting-based governance enables community decisions on content and funding, increasing community trust."
                        delay={500}
                    />
                </div>
            </div>
        </section>
    )
}

export default SecuritySection;
