'use client';

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

interface ChartData {
    rank: number;
    title: string;
    artist?: string;
    value: number; // For visualization - using inverse rank as value
}

interface ChartsVisualizationProps {
    netflixShows: Array<{ rank: number; title: string }>;
    billboardSongs: Array<{ rank: number; title: string; artist: string }>;
}

const ChartsVisualization: React.FC<ChartsVisualizationProps> = ({ netflixShows, billboardSongs }) => {
    // Transform data for charts - using inverse rank so higher rank = longer bar
    const netflixData: ChartData[] = netflixShows.map(show => ({
        rank: show.rank,
        title: show.title,
        value: 6 - show.rank // Inverse: rank 1 = value 5, rank 5 = value 1
    }));

    const billboardData: ChartData[] = billboardSongs.map(song => ({
        rank: song.rank,
        title: song.title,
        artist: song.artist,
        value: 6 - song.rank // Inverse: rank 1 = value 5, rank 5 = value 1
    }));

    const getBarColor = (rank: number) => {
        if (rank === 1) return "#ef4444"; // Red for Netflix
        if (rank === 2) return "#f97316"; // Orange
        if (rank === 3) return "#eab308"; // Yellow
        if (rank === 4) return "#22c55e"; // Green
        return "#3b82f6"; // Blue
    };

    const getBillboardBarColor = (rank: number) => {
        if (rank === 1) return "#3b82f6"; // Blue for Billboard
        if (rank === 2) return "#6366f1"; // Indigo
        if (rank === 3) return "#8b5cf6"; // Purple
        if (rank === 4) return "#a855f7"; // Purple
        return "#c084fc"; // Light purple
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mt-16">
            {/* Netflix Chart */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-red-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center border border-red-500/30">
                        <span className="text-red-500 font-bold text-xl font-mono">N</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">N TOP TV SHOWS</h2>
                </div>

                {/* Recharts Bar Chart */}
                <div className="mb-6">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={netflixData}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
                            <XAxis 
                                type="number" 
                                stroke="#666"
                                tick={{ fill: '#999', fontSize: 11 }}
                                domain={[0, 5]}
                                hide
                            />
                            <YAxis 
                                type="category" 
                                dataKey="title"
                                stroke="#666"
                                tick={{ fill: '#fff', fontSize: 11 }}
                                width={120}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#0a0a0a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    color: '#fff'
                                }}
                                formatter={(value: number, name: string, props: any) => [
                                    `Rank #${props.payload.rank}`,
                                    props.payload.title
                                ]}
                            />
                            <Bar 
                                dataKey="value" 
                                radius={[0, 4, 4, 0]}
                            >
                                {netflixData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={getBarColor(entry.rank)} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* List View */}
                <div className="space-y-2">
                    {netflixShows.map((show) => (
                        <div 
                            key={show.rank} 
                            className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
                        >
                            <span className="text-teal-400 font-mono text-sm font-bold w-6">{show.rank}</span>
                            <span className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors flex-1">
                                {show.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Billboard Chart */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                        <span className="text-blue-400 font-bold text-xs font-mono">BB</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">billboard HOT 100</h2>
                </div>

                {/* Recharts Bar Chart */}
                <div className="mb-6">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={billboardData}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
                            <XAxis 
                                type="number" 
                                stroke="#666"
                                tick={{ fill: '#999', fontSize: 11 }}
                                domain={[0, 5]}
                                hide
                            />
                            <YAxis 
                                type="category" 
                                dataKey="title"
                                stroke="#666"
                                tick={{ fill: '#fff', fontSize: 11 }}
                                width={120}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#0a0a0a',
                                    border: '1px solid #333',
                                    borderRadius: '8px',
                                    color: '#fff'
                                }}
                                formatter={(value: number, name: string, props: any) => [
                                    `Rank #${props.payload.rank}`,
                                    `${props.payload.title} - ${props.payload.artist}`
                                ]}
                            />
                            <Bar 
                                dataKey="value" 
                                radius={[0, 4, 4, 0]}
                            >
                                {billboardData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={getBillboardBarColor(entry.rank)} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* List View */}
                <div className="space-y-2">
                    {billboardSongs.map((song) => (
                        <div 
                            key={song.rank} 
                            className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
                        >
                            <span className="text-teal-400 font-mono text-sm font-bold w-6">{song.rank}</span>
                            <div className="flex-1">
                                <div className="text-white font-medium text-sm group-hover:text-teal-400 transition-colors">
                                    {song.title}
                                </div>
                                <div className="text-gray-500 text-xs mt-0.5">
                                    {song.artist}
                                </div>
                            </div>
                            <iconify-icon 
                                icon="mdi:chart-line" 
                                className="text-teal-400 opacity-50 group-hover:opacity-100 transition-opacity"
                                style={{ fontSize: '18px' }}
                            ></iconify-icon>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChartsVisualization;

