'use client';

import React from "react";
import Image from 'next/image';
import GlassAppIcon from "@/components/molecules/GlassAppIcon";
import logo from "@/assets/VAYLA_logo.png";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


const PlatformSection = () => {
    const orbitItems = [
        { label: "Creator", icon: "mdi:account-star-outline", colorHex: "#f472b6" },
        { label: "Merch", icon: "mdi:tshirt-crew-outline", colorHex: "#60a5fa" },
        { label: "Fan Funding", icon: "mdi:hand-coin-outline", colorHex: "#22d3ee" },
        { label: "NFT Ticket", icon: "mdi:ticket-confirmation-outline", colorHex: "#a78bfa" },
        { label: "Rewards", icon: "ph:moon-fill", colorHex: "#fbbf24" },
        { label: "Staking", icon: "mdi:cached", colorHex: "#34d399" }
    ];

    const cards = [
        {
            title: "TRADITIONAL FANDOM",
            desc: "Passive consumption. Fans pay, creators struggle, middlemen profit. No ownership, no transparency.",
            icon: "mdi:account-group-outline",
            theme: "red",
            // Cyber-Red/Pink Theme
            gradient: "from-[#1a0505] via-black to-black",
            border: "border-red-500/20",
            hoverBorder: "group-hover:border-red-500/80",
            iconColor: "text-red-500",
            glow: "group-hover:shadow-[0_0_50px_-5px_rgba(239,68,68,0.4)]",
            techAccent: "bg-red-500"
        },
        {
            title: "CENTRALIZED PLATFORMS",
            desc: "Black box algorithms. Data is siloed, revenue is opaque, and users are the product.",
            icon: "mdi:server-network",
            theme: "gray",
            // Cyber-Blue/Gray Theme
            gradient: "from-[#050a15] via-black to-black",
            border: "border-blue-500/20",
            hoverBorder: "group-hover:border-blue-400/80",
            iconColor: "text-blue-400",
            glow: "group-hover:shadow-[0_0_50px_-5px_rgba(96,165,250,0.4)]",
            techAccent: "bg-blue-400"
        },
        {
            title: "THE VAYLA APPROACH",
            desc: "Active participation. Fans are investors, creators own their IP, and value flows transparently on-chain.",
            icon: "mdi:star-four-points",
            theme: "teal",
            // K-Pop Cyber-Teal Theme
            gradient: "from-[#022c22] via-black to-black",
            border: "border-teal-500/50",
            hoverBorder: "group-hover:border-teal-400",
            iconColor: "text-teal-400",
            glow: "shadow-[0_0_40px_-5px_rgba(45,212,191,0.15)] group-hover:shadow-[0_0_80px_-10px_rgba(45,212,191,0.6)]",
            techAccent: "bg-teal-400",
            highlight: true
        }
    ];

    return (
        <section id="ecosystem" className="py-32 px-6 md:px-12 bg-black relative z-10 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Ambient Cyber Grid - Bolder */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-50" />

            {/* Central Light Beam - Breathing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[200vh] bg-gradient-to-b from-transparent via-teal-500/50 to-transparent blur-[2px] animate-pulse-slow" />

            <div className="max-w-[90rem] mx-auto relative z-10 w-full mb-32">
                <div className="text-center mb-20 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10" />
                    <div className="inline-block bg-black px-8 border-x border-white/10">
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter uppercase relative">
                            Infrastructure <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Evolution</span>
                            <span className="absolute -top-6 -right-12 text-xs font-mono text-teal-500 tracking-widest border border-teal-500 bg-teal-900/20 rounded px-2 py-1 animate-pulse">V3.0 ACTIVE</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
                            VAYLA does not replace the entertainment industry. It builds the participation and funding infrastructure beneath it.
                        </p>
                    </div>
                </div>

                {/* Comparison Cards - Cybernetic K-Pop Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className={clsx(
                            "relative group transition-all duration-500 hover:-translate-y-2 hover:animate-breath",
                            card.highlight ? "md:scale-105 z-10" : "hover:z-10"
                        )} style={{ animationDelay: `${idx * 0.5}s` }}>
                            {/* Augmented Reality Container */}
                            <div className={clsx(
                                "relative w-full h-full p-1 bg-gradient-to-b from-transparent to-transparent rounded-[20px] transition-all duration-500",
                                card.highlight ? "from-teal-500/30 via-teal-500/10 to-teal-900/30" : "hover:from-white/10 hover:to-white/5"
                            )}>
                                {/* Card Body */}
                                <div className={clsx(
                                    "relative w-full h-full p-8 flex flex-col gap-6 rounded-[18px] border transition-all duration-500 overflow-hidden bg-black/80 backdrop-blur-xl",
                                    card.gradient,
                                    card.border,
                                    card.hoverBorder,
                                    card.glow
                                )}>

                                    {/* Tech Background Grid */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity" />

                                    {/* Cyber Corners */}
                                    <div className={clsx("absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 opacity-50 transition-all duration-300", card.iconColor)} />
                                    <div className={clsx("absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 opacity-50 transition-all duration-300", card.iconColor)} />
                                    <div className={clsx("absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 opacity-50 transition-all duration-300", card.iconColor)} />
                                    <div className={clsx("absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 opacity-50 transition-all duration-300", card.iconColor)} />


                                    {/* Icon & Label */}
                                    <div className="flex items-start justify-between relative z-10">
                                        <div className={clsx(
                                            "w-16 h-16 rounded-xl flex items-center justify-center border bg-black/50 shadow-lg group-hover:scale-110 transition-transform duration-500 relative overflow-hidden",
                                            card.border
                                        )}>
                                            <div className={clsx("absolute inset-0 opacity-20", card.techAccent)} />
                                            <span className={clsx("iconify text-3xl z-10", card.iconColor)} data-icon={card.icon} />
                                        </div>
                                        <div className={clsx("text-8xl font-black font-['Space_Grotesk'] leading-[0.6] opacity-10 select-none absolute -top-4 -right-4", card.iconColor)}>
                                            0{idx + 1}
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="relative z-10 mt-2">
                                        <h3 className={clsx(
                                            "text-2xl font-bold font-['Space_Grotesk'] uppercase tracking-wider mb-3",
                                            card.highlight ? "text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500" : "text-gray-100"
                                        )}>
                                            {card.title}
                                        </h3>

                                        {/* Divider with Tech Bit */}
                                        <div className="flex items-center gap-2 mb-4 opacity-50">
                                            <div className={clsx("w-8 h-[2px]", card.techAccent)} />
                                            <div className={clsx("w-1 h-1 rounded-full", card.techAccent)} />
                                            <div className="h-[1px] flex-1 bg-white/20" />
                                        </div>

                                        <p className={clsx(
                                            "text-sm leading-relaxed",
                                            card.highlight ? "text-gray-300" : "text-gray-400"
                                        )}>
                                            {card.desc}
                                        </p>
                                    </div>

                                    {/* Footer Status */}
                                    {card.highlight && (
                                        <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                                            </span>
                                            <span className="text-[10px] uppercase tracking-widest text-teal-500 font-bold">VAYLA SYSTEM</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Orbit System (Refined) - Visible on Mobile now */}
            <div className="relative w-full max-w-[350px] md:max-w-[900px] aspect-square mx-auto mt-20 scale-75 md:scale-100 origin-center">
                {/* Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
                    <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] flex items-center justify-center">
                        <div className="absolute inset-0 bg-teal-500/20 blur-[60px] md:blur-[100px] rounded-full animate-pulse-slow"></div>

                        {/* Center Logo with Hexagon Frame */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center z-10">
                            <div className="absolute inset-0 border-2 border-teal-500/50 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-4 border border-teal-500/20 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] animate-[spin_15s_linear_infinite_reverse]" />

                            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(45,212,191,0.5)]">
                                <Image
                                    src={logo}
                                    alt="VAYLA Protocol Hub"
                                    layout="fill"
                                    objectFit="cover"
                                    className="animate-[pulse_4s_ease-in-out_infinite]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Orbit Rings - Scaled for Mobile */}
                <div className="absolute inset-0 z-10 scale-[0.6] md:scale-100">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-dashed border-teal-500/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>

                    {/* Orbiting Items */}
                    <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
                        {orbitItems.map((item, index) => {
                            const angle = (360 / orbitItems.length) * index;
                            const radius = 400;

                            return (
                                <div
                                    key={item.label}
                                    className="absolute top-1/2 left-1/2 flex items-center justify-center w-0 h-0"
                                    style={{ transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)` }}
                                >
                                    <div className="animate-[spin_40s_linear_infinite_reverse] group hover:animate-breath">
                                        <div className="relative flex flex-col items-center gap-4 group cursor-pointer">
                                            {/* Connecting Line to Center */}
                                            <div className="absolute top-1/2 left-1/2 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent -z-10 origin-left opacity-0 group-hover:opacity-100 transition-opacity"
                                                style={{ transform: `rotate(${angle + 180}deg) translateX(-50%)` }} />

                                            <div className="relative">
                                                <GlassAppIcon icon={item.icon} colorLabel={item.label} colorHex={item.colorHex} />
                                                <div className="absolute inset-0 rounded-xl bg-teal-500/20 opacity-0 group-hover:opacity-100 animate-ping" />
                                            </div>

                                            <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em] bg-black/80 backdrop-blur-md px-4 py-2 border-2 border-white/10 group-hover:border-teal-500 group-hover:text-teal-400 transition-all shadow-xl rounded-sm clip-path-ticket">
                                                {item.label}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Style for Classnames */}
            <style>{`
                .clip-path-ticket {
                    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%, 0 25%);
                }
             `}</style>
        </section>
    );
};

export default PlatformSection;
