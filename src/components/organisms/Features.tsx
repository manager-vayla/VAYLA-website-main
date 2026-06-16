'use client';

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TextReveal from "@/components/atoms/TextReveal";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Data
const features = [
    {
        title: "AI CURATION",
        id: "01",
        desc: "Proprietary AI analyzes millions of data points to identify high-potential IPs.",
        className: "md:col-span-2 md:row-span-2",
        gradient: "from-pink-500/20 to-purple-500/20"
    },
    {
        title: "ASSET TOKENIZATION",
        id: "02",
        desc: "Fractional ownership of entertainment rights on-chain.",
        className: "md:col-span-1 md:row-span-1",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "DAO GOVERNANCE",
        id: "03",
        desc: "Stakeholder voting on key project milestones.",
        className: "md:col-span-1 md:row-span-1",
        gradient: "from-teal-500/20 to-emerald-500/20"
    },
    {
        title: "GLOBAL CDN",
        id: "04",
        desc: "Low-latency content delivery network.",
        className: "md:col-span-1 md:row-span-1",
        gradient: "from-orange-500/20 to-amber-500/20"
    },
    {
        title: "CROSS-CHAIN",
        id: "05",
        desc: "Seamlessly move assets between chains.",
        className: "md:col-span-1 md:row-span-1",
        gradient: "from-indigo-500/20 to-violet-500/20"
    }
];

const HolographicCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

    return (
        <motion.div
            style={{
                perspective: 1000,
            }}
            className={cn("relative h-full min-h-[300px]", feature.className)}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden group transition-all duration-300 hover:shadow-[0_0_30px_-5px_var(--glow-color)]"
            >
                {/* Dynamic Gradient Background */}
                <div className={cn("absolute inset-0 opacity-20 bg-gradient-to-br transition-opacity duration-500 group-hover:opacity-40", feature.gradient)} />

                {/* Holographic Liquid Texture Overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none mix-blend-color-dodge"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: 'cover'
                    }}
                />

                {/* Content */}
                <div style={{ transform: "translateZ(50px)" }} className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <span className="font-mono text-3xl font-bold text-white/10 tracking-widest">{feature.id}</span>
                        <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-teal-400 group-hover:shadow-[0_0_10px_#2dd4bf] transition-all" />
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold text-white font-['Space_Grotesk'] mb-3 tracking-tighter mix-blend-overlay group-hover:mix-blend-normal transition-all">
                            {feature.title}
                        </h3>
                        <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                            {feature.desc}
                        </p>
                    </div>
                </div>

                {/* Shine Effect */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.1) 55%, transparent 60%)`,
                        transform: 'translateZ(1px)' // Force GPU
                    }}
                />

            </motion.div>
        </motion.div>
    );
}

const Features = () => {
    return (
        <section id="governance" className="py-32 px-4 md:px-12 bg-[#050505] relative z-10">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6 border border-teal-500/30 bg-teal-500/10 rounded-full px-4 py-1.5 text-teal-400 font-mono text-xs tracking-widest uppercase">
                            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                            Core Architecture
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white leading-[0.85] font-['Space_Grotesk'] tracking-tighter">
                            <TextReveal>DYNAMICS</TextReveal> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/10 via-white/50 to-white/10 italic">
                                RE-ENGINEERED
                            </span>
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-400 font-mono max-w-md text-right hidden md:block border-r border-white/20 pr-6">
                        Transparency and profitability to address opacity in existing markets
                    </p>
                </div>

                {/* Bento Grid Layout */}
<<<<<<< HEAD
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {/* Large Card */}
                    <SpotlightCard
                        className="md:col-span-2 md:row-span-1 bg-[#0c0c0c]"
                        icon="eos-icons:ai"
                        title="AI Curation Engine"
                        desc="Our proprietary AI analyzes millions of data points across social platforms to identify high-potential IPs before they trend. It matches content to user preferences with 98% accuracy."
                        delay={0}
                    />

                    {/* Standard Cards */}
                    <SpotlightCard
                        className="md:col-span-1 md:row-span-1"
                        icon="eos-icons:blockchain"
                        title="Asset Tokenization"
                        desc="Fractional ownership of entertainment rights on-chain. Trade shares of your favorite songs, movies, and characters."
                        delay={100}
                    />

                    <SpotlightCard
                        className="md:col-span-1 md:row-span-1"
                        icon="eos-icons:secure-data-outlined"
                        title="DAO Governance"
                        desc="Stakeholder voting on key project milestones. The community decides which projects get funded."
                        delay={200}
                    />
                    <SpotlightCard
                        className="md:col-span-1 md:row-span-1"
                        icon="eos-icons:performance"
                        title="Global CDN"
                        desc="Low-latency content delivery network ensuring seamless streaming experiences anywhere in the world."
                        delay={300}
                    />
                    <SpotlightCard
                        className="md:col-span-1 md:row-span-1"
                        icon="eos-icons:api"
                        title="Cross-Chain Bridge"
                        desc="Seamlessly move assets between Ethereum, Solana, and BNB Smart Chain with our trustless bridge architecture."
                        delay={400}
                    />
=======
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(300px,auto)]">
                    {features.map((feature, idx) => (
                        <HolographicCard key={idx} feature={feature} index={idx} />
                    ))}
>>>>>>> binance-redesign2
                </div>
            </div>
        </section>
    );
};

export default Features;
