/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                space: ['Space Grotesk', 'sans-serif'],
                averta: ['Averta', 'sans-serif'],
            },
            colors: {
                primary: "#70F3D8",
                "muted-primary": "#48A896",
                "dark-mint": "#2D6B5F",
                "bright-mint": "#3E9484",
                midnight: "#050505",
                charcoal: "#0F0F0F",
                "border-accent": "rgba(112, 243, 216, 0.2)",
                "legacy-purple": "#A78BFA",
                "glow-purple": "#7C3AED",
                "muted-purple": "#4C1D95",
                "legacy-grey": "#E5E7EB",
                "dim-grey": "#9CA3AF",
                "off-white": "#FAFAFA",
            },
            animation: {
                'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                'pulse-slow': {
                    '0%, 100%': { opacity: '0.5' },
                    '50%': { opacity: '0.8' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
                breath: {
                    '0%, 100%': { transform: 'scale(1)', filter: 'brightness(1)' },
                    '50%': { transform: 'scale(1.03)', filter: 'brightness(1.1)' },
                }
            },
            animation: {
                'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
                'blob': 'blob 7s infinite',
                'breath': 'breath 1s ease-in-out',
                'breath-once': 'breath 1s ease-in-out forwards',
            },
        },
    },
    plugins: [],
}
