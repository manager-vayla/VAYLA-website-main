import React from "react";
import SpotlightCard from "@/components/molecules/SpotlightCard";

const RevenueSection = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#050505] relative z-10 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[90rem] mx-auto relative z-10">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <span className="font-mono text-teal-500 text-xs tracking-widest uppercase mb-4 block">Tokenomics</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-teal-500/50 mb-6 font-['Space_Grotesk'] tracking-tighter">
                            Revenue Structure
                        </h2>
                        <p className="text-xl text-gray-400 font-light max-w-3xl leading-relaxed">
                            A virtuous Web3 fandom economy of <span className="text-teal-400">Funding</span> → Consumption → Rewards → Distribution → <span className="text-teal-400">Re-engagement</span>
                        </p>
                    </div>
                    {/* Decorative flow indicator */}
                    <div className="hidden md:flex gap-2 items-center opacity-30">
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent to-teal-500"></div>
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <SpotlightCard
                        variant="glass"
                        icon="eos-icons:monetization-on"
                        title="Platform Fee"
                        desc="When fans fund creators, the platform charges a fee (e.g., 5-10%)."
                        delay={0}
                    />
                    <SpotlightCard
                        variant="glass"
                        icon="eos-icons:products-outlined"
                        title="Ticket & Merch Sales"
                        desc="Direct revenue through artist concerts, fan meeting tickets, and merch sales."
                        delay={100}
                    />
                    <SpotlightCard
                        variant="glass"
                        icon="mdi:crown-outline"
                        title="NFT Royalties"
                        desc="When fans resell NFT tickets/merch, the platform generates 2.5-10% royalty income."
                        delay={200}
                    />
                    <SpotlightCard
                        variant="glass"
                        icon="eos-icons:database"
                        title="Staking Revenue"
                        desc="Yield generated from user token staking and liquidity pool rewards."
                        delay={300}
                    />
                    <SpotlightCard
                        variant="glass"
                        icon="eos-icons:cluster-role"
                        title="B2B Partnerships"
                        desc="Partnership fees or IP licensing revenue with content owners and distributors."
                        delay={400}
                    />
                    <SpotlightCard
                        variant="glass"
                        icon="eos-icons:performance"
                        title="Token Appreciation"
                        desc="Token value increase driven by ecosystem growth and rising demand."
                        delay={500}
                        className="border-teal-500/30 bg-teal-900/5 hover:bg-teal-900/10"
                    />
                </div>
            </div>
        </section>
    )
}

export default RevenueSection;
