'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface DocEntryProps {
    title: string;
    description: string;
    icon: string; // Kept for interface compatibility but we will rely more on text
    link?: string;
    highlight?: boolean;
    index: number;
}

export default function HoloDocEntry({ title, description, link, highlight, index }: DocEntryProps) {
    const isExternal = link?.startsWith('http');
    const fileType = link?.split('.').pop()?.toUpperCase() || 'FILE';

    return (
        <motion.a
            href={link || '#'}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : ''}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex items-center justify-between p-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors"
        >
            <div className="flex items-start gap-6">
                {/* Tech ID */}
                <span className="font-mono text-xs text-white/20 pt-1 w-8">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>

                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] tracking-tight group-hover:text-teal-400 group-hover:translate-x-2 transition-all duration-300 uppercase">
                            {title}
                        </h3>
                        {highlight && (
                            <span className="text-[10px] bg-teal-500 text-black font-bold px-1.5 py-0.5 rounded-sm animate-pulse">
                                NEW
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-gray-500 font-mono group-hover:text-gray-400 transition-colors">
                        {description}
                    </p>
                </div>
            </div>

            {/* Right Side Metadata */}
            <div className="hidden md:flex flex-col items-end gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-xs text-teal-500">
                    [{fileType}]
                </span>
                <span className="font-mono text-[10px] text-gray-600 uppercase">
                    {isExternal ? 'External Link' : 'Internal Doc'}
                </span>
            </div>

            {/* Hover Scanline Effect */}
            <div className="absolute left-0 bottom-0 top-0 w-[2px] bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        </motion.a>
    );
}
