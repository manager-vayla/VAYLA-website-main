'use client';

import React from 'react';

const DynamicBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Dark base background is handled by layout (bg-midnight) or body */}

            {/* Orb 1: Purple/Blue */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[100px] animate-blob mix-blend-screen" />

            {/* Orb 2: Teal/Cyan */}
            <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-teal-900/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />

            {/* Orb 3: Blue/Indigo */}
            <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />

            {/* Grid Overlay (Optional, adds texture) */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
        </div>
    );
};

export default DynamicBackground;
