import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E4ED8',
        'accent-gold': '#F5B700',
        'accent-gold-hover': '#FFD54A',
        'bg-white': '#FAFAF8',
        'bg-light-gray': '#F1F3F6',
        'text-dark': '#0F172A',
        'text-gray': '#64748B',
        silver: '#D9DEE8',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
