'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCirculationFlow() {
    return (
        <section className="w-full max-w-7xl mb-32 text-center px-4">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-20 font-['Space_Grotesk'] tracking-tighter uppercase">
                Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Flow</span>
            </h2>

            <div className="relative p-8 md:p-16 bg-[#050505] rounded-[40px] border border-white/5 overflow-hidden min-h-[500px] flex items-center justify-center">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/5 blur-[100px] rounded-full -z-10"></div>

                {/* Animated Connection Lines (Desktop) */}
                <div className="absolute inset-0 hidden md:block pointer-events-none z-0">
                    <svg className="w-full h-full" viewBox="0 0 1000 200" fill="none" preserveAspectRatio="none">
                        {/* Dashed Base Line */}
                        <path d="M100 100 L 900 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="10 10" />

                        {/* Animated Light Chaser */}
                        <motion.path
                            d="M100 100 L 900 100"
                            stroke="#2dd4bf"
                            strokeWidth="4"
                            strokeLinecap="square"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 0.15, 0],
                                opacity: [0, 1, 0],
                                pathOffset: [0, 1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* Static Nodes */}
                        <circle cx="100" cy="100" r="3" fill="#333" />
                        <circle cx="366" cy="100" r="3" fill="#333" />
                        <circle cx="633" cy="100" r="3" fill="#333" />
                        <circle cx="900" cy="100" r="3" fill="#333" />
                    </svg>
                </div>

                {/* Animated Connection Lines (Mobile - Vertical) */}
                <div className="absolute inset-0 md:hidden pointer-events-none z-0">
                    <svg className="w-full h-full" viewBox="0 0 100 800" fill="none" preserveAspectRatio="none">
                        <path d="M50 50 L 50 750" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="10 10" />
                        <motion.path
                            d="M50 50 L 50 750"
                            stroke="#2dd4bf"
                            strokeWidth="4"
                            strokeLinecap="square"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: [0, 0.15, 0],
                                opacity: [0, 1, 0],
                                pathOffset: [0, 1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </svg>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 w-full">
                    {/* Steps Typesetting */}
                    {[
                        { title: 'PARTICIPATE', sub: 'Users Engage & Vote', step: '01' },
                        { title: 'SETTLE', sub: 'Treasury Aggregation', step: '02' },
                        { title: 'REWARD', sub: 'Creator Incentives', step: '03' },
                        { title: 'CIRCULATE', sub: 'Ecosystem Loop', step: '04' }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center group relative">
                            {/* Floating Node */}
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="w-24 h-24 flex items-center justify-center mb-6 z-10 relative"
                            >
                                <div className="absolute inset-0 bg-[#0a0a0a] border border-teal-500/20 rounded-full group-hover:border-teal-400 transition-colors duration-300" />
                                <div className="absolute inset-2 border border-white/5 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />

                                <span className="relative z-10 font-mono text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
                                    {item.step}
                                </span>
                            </motion.div>

                            <h3 className="text-2xl font-black text-white mb-2 font-['Space_Grotesk'] tracking-tight group-hover:text-teal-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest bg-black px-2 py-1 border border-white/10 rounded-sm">
                                {item.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
