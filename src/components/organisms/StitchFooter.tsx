'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getWhitepaperUrl } from '@/utils/whitepaperUtils';

export default function StitchFooter() {
    const [whitepaperUrl, setWhitepaperUrl] = useState<string>('https://manager-vayla.github.io/VAYLA-link-tree/(EN)_VAYLA_WHITEPAPER_v3.8.pdf');

    useEffect(() => {
        const fetchPdfUrl = async () => {
            try {
                const url = await getWhitepaperUrl();
                setWhitepaperUrl(url);
            } catch (error) {
                console.error('Failed to fetch whitepaper URL:', error);
                setWhitepaperUrl('https://manager-vayla.github.io/VAYLA-link-tree/(EN)_VAYLA_WHITEPAPER_v3.8.pdf');
            }
        };

        fetchPdfUrl();
    }, []);

    return (
        <footer className="bg-charcoal pt-24 pb-12 px-6 border-t border-white/5 relative z-10">
            <div className="max-w-md mx-auto flex flex-col items-start text-left">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(112,243,216,0.3)]">
                        <span className="material-symbols-outlined text-midnight text-2xl font-bold">layers</span>
                    </div>
                    <span className="heading-bold text-3xl uppercase tracking-tighter text-white">VAYLA</span>
                </div>
                <p className="sub-copy text-[15px] mb-10 font-averta max-w-sm leading-relaxed text-white/80">
                    The core protocol for <span className="text-white font-averta font-bold">Borderless Fandom</span>.<br />
                    Empowering creators, fans, and AI agents through<br />
                    decentralized on-chain participation.
                </p>
                <div className="flex gap-3 mb-16 w-full">
                    {/* Social links restored from original Footer */}
                    <a className="social-icon-enhanced" href="https://x.com/vaylaofficial_" target="_blank" rel="noopener noreferrer">
                        <img alt="X" className="w-8 h-8 opacity-95" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoJWShCYfHS63g80c1U2UGheZi2QhZdjizYhVOpc3wGkGkK0uHyq4uQmOvintIcQ_ghGBWUQOv1x16B91k5BDz1z5MYn8N1ttqPQPbihhZAl5b9okiMhC9YnksPj217I7PdiIMOINmh1f73Cxd0KP-x9IuYe1ifzPtgTrZwJWMypaDSB8vPuc6Ns45oOXnjrcEDayc9Hn2y4-S0u6SftnglabRacfgHZ6hjgKq60jfnWEpxSiZW60BBibb1vBU8OWkgZcd52DPHGEX" />
                    </a>
                    <a className="social-icon-enhanced" href="https://t.me/Vayla_Official" target="_blank" rel="noopener noreferrer">
                        <img alt="Telegram" className="w-8 h-8 opacity-95" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBygNTmhRFfjZ8VmllCwZpbKQ0n3QBiCcvGWdyDxtkqGY65yIxoS-d_K_ujeTYwcIGcj8joKXVxecFjnZISNy3Fo84F-QXXzygdTcQUlIqpyeV-R1GRpAgGOhQ2P8yZIgfcYyHNAuMJbNlnWM3GZ4h0-lrkOMXli5UiRjs5rItONB9leVzT8iudlT7WesWWAOlK9NsD-C-aAqlu8_zymI9R9qr9SvCVQEbxGTOcgyxacv2QxmDtGwz8dJAVepGfJycvQO9xB4j0qW5M" />
                    </a>
                    <a className="social-icon-enhanced" href="https://discord.gg/PSNRHbZDS4" target="_blank" rel="noopener noreferrer">
                        <img alt="Discord" className="w-8 h-8 opacity-95" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfWBfVvQzwV17QZ_OCPgP6Z6-HuskQ5_nwewK1dl35dHzvpY880Yv15WvzkvltjrGuS5YSwtmMn9Eeeob6ywrtGU_s_1cVZVxVBHdqwscDTMYEyPBfkEo_8ogrWUVufuP_C7HyMz_vtfVQViDbqUX3UvABvzZxWgw2lmRYtNIgw-UN8scDofjPrqDGZaJHwJyLg4s3jpV0v73CdDFWJYW_kHCF398RvO4nytV78oGIzLLYSk7_3c40zZk6LspD_fFa2C1vHhNOp9YK" />
                    </a>
                    <a className="social-icon-enhanced" href="https://manager-vayla.github.io/VAYLA-link-tree/" target="_blank" rel="noopener noreferrer">
                        <img alt="Zealy" className="w-8 h-8 opacity-95" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBstR1QNyk1SHo2x2TZEDmf-DvGhb_5vUVb7xV7ibxZlaTwjXA7t8IE_sj9N7mOQcmGcRcQ6gsRAw8i_Nlh3rlJ0gCFdppI4YxTSIp-TRtwgSvTOLKTvXIuv8wmtkiAPBYfU0HPRpMsp4f9mVKsqExOG_tGOKgqgrhzOCAGxy8-ydy2EsC-kdbIKF1E5Vj86ZtKKzGgPoBu0gcxcMVw-EVD0AuxQCTjiLr1ZuxVKtUUOib4Onfp73lCkKzWB44RataGuZ7m4uUCfY9u" />
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-10 mb-16 font-averta w-full">
                    <div>
                        <h5 className="text-xs heading-bold uppercase tracking-[0.2em] text-primary mb-6">PLATFORM</h5>
                        <ul className="space-y-4 text-base text-white/60">
                            <li><Link className="hover:text-primary transition-colors" href="/arena">Arena</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/tokenutility">Token</Link></li>
                            <li><Link className="hover:text-primary transition-colors" href="/">Roadmap</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-xs heading-bold uppercase tracking-[0.2em] text-primary mb-6">RESOURCES</h5>
                        <ul className="space-y-4 text-base text-white/60">
                            <li><Link className="hover:text-primary transition-colors" href="/doc">Documentation</Link></li>
                            <li><a className="hover:text-primary transition-colors" href={whitepaperUrl} target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                            <li><a className="hover:text-primary transition-colors" href="https://github.com/manager-vayla" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-10 border-t border-white/5 flex flex-col gap-6 w-full items-start text-left">
                    <p className="text-[10px] text-white/30 heading-bold uppercase tracking-widest font-averta">©2026 VAYLA. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
