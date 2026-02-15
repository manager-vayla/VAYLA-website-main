import React from 'react';

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
            <section className="w-full max-w-6xl mb-24 px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-white">Core Utilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: 'Participation & Voting',
                            description: 'Used for on-chain participation, community voting, and engagement actions within the VAYLA Arena.',
                            icon: 'ri:thumb-up-line'
                        },
                        {
                            title: 'Funding & Settlement',
                            description: 'Primary asset for fandom-driven funding and IP-based projects, with transparent on-chain settlement.',
                            icon: 'ri:shake-hands-line'
                        },
                        {
                            title: 'Rewards & Circulation',
                            description: 'Collected fees are redistributed through rewards, ecosystem incentives, and continuous circulation.',
                            icon: 'ri:gift-line'
                        },
                        {
                            title: 'Future Utility (AI/AGI)',
                            description: 'Designed to support future AI and AGI participation as verified contributors within the ecosystem.',
                            icon: 'ri:robot-line'
                        }
                    ].map((util, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-start relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="flex items-center gap-5 mb-4 relative z-10 w-full">
                                <div className="w-12 h-12 shrink-0 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/30">
                                    <iconify-icon icon={util.icon} width="24" height="24"></iconify-icon>
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-tight">{util.title}</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-left pl-0 md:pl-16 relative z-10 text-sm md:text-base">{util.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Utility Flow Visualization */}
            {/* Utility Flow Visualization */}
            <section className="w-full max-w-6xl mb-24 text-center px-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-white">Utility Circulation Flow</h2>

                <div className="relative p-8 md:p-12 bg-white/5 rounded-[40px] border border-white/5 backdrop-blur-sm overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/5 blur-[100px] rounded-full -z-10"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                        {/* Step 1: Participation */}
                        <div className="flex flex-col items-center group flex-1">
                            <div className="w-20 h-20 rounded-2xl bg-black/40 border border-teal-500/30 flex items-center justify-center mb-4 shadow-[0_0_20px_-5px_rgba(45,212,191,0.2)] group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="ri:user-star-line" width="32" height="32" className="text-teal-400"></iconify-icon>
                            </div>
                            <div className="bg-teal-500/10 px-3 py-1 rounded-full text-[10px] text-teal-400 font-mono mb-2">STEP 01</div>
                            <h3 className="text-lg font-bold text-white mb-2">Participation</h3>
                            <p className="text-xs text-gray-400">Users engage & vote</p>
                        </div>

                        {/* Arrow 1 */}
                        <div className="flex items-center justify-center text-teal-500/30">
                            <iconify-icon icon="ri:arrow-right-double-line" width="32" height="32" className="hidden md:block animate-pulse-slow"></iconify-icon>
                            <iconify-icon icon="ri:arrow-down-double-line" width="32" height="32" className="md:hidden animate-pulse-slow"></iconify-icon>
                        </div>

                        {/* Step 2: Fees & Settlement */}
                        <div className="flex flex-col items-center group flex-1">
                            <div className="w-20 h-20 rounded-2xl bg-black/40 border border-teal-500/30 flex items-center justify-center mb-4 shadow-[0_0_20px_-5px_rgba(45,212,191,0.2)] group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="ri:safe-2-fill" width="32" height="32" className="text-teal-400"></iconify-icon>
                            </div>
                            <div className="bg-teal-500/10 px-3 py-1 rounded-full text-[10px] text-teal-400 font-mono mb-2">STEP 02</div>
                            <h3 className="text-lg font-bold text-white mb-2">Fees & Settlement</h3>
                            <p className="text-xs text-gray-400">Aggregation in Treasury</p>
                        </div>

                        {/* Arrow 2 */}
                        <div className="flex items-center justify-center text-teal-500/30">
                            <iconify-icon icon="ri:arrow-right-double-line" width="32" height="32" className="hidden md:block animate-pulse-slow"></iconify-icon>
                            <iconify-icon icon="ri:arrow-down-double-line" width="32" height="32" className="md:hidden animate-pulse-slow"></iconify-icon>
                        </div>

                        {/* Step 3: Funding Rewards */}
                        <div className="flex flex-col items-center group flex-1">
                            <div className="w-20 h-20 rounded-2xl bg-black/40 border border-teal-500/30 flex items-center justify-center mb-4 shadow-[0_0_20px_-5px_rgba(45,212,191,0.2)] group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="ri:gift-2-line" width="32" height="32" className="text-teal-400"></iconify-icon>
                            </div>
                            <div className="bg-teal-500/10 px-3 py-1 rounded-full text-[10px] text-teal-400 font-mono mb-2">STEP 03</div>
                            <h3 className="text-lg font-bold text-white mb-2">Funding Rewards</h3>
                            <p className="text-xs text-gray-400">Incentives for Creators</p>
                        </div>

                        {/* Arrow 3 */}
                        <div className="flex items-center justify-center text-teal-500/30">
                            <iconify-icon icon="ri:arrow-right-double-line" width="32" height="32" className="hidden md:block animate-pulse-slow"></iconify-icon>
                            <iconify-icon icon="ri:arrow-down-double-line" width="32" height="32" className="md:hidden animate-pulse-slow"></iconify-icon>
                        </div>

                        {/* Step 4: Circulation */}
                        <div className="flex flex-col items-center group flex-1">
                            <div className="w-20 h-20 rounded-2xl bg-black/40 border border-teal-500/30 flex items-center justify-center mb-4 shadow-[0_0_20px_-5px_rgba(45,212,191,0.2)] group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="ri:loop-right-line" width="32" height="32" className="text-teal-400"></iconify-icon>
                            </div>
                            <div className="bg-teal-500/10 px-3 py-1 rounded-full text-[10px] text-teal-400 font-mono mb-2">STEP 04</div>
                            <h3 className="text-lg font-bold text-white mb-2">Circulation</h3>
                            <p className="text-xs text-gray-400">Re-entry into ecosystem</p>
                        </div>
                    </div>
                </div>
            </section>

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
