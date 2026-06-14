import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { CategoriesSection } from '@/components/sections/CategoriesSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { UspSection } from '@/components/sections/UspSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqSection } from '@/components/sections/FaqSection'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Makloona — Agency Makloon & Manufacturing Partner untuk Brand Owner',
  description:
    'Makloona membantu brand owner menemukan pabrik makloon terbaik dan mengelola proses produksi dari konsep hingga produk siap edar — efisien, transparan, profesional.',
  alternates: { canonical: 'https://makloona.id' },
}

export default function HomePage() {
  return (
    <main>
      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Makloona',
            url: 'https://makloona.id',
            logo: 'https://makloona.id/images/logo/logo-makloona-web.png',
            description:
              'Agency makloon yang membantu brand owner mewujudkan produk dari konsep hingga siap edar.',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: 'Indonesian',
            },
            sameAs: [
              'https://instagram.com/makloona.id',
              'https://facebook.com/makloona.id',
            ],
          }),
        }}
      />

      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <ServicesSection />
      <ProcessSection />
      <UspSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  )
}
