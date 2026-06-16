'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ children, className = "", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    // Split text into words or characters? Words are safer for line breaks.
    const words = children.split(' ');

    return (
        <span ref={ref} className={`inline-block ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.2em] align-bottom pb-1 -mb-1">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : { y: "100%" }}
                        transition={{
                            duration: 0.5,
                            delay: delay + (i * 0.03),
                            ease: [0.33, 1, 0.68, 1] // Custom ease for "expensive" feel
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

export default TextReveal;
