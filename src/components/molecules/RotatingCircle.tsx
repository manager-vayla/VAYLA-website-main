'use client';

import React from 'react';
import GlassAppIcon from './GlassAppIcon';

const RotatingCircle = () => {
    const items = [
        { label: 'EARN', icon: 'ri:money-dollar-circle-line', colorHex: '#2dd4bf' },      // Teal
        { label: 'REINVEST', icon: 'ri:loop-left-line', colorHex: '#34d399' },            // Green
        { label: 'DISCOVER', icon: 'ri:compass-3-line', colorHex: '#60a5fa' },            // Blue
        { label: 'PARTICIPATE', icon: 'ri:group-line', colorHex: '#a78bfa' },             // Purple
        { label: 'VOTE', icon: 'ri:hand-heart-line', colorHex: '#f472b6' },               // Pink
        { label: 'FUND', icon: 'ri:secure-payment-line', colorHex: '#fbbf24' },           // Amber
    ];

    return (
        <div className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
            {/* Center Glow */}
            <div className="absolute w-[300px] h-[300px] bg-teal-500/10 blur-[100px] rounded-full animate-pulse"></div>

            {/* Orbit System */}
            <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px]">
                {/* Orbit Path Lines */}
                <div className="absolute inset-0 border border-dashed border-teal-500/20 rounded-full animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-4 border border-white/5 rounded-full"></div>

                {/* Rotating Container */}
                <div className="absolute inset-0 animate-[spin_60s_linear_infinite]">
                    {items.map((item, index) => {
                        const angle = (360 / items.length) * index;
                        // Radius is half of container width (180px or 210px) minus adjustment for icon size
                        const radius = 180; // Base radius for calculation, will be adjusted by CSS mostly or just visual placement

                        return (
                            <div
                                key={item.label}
                                className="absolute top-1/2 left-1/2 flex items-center justify-center w-0 h-0"
                                style={{
                                    transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`
                                }}
                            >
                                {/* Connector Line (Optional, similar to main page) */}
                                <div
                                    className="absolute top-1/2 left-1/2 w-[180px] h-[1px] bg-gradient-to-r from-transparent via-teal-500/10 to-transparent -z-10 hidden md:block"
                                    style={{
                                        transform: `translate(-50%, -50%) rotate(${angle + 180}deg)`,
                                        transformOrigin: 'center'
                                    }}
                                ></div>

                                {/* Counter-Rotating Content */}
                                <div className="animate-[spin_60s_linear_infinite_reverse] group">
                                    <div className="relative flex flex-col items-center gap-3">
                                        <div className="scale-75 md:scale-90">
                                            <GlassAppIcon icon={item.icon} colorLabel={item.label} colorHex={item.colorHex} />
                                        </div>
                                        <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em] bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 group-hover:text-teal-400 group-hover:border-teal-500/40 transition-all shadow-xl whitespace-nowrap">
                                            {item.label}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Inner Static Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/10 flex items-center justify-center bg-black/80 backdrop-blur-sm z-10 shadow-[0_0_40px_rgba(45,212,191,0.1)]">
                <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter">V</div>
                    <div className="text-[10px] tracking-[0.3em] text-teal-400 mt-2 uppercase">Arena</div>
                </div>
            </div>
        </div>
    );
};

export default RotatingCircle;
