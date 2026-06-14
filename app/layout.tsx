import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCtaMobile } from '@/components/ui/StickyCtaMobile'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://makloona.id'),
  title: {
    default: 'Makloona — Agency Makloon & Manufacturing Partner untuk Brand Owner',
    template: '%s | Makloona',
  },
  description:
    'Makloona membantu brand owner menemukan pabrik makloon terbaik dan mengelola proses produksi dari konsep hingga produk siap edar — efisien, transparan, profesional.',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://makloona.id',
    siteName: 'Makloona',
    images: [{ url: '/images/sections/products-collection.png', width: 1200, height: 630, alt: 'Makloona — Manufacturing Partner' }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="font-sans text-body antialiased">
        <Header />
        {children}
        <Footer />
        <StickyCtaMobile />
      </body>
    </html>
  )
}
