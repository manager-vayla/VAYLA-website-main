'use client';

<<<<<<< HEAD
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
=======
import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface Milestone {
    q: string;
    title: string;
    items: Array<{
        category: string;
        text: string;
    }>;
}

const MilestoneCard = ({ milestone, idx }: { milestone: Milestone; idx: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative group"
        >
            {/* Ticket Shape Container */}
            <div
                className="relative bg-black/40 border border-white/10 backdrop-blur-xl p-8 overflow-hidden transition-all duration-500 group-hover:bg-white/5 group-hover:border-teal-500/30 group-hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.2)]"
                style={{
                    clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)"
                }}
            >
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />
                    ))}
                </div>

                {/* Barcode Decoration */}
                <div className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="flex items-end gap-[2px] h-8">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="bg-teal-500 w-[2px]" style={{ height: `${Math.random() * 100}%` }} />
                        ))}
                    </div>
                </div>

                {/* Header Section */}
                <div className="mb-8 relative z-10">
                    <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-teal-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">
                            SCHEDULE // {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                        <div className="h-px bg-teal-500/30 flex-1" />
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white font-['Space_Grotesk'] tracking-tighter leading-[0.9]">
                        <span className="block text-2xl md:text-3xl text-gray-500 mb-1 font-mono tracking-normal">{milestone.q}</span>
                        {milestone.title}
                    </h3>
                </div>

                {/* Items List */}
                <div className="space-y-6 relative z-10">
                    {milestone.items.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start group/item">
                            <span className="font-mono text-xs text-teal-500/50 mt-1.5 min-w-[24px]">
                                {i + 1 < 10 ? `0${i + 1}` : i + 1}
                            </span>
                            <div>
                                <span className="inline-block px-2 py-0.5 rounded-sm bg-white/5 border border-white/5 text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-1.5 group-hover/item:text-teal-400 group-hover/item:border-teal-500/30 transition-colors">
                                    {item.category}
                                </span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light group-hover/item:text-white transition-colors">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Background Watermark */}
                <div className="absolute -bottom-4 -left-4 text-[120px] font-bold text-white/[0.02] leading-none pointer-events-none select-none font-['Space_Grotesk']">
                    {milestone.q.split(' ')[0]}
                </div>
            </div>

            {/* Cutout Corner Accents (Pseudo-elements simulation) */}
            <div className="absolute top-0 left-0 w-5 h-5 border-l border-t border-teal-500/0 group-hover:border-teal-500/50 transition-colors duration-500 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-r border-b border-teal-500/0 group-hover:border-teal-500/50 transition-colors duration-500 pointer-events-none" />

        </motion.div>
    );
};

export default function RoadmapSection() {
    const milestones: Milestone[] = [
        {
            q: "Q1 2026",
            title: "Global Foundation",
            items: [
                { category: "Marketing", text: "Optimize global targeting and build a comprehensive artist database." },
                { category: "Development", text: "Launch Global Traffic Analytics Dashboard — Real-time system for user engagement monitoring." }
            ]
        },
        {
            q: "Q2 2026",
            title: "Service Projects",
            items: [
                { category: "Marketing", text: "Expand global influencer partnerships and launch global concert crowd-powered VAYLA Boost projects." },
                { category: "Development", text: "Beta Release of AI Marketing Assistant — Trend keyword extraction and automated copy generation." }
            ]
        },
        {
            q: "Q3 2026",
            title: "Fandom Engage",
            items: [
                { category: "Marketing", text: "Host online music festivals and release digital assets/badges for the fandom." },
                { category: "Development", text: "Community Voting & Reward System Integration — Secure voting with digital rewards." }
            ]
        },
        {
            q: "Q4 2026",
            title: "Visualize 2027",
            items: [
                { category: "Marketing", text: "Year-end Music Battle Championship and launch of B2B marketing solution packages." },
                { category: "Development", text: "Scalable Enterprise API Launch — API suite for agencies to access global music market insights." }
            ]
        }
    ];

    return (
        <section className="py-32 px-4 md:px-12 bg-[#050505] relative z-10 overflow-hidden" id="roadmap">
            {/* Stage Light Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-teal-500/10 via-purple-500/5 to-transparent blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-20">
                <div className="mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 mb-6 border border-teal-500/30 bg-teal-500/10 rounded-full px-4 py-1.5 text-teal-400 font-mono text-xs tracking-widest uppercase"
                    >
                        <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                        Comeback Schedule
                    </motion.div>

                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter mix-blend-overlay opacity-90">
                        OFFICIAL<br />ROADMAP
                    </h2>
                </div>

                {/* Staggered Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-16">
                    {milestones.map((milestone, idx) => (
                        <div key={idx} className={clsx(idx % 2 !== 0 && "md:translate-y-24")}>
                            <MilestoneCard milestone={milestone} idx={idx} />
                        </div>
>>>>>>> binance-redesign2
                    ))}
                </div>

                {/* Connecting Waveform Line (Abstract) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-full hidden md:block opacity-20">
                    <div className="w-full h-full bg-gradient-to-b from-transparent via-teal-500 to-transparent dashed-line" />
                </div>
            </div>
        </section>
    );
<<<<<<< HEAD
};

export default RoadmapSection;
=======
}
>>>>>>> binance-redesign2
