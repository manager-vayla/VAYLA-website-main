'use client';

import React from "react";

const ChartSection = () => {
    const netflixShows = [
        { rank: 1, title: "PHYSICAL: 100" },
        { rank: 2, title: "GINNY & GEORGIA" },
        { rank: 3, title: "LA CHICA DE NIEVE" },
        { rank: 4, title: "WEDNESDAY" },
        { rank: 5, title: "LOCKWOOD & CO." },
    ];

    const billboardSongs = [
        { rank: 1, title: "Dynamite", artist: "BTS" },
        { rank: 2, title: "WAP", artist: "CARDI B FT. MEGAN" },
        { rank: 3, title: "Holy", artist: "JUSTIN BIEBER" },
        { rank: 4, title: "Laugh Now Cry Later", artist: "DRAKE" },
        { rank: 5, title: "Mood", artist: "24KGOLDN" },
    ];

    return (
        <section className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[#050505]">
            <div className="max-w-[90rem] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="font-mono text-teal-500 text-xs tracking-widest uppercase">COMMUNITY CHALLENGES</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tighter">
                        <span className="text-white">CHART </span>
                        <span className="text-teal-400">EXPECTED EVENTS</span>
                    </h1>
                    <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                        다음 주 넷플릭스와 빌보드 차트 순위를 정확하게 예측하고 VAYLA 토큰 보상을 획득하세요. 
                        팬덤의 집단 지성이 가치 있는 보상으로 이어집니다.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {/* Netflix Top TV Shows Card */}
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-teal-500/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center border border-red-500/30">
                                <span className="text-red-500 font-bold text-xl font-mono">N</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">N TOP TV SHOWS</h2>
                        </div>

                        <div className="space-y-4 mb-8">
                            {netflixShows.map((show) => (
                                <div 
                                    key={show.rank} 
                                    className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5 hover:border-white/10 transition-all group"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-gray-500 font-mono text-sm w-6">{show.rank}</span>
                                        <span className="text-white font-medium group-hover:text-teal-400 transition-colors">
                                            {show.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-400 text-sm font-mono uppercase tracking-widest">FORECAST REWARD</span>
                                <span className="text-teal-400 font-bold text-lg">500 VYA</span>
                            </div>
                            <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold text-sm uppercase tracking-widest rounded-xl transition-colors duration-200">
                                PREDICT NOW
                            </button>
                        </div>
                    </div>

                    {/* Billboard Hot 100 Card */}
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-teal-500/30 transition-all duration-300">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                                <span className="text-blue-400 font-bold text-xs font-mono">BB</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">billboard HOT 100</h2>
                        </div>

                        <div className="space-y-4 mb-8">
                            {billboardSongs.map((song) => (
                                <div 
                                    key={song.rank} 
                                    className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5 hover:border-white/10 transition-all group"
                                >
                                    <div className="flex items-center gap-4 flex-1">
                                        <span className="text-gray-500 font-mono text-sm w-6">{song.rank}</span>
                                        <div className="flex-1">
                                            <div className="text-white font-medium group-hover:text-teal-400 transition-colors">
                                                {song.title}
                                            </div>
                                            <div className="text-gray-500 text-xs mt-1">
                                                {song.artist}
                                            </div>
                                        </div>
                                    </div>
                                    <iconify-icon 
                                        icon="mdi:chart-line" 
                                        className="text-teal-400 opacity-50 group-hover:opacity-100 transition-opacity"
                                        style={{ fontSize: '20px' }}
                                    ></iconify-icon>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-400 text-sm font-mono uppercase tracking-widest">FORECAST REWARD</span>
                                <span className="text-teal-400 font-bold text-lg">750 VYA</span>
                            </div>
                            <button className="w-full py-4 bg-teal-500 hover:bg-teal-400 text-black font-bold text-sm uppercase tracking-widest rounded-xl transition-colors duration-200">
                                SUBMIT PREDICTION
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChartSection;

