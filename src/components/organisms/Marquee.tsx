import React from "react";

const Marquee = () => {
    return (
        <div className="w-full bg-[#050505] border-y border-white/5 py-4 relative z-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none"></div>
            <div className="flex gap-16 animate-[scroll_30s_linear_infinite] w-max items-center">
                {[...Array(10)].map((_, i) => (
                    <React.Fragment key={i}>
                        <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
                            <iconify-icon icon="logos:ethereum" style={{ fontSize: '20px' }}></iconify-icon>
                            <span className="text-sm font-mono text-gray-400">ETHEREUM</span>
                        </div>
                        <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
                            <iconify-icon icon="logos:solana" style={{ fontSize: '20px' }}></iconify-icon>
                            <span className="text-sm font-mono text-gray-400">SOLANA</span>
                        </div>
                        <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
                            <iconify-icon icon="logos:binance" style={{ fontSize: '20px' }}></iconify-icon>
                            <span className="text-sm font-mono text-gray-400">BINANCE</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    )
}

export default Marquee;
