import React from 'react';
import FloatingUtilityCards from '@/components/organisms/FloatingUtilityCards';
import AnimatedCirculationFlow from '@/components/organisms/AnimatedCirculationFlow';

export default function TokenUtilityPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-32 md:pt-44 px-6 md:px-24">
            {/* Hero Section */}
            <div className="w-full max-w-5xl mb-20 mt-8 md:mt-0 text-center relative flex flex-col items-center px-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                    VAYLA Token Utility
                </h1>
                <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-center px-4">
                    The core utility and settlement token <br className="hidden md:block" />
                    powering participation, funding, and <br className="hidden md:block" />
                    circulation within the VAYLA ecosystem.
                </p>
                <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-2xl max-w-2xl text-sm md:text-base text-gray-300 backdrop-blur-md shadow-lg">
                    <span className="text-teal-400 font-bold block mb-2 text-xs uppercase tracking-widest">Important</span>
                    VAYLA is not designed as a speculative asset. It functions as the core utility, settlement, and circulation token across the VAYLA Arena.
                </div>
            </div>

            {/* Core Utilities */}
            <FloatingUtilityCards />

            {/* Utility Flow Visualization */}
            <AnimatedCirculationFlow />

            {/* Positioning & Compliance */}
            <section className="w-full max-w-4xl p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6 text-white">Positioning & Compliance</h2>
                <p className="text-gray-400 mb-8 max-w-3xl mx-auto text-center leading-relaxed">
                    The VAYLA token enables platform participation and settlement. It does not represent ownership, profit-sharing rights, or financial guarantees. Usage strictly within the VAYLA Arena.
                </p>
                <div className="text-xs text-gray-500 font-mono text-center">
                    Token utility is directly tied to real platform usage within the VAYLA Arena.
                    <br />
                    ©2026 VAYLA. All rights reserved.
                </div>
            </section>
        </main>
    );
}
