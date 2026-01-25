import React from "react";
import SpotlightCard from "@/components/molecules/SpotlightCard";

const RoadmapSection = () => {
    const roadmapData = [
        {
            quarter: "Q1 2026",
            title: "Global Foundation & Data Infrastructure",
            marketing: "Optimize global targeting and build a comprehensive artist database.",
            development: "Launch Global Traffic Analytics Dashboard — Implement a real-time system to monitor user engagement by region and timezone.",
            icon: "mdi:database-search-outline"
        },
        {
            quarter: "Q2 2026",
            title: "Service Expansion & Funding",
            marketing: "Expand global influencer partnerships and Launch Global Concert Crowdfunding projects.",
            development: "Beta Release of AI Marketing Assistant — Integrate an AI engine for trend keyword extraction and automated copy generation.",
            icon: "mdi:finance"
        },
        {
            quarter: "Q3 2026",
            title: "Community Engagement & Scalability",
            marketing: "Host online music festivals and release digital assets/badges for the fandom.",
            development: "Community Voting & Reward System Integration — Develop a secure voting system with digital rewards for active participants.",
            icon: "mdi:account-group-outline"
        },
        {
            quarter: "Q4 2026",
            title: "Performance Analytics & 2027 Vision",
            marketing: "Year-end Music Battle Championship and launch of B2B marketing solution packages.",
            development: "Scalable Enterprise API Launch — Build and deploy an API suite for agencies to access global music market insights.",
            icon: "mdi:chart-timeline-variant-shimmer"
        }
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/5" id="roadmap">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-24">
                    <span className="font-mono text-teal-500 text-xs tracking-widest uppercase mb-4 block">Timeline</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        2026 Roadmap
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {roadmapData.map((item, i) => (
                        <SpotlightCard
                            key={item.quarter}
                            variant="glass"
                            icon={item.icon}
                            title={`${item.quarter}: ${item.title}`}
                            desc={
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-teal-400 text-[10px] font-mono uppercase tracking-[0.2em] font-bold">Marketing</span>
                                        <p className="text-gray-300">{item.marketing}</p>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-indigo-400 text-[10px] font-mono uppercase tracking-[0.2em] font-bold">Development</span>
                                        <p className="text-gray-300">{item.development}</p>
                                    </div>
                                </div>
                            }
                            delay={i * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoadmapSection;
