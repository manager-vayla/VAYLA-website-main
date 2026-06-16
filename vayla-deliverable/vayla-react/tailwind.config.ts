import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
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
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(112,243,216,0.18), 0 8px 30px -8px rgba(31,184,154,0.45)',
        'glow-lg': '0 0 0 1px rgba(112,243,216,0.22), 0 18px 50px -10px rgba(31,184,154,0.55)',
      },
      backgroundImage: {
        'glass-1': 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
        'glass-mint': 'linear-gradient(135deg, rgba(112,243,216,0.10), rgba(112,243,216,0.02))',
        grid: 'linear-gradient(rgba(112,243,216,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112,243,216,0.06) 1px, transparent 1px)',
      },
      animation: {
        'float-slow': 'floatY 7s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
        'shimmer': 'shimmer 2.4s linear infinite',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
