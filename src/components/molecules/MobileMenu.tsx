'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/vayla_logo_icon_new.jpg';

interface NavItem {
    label: string;
    href: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navItems }) => {
    // Menu items as per Stitch design "WAYLA Mobile Full Landing Page"
    const menuItems = [
        { label: 'HOME', href: '/#mission', color: 'text-teal-400' },
        { label: 'VAYLA Arena', href: '/#ecosystem', color: 'text-white' },
        { label: 'VAYLA Token', href: '/#tokenomics', color: 'text-white' },
        { label: 'Docs & GitHub', href: '/#governance', color: 'text-white' },
    ];

    const socials = [
        { icon: 'simple-icons:x', href: '#' },
        { icon: 'simple-icons:telegram', href: '#' },
        { icon: 'simple-icons:discord', href: '#' },
        { icon: 'ph:user-bold', href: '#' },
    ];
    return (
        <div
            className={`fixed inset-0 z-[100] bg-[#0A0C0B] flex flex-col p-6 font-sans overflow-hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-20px]'
                }`}
        >
            {/* Header */}
            <div className="flex justify-between items-center mb-16">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                        <Image src={logo} alt="VAYLA" width={24} height={24} className="brightness-0" />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-white uppercase italic">VAYLA</span>
                </div>
                <button
                    onClick={onClose}
                    className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 text-white"
                >
                    <iconify-icon icon="lucide:x" width="24" height="24"></iconify-icon>
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-8 mb-auto">
                {menuItems.map((item, index) => (
                    <div
                        key={item.label}
                        className="transition-all duration-500"
                        style={{
                            transitionDelay: `${index * 50}ms`,
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? 'translateX(0)' : 'translateX(-20px)'
                        }}
                    >
                        <Link
                            href={item.href}
                            onClick={onClose}
                            className={`text-4xl font-bold tracking-tight uppercase italic ${item.color}`}
                        >
                            {item.label}
                        </Link>
                    </div>
                ))}
            </nav>

            {/* Footer Section */}
            <div className={`mt-auto transition-all duration-700 delay-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex gap-4 mb-8">
                    {socials.map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-colors"
                        >
                            <iconify-icon icon={social.icon} width="24" height="24"></iconify-icon>
                        </Link>
                    ))}
                </div>

                <div className="space-y-2">
                    <p className="text-gray-500 text-sm font-medium tracking-tight">The Protocol for Borderless Fandom.</p>
                    <p className="text-gray-600 text-[10px] font-bold tracking-widest uppercase italic">©2026 VAYLA. ALL RIGHTS RESERVED.</p>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[20%] left-[10%] w-[80%] h-[80%] bg-teal-500/10 blur-[100px] rounded-full"></div>
            </div>
        </div>
    );
};

export default MobileMenu;
