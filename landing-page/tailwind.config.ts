import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#EAE4D7',
          deep: '#D9D4C7',
        },
        card: {
          DEFAULT: '#F5F1E8',
          dark: '#353530',
        },
        ink: {
          DEFAULT: '#3C2F2F',
          mid: '#6B6058',
          dim: '#8B8678',
        },
        cream: {
          DEFAULT: '#EAE4D7',
          mid: '#CFC8B7',
          dim: '#A9A392',
        },
        amber: {
          DEFAULT: '#F15A24',
          deep: '#C94A26',
          soft: '#F5D0C5',
        },
        moss: {
          DEFAULT: '#8B8678',
          deep: '#6B6558',
        },
        teal: {
          DEFAULT: '#0B8594',
          deep: '#075F6A',
          soft: '#D6ECEF',
        },
        sand: {
          DEFAULT: '#A67C52',
          deep: '#7E5C3C',
        },
        bgdark: '#2B2B28',
        carddark: '#353530',
        herodark: '#38352E',
      },
      fontFamily: {
        display: ['"Libre Bodoni"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '14px',
        xl: '20px',
      },
      boxShadow: {
        card: '0 8px 24px rgba(60,47,47,0.08)',
        raised: '0 16px 40px rgba(60,47,47,0.14)',
      },
      maxWidth: {
        prose: '70ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 280ms ease-out both',
      },
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#3C2F2F',
            '--tw-prose-headings': '#3C2F2F',
            '--tw-prose-links': '#C94A26',
            '--tw-prose-bold': '#3C2F2F',
            '--tw-prose-counters': '#6B6058',
            '--tw-prose-bullets': '#8B8678',
            '--tw-prose-hr': 'rgba(60,47,47,0.15)',
            '--tw-prose-quotes': '#3C2F2F',
            '--tw-prose-quote-borders': '#E85D33',
            '--tw-prose-captions': '#6B6058',
            '--tw-prose-code': '#3C2F2F',
            '--tw-prose-th-borders': 'rgba(60,47,47,0.2)',
            '--tw-prose-td-borders': 'rgba(60,47,47,0.12)',
            '--tw-prose-invert-body': '#EAE4D7',
            '--tw-prose-invert-headings': '#EAE4D7',
            '--tw-prose-invert-links': '#F09A7E',
            '--tw-prose-invert-bold': '#EAE4D7',
            '--tw-prose-invert-counters': '#CFC8B7',
            '--tw-prose-invert-bullets': '#A9A392',
            '--tw-prose-invert-hr': 'rgba(234,228,215,0.15)',
            '--tw-prose-invert-quotes': '#EAE4D7',
            '--tw-prose-invert-quote-borders': '#E85D33',
            '--tw-prose-invert-captions': '#CFC8B7',
            '--tw-prose-invert-code': '#EAE4D7',
            'h2, h3, h4': {
              fontFamily: '"Libre Bodoni", ui-serif, Georgia, serif',
              letterSpacing: '-0.01em',
            },
            'p, li': {
              lineHeight: '1.75',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
