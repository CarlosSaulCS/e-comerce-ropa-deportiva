import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b0d0f',
        foreground: '#e8ecef',
        gold: '#caa45d',
        slate: {
          900: '#0f1216',
          800: '#151a20',
          700: '#1b222a',
          600: '#232c36'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'ui-serif', 'Georgia']
      }
    }
  },
  plugins: []
} satisfies Config;
