'use client';

import React, { useState } from 'react';

const images = [
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
    'https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80',
];



const ImageSwiper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-64 md:h-96 rounded-3xl overflow-hidden group bg-[#0A0A0A] border border-white/5">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Concert image ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading={index === 0 ? "eager" : "lazy"}
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            // Secondary fallback to a known ultra-reliable ID
                            if (!target.src.includes('placeholder')) {
                                target.src = 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop';
                                // Add a recursive check or mark
                                target.classList.add('is-fallback');
                            } else {
                                target.src = `https://placehold.co/800x600/0f172a/FFFFFF/png?text=Creative+Arena+${index + 1}`;
                            }
                        }}
                    />
                </div>
            ))}

            {/* Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 pointer-events-none"></div>

            <div className="absolute bottom-6 left-6 text-white z-30 pointer-events-none">
                <p className="text-xs font-mono text-teal-400 mb-1">LIVE EVENTS</p>
                <h3 className="text-2xl font-bold tracking-tight">Global Fandom Experience</h3>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-30">
                <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-teal-500 hover:text-black transition-all cursor-pointer"
                >
                    <iconify-icon icon="lucide:arrow-left" width="18" height="18"></iconify-icon>
                </button>
                <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-teal-500 hover:text-black transition-all cursor-pointer"
                >
                    <iconify-icon icon="lucide:arrow-right" width="18" height="18"></iconify-icon>
                </button>
            </div>
        </div>
    );
};

export default ImageSwiper;
