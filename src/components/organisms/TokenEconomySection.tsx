import React from "react";

const TokenEconomySection = () => {
    const distribution = [
        { label: "Ecosystem Operations", percent: 20, color: "#2dd4bf" },
        { label: "Community Rewards", percent: 20, color: "#34d399" },
        { label: "Team/Advisor", percent: 15, color: "#a78bfa" },
        { label: "Partnership / Alliances", percent: 15, color: "#60a5fa" },
        { label: "Marketing", percent: 15, color: "#f472b6" },
        { label: "Public Sales", percent: 10, color: "#fbbf24" },
        { label: "Reserve", percent: 5, color: "#e5e7eb" }
    ];

    const generateArc = (startPerc: number, endPerc: number, radius: number, thickness: number) => {
        const cx = 200;
        const cy = 200;
        const startAngle = (startPerc / 100) * 2 * Math.PI - Math.PI / 2;
        const endAngle = (endPerc / 100) * 2 * Math.PI - Math.PI / 2;
        const isFullCircle = endPerc - startPerc >= 100;
        const adjustEndAngle = isFullCircle ? endAngle - 0.0001 : endAngle;
        const x1 = cx + radius * Math.cos(startAngle);
        const y1 = cy + radius * Math.sin(startAngle);
        const x2 = cx + radius * Math.cos(adjustEndAngle);
        const y2 = cy + radius * Math.sin(adjustEndAngle);
        const x3 = cx + (radius - thickness) * Math.cos(adjustEndAngle);
        const y3 = cy + (radius - thickness) * Math.sin(adjustEndAngle);
        const x4 = cx + (radius - thickness) * Math.cos(startAngle);
        const y4 = cy + (radius - thickness) * Math.sin(startAngle);
        const largeArcFlag = endPerc - startPerc > 50 ? 1 : 0;
        return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${radius - thickness} ${radius - thickness} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
    };

    let currentPercent = 0;

    return (
        <section className="py-32 px-6 md:px-12 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="max-w-[90rem] mx-auto">
                <div className="mb-20">
                    <span className="font-mono text-teal-500 text-xs tracking-widest uppercase mb-4 block">Tokenomics</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk'] tracking-tighter">
                        Token Economy
                    </h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-xl font-bold text-white mb-6 font-['Space_Grotesk'] relative z-10">Token Specifications</h3>
                            <div className="space-y-4 relative z-10 font-mono">
                                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                    <span className="text-gray-500 text-sm uppercase">Ticker</span>
                                    <span className="text-teal-400 font-bold">VAYLA</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                    <span className="text-gray-500 text-sm uppercase">Network</span>
                                    <span className="text-white font-bold">BNB Smart Chain (BEP-20)</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                    <span className="text-gray-500 text-sm uppercase">Total Supply</span>
                                    <span className="text-white font-bold">3,000,000,000</span>
                                </div>
                                <div className="flex justify-between items-center pb-1">
                                    <span className="text-gray-500 text-sm uppercase">Type</span>
                                    <span className="text-white font-bold">Utility / Governance</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
                            <h3 className="text-xl font-bold text-white mb-6 font-['Space_Grotesk'] relative z-10">Token Utility</h3>
                            <div className="flex flex-wrap gap-3 relative z-10">
                                {['Creator Funding', 'Platform Payment', 'Staking Rewards', 'Governance Voting', 'Access Control'].map((u) => (
                                    <span key={u} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-mono uppercase text-gray-300 hover:text-white hover:border-teal-500/30 hover:bg-teal-500/10 transition-all cursor-default">
                                        {u}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center order-1 lg:order-2">
                        <div className="relative w-full max-w-[500px] aspect-square mb-10">
                            <svg viewBox="0 0 400 400" className="w-full h-full transform transition-transform hover:scale-105 duration-500">
                                <g transform="rotate(-90 200 200)">
                                    {distribution.map((d, i) => {
                                        const start = currentPercent;
                                        const end = currentPercent + d.percent;
                                        currentPercent = end;
                                        return (
                                            <path key={i} d={generateArc(start, end - 0.5, 180, 80)} fill={d.color} className="hover:opacity-80 transition-opacity cursor-pointer" />
                                        );
                                    })}
                                </g>
                                <text x="200" y="195" textAnchor="middle" fill="white" className="text-3xl font-bold font-['Space_Grotesk']" style={{ fontSize: '24px' }}>3B</text>
                                <text x="200" y="220" textAnchor="middle" fill="#9ca3af" className="text-[10px] font-mono uppercase tracking-widest">Total Supply</text>
                            </svg>
                        </div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full px-4">
                            {distribution.map((d, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }}></div>
                                    <div className="flex flex-col">
                                        <span className="text-gray-300 text-[11px] font-medium leading-none mb-1">{d.label}</span>
                                        <span className="text-gray-600 text-[10px] font-mono">{d.percent}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TokenEconomySection;
