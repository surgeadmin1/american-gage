import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef4fa',
          100: '#d9e6f2',
          200: '#b3cce4',
          300: '#7ea8cf',
          400: '#4a80b4',
          500: '#265f97',
          600: '#15497c',
          700: '#0e3a66', // primary — from logo
          800: '#0a2c4e',
          900: '#081f38',
          950: '#051426',
        },
        steel: {
          100: '#e8eaec',
          200: '#cdd2d6',
          300: '#a8b0b7',
          400: '#7d868e',
          500: '#5c656d',
          600: '#454d54',
          700: '#363d43', // gunmetal — from logo
          800: '#282e33',
          900: '#1b1f23',
        },
        accent: {
          400: '#f98a3c',
          500: '#f26a1b', // CTA orange
          600: '#d95710',
          700: '#b4460c',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
