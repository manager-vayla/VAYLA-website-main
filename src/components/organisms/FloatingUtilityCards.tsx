'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const utilities = [
    {
        title: 'PARTICIPATE',
        subtitle: '& VOTING',
        description: 'On-chain participation, community voting, and engagement actions.',
        id: 'PASS-01',
        delay: 0,
        color: 'border-teal-400'
    },
    {
        title: 'VAYLA BOOST',
        subtitle: '& SETTLEMENT',
        description: 'The primary asset for VAYLA Boost and IP-based project settlement.',
        id: 'PASS-02',
        delay: 1.5,
        color: 'border-purple-400'
    },
    {
        title: 'REWARDS',
        subtitle: '& CIRCULATION',
        description: 'Redistributed fees through ecosystem incentives.',
        id: 'PASS-03',
        delay: 0.5,
        color: 'border-pink-400'
    },
    {
        title: 'AI / AGI',
        subtitle: 'FUTURE LAYER',
        description: 'Support AI and AGI participation as verified contributors.',
        id: 'PASS-04',
        delay: 2,
        color: 'border-amber-400'
    }
];

const TicketCard = ({ util }: { util: typeof utilities[0] }) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: util.delay
            }}
            className="group relative"
        >
            {/* Ticket Shape (CSS Clip Path) */}
            <div
                className="relative bg-[#0a0a0a] border border-white/10 p-0 overflow-hidden h-full min-h-[280px] flex flex-col"
                style={{
                    clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
                }}
            >
                {/* Header Strip */}
                <div className="bg-white/5 p-6 border-b border-white/10 flex justify-between items-center border-dashed">
                    <span className="font-mono text-xs text-white/40 tracking-widest">{util.id}</span>
                    <div className={cn("w-3 h-3 rounded-full border-2", util.color)} />
                </div>

                {/* Body */}
                <div className="p-8 flex-1 flex flex-col justify-center relative">
                    <h3 className="text-3xl font-bold text-white font-['Space_Grotesk'] tracking-tighter leading-none mb-1 group-hover:text-teal-400 transition-colors">
                        {util.title}
                    </h3>
                    <span className="text-xl font-light text-white/50 tracking-tight block mb-6 font-['Space_Grotesk']">
                        {util.subtitle}
                    </span>

                    <p className="text-sm text-gray-400 font-mono leading-relaxed relative z-10">
                        {util.description}
                    </p>

                    {/* Holographic Texture */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none mix-blend-screen"
                        style={{
                            backgroundImage: `linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.4) 50%, transparent 60%)`
                        }}
                    />
                </div>

                {/* Footer Strip (Barcode) */}
                <div className="bg-black p-4 border-t border-white/10 flex items-center justify-between opacity-50">
                    <div className="h-4 flex items-end gap-[2px] w-full max-w-[100px]">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="bg-white w-[2px]" style={{ height: `${Math.random() * 100}%` }} />
                        ))}
                    </div>
                    <span className="text-[10px] text-white/30 font-mono">VERIFIED ACCESS</span>
                </div>
            </div>

            {/* Pseudo-notches (Visual effect placement) */}
            <div className="absolute top-[70px] -left-1 w-3 h-6 bg-black rounded-r-full border-y border-r border-white/20 z-20" />
            <div className="absolute top-[70px] -right-1 w-3 h-6 bg-black rounded-l-full border-y border-l border-white/20 z-20" />
        </motion.div>
    );
}

export default function FloatingUtilityCards() {
    return (
        <section className="w-full max-w-7xl mb-32 px-4">
            <div className="mb-20 text-center">
                <div className="inline-block border border-white/20 px-4 py-1 rounded-full mb-6">
                    <span className="text-xs font-mono text-white/60 tracking-widest uppercase">Ecosystem Access</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white font-['Space_Grotesk'] tracking-tighter">
                    UTILITY <span className="italic font-serif text-teal-500">PASSES</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {utilities.map((util, i) => (
                    <TicketCard key={i} util={util} />
                ))}
            </div>
        </section>
    );
}
