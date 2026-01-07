import React from 'react';

interface GlassAppIconProps {
    icon: string;
    colorLabel: string;
    colorHex: string;
}

const GlassAppIcon: React.FC<GlassAppIconProps> = ({ icon, colorLabel, colorHex }) => {
    return (
        <div className="relative w-20 h-20 md:w-24 md:h-24 group-hover:-translate-y-2 transition-transform duration-500 ease-out cursor-pointer perspective-1000">
            {/* Colored ambient glow behind */}
            <div
                className="absolute -inset-4 rounded-[30px] blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500"
                style={{ background: colorHex }}
            ></div>

            {/* The Glass Block */}
            <div className="relative w-full h-full rounded-[22px] overflow-hidden backdrop-blur-md bg-white/[0.03] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_0_0_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.3)] transition-all duration-500">

                {/* Surface Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 pointer-events-none"></div>

                {/* Colored Tint Gradient */}
                <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{ background: `linear-gradient(135deg, ${colorHex}, transparent)` }}
                ></div>

                {/* Glossy Reflection (Top curve) */}
                <div className="absolute -top-[20%] -left-[20%] w-[140%] h-[60%] bg-gradient-to-b from-white/20 to-transparent rounded-[50%] blur-sm transform -rotate-12 pointer-events-none"></div>

                {/* Bottom Rim Light */}
                <div className="absolute bottom-0 inset-x-0 h-[30%] bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay pointer-events-none"></div>

                {/* Inner Bevel Shadow */}
                <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.3)] rounded-[22px] pointer-events-none"></div>

                {/* Icon centering with 3D depth */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {/* Shadow for floating effect */}
                        <div className="absolute inset-0 translate-y-2 translate-x-2 blur-sm opacity-50 text-black">
                            <iconify-icon icon={icon} style={{ fontSize: '42px' }}></iconify-icon>
                        </div>

                        {/* Actual Icon with Gradient Fill effect using mix-blend */}
                        <div className="relative text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" style={{ filter: `drop-shadow(0 0 10px ${colorHex})` }}>
                            <iconify-icon icon={icon} style={{ fontSize: '42px' }}></iconify-icon>
                        </div>

                        {/* Top Highlight on icon */}
                        <div className="absolute inset-0 text-white/50 mix-blend-overlay" style={{ maskImage: 'linear-gradient(black, transparent)' }}>
                            <iconify-icon icon={icon} style={{ fontSize: '42px' }}></iconify-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlassAppIcon;
