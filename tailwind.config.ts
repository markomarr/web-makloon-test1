import type { Config } from 'tailwindcss'

// ============================================================
// MAKLOONA — tailwind.config.ts
// Based on config/tailwind.config.starter.ts (brand palette
// extracted from logo-makloona-web.png + Elementor page CSS).
// ============================================================

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#483681',
          'purple-light': '#7C5DC5',
          teal: '#7CC8E4',
        },
        heading: '#1C244B',
        body: '#324A6D',
        subtle: '#C8D5DC',
      },
      borderRadius: {
        pill: '50px',
      },
    },
  },
  plugins: [],
}

export default config
