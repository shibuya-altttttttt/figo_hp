import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        base: '#FFFFFF',
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#2E2E2E',
        },
        accent: {
          DEFAULT: '#E8721F',
          dark: '#C85A10',
        },
        neutral: {
          100: '#FAF8F5',
          200: '#E8E6E1',
          500: '#6B6B6B',
          700: '#2E2E2E',
        },
        success: '#2E7D5B',
        error: '#B3261E',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'var(--font-noto-serif-jp)', 'serif'],
        sans: ['var(--font-inter)', 'var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h1: ['2.75rem', { lineHeight: '1.2' }],
        'h1-sm': ['1.875rem', { lineHeight: '1.2' }],
        h2: ['2.25rem', { lineHeight: '1.25' }],
        'h2-sm': ['1.5rem', { lineHeight: '1.25' }],
        h3: ['1.625rem', { lineHeight: '1.35' }],
        'h3-sm': ['1.25rem', { lineHeight: '1.35' }],
        h4: ['1.25rem', { lineHeight: '1.45' }],
        'h4-sm': ['1.125rem', { lineHeight: '1.45' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        body: ['1rem', { lineHeight: '1.75' }],
        caption: ['0.875rem', { lineHeight: '1.6' }],
      },
      maxWidth: {
        prose: '48rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.9s cubic-bezier(0.2, 0, 0.2, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards',
        'ken-burns': 'kenBurns 22s ease-out infinite alternate',
        'rise-slow': 'riseSlow 1.4s cubic-bezier(0.2, 0, 0.2, 1) forwards',
        'scroll-cue': 'scrollCue 1.8s ease-in-out infinite',
        'line-grow': 'lineGrow 1.2s cubic-bezier(0.2, 0, 0.2, 1) forwards',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float-y': 'floatY 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.08) translate(-1%, -1%)' },
        },
        riseSlow: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollCue: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
