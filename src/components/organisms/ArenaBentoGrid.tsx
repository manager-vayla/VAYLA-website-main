'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for class names
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const modules = [
    {
        title: 'DISCOVERY',
        subtitle: 'Curated by AI',
        description: 'Discover emerging artists, projects, and IPs via on-chain data.',
        className: 'md:col-span-2',
        color: 'text-teal-400',
        bg: 'from-teal-500/20 to-emerald-500/20',
        id: '01'
    },
    {
        title: 'V-CHART',
        subtitle: 'On-Chain Ranking',
        description: 'Participate in transparent, community-powered charts.',
        className: 'md:col-span-1',
        color: 'text-purple-400',
        bg: 'from-purple-500/20 to-pink-500/20',
        id: '02'
    },
    {
        title: 'FUNDING 3.0',
        subtitle: 'Protocol Native',
        description: 'Fandom-driven funding and IP-based project settlement.',
        className: 'md:col-span-3',
        color: 'text-amber-400',
        bg: 'from-orange-500/20 to-yellow-500/20',
        id: '03'
    }
];

const ColosseumCard = ({ item }: { item: typeof modules[0] }) => {
    return (
        <motion.div
            whileHover={{ scale: 0.98 }}
            className={cn("relative h-full min-h-[320px] group overflow-hidden", item.className)}
        >
            {/* Slanted Card Container */}
            <div className="absolute inset-0 bg-[#0a0a0a] border border-white/10 group-hover:border-white/30 transition-all duration-300 transform -skew-x-6 md:-skew-x-12 scale-[1.05]" />

            {/* Dynamic Background Glow */}
            <div className={cn("absolute inset-0 bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform -skew-x-6 md:-skew-x-12 scale-[1.05]", item.bg)} />

            {/* Content Container (Counter-skewed to keep text straight) */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        <span className={cn("font-mono text-xs tracking-[0.2em] font-bold py-1 px-2 border rounded border-current opacity-70", item.color)}>
                            MODULE // {item.id}
                        </span>
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className={cn("w-1 h-3 skew-x-12", i === 2 ? item.color : "bg-white/20")} />
                            ))}
                        </div>
                    </div>

                    <h3 className="text-4xl md:text-6xl font-black text-white font-['Space_Grotesk'] tracking-tighter mix-blend-overlay group-hover:mix-blend-normal transition-all leading-[0.85] mb-2">
                        {item.title}
                    </h3>
                    <span className="font-mono text-sm text-gray-400 uppercase tracking-wider block">
                        {item.subtitle}
                    </span>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                    <p className="text-base text-gray-400 font-light leading-relaxed max-w-md group-hover:text-white transition-colors">
                        {item.description}
                    </p>

                    {/* Decorative Barcode */}
                    <div className="mt-4 flex items-end gap-[1px] h-4 opacity-30">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-[1px] bg-white" style={{ height: `${Math.random() * 100}%` }} />
                        ))}
                    </div>
                </div>

                {/* Giant Watermark Number */}
                <span className="absolute -bottom-10 -right-2 text-[150px] font-black text-white/[0.03] leading-none pointer-events-none select-none font-['Space_Grotesk'] transform skew-x-12">
                    {item.id}
                </span>
            </div>

            {/* Tech Decoration Lines */}
            <div className="absolute top-0 right-10 w-[1px] h-full bg-white/5 skew-x-12 pointer-events-none" />
            <div className="absolute top-0 right-14 w-[1px] h-full bg-white/5 skew-x-12 pointer-events-none" />

        </motion.div>
    );
};

export default function ArenaBentoGrid() {
    return (
        <section className="w-full max-w-7xl mb-32 px-4 relative">
            <div className="mb-20 text-center relative z-10">
                <div className="inline-block border-y border-teal-500/30 py-2 mb-4">
                    <h2 className="text-sm md:text-base font-mono text-teal-400 tracking-[0.3em] uppercase">
                        System Architecture
                    </h2>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 font-['Space_Grotesk']">
                    ARENA <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">MODULES</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
                {modules.map((module, i) => (
                    <div key={i} className={module.className}>
                        <ColosseumCard item={module} />
                    </div>
                ))}
            </div>
        </section>
    );
}
