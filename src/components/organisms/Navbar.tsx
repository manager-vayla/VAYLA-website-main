'use client';

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/assets/VAYLA_S_LOGO_White.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: 'Mission', href: '/' },
        { label: 'Ecosystem', href: '/' },
        { label: 'Tokenomics', href: '/' },
        { label: 'Governance', href: '/' },
        { label: 'Chart', href: '/chart' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-500 ${scrolled ? 'py-4 bg-black/50 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
            <Link href="/" className="flex items-center pointer-events-auto group cursor-pointer h-10">
                <Image
                    src={logo}
                    alt="VAYLA Protocol"
                    width={120}
                    height={40}
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    priority
                />
            </Link>

            <div className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md border border-white/5 rounded-full px-2 py-2 pointer-events-auto shadow-xl">
                {navItems.map((item) => (
                    <Link 
                        key={item.label} 
                        href={item.href}
                        className={`relative px-6 py-2 text-xs font-bold tracking-widest transition-all uppercase font-mono group overflow-hidden rounded-full ${
                            pathname === item.href 
                                ? 'text-white' 
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        <span className="relative z-10">{item.label}</span>
                        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </Link>
                ))}
            </div>

            <div className="pointer-events-auto hidden md:flex gap-4 items-center">
                <ConnectButton showBalance={false} accountStatus="address" chainStatus="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
