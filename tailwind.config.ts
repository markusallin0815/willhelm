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
        'primary-blue': '#2B1608',
        'accent-gold': '#C8831A',
        'accent-gold-hover': '#DFA030',
        'bg-white': '#F0E3CA',
        'bg-light-gray': '#E8D5B5',
        'text-dark': '#0F0704',
        'text-gray': '#7A6045',
        silver: '#C0A882',
      },
      fontFamily: {
        'nunito-sans': ['var(--font-nunito-sans)', 'system-ui', 'sans-serif'],
        'cormorant': ['var(--font-cormorant)', 'Georgia', 'serif'],
        'eb-garamond': ['var(--font-eb-garamond)', 'Georgia', 'serif'],
      },
      animation: {
        aurora: 'aurora 60s linear infinite',
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: '50% 50%, 50% 50%' },
          to: { backgroundPosition: '350% 50%, 350% 50%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
