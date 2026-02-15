'use client';

import React from "react";
import Image from 'next/image';
import GlassAppIcon from "@/components/molecules/GlassAppIcon";
import logo from "@/assets/VAYLA_logo.png";

const PlatformSection = () => {
    const orbitItems = [
        { label: "Creator", icon: "mdi:account-star-outline", colorHex: "#f472b6" },
        { label: "Merch", icon: "mdi:tshirt-crew-outline", colorHex: "#60a5fa" },
        { label: "Fan Funding", icon: "mdi:hand-coin-outline", colorHex: "#22d3ee" },
        { label: "NFT Ticket", icon: "mdi:ticket-confirmation-outline", colorHex: "#a78bfa" },
        { label: "Rewards", icon: "ph:moon-fill", colorHex: "#fbbf24" },
        { label: "Staking", icon: "mdi:cached", colorHex: "#34d399" }
    ];

    return (
        <section id="ecosystem" className="py-32 px-6 md:px-12 bg-black relative z-10 overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-50"></div>

            <div className="max-w-[90rem] mx-auto relative z-10 w-full">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        The VAYLA Ecosystem
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        A closed-loop economy where value flows seamlessly between creators, fans, and investors.
                    </p>
                </div>

                {/* Circular Diagram Area */}
                <div className="relative w-full max-w-[900px] aspect-square mx-auto hidden md:block">
                    {/* Central Hub */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center">
                        <div className="relative w-[340px] h-[340px] flex items-center justify-center">
                            <div className="absolute inset-0 bg-emerald-400/20 blur-[90px] rounded-full animate-pulse"></div>

                            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_60px_rgba(45,212,191,0.3)] bg-black z-10 group hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={logo}
                                    alt="VAYLA Protocol Hub"
                                    width={320}
                                    height={320}
                                    className="w-full h-full object-cover rounded-full animate-[float_6s_ease-in-out_infinite]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/10 pointer-events-none rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Orbit System */}
                    <div className="absolute inset-0 z-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] border border-dashed border-emerald-400/20 rounded-full animate-[spin_120s_linear_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] border border-white/5 rounded-full"></div>

                        <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                            {orbitItems.map((item, index) => {
                                const angle = (360 / orbitItems.length) * index;
                                const radius = 390;

                                return (
                                    <div
                                        key={item.label}
                                        className="absolute top-1/2 left-1/2 flex items-center justify-center w-0 h-0"
                                        style={{ transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)` }}
                                    >
                                        <div className="absolute top-1/2 left-1/2 w-[390px] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent -z-10"
                                            style={{ transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`, transformOrigin: 'center' }}></div>

                                        <div className="animate-[spin_60s_linear_infinite_reverse] group">
                                            <div className="relative flex flex-col items-center gap-4">
                                                <GlassAppIcon icon={item.icon} colorLabel={item.label} colorHex={item.colorHex} />
                                                <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em] bg-black/70 backdrop-blur-2xl px-5 py-2 rounded-full border border-white/10 group-hover:text-emerald-400 group-hover:border-emerald-500/40 transition-all shadow-2xl">
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

                {/* Mobile View */}
                <div className="md:hidden flex flex-col gap-4 mb-20 mt-10">
                    <div className="w-56 h-56 mx-auto mb-12 relative rounded-full overflow-hidden border-2 border-white/20 shadow-xl bg-black">
                        <Image src={logo} width={224} height={224} className="w-full h-full object-cover" alt="Logo" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {orbitItems.map((item, i) => (
                            <div key={i} className="flex flex-col items-center justify-center gap-4 p-6 bg-[#0a0a0a] border border-white/10 rounded-2xl">
                                <GlassAppIcon icon={item.icon} colorLabel={item.label} colorHex={item.colorHex} />
                                <span className="text-white font-bold font-mono text-[10px] uppercase text-center tracking-widest">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
      `}</style>
        </section>
    );
};

export default PlatformSection;
