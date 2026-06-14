import type { Config } from 'tailwindcss'

// ============================================================
// MAKLOONA — tailwind.config.ts starter
// Warna diekstrak secara programatik dari logo-makloona-web.png
// Font dikonfirmasi dari Elementor page CSS situs lama
// ============================================================

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ---------------------------------------------------
      // FONT
      // Setup: tambahkan di app/layout.tsx
      //
      // import { Poppins } from 'next/font/google'
      // const poppins = Poppins({
      //   subsets: ['latin'],
      //   weight: ['300', '400', '500', '600', '700'],
      //   variable: '--font-poppins',
      // })
      // <body className={poppins.variable}>...</body>
      // ---------------------------------------------------
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
      },

      // ---------------------------------------------------
      // COLORS
      // Sumber:
      //   brand.* = diekstrak dari logo-makloona-web.png
      //   text.*  = dari Elementor page CSS situs lama (high confidence)
      // ---------------------------------------------------
      colors: {
        brand: {
          // Warna wordmark "Makloona" di logo
          purple: '#483681',
          // Warna icon hexagon (segment ungu)
          'purple-light': '#7C5DC5',
          // Warna icon hexagon (segment teal/cyan)
          teal: '#7CC8E4',
        },
        // Warna teks — dari Elementor CSS situs lama
        heading: '#1C244B',   // section headings, footer headings
        body: '#324A6D',      // paragraf, nav links, deskripsi
        subtle: '#C8D5DC',    // hover state, copyright text
      },

      // ---------------------------------------------------
      // BORDER RADIUS
      // CTA button di situs lama: border-radius: 50px (pill)
      // ---------------------------------------------------
      borderRadius: {
        pill: '50px',
      },

      // ---------------------------------------------------
      // SPACING — baseline section padding situs lama
      // ---------------------------------------------------
      // Pakai class Tailwind: py-16 md:py-24 (sudah tersedia di default)
    },
  },
  plugins: [],
}

export default config
