'use client';

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {[
                        {
                            q: 'Q1 2026: Global Foundation & Data Infrastructure',
                            desc: (
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-teal-400 font-mono text-[11px] uppercase tracking-[0.2em] block mb-2">Marketing</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">Optimize global targeting and build a comprehensive artist database.</p>
                                    </div>
                                    <div>
                                        <span className="text-teal-400 font-mono text-[11px] uppercase tracking-[0.2em] block mb-2">Development</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">Launch Global Traffic Analytics Dashboard — Implement a real-time system to monitor user engagement by region and timezone.</p>
                                    </div>
                                </div>
                            ),
                            icon: 'eos-icons:database-outlined'
                        },
                        {
                            q: 'Q2 2026: Service Expansion & Funding',
                            desc: (
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-teal-400 font-mono text-[11px] uppercase tracking-[0.2em] block mb-2">Marketing</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">Expand global influencer partnerships and Launch Global Concert Crowdfunding projects.</p>
                                    </div>
                                    <div>
                                        <span className="text-teal-400 font-mono text-[11px] uppercase tracking-[0.2em] block mb-2">Development</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">Beta Release of AI Marketing Assistant — Integrate an AI engine for trend keyword extraction and automated copy generation.</p>
                                    </div>
                                </div>
                            ),
                            icon: 'eos-icons:pwa'
                        },
                        {
                            q: 'Q3 2026: Community Engagement & Scalability',
                            desc: (
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-teal-400 font-mono text-[11px] uppercase tracking-[0.2em] block mb-2">Marketing</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">Host online music festivals and release digital assets/badges for the fandom.</p>
                                    </div>
                                    <div>
                                        <span className="text-teal-400 font-mono text-[11px] uppercase tracking-[0.2em] block mb-2">Development</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">Community Voting & Reward System Integration — Develop a secure voting system with digital rewards for active participants.</p>
                                    </div>
                                </div>
                            ),
                            icon: 'eos-icons:group'
                        },
                        {
                            q: 'Q4 2026: Performance Analytics & 2027 Vision',
                            desc: (
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-teal-400 font-mono text-[11px] uppercase tracking-[0.2em] block mb-2">Marketing</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">Year-end Music Battle Championship and launch of B2B marketing solution packages.</p>
                                    </div>
                                    <div>
                                        <span className="text-teal-400 font-mono text-[11px] uppercase tracking-[0.2em] block mb-2">Development</span>
                                        <p className="text-gray-400 text-sm leading-relaxed">Scalable Enterprise API Launch — Build and deploy an API suite for agencies to access global music market insights.</p>
                                    </div>
                                </div>
                            ),
                            icon: 'eos-icons:analysis'
                        }
                    ].map((item, i) => (
                        <SpotlightCard
                            key={item.q}
                            variant="solid"
                            icon={item.icon}
                            title={item.q}
                            desc={item.desc}
                            delay={i * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RoadmapSection;
