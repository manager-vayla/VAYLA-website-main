import React from 'react';

export default function DocPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-32 md:pt-44 px-6 md:px-24">
            {/* Header */}
            <div className="w-full max-w-5xl mb-20 mt-8 md:mt-0 text-center relative flex flex-col items-center px-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
                <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
                    VAYLA Documentation
                </h1>
                <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed text-center">
                    Official documents and disclosures <br className="hidden md:block" />
                    providing a comprehensive overview of <br className="hidden md:block" />
                    the VAYLA project and ecosystem.
                </p>
            </div>

            {/* Document Links */}
            <section className="w-full max-w-5xl mb-24 grid md:grid-cols-2 gap-6 px-4">
                {[
                    {
                        title: 'Whitepaper',
                        description: "Comprehensive overview of VAYLA's vision, platform structure, token utility, and roadmap.",
                        icon: 'ri:file-paper-2-line',
                        link: 'https://manager-vayla.github.io/VAYLA-link-tree/(EN)_VAYLA_WHITEPAPER_v3.5.pdf',
                        highlight: true
                    },
                    {
                        title: 'Platform Overview',
                        description: 'High-level explanation of VAYLA Arena, including Discovery, On-chain Chart, and Funding modules.',
                        icon: 'ri:layout-grid-line'
                    },
                    {
                        title: 'Token Utility & Economics',
                        description: 'Detailed explanation of how the VAYLA token is used, circulated, and settled within the ecosystem.',
                        icon: 'ri:coin-line'
                    },
                    {
                        title: 'Legal & Positioning Notes',
                        description: 'Clarification of VAYLA\'s role as a participation infrastructure, not a financial product issuer.',
                        icon: 'ri:scales-3-line'
                    },
                    {
                        title: 'GitHub Repository',
                        description: 'Public disclosures, development structure, and ongoing project updates.',
                        icon: 'ri:github-fill',
                        link: 'https://github.com/manager-vayla',
                        highlight: true
                    }
                ].map((doc, i) => (
                    <a
                        key={i}
                        href={doc.link || '#'}
                        target={doc.link ? '_blank' : '_self'}
                        rel={doc.link ? 'noopener noreferrer' : ''}
                        className={`group flex flex-col md:flex-row items-start gap-6 p-8 rounded-3xl bg-white/5 border hover:bg-white/10 transition-all duration-300 relative overflow-hidden ${doc.highlight
                                ? 'border-teal-500/50 shadow-[0_0_15px_-5px_rgba(45,212,191,0.2)]'
                                : 'border-white/10 hover:border-teal-500/50'
                            }`}
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-teal-500/10 ${doc.highlight ? 'bg-teal-500/10' : 'bg-teal-500/5'}`}></div>

                        <div className={`w-14 h-14 shrink-0 rounded-2xl border text-gray-300 flex items-center justify-center group-hover:bg-teal-500 group-hover:text-black transition-all duration-300 group-hover:scale-110 ${doc.highlight ? 'bg-teal-500/10 border-teal-500/30 text-teal-400' : 'bg-white/5 border-white/5'
                            }`}>
                            <iconify-icon icon={doc.icon} width="24" height="24"></iconify-icon>
                        </div>
                        <div className="flex-1">
                            <h3 className={`text-xl font-bold mb-3 group-hover:text-teal-400 transition-colors flex items-center gap-2 ${doc.highlight ? 'text-teal-400' : 'text-white'}`}>
                                {doc.title}
                                {doc.link && <iconify-icon icon="ri:external-link-line" width="16" height="16" className="opacity-50 group-hover:opacity-100"></iconify-icon>}
                            </h3>
                            <p className="text-sm md:text-base text-gray-400 leading-relaxed text-left group-hover:text-gray-300 transition-colors">
                                {doc.description}
                            </p>
                        </div>
                    </a>
                ))}
            </section>

            {/* Footer Note */}
            <div className="text-center text-gray-500 text-sm max-w-2xl mx-auto font-mono">
                <p className="mb-4">
                    All documents are periodically updated to reflect the latest developments of the VAYLA project.
                </p>
                <p>
                    VAYLA is not designed as a speculative asset. It functions as the core utility, settlement, and circulation token across the VAYLA Arena.
                </p>
                <br />
                ©2026 VAYLA. All rights reserved.
            </div>
        </main>
    );
}
