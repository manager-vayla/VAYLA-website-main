'use client';

import React, { useEffect } from "react";
import Marquee from "@/components/organisms/Marquee";
import TextReveal from "@/components/atoms/TextReveal";

const Hero = () => {
    useEffect(() => {
        const initUnicorn = () => {
            if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: false };
                const script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js";
                script.onload = function () {
                    if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
                        window.UnicornStudio.init();
                        window.UnicornStudio.isInitialized = true;
                    }
                };
                document.head.appendChild(script);
            } else if (window.UnicornStudio.init) {
                window.UnicornStudio.init();
            }
        };
        initUnicorn();
    }, []);

    return (
        <section id="mission" className="relative w-full h-[110vh] flex flex-col justify-center bg-[#050505] overflow-hidden">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-teal-600/5 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Unicorn Studio Background */}
            <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none">
                <div
                    data-us-project="1rBEACsKFodpQQ5upTxc"
                    style={{ width: '100%', height: '100%' }}
                ></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex-grow flex flex-col justify-center px-6 md:px-12 pt-20">
                <div className="max-w-[90rem] mx-auto w-full -mt-[180px]">
                    {/* Tag */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-teal-500/20 bg-black/40 backdrop-blur-md mb-[30px] animate-fade-in-up [animation-delay:200ms]">
                        <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </div>
                        <span className="text-xs font-mono text-teal-300 uppercase tracking-[0.2em]">The Future of Fandom Economy</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-medium text-white tracking-tighter leading-[0.85] font-['Space_Grotesk'] mb-[150px] mix-blend-overlay opacity-90">
                        <TextReveal className="block">The Protocol for</TextReveal>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-white to-teal-400">
                            <TextReveal delay={0.2}>Borderless Fandom.</TextReveal>
                        </span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-white/10 pt-10 animate-fade-in-up [animation-delay:600ms]">
                        <p className="text-xs md:text-sm text-white font-light max-w-2xl leading-relaxed">
                            Bridging the gap between global fans and premier entertainment IPs.
                            From funding to ownership, VAYLA builds the infrastructure
                            for the next-generation fandom economy.
                        </p>

                        <div className="flex gap-6">
                            <a href="http://www.vayla-arena.com/" className="group h-14 px-8 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-teal-400 transition-all duration-300 flex items-center gap-3 rounded-sm">
                                JOIN VAYLA ARENA
                                <iconify-icon icon="eos-icons:arrow-forward" className="group-hover:translate-x-1 transition-transform"></iconify-icon>
                            </a>
                            <a
                                href="https://manager-vayla.github.io/VAYLA-link-tree/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="h-14 px-8 bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm flex items-center justify-center cursor-pointer"
                            >
                                Link Tree
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Marquee />
        </section>
    );
};

export default Hero;
