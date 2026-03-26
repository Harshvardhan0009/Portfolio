/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':    '#0B0B0D',
        'bg-secondary':  '#121214',
        'bg-section':    '#161618',
        'green-deep':    '#052E16', // Dark Green
        'green-em':      '#22C55E', // Primary Green
        'pink-acc':      '#FF9F1C', // Accent Orange
        'pink-soft':     '#FFB147',
        'flame':         '#FF9F1C',
        'red-deep':      '#8B0000',
        'text-muted':    '#9CA3AF',
        'ds-water':      '#22C55E', 
        'ds-flame':      '#EF4444',
        'ds-thunder':    '#22C55E',
        'ds-mist':       '#D1D5DB',
        'ds-stone':      '#78716C',
      },
      fontFamily: {
        bebas:      ['"Bebas Neue"', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        crimson:    ['"Crimson Pro"', 'serif'],
      },
      animation: {
        'float':       'float 8s ease-in-out infinite',
        'float-slow':  'float 12s ease-in-out infinite',
        'pulse-glow':  'pulseGlow 3s ease-in-out infinite',
        'slide-down':  'slideDown 0.6s ease forwards',
        'sword-pulse': 'swordPulse 4s ease-in-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'water-ripple': 'waterRipple 3s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%':     { transform: 'translateY(-28px) scale(1.04)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.5' },
          '50%':     { opacity: '1' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        swordPulse: {
          '0%,100%': { opacity: '0.3' },
          '50%':     { opacity: '0.7' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        waterRipple: {
          '0%': { transform: 'scale(0.8)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.4)',
        'glow-pink':  '0 0 20px rgba(249,115,22,0.4)',
        'glow-flame': '0 0 20px rgba(234,88,12,0.4)',
        'card':       '0 10px 40px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
