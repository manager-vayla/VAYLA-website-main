'use client';

import React from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/atoms/TextReveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const ReactorNode = ({
    title,
    desc,
    icon,
    color,
    delay
}: {
    title: string;
    desc: React.ReactNode;
    icon: string;
    color: string;
    delay: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay * 0.2 }}
            className="relative group min-h-[320px] flex flex-col items-center text-center"
        >
            {/* Hexagonal/Octagonal Container Frame */}
            <div className="absolute inset-0 bg-[#0a0a0a] border-2 border-white/20 group-hover:border-white/80 transition-all duration-500 [clip-path:polygon(30px_0,100%_0,100%_calc(100%-30px),calc(100%-30px)_100%,0_100%,0_30px)] shadow-[0_0_15px_-5px_transparent] group-hover:shadow-[0_0_30px_-5px_var(--glow-color)]" style={{ '--glow-color': color } as React.CSSProperties}>
                {/* Inner Pulsing Core */}
                <div className="absolute inset-[2px] bg-[#050505] [clip-path:polygon(28px_0,100%_0,100%_calc(100%-28px),calc(100%-28px)_100%,0_100%,0_28px)] overflow-hidden">

                    {/* Dynamic Grid Background */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                    {/* Central Energy Field */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 blur-[40px] transition-all duration-500 scale-50 group-hover:scale-150" style={{ backgroundColor: color }} />
                </div>
            </div>

            {/* Content Content - Fully Centered and Floating */}
            <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center">
                {/* Floating Icon in a "Reactor Ring" */}
                <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/50 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-2 rounded-full border border-dashed border-white/20 group-hover:border-[color:var(--glow-color)] animate-[spin_10s_linear_infinite_reverse]" style={{ '--glow-color': color } as React.CSSProperties} />

                    <span className="iconify text-3xl text-white group-hover:text-[color:var(--glow-color)] transition-colors duration-300" data-icon={icon} style={{ '--glow-color': color } as React.CSSProperties} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 uppercase font-['Space_Grotesk'] tracking-tight group-hover:text-[color:var(--glow-color)] transition-colors" style={{ '--glow-color': color } as React.CSSProperties}>
                    {title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed font-light max-w-xs mx-auto group-hover:text-white transition-colors">
                    {desc}
                </p>

                {/* Tech Deco Lines */}
                <div className="absolute bottom-6 w-12 h-1 bg-white/20 rounded-full group-hover:bg-[color:var(--glow-color)] group-hover:w-24 transition-all duration-500" style={{ '--glow-color': color } as React.CSSProperties} />
            </div>

            {/* Corner Accent Lights */}
            <div className="absolute top-0 left-[30px] w-8 h-[2px] bg-white/50 group-hover:bg-white group-hover:shadow-[0_0_10px_white] transition-all" />
            <div className="absolute bottom-0 right-[30px] w-8 h-[2px] bg-white/50 group-hover:bg-white group-hover:shadow-[0_0_10px_white] transition-all" />
        </motion.div>
    );
};

const CoreUtilitySection = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#050505] relative z-10">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.03),transparent_70%)] pointer-events-none" />

            <div className="max-w-[90rem] mx-auto relative z-20">
                <div className="mb-20 text-center">
                    <div className="inline-block border border-teal-500/50 px-4 py-1 rounded-sm mb-6 bg-teal-500/10 backdrop-blur-md">
                        <span className="font-mono text-teal-400 text-xs tracking-[0.2em] uppercase font-bold">Core Power Source</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter leading-none">
                        THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-white">VAYLA</span> TOKEN
                    </h2>
                    <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                        The hyper-efficient engine powering participation, settlement, and liquidity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4">
                    <ReactorNode
                        title="PARTICIPATE & VOTE"
                        icon="mdi:vote-outline"
                        desc="Execute on-chain governance. The more you hold, the louder your voice in the ecosystem."
                        color="#2dd4bf"
                        delay={0}
                    />

                    <ReactorNode
                        title="FUND & SETTLE"
                        icon="mdi:finance"
                        desc="The native currency for IP VAYLA Boost rounds, asset settlement, and cross-border transactions."
                        color="#a855f7"
                        delay={1}
                    />

                    <ReactorNode
                        title="EARN & CIRCULATE"
                        icon="mdi:wallet-giftcard"
                        desc={
                            <>
                                Protocol fees flow back to active participants.
                                <span className="block mt-2 text-xs font-mono opacity-70">Staking APY • Revenue Share • Airdrops</span>
                            </>
                        }
                        color="#f472b6"
                        delay={2}
                    />
                </div>
            </div>
        </section>
    );
};

export default CoreUtilitySection;
