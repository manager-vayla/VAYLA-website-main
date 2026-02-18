'use client';

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TextReveal from "@/components/atoms/TextReveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const distribution = [
    { label: "Community Rewards", percent: 20, color: "text-teal-300", barColor: "bg-teal-300", hex: "#5eead4" },
    { label: "Ecosystem Ops", percent: 20, color: "text-purple-300", barColor: "bg-purple-300", hex: "#d8b4fe" },
    { label: "Team / Advisors", percent: 15, color: "text-blue-300", barColor: "bg-blue-300", hex: "#93c5fd" },
    { label: "Partnerships", percent: 15, color: "text-indigo-300", barColor: "bg-indigo-300", hex: "#a5b4fc" },
    { label: "Marketing", percent: 15, color: "text-pink-300", barColor: "bg-pink-300", hex: "#f9a8d4" },
    { label: "Public Sales", percent: 10, color: "text-amber-300", barColor: "bg-amber-300", hex: "#fcd34d" },
    { label: "Reserve", percent: 5, color: "text-gray-300", barColor: "bg-gray-300", hex: "#cbd5e1" }
];

// Helper to calculate arcs for SVG Pie Chart
const getCoordinatesForPercent = (percent: number) => {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
};

const PieChart = () => {
    let cumulativePercent = 0;

    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Glow Behind */}
            <div className="absolute inset-0 rounded-full bg-teal-500/20 blur-[60px] animate-pulse-slow" />

            <svg viewBox="-1 -1 2 2" style={{ transform: 'rotate(-90deg)' }} className="overflow-visible">
                {distribution.map((slice, i) => {
                    const startPercent = cumulativePercent;
                    const endPercent = cumulativePercent + (slice.percent / 100);
                    cumulativePercent = endPercent;

                    const [startX, startY] = getCoordinatesForPercent(startPercent);
                    const [endX, endY] = getCoordinatesForPercent(endPercent);

                    // If slice is > 50%, largeArcFlag is 1
                    const largeArcFlag = slice.percent > 50 ? 1 : 0;

                    const pathData = `M 0 0 L ${startX} ${startY} A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY} Z`;

                    return (
                        <motion.path
                            key={i}
                            d={pathData}
                            fill={slice.hex}
                            stroke="#050505"
                            strokeWidth="0.05"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 0.9 }}
                            whileHover={{ scale: 1.05, opacity: 1, zIndex: 10 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="cursor-pointer hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300"
                        />
                    );
                })}
            </svg>
            {/* Center Hole for Donut Effect */}
            <div className="absolute inset-[15%] bg-[#050505] rounded-full flex items-center justify-center border-4 border-white/5 shadow-inner">
                <div className="text-center">
                    <span className="block text-4xl font-bold text-white font-['Space_Grotesk'] animate-pulse-slow">3B</span>
                    <span className="block text-xs text-gray-400 font-mono tracking-widest uppercase">Total Supply</span>
                </div>
            </div>
        </div>
    );
};

const ChartRow = ({ item, index }: { item: typeof distribution[0], index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="relative group">
            <div className="flex items-center gap-4 py-4 md:py-5 border-b border-white/20 group-hover:bg-white/[0.05] transition-colors relative z-10 px-2 md:px-4">
                {/* Rank Number */}
                <span className="font-mono text-xl md:text-2xl font-bold text-white/40 w-8 md:w-12 group-hover:text-white transition-colors">
                    0{index + 1}
                </span>

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h4 className="text-lg md:text-xl text-white font-bold font-['Space_Grotesk'] tracking-tight group-hover:text-teal-300 transition-colors uppercase">
                        {item.label}
                    </h4>

                    {/* Percentage */}
                    <div className="flex items-center gap-2">
                        <span className="hidden md:block w-12 h-[1px] bg-white/20" />
                        <span className={cn("text-xl md:text-2xl font-bold font-mono tracking-tighter", item.color)}>
                            {item.percent}%
                        </span>
                    </div>
                </div>

                {/* Color Dot */}
                <div className={cn("w-3 h-3 rounded-full opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_10px_currentColor] transition-all animate-pulse-slow", item.color.replace('text-', 'bg-'))} />
            </div>
        </div>
    );
}

const TokenEconomySection = () => {
    return (
        <section id="tokenomics" className="py-32 px-4 md:px-12 bg-[#050505] relative z-10 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow" />

            <div className="max-w-[90rem] mx-auto relative z-20">

                {/* Header Centered */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 border border-purple-400 bg-purple-900/20 rounded-full px-4 py-1.5 text-purple-300 font-mono text-xs tracking-widest uppercase shadow-[0_0_15px_-5px_#a855f7]">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        On-Chain Data
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold text-white font-['Space_Grotesk'] tracking-tighter leading-[0.9]">
                        <TextReveal>TOKEN</TextReveal> <span className="text-white/70">CHART</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT Column: Pie Chart (Visual) */}
                    <div className="lg:col-span-4 flex justify-center">
                        <PieChart />
                    </div>

                    {/* MIDDLE Column: Allocation List (Data) */}
                    <div className="lg:col-span-4">
                        <div className="mb-8 flex items-end justify-between border-b-2 border-white/20 pb-4">
                            <h3 className="text-sm font-mono text-white font-bold uppercase tracking-widest">Allocation breakdown</h3>
                            <span className="text-xs font-mono text-teal-400 animate-pulse font-bold">LIVE // VERIFIED</span>
                        </div>

                        <div className="flex flex-col">
                            {distribution.map((item, idx) => (
                                <ChartRow key={idx} item={item} index={idx} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT Column: Info Box & Buttons (Action) */}
                    <div className="lg:col-span-4">

                        {/* Specs Panel - Tech Plate Style */}
                        <div className="p-8 rounded-lg bg-[#0e0e0e] border-2 border-white/20 hover:border-white/50 transition-colors relative shadow-2xl">
                            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-teal-500" />
                            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-teal-500" />

                            <div className="space-y-6 relative z-10 font-mono text-sm">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-gray-400 font-bold tracking-wider">TICKER</span>
                                    <span className="text-white font-bold text-2xl tracking-tighter">VAYLA</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-gray-400 font-bold tracking-wider">NETWORK</span>
                                    <div className="flex items-center gap-2">
                                        <span className="iconify text-[#F0B90B] text-xl" data-icon="cryptocurrency-color:bnb" />
                                        <span className="text-white font-bold text-lg">BNB CHAIN</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-gray-400 font-bold tracking-wider">TOTAL SUPPLY</span>
                                    <span className="text-teal-300 font-bold text-lg">3,000,000,000</span>
                                </div>

                                {/* Dynamic Buttons Grid */}
                                <div className="grid grid-cols-1 gap-4 pt-4">

                                    {/* Main Contract Actions */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <a href="https://bscscan.com/token/0x3b6b2593475FC2Bf546F237Fd401D63a655cE53f" target="_blank" rel="noopener noreferrer"
                                            className="group relative flex flex-col items-center justify-center gap-2 py-4 bg-black/40 border border-white/10 hover:border-teal-500/50 text-gray-400 hover:text-teal-400 transition-all duration-300 rounded overflow-hidden backdrop-blur-sm hover:animate-breath">
                                            {/* Hover Glitch Effect Background */}
                                            <div className="absolute inset-0 bg-teal-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />

                                            <span className="iconify text-2xl group-hover:scale-110 transition-transform relative z-10" data-icon="simple-icons:binance" />
                                            <span className="text-[10px] uppercase tracking-widest font-bold relative z-10 group-hover:tracking-[0.25em] transition-all">BSCScan</span>
                                        </a>

                                        <a href="https://www.coingecko.com/en/coins/vayla-2" target="_blank" rel="noopener noreferrer"
                                            className="group relative flex flex-col items-center justify-center gap-2 py-4 bg-black/40 border border-white/10 hover:border-green-500/50 text-gray-400 hover:text-green-400 transition-all duration-300 rounded overflow-hidden backdrop-blur-sm hover:animate-breath"
                                            style={{ animationDelay: '0.3s' }}>
                                            {/* Hover Glitch Effect Background */}
                                            <div className="absolute inset-0 bg-green-500/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />

                                            <span className="iconify text-2xl group-hover:scale-110 transition-transform relative z-10" data-icon="simple-icons:coingecko" />
                                            <span className="text-[10px] uppercase tracking-widest font-bold relative z-10 group-hover:tracking-[0.25em] transition-all">CoinGecko</span>
                                        </a>
                                    </div>

                                    {/* Hero Button - CMC */}
                                    <a href="https://coinmarketcap.com/currencies/vayla/" target="_blank" rel="noopener noreferrer"
                                        className="group relative flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-500/30 hover:border-blue-400 text-blue-100 font-bold uppercase tracking-wider text-xs transition-all rounded shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] overflow-hidden hover:animate-breath"
                                        style={{ animationDelay: '0.6s' }}>

                                        {/* Animated Shine */}
                                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                                        <div className="flex items-center gap-3 relative z-10">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:bg-blue-500/40 transition-colors">
                                                <span className="iconify text-lg text-blue-300" data-icon="simple-icons:coinmarketcap" />
                                            </div>
                                            <span>View on CoinMarketCap</span>
                                        </div>
                                        <span className="iconify text-lg group-hover:translate-x-1 transition-transform text-blue-400" data-icon="mdi:arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Footer Notes */}
                        <div className="mt-8 text-[10px] text-gray-500 font-mono text-center">
                            * Token distribution schedule is subject to DAO governance voting and vesting periods.
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenEconomySection;
