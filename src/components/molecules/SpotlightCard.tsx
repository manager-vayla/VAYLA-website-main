'use client';

import React, { useRef, useState } from "react";

interface SpotlightCardProps {
    icon: string;
    title: string;
    desc: string | React.ReactNode;
    className?: string;
    delay?: number;
    variant?: "default" | "glass" | "solid";
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    icon,
    title,
    desc,
    className = "",
    delay = 0,
    variant = "default"
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);

    // Variant Styles
    const baseStyles = "relative group overflow-hidden transition-all duration-500 hover:-translate-y-1";
    const variants = {
        default: "rounded-3xl border border-white/10 bg-[#0a0a0a]",
        glass: "rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04]",
        solid: "rounded-xl border border-white/5 bg-[#080808] hover:bg-[#0c0c0c]"
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(45, 212, 191, 0.1), transparent 40%)`
                }}
            />
            {/* Border Highlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(45, 212, 191, 0.4), transparent 40%)`,
                    maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '1px' // Border width
                }}
            />

            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors text-gray-400
                 ${variant === 'glass' ? 'bg-teal-500/10 border border-teal-500/20 text-teal-400' : 'bg-white/5 border border-white/10 group-hover:bg-teal-500/10 group-hover:border-teal-500/50 group-hover:text-teal-400'}
            `}>
                        <iconify-icon icon={icon} style={{ fontSize: '24px' }}></iconify-icon>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-['Space_Grotesk'] leading-tight tracking-tight">{title}</h3>
                    <div className="text-gray-400/80 leading-relaxed text-sm font-light">
                        {desc}
                    </div>
                </div>
                {variant !== 'solid' && (
                    <div className="mt-8 flex items-center text-teal-500 text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Learn more <iconify-icon icon="mdi:arrow-right" className="ml-2"></iconify-icon>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SpotlightCard;
