'use client';

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/VAYLA_S_LOGO_White.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: 'HOME', href: '/' },
        { label: 'VAYLA Arena', href: '/arena' },
        { label: 'VAYLA Token', href: '/tokenutility' },
        { label: 'Docs & GitHub', href: '/doc' },
    ];

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-500 ${scrolled ? 'py-4 bg-black/60 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'}`}>
                <Link href="/" className="flex items-center pointer-events-auto group cursor-pointer h-24 md:h-32">
                    <Image
                        src={logo}
                        alt="VAYLA Protocol"
                        width={160}
                        height={54}
                        className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md border border-white/5 rounded-full px-2 py-2 pointer-events-auto shadow-xl">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`relative px-6 py-2 text-xs font-bold tracking-widest transition-all uppercase font-mono group overflow-hidden rounded-full ${isActive(item.href)
                                ? 'text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <span className="relative z-10">{item.label}</span>
                            <div className={`absolute inset-0 bg-white/5 transition-transform duration-300 ${isActive(item.href) ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'}`}></div>
                        </Link>
                    ))}
                </div>

                <div className="pointer-events-auto flex gap-4 items-center">
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <iconify-icon icon="lucide:menu" width="24" height="24"></iconify-icon>
                    </button>
                </div>
            </nav>

            <div className={`fixed inset-0 z-[100] bg-[#0A0C0B] flex flex-col p-6 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                {/* Header */}
                <div className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center p-2">
                            <Image src={logo} alt="VAYLA" width={24} height={24} className="brightness-0" />
                        </div>
                        <span className="text-2xl font-bold tracking-tighter text-white uppercase italic">VAYLA</span>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white"
                    >
                        <iconify-icon icon="lucide:x" width="24" height="24"></iconify-icon>
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav className="flex flex-col gap-8 mb-auto">
                    {
                        [
                            { label: 'HOME', href: '/' },
                            { label: 'VAYLA Arena', href: '/arena' },
                            { label: 'VAYLA Token', href: '/tokenutility' },
                            { label: 'Docs & GitHub', href: '/doc' },
                        ].map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-4xl font-bold tracking-tight uppercase italic transition-all active:scale-95 ${isActive(item.href) ? 'text-teal-400' : 'text-white'}`}
                            >
                                {item.label}
                            </Link>
                        ))
                    }
                </nav>

                {/* Footer and Socials */}
                <div className="mt-auto">
                    <div className="flex gap-4 mb-8">
                        {['simple-icons:x', 'simple-icons:telegram', 'simple-icons:discord', 'ph:user-bold'].map((icon, idx) => (
                            <div key={idx} className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/60">
                                <iconify-icon icon={icon} width="24" height="24"></iconify-icon>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                        <p className="text-gray-500 text-sm font-medium tracking-tight">The Protocol for Borderless Fandom.</p>
                        <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase italic">©2026 VAYLA. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>

                {/* Decorative Background Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20 z-[-1]">
                    <div className="absolute top-[20%] left-[10%] w-[80%] h-[80%] bg-teal-500/10 blur-[100px] rounded-full"></div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
