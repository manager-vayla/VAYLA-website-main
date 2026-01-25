import React, { useEffect, useState } from "react";
import logo from '@/assets/VAYLA_S_LOGO_White.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 transition-all duration-500 ${scrolled ? 'py-4 bg-black/50 backdrop-blur-xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
            <div className="flex items-center pointer-events-auto group cursor-pointer h-32">
                <img
                    src={logo}
                    alt="VAYLA Protocol"
                    className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="hidden md:flex items-center gap-2 bg-black/20 backdrop-blur-md border border-white/5 rounded-full px-2 py-2 pointer-events-auto shadow-xl">
                {['Mission', 'Ecosystem', 'Tokenomics', 'Governance'].map((item) => (
                    <a key={item} href="#" className="relative px-6 py-2 text-xs font-bold tracking-widest text-gray-400 hover:text-white transition-all uppercase font-mono group overflow-hidden rounded-full">
                        <span className="relative z-10">{item}</span>
                        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                ))}
            </div>

            <div className="pointer-events-auto hidden md:flex gap-4 items-center">
                <ConnectButton showBalance={false} accountStatus="address" chainStatus="icon" />
            </div>
        </nav>
    );
};

export default Navbar;
