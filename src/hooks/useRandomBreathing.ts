import { useEffect, useRef } from 'react';

export const useRandomBreathing = (selector: string = '.hover\\:animate-breath') => {
    useEffect(() => {
        const elements = document.querySelectorAll(selector);

        // Create an intersection observer to only animate elements in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const el = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    // Start random breathing loop when in view
                    startBreathing(el);
                } else {
                    // Stop/Cleanup when out of view
                    stopBreathing(el);
                }
            });
        }, { threshold: 0.1 }); // 10% visible

        elements.forEach(el => observer.observe(el));

        const intervals = new Map<HTMLElement, NodeJS.Timeout>();

        const startBreathing = (el: HTMLElement) => {
            if (intervals.has(el)) return;

            const triggerAnimation = () => {
                // Add the active class to trigger the animation
                el.classList.add('animate-breath-once');

                // Remove it after animation completes (1s approx) to reset
                setTimeout(() => {
                    el.classList.remove('animate-breath-once');
                }, 1000);

                // Schedule next breath: random between 1s and 4s
                const nextDelay = Math.random() * 3000 + 1000;
                const timeout = setTimeout(triggerAnimation, nextDelay);
                intervals.set(el, timeout);
            };

            // Initial trigger
            triggerAnimation();
        };

        const stopBreathing = (el: HTMLElement) => {
            const timeout = intervals.get(el);
            if (timeout) {
                clearTimeout(timeout);
                intervals.delete(el);
            }
            el.classList.remove('animate-breath-once');
        };

        return () => {
            observer.disconnect();
            intervals.forEach(clearTimeout);
            intervals.clear();
        };
    }, [selector]);
};
