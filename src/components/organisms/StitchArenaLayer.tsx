'use client';

import React from 'react';
import Image from 'next/image';

export default function StitchArenaLayer() {
    return (
        <section className="px-6 py-24 bg-charcoal">
            <div className="text-center mb-12">
                <div className="flex justify-center mb-8">
                    <span className="inline-block px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase border border-primary/40 rounded-full text-primary bg-primary/5 backdrop-blur-sm font-averta">
                        VAYLA ARENA
                    </span>
                </div>
                <h2 className="text-3xl heading-bold leading-tight font-averta">The On-chain <br />Operating Layer</h2>
                <p className="text-white/85 text-sm mt-4 font-averta max-w-[280px] mx-auto leading-relaxed">where the VAYLA token is actively used, earned, and settled.</p>
            </div>
            <div className="space-y-8 mb-12">
                <div className="split-card">
                    <div className="relative w-full h-[180px] overflow-hidden">
                        <img alt="Solo artist" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdp6t_Hvdnp6sBjfKMnhm3TMmY9VEvYHjc7-33aMBYuNaQqB5CYBlEpqprcqzj0tkwWlrJoRc5ML00HfqjwGVa2RwnWibz1goJfCVJo68ZSj4-LpANvaQhvK1FfivgcgxMYcM5YK6KNi3-MiPOWvPHypl1Q2kW1juBpLKg0GoAKMIaAzRQGxAQ8jNvzsF7uPSLO71LxtPQeoHJrac1nDLQcrTiJ4lJC-GD6IU0I5StYor-jXaXR2gMFYNluNSRHaUWo_Ah8e1YgsjB" />
                        <div className="absolute top-4 right-4 bg-yellow-400 text-black text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Upcoming</div>
                    </div>
                    <div className="split-card-content">
                        <span className="text-[18px] font-bold mb-3 block tracking-[0.2em] uppercase font-averta text-primary">[VAYLA DISCOVERY]</span>
                        <h3 className="text-[22px] heading-bold mb-2 text-white font-averta">Discover and support new creators</h3>
                        <p className="text-white/80 text-sm leading-relaxed font-averta">Discover emerging artists, projects, and IPs through on-chain signals and community-driven insights.</p>
                    </div>
                </div>
                <div className="split-card">
                    <div className="relative w-full h-[180px] overflow-hidden">
                        <img alt="Concert Crowd" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXANSABxPmUwPZPniwv6wN_EPak9cbEziRfcNSfAefW8oarYM-YT4gS7r46wHDH2m-Bin4oEtHSVZCJ4Ba66RAQIN2BaBkHkBlcd-ipk9rHbqn0B0HcU17CyJee9seValkvsP7wi3IYOZtIRJfUb0-jPdif5RedRNSrH_QoTWPN2QBfB8WhMYUByqz1sPc9Bgs_7Ghgl45R5lPtf3Nc_ZsIR4DbmVMl03g_UvlE53wj2vHmoKp8TwcetqlV8vMb8mBR5WmUaLhA03b" />
                        <div className="absolute top-4 right-4 bg-yellow-400 text-black text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Live Now</div>
                    </div>
                    <div className="split-card-content">
                        <span className="text-[18px] font-bold mb-3 block tracking-[0.2em] uppercase font-averta text-primary">[V-ONCHAIN CHART]</span>
                        <h3 className="text-[22px] heading-bold mb-2 text-white font-averta">Vote and influence on-chain rankings</h3>
                        <p className="text-white/80 text-sm leading-relaxed font-averta">Community-powered on-chain charts driven by transparent voting and participation.</p>
                    </div>
                </div>
                <div className="split-card">
                    <div className="relative w-full h-[180px] overflow-hidden">
                        <img alt="Festival" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaQk6Bo9zOWNckdoy6FQZNNgy-FXYm8lss3vxA8ipbdATwA_63IXD5R4157OhnKf26SwK7nQUjrYDd7qVkxLWlmR-A5oonFqVaiFDJLsLlsCVzIM7wATPZnZnYWwLKk1d66VsjhtTBC1fQeQpof_0ya643ENo1H4r2qaMYshtQ9Ze-2wf6NQdJtP8i-K3X0kPo71myv7lyh6kaOWNc64cznsVzg-1T5ofgEPdz4aGshNVDAUN-edN4CcIf0xbtuehifCnviEmYGJQj" />
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Goal: $1M</div>
                    </div>
                    <div className="split-card-content">
                        <span className="text-[18px] font-bold mb-3 block tracking-[0.2em] uppercase font-averta text-primary">[VAYLA 3.0 FUNDING]</span>
                        <h3 className="text-[22px] heading-bold mb-2 text-white font-averta">Participate in Web3 funding projects</h3>
                        <p className="text-white/80 text-sm leading-relaxed font-averta">Web3-native fandom funding powered by participation-based on-chain settlement.</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-primary italic font-normal text-sm font-averta tracking-tight leading-relaxed max-w-[320px] mx-auto">
                    Together, these modules form a continuous<br />
                    on-chain participation and funding<br />
                    ecosystem.
                </p>
            </div>
        </section>
    );
}
