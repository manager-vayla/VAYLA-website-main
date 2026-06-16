'use client';

import React from 'react';
import Link from 'next/link';

export default function StitchGovernance() {
    return (
        <section className="px-6 py-24 bg-midnight">
            <div className="text-center mb-16">
                <div className="flex justify-center mb-8">
                    <span className="inline-block px-5 py-2 text-[11px] font-bold tracking-[0.3em] uppercase border border-primary/40 rounded-full text-primary bg-primary/5 backdrop-blur-sm font-averta">
                        GOVERNANCE
                    </span>
                </div>
                <h2 className="text-3xl heading-bold mb-4 font-averta">Transparency &amp; Disclosure</h2>
                <p className="sub-copy text-sm max-w-xs mx-auto font-averta">Transparency and on-chain disclosure are core principles of the VAYLA ecosystem.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="glass-card p-8 border-primary/30 flex flex-col items-center text-center h-full">
                    <h3 className="text-xl heading-bold mb-3 font-averta">Documentation</h3>
                    <p className="card-copy text-sm mb-6 font-averta">Official documents including whitepaper, platform overview, token utility, and positioning notes.</p>
                    <div className="mt-auto w-full">
                        <Link href="/doc" className="w-full bg-primary text-midnight heading-bold flex items-center justify-center py-3.5 rounded-xl text-sm shadow-[0_4px_15px_rgba(112,243,216,0.2)] font-averta">
                            View Docs
                        </Link>
                    </div>
                </div>
                <div className="glass-card p-8 border-primary/30 flex flex-col items-center text-center h-full">
                    <h3 className="text-xl heading-bold mb-3 font-averta">GitHub Repository</h3>
                    <p className="card-copy text-sm mb-6 font-averta">Public disclosures, development structure, and ongoing project updates.</p>
                    <div className="mt-auto w-full">
                        <a href="https://github.com/manager-vayla" target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-midnight heading-bold flex items-center justify-center py-3.5 rounded-xl text-sm shadow-[0_4px_15px_rgba(112,243,216,0.2)] font-averta">
                            View GitHub
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center px-4">
                <p className="text-[15px] text-primary italic font-averta leading-relaxed">
                    This website reflects the same structure and disclosures shared<br />
                    with partners and exchanges.
                </p>
            </div>
        </section>
    );
}
