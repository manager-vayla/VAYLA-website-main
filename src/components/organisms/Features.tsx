import React from "react";
import SpotlightCard from "@/components/molecules/SpotlightCard";

const Features = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#050505] relative z-10">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-24">
                    <span className="font-mono text-teal-500 text-xs tracking-widest uppercase mb-4 block">Core Architecture</span>
                    <h2 className="text-5xl md:text-7xl font-medium text-white leading-[0.9] font-['Space_Grotesk'] tracking-tighter mb-8">
                        Entertainment <br />
                        <span className="text-gray-600">Re-engineered.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
                        Transparency and profitability to address opacity in existing markets
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {/* Large Card */}
                    <SpotlightCard
                        className="md:col-span-2 md:row-span-1 bg-[#0c0c0c]"
                        icon="eos-icons:ai"
                        title="AI Curation Engine"
                        desc="Our proprietary AI analyzes millions of data points across social platforms to identify high-potential IPs before they trend. It matches content to user preferences with 98% accuracy."
                        delay={0}
                    />

                    {/* Standard Cards */}
                    <SpotlightCard
                        className="md:col-span-1 md:row-span-1"
                        icon="eos-icons:blockchain"
                        title="Asset Tokenization"
                        desc="Fractional ownership of entertainment rights on-chain. Trade shares of your favorite songs, movies, and characters."
                        delay={100}
                    />

                    <SpotlightCard
                        className="md:col-span-1 md:row-span-1"
                        icon="eos-icons:secure-data-outlined"
                        title="DAO Governance"
                        desc="Stakeholder voting on key project milestones. The community decides which projects get funded."
                        delay={200}
                    />
                    <SpotlightCard
                        className="md:col-span-1 md:row-span-1"
                        icon="eos-icons:performance"
                        title="Global CDN"
                        desc="Low-latency content delivery network ensuring seamless streaming experiences anywhere in the world."
                        delay={300}
                    />
                    <SpotlightCard
                        className="md:col-span-1 md:row-span-1"
                        icon="eos-icons:api"
                        title="Cross-Chain Bridge"
                        desc="Seamlessly move assets between Ethereum, Solana, and BNB Smart Chain with our trustless bridge architecture."
                        delay={400}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;
