/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        grind: {
          bg: '#0a0a0f',
          surface: '#111118',
          surface2: '#1a1a25',
          border: '#2a2a3a',
          accent: '#7c5cfc',
          accent2: '#00e5a0',
          accent3: '#ff6b6b',
          text: '#e8e8f0',
          muted: '#6b6b80',
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
