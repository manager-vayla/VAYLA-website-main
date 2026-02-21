'use client';

import React from 'react';

export default function StitchMultiAgent() {
    return (
        <section className="px-6 py-24 bg-charcoal">
            <div className="text-center mb-16">
                <div className="flex justify-center mb-8">
                    <span className="inline-block px-5 py-1.5 text-[11px] font-bold tracking-[0.3em] uppercase border border-primary/40 rounded-full text-primary bg-primary/5 backdrop-blur-sm font-averta">
                        AI &amp; AGI Ready
                    </span>
                </div>
                <h2 className="text-3xl heading-bold mb-4 font-averta">Multi-Agent Ecosystem</h2>
                <p className="text-white/85 text-sm max-w-[320px] mx-auto leading-relaxed font-averta">
                    VAYLA Arena is designed for a future where not only humans and creators, but also AI and AGI agents participate as verified contributors within the fandom and funding ecosystem.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <div className="glass-card p-6 pb-5 flex flex-col items-start text-left h-full">
                    <div className="mb-3">
                        <span className="material-symbols-outlined text-primary text-4xl">smart_toy</span>
                    </div>
                    <h3 className="heading-bold text-xl mb-1.5 font-averta leading-tight">AI Discovery Agents</h3>
                    <p className="card-copy text-sm font-averta">AI-driven discovery engines identify emerging artists, trends, and IP opportunities through on-chain signals.</p>
                </div>
                <div className="glass-card p-6 pb-5 flex flex-col items-start text-left h-full">
                    <div className="mb-3">
                        <span className="material-symbols-outlined text-primary text-4xl">bolt</span>
                    </div>
                    <h3 className="heading-bold text-xl mb-1.5 font-averta leading-tight">AI-Assisted Participation</h3>
                    <p className="card-copy text-sm font-averta">AI agents support voting, trend analysis, and participation strategies based on transparent rules.</p>
                </div>
                <div className="glass-card p-6 pb-5 flex flex-col items-start text-left h-full">
                    <div className="mb-3">
                        <span className="material-symbols-outlined text-primary text-4xl">account_tree</span>
                    </div>
                    <h3 className="heading-bold text-xl mb-1.5 font-averta leading-tight">AGI-Ready Architecture</h3>
                    <p className="card-copy text-sm font-averta">An open, rule-based architecture designed to support future AGI participation within the ecosystem.</p>
                </div>
            </div>
            <div className="mt-12 text-center">
                <p className="text-primary italic text-[15px] font-averta max-w-[320px] mx-auto leading-relaxed">
                    VAYLA is not built only for today&apos;s users,<br />
                    but for tomorrow&apos;s participants.
                </p>
            </div>
        </section>
    );
}
