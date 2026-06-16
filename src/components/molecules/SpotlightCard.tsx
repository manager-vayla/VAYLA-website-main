'use client';

import React, { useRef, useState } from "react";

interface SpotlightCardProps {
    icon?: string;
    title: string;
    desc: string | React.ReactNode;
    className?: string;
    delay?: number;
    variant?: "default" | "glass" | "solid";
    image?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    icon,
    title,
    desc,
    className = "",
    delay = 0,
    variant = "default",
    image
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({ x, y });

        // Calculate rotation
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5; // Max 5 degrees
        const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees
        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => {
        setOpacity(0);
        setRotation({ x: 0, y: 0 });
    };

    // Variant Styles
    const baseStyles = "relative group overflow-hidden transition-all duration-500";
    const variants = {
        default: "rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:bg-black/60",
        glass: "rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04]",
        solid: "rounded-xl border border-white/5 bg-[#080808] hover:bg-[#0c0c0c]"
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`${baseStyles} ${variants[variant]} ${className} relative`}
            style={{
                transitionDelay: `${delay}ms`,
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
                transition: 'transform 0.1s ease-out, background 0.3s, border-color 0.3s'
            }}
        >
            {/* Tech Corners */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l border-t border-teal-500/30 rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-teal-500/30 rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>

            {/* Spotlight Gradient */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(45, 212, 191, 0.1), transparent 40%)`
                }}
            />
            {/* Border Highlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(45, 212, 191, 0.4), transparent 40%)`,
                    maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    padding: '1px' // Border width
                }}
            />

            <div className={`relative z-20 h-full flex flex-col justify-between ${image ? 'p-0' : 'p-8'}`}>
                {image && (
                    <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Image Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80"></div>
                    </div>
                )}

                <div className={image ? 'p-8 pt-4' : ''}>
                    {icon && !image && (
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300
                     ${variant === 'glass' ? 'bg-teal-500/10 text-teal-400 shadow-[0_0_15px_-3px_rgba(20,184,166,0.3)]' : 'bg-white/5 border border-white/10 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 group-hover:text-teal-400'}
                `}>
                            <iconify-icon icon={icon} style={{ fontSize: '24px' }}></iconify-icon>
                        </div>
                    )}
                    <h3 className={`text-xl md:text-2xl font-bold text-white mb-3 font-['Space_Grotesk'] leading-tight tracking-tight uppercase group-hover:text-teal-400 transition-colors`}>{title}</h3>
                    <div className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                        {desc}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SpotlightCard;
