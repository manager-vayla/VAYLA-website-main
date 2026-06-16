'use client';

import React from "react";
import { motion } from "framer-motion";

const orbitItems = [
    { label: "PARTICIPATE", icon: "mdi:account-group", color: "#f472b6" },
    { label: "VOTE", icon: "mdi:ballot-outline", color: "#60a5fa" },
    { label: "FUND", icon: "mdi:finance", color: "#fbbf24" },
    { label: "EARN", icon: "mdi:currency-usd", color: "#34d399" },
    { label: "REINVEST", icon: "mdi:autorenew", color: "#a78bfa" },
    { label: "DISCOVER", icon: "mdi:compass-outline", color: "#22d3ee" },
];

const HolographicTurntable = () => {
    return (
        <div className="relative w-full aspect-square max-w-[800px] mx-auto py-20 flex items-center justify-center overflow-visible">

            {/* Ambient Background Glow - Nebula Effect */}
            <div className="absolute inset-0 bg-teal-500/10 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(45,212,191,0.1)_0%,transparent_70%)] opacity-50" />

            {/* Main Orbit Container */}
            <div className="relative w-full max-w-[340px] md:max-w-[650px] aspect-square flex items-center justify-center scale-[0.55] md:scale-100 origin-center">

                {/* --- RING 1: Outer Data Ring (SVG) --- */}
                <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                    <svg className="w-full h-full opacity-60" viewBox="0 0 100 100">
                        {/* Define defs for gradients if needed, but keeping simple for now */}
                        <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-teal-500/30" />
                        {/* Dashed segments */}
                        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 4" className="text-teal-500/50" />
                        {/* Decorative ticks */}
                        {[...Array(12)].map((_, i) => (
                            <line
                                key={i}
                                x1="50" y1="2"
                                x2="50" y2="6"
                                stroke="currentColor"
                                strokeWidth="0.5"
                                className="text-teal-400"
                                transform={`rotate(${i * 30} 50 50)`}
                            />
                        ))}
                    </svg>
                </div>

                {/* --- RING 2: Middle Track (Counter-Spin) --- */}
                <div className="absolute inset-12 animate-[spin_45s_linear_infinite_reverse]">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white/10" />
                        {/* Moving Head on Track */}
                        <circle cx="50" cy="1" r="1.5" fill="currentColor" className="text-teal-400 blur-[2px]" />
                        <circle cx="50" cy="1" r="0.8" fill="white" />
                    </svg>
                </div>

                {/* --- RING 3: Inner Containment Field --- */}
                <div className="absolute inset-28 animate-[spin_30s_linear_infinite]">
                    <div className="w-full h-full rounded-full border border-teal-500/20 border-t-transparent border-l-transparent" />
                </div>


                {/* Central V Hub - Hologram Projector */}
                <div className="absolute z-20 flex items-center justify-center">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        {/* Hexagon Base */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-md [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] border border-teal-500/30 shadow-[0_0_50px_rgba(45,212,191,0.2)]" />

                        {/* Spinning Hex Layers */}
                        <div className="absolute inset-2 border-2 border-teal-500/40 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-6 border border-teal-400/20 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] animate-[spin_15s_linear_infinite_reverse]" />

                        {/* Core "V" Hologram */}
                        <div className="relative z-10 flex items-center justify-center">
                            {/* Layered V for 3D effect */}
                            <span className="absolute text-7xl font-black text-teal-500 blur-[4px] opacity-50 animate-pulse font-['Space_Grotesk']">V</span>
                            <span className="absolute text-7xl font-black text-white/10 translate-x-[2px] translate-y-[2px] font-['Space_Grotesk']">V</span>
                            <span className="relative text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-teal-200 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] font-['Space_Grotesk']">V</span>
                        </div>
                    </div>
                </div>

                {/* Orbiting Icons - Hex Tech Frames */}
                <div className="absolute inset-0 animate-[spin_50s_linear_infinite]">
                    {orbitItems.map((item, i) => {
                        const angle = (360 / orbitItems.length) * i;
                        // Radius is half of the container width
                        const radius = 325;

                        return (
                            <div
                                key={i}
                                className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center"
                                style={{ transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)` }}
                            >
                                <div className="animate-[spin_50s_linear_infinite_reverse] group cursor-pointer z-50">
                                    <div className="relative flex flex-col items-center gap-4 transition-all duration-300 hover:scale-110">

                                        {/* Connector Line to Center */}
                                        <div className="absolute top-1/2 left-1/2 w-[325px] h-[1px] bg-gradient-to-r from-transparent via-teal-500/40 to-transparent -z-10 origin-left opacity-0 group-hover:opacity-100 transition-opacity"
                                            style={{ transform: `rotate(${angle + 180}deg) translateX(-50%)` }}
                                        />

                                        {/* Planet Icon Container */}
                                        <div className="relative w-24 h-24 flex items-center justify-center">

                                            {/* Planetary Ring (SVG) */}
                                            <div className="absolute inset-[-20%] pointer-events-none z-0 opacity-60">
                                                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
                                                    <ellipse cx="50" cy="50" rx="48" ry="12" fill="none" stroke="currentColor" strokeWidth="1" className="text-teal-500/30" transform="rotate(-45 50 50)" />
                                                    <ellipse cx="50" cy="50" rx="48" ry="12" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10" transform="rotate(45 50 50)" />
                                                </svg>
                                            </div>

                                            {/* Planet Atmosphere Glow */}
                                            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-teal-500/20 to-purple-500/20 blur-md group-hover:blur-lg transition-all duration-300" />

                                            {/* Planet Body */}
                                            <div className="absolute inset-3 rounded-full bg-black/90 border border-white/20 group-hover:border-teal-400/80 shadow-[inset_0_0_20px_rgba(45,212,191,0.2)] flex items-center justify-center backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(item.color)]">
                                                {/* Surface Texture */}
                                                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay" />

                                                {/* Icon */}
                                                <div className="relative z-10 transition-all group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] flex items-center justify-center" style={{ color: item.color }}>
                                                    {/* @ts-ignore */}
                                                    <iconify-icon icon={item.icon} style={{ fontSize: '36px' }}></iconify-icon>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Label Tag */}
                                        <div className="absolute top-[100%] flex flex-col items-center gap-1">
                                            <div className="w-[1px] h-3 bg-white/20 group-hover:bg-teal-500/50 transition-colors" />
                                            <span className="text-[10px] font-bold text-gray-400 bg-black/90 px-3 py-1 border border-white/10 uppercase tracking-[0.2em] shadow-lg whitespace-nowrap group-hover:border-teal-500 group-hover:text-teal-300 transition-all rounded-sm">
                                                {item.label}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>

            {/* System Footer Status */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                        <span className="w-1 h-3 bg-teal-500/50 animate-pulse" />
                        <span className="w-1 h-2 bg-teal-500/30" />
                        <span className="w-1 h-4 bg-teal-500/70" />
                    </div>
                    <p className="text-teal-400/70 text-[10px] font-mono tracking-[0.3em] uppercase">
                        System Active // VAYLA ARENA
                    </p>
                    <div className="flex gap-1">
                        <span className="w-1 h-4 bg-teal-500/70" />
                        <span className="w-1 h-2 bg-teal-500/30" />
                        <span className="w-1 h-3 bg-teal-500/50 animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HolographicTurntable;
