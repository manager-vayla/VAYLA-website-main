/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./vayla-deliverable/vayla-react/src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
                display: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
                space: ['Bricolage Grotesque', 'Space Grotesk', 'sans-serif'],
                averta: ['Averta', 'sans-serif'],
            },
            colors: {
                bg: { 0: '#070C0A', 1: '#0A1310', 2: '#0E1A16', 3: '#132520' },
                ink: { 0: '#FAFFFD', 1: '#E6F2EE', 2: '#9FB5AE', 3: '#5C6F69' },
                line: { 1: '#1A2E27', 2: '#234038', 3: '#2D5448' },
                mint: {
                    50: '#E9FFF8',
                    100: '#C7FBEA',
                    300: '#9CFBE4',
                    400: '#70F3D8',
                    500: '#3FE0BC',
                    600: '#1FB89A',
                    700: '#147A66',
                    900: '#0A3D33',
                },
                glow: 'rgba(112,243,216,0.45)',
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
