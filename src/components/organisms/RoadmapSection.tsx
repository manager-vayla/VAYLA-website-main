'use client';

import React, { useEffect, useRef, useState } from "react";


const RoadmapSection = () => {
    const milestones = [
        {
            q: 'Q1 2026',
            title: 'Global Foundation & Data Infrastructure',
            items: [
                { category: 'Marketing', icon: 'mdi:bullhorn-outline', text: 'Optimize global targeting and build a comprehensive artist database.' },
                { category: 'Development', icon: 'mdi:database-outline', text: 'Launch Global Traffic Analytics Dashboard — Real-time system for user engagement monitoring.' }
            ]
        },
        {
            q: 'Q2 2026',
            title: 'Service Expansion & Funding',
            items: [
                { category: 'Marketing', icon: 'mdi:account-group-outline', text: 'Expand global influencer partnerships and Launch Global Concert Crowdfunding projects.' },
                { category: 'Development', icon: 'mdi:robot-outline', text: 'Beta Release of AI Marketing Assistant — Trend keyword extraction and automated copy generation.' }
            ]
        },
        {
            q: 'Q3 2026',
            title: 'Community Engagement & Scalability',
            items: [
                { category: 'Marketing', icon: 'mdi:music-note-outline', text: 'Host online music festivals and release digital assets/badges for the fandom.' },
                { category: 'Development', icon: 'mdi:vote-outline', text: 'Community Voting & Reward System Integration — Secure voting with digital rewards for active participants.' }
            ]
        },
        {
            q: 'Q4 2026',
            title: 'Performance Analytics & 2027 Vision',
            items: [
                { category: 'Marketing', icon: 'mdi:trophy-outline', text: 'Year-end Music Battle Championship and launch of B2B marketing solution packages.' },
                { category: 'Development', icon: 'mdi:api', text: 'Scalable Enterprise API Launch — API suite for agencies to access global music market insights.' }
            ]
        }
    ];

    return (
        <section className="py-32 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/5 overflow-hidden" id="roadmap">
            <div className="max-w-6xl mx-auto">
                <div className="mb-24 text-center">
                    <span className="font-mono text-teal-500 text-xs tracking-widest uppercase mb-4 block">Milestones</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        Roadmap
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-teal-500/20 to-transparent md:-translate-x-1/2 z-0" />

                    <div className="space-y-24">
                        {milestones.map((milestone, idx) => {
                            // Using a simple Intersection Observer for scroll animations
                            const itemRef = useRef(null);
                            const [isVisible, setIsVisible] = useState(false);

                            useEffect(() => {
                                const observer = new IntersectionObserver(
                                    ([entry]) => {
                                        if (entry.isIntersecting) {
                                            setIsVisible(true);
                                            observer.unobserve(entry.target);
                                        }
                                    },
                                    { threshold: 0.1 }
                                );

                                if (itemRef.current) {
                                    observer.observe(itemRef.current);
                                }

                                return () => observer.disconnect();
                            }, []);

                            return (
                                <div
                                    key={milestone.q}
                                    ref={itemRef}
                                    style={{
                                        animationDelay: `${idx * 100}ms`,
                                        opacity: isVisible ? 1 : 0
                                    }}
                                    className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} ${isVisible ? 'animate-fade-in-up' : ''}`}
                                >
                                    {/* Center Point */}
                                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_15px_rgba(20,184,166,0.8)] md:-translate-x-1/2 mt-8 z-10 border-4 border-[#050505]" />

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:bg-white/[0.05] transition-all duration-300 group">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="text-teal-400 font-mono text-sm font-bold tracking-widest uppercase">
                                                    {milestone.q}
                                                </span>
                                                <div className="h-px flex-1 bg-white/5" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-8 font-['Space_Grotesk'] tracking-tight">
                                                {milestone.title}
                                            </h3>

                                            <div className="space-y-6">
                                                {milestone.items.map((item, i) => (
                                                    <div key={i} className="flex gap-4 group/item">
                                                        <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 group-hover/item:border-teal-500/50 transition-colors">
                                                            <iconify-icon icon={item.icon} className="text-teal-400 text-lg"></iconify-icon>
                                                        </div>
                                                        <div>
                                                            <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest block mb-1">
                                                                {item.category}
                                                            </span>
                                                            <p className="text-gray-300 text-sm leading-relaxed font-light">
                                                                {item.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Placeholder for opposite side on desktop */}
                                    <div className="hidden md:block w-[45%]" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoadmapSection;
