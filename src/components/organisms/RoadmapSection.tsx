import React from "react";
import SpotlightCard from "@/components/molecules/SpotlightCard";

const RoadmapSection = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-24">
                    <span className="font-mono text-teal-500 text-xs tracking-widest uppercase mb-4 block">Milestones</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        Roadmap
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {['2025 Q4', '2026 Q1', '2026 Q2', '2026 Q3', '2026 Q4'].map((q, i) => (
                        <SpotlightCard
                            key={q}
                            variant="solid"
                            icon="eos-icons:rocket"
                            title={q}
                            desc="Strategic ecosystem growth and technical milestones."
                            delay={i * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RoadmapSection;
