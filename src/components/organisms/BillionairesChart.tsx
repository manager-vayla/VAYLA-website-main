'use client';

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

interface BillionaireData {
    rank: number;
    city: string;
    country: string;
    flag: string;
    billionaires: number;
    rankChange: number | string;
}

const BillionairesChart = () => {
    const data: BillionaireData[] = [
        { rank: 1, city: "New York", country: "USA", flag: "🇺🇸", billionaires: 119, rankChange: -1 },
        { rank: 2, city: "London", country: "UK", flag: "🇬🇧", billionaires: 97, rankChange: -3 },
        { rank: 3, city: "Mumbai", country: "India", flag: "🇮🇳", billionaires: 92, rankChange: -4 },
        { rank: 4, city: "Beijing", country: "China", flag: "🇨🇳", billionaires: 91, rankChange: -3 },
        { rank: 5, city: "Shanghai", country: "China", flag: "🇨🇳", billionaires: 87, rankChange: -2 },
        { rank: 6, city: "Shenzhen", country: "China", flag: "🇨🇳", billionaires: 84, rankChange: -2 },
        { rank: 7, city: "Hong Kong", country: "Hong Kong", flag: "🇭🇰", billionaires: 65, rankChange: -1 },
        { rank: 8, city: "Moscow", country: "Russia", flag: "🇷🇺", billionaires: 59, rankChange: "-" },
        { rank: 9, city: "New Delhi", country: "India", flag: "🇮🇳", billionaires: 57, rankChange: -6 },
        { rank: 10, city: "San Francisco", country: "USA", flag: "🇺🇸", billionaires: 52, rankChange: "-" },
        { rank: 11, city: "Bangkok", country: "Thailand", flag: "🇹🇭", billionaires: 49, rankChange: -2 },
        { rank: 12, city: "Taipei", country: "Taiwan", flag: "🇹🇼", billionaires: 45, rankChange: -2 },
        { rank: 13, city: "Paris", country: "France", flag: "🇫🇷", billionaires: 44, rankChange: -2 },
        { rank: 14, city: "Hangzhou", country: "China", flag: "🇨🇳", billionaires: 43, rankChange: -5 },
        { rank: 15, city: "Singapore", country: "Singapore", flag: "🇸🇬", billionaires: 42, rankChange: "*" },
        { rank: 16, city: "Guangzhou", country: "China", flag: "🇨🇳", billionaires: 39, rankChange: -4 },
        { rank: 17, city: "Jakarta", country: "Indonesia", flag: "🇮🇩", billionaires: 37, rankChange: -1 },
        { rank: 18, city: "Sao Paulo", country: "Brazil", flag: "🇧🇷", billionaires: 37, rankChange: "-" },
        { rank: 19, city: "Los Angeles", country: "USA", flag: "🇺🇸", billionaires: 31, rankChange: "-" },
        { rank: 20, city: "Seoul", country: "South Korea", flag: "🇰🇷", billionaires: 31, rankChange: -3 },
    ];

    const getRankChangeColor = (change: number | string) => {
        if (change === "-" || change === "*") return "text-gray-500";
        if (typeof change === "number") {
            return change < 0 ? "text-red-500" : "text-green-500";
        }
        return "text-gray-500";
    };

    const getBarColor = (rank: number) => {
        if (rank <= 3) return "#2dd4bf"; // Teal for top 3
        if (rank <= 10) return "#14b8a6"; // Darker teal for top 10
        return "#0d9488"; // Darkest teal for others
    };

    return (
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-teal-500/30 transition-all duration-300">
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Space_Grotesk'] tracking-tighter">
                    CITIES WITH THE MOST BILLIONAIRES
                </h2>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                    <span className="font-mono">2024</span>
                    <span className="text-gray-600">|</span>
                    <span>Hurun Global Rich List 2024</span>
                </div>
            </div>

            {/* Chart with Recharts */}
            <div className="mb-8">
                <ResponsiveContainer width="100%" height={600}>
                    <BarChart
                        data={data}
                        layout="vertical"
                        margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
                        <XAxis
                            type="number"
                            stroke="#666"
                            tick={{ fill: '#999', fontSize: 12 }}
                            domain={[0, 120]}
                        />
                        <YAxis
                            type="category"
                            dataKey="city"
                            stroke="#666"
                            tick={{ fill: '#999', fontSize: 11 }}
                            width={100}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#0a0a0a',
                                border: '1px solid #333',
                                borderRadius: '8px',
                                color: '#fff'
                            }}
                            formatter={(value: number) => [`${value} billionaires`, '']}
                        />
                        <Bar
                            dataKey="billionaires"
                            radius={[0, 4, 4, 0]}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getBarColor(entry.rank)} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Detailed List */}
            <div className="space-y-3">
                {data.map((item) => (
                    <div
                        key={item.rank}
                        className="flex items-center gap-4 p-3 bg-black/40 rounded-lg border border-white/5 hover:border-white/10 transition-all group"
                    >
                        {/* Rank Change */}
                        <div className="w-12 text-center">
                            <span className={`font-mono text-sm font-bold ${getRankChangeColor(item.rankChange)}`}>
                                {item.rankChange === "*" ? "*" : item.rankChange === "-" ? "-" : item.rankChange > 0 ? `+${item.rankChange}` : item.rankChange}
                            </span>
                        </div>

                        {/* Rank */}
                        <div className="w-8 text-center">
                            <span className="text-gray-500 font-mono text-sm">{item.rank}</span>
                        </div>

                        {/* City Name with Flag */}
                        <div className="flex items-center gap-2 min-w-[180px]">
                            <span className="text-2xl">{item.flag}</span>
                            <span className="text-white font-medium group-hover:text-teal-400 transition-colors">
                                {item.city}
                            </span>
                        </div>

                        {/* Bar Chart */}
                        <div className="flex-1 h-8 relative">
                            <div className="absolute inset-0 flex items-center">
                                <div
                                    className="h-6 rounded-sm transition-all duration-300 group-hover:h-7"
                                    style={{
                                        width: `${(item.billionaires / 119) * 100}%`,
                                        backgroundColor: getBarColor(item.rank),
                                        minWidth: '20px'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Billionaires Count */}
                        <div className="w-16 text-right">
                            <span className="text-white font-bold text-sm">{item.billionaires}</span>
                        </div>
                    </div>
                ))}
            </div>

            {data.some(item => item.rankChange === "*") && (
                <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-gray-500 text-xs font-mono">
                        * new to top 20
                    </p>
                </div>
            )}

            {/* Chart Title */}
            <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-400 text-sm font-mono uppercase tracking-widest text-right">
                    Number of billionaires
                </p>
            </div>
        </div>
    );
};

export default BillionairesChart;

