import Image from 'next/image'
import { hero } from '@/data/hero'
import { siteSettings } from '@/data/siteSettings'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { LinkButton } from '@/components/ui/Button'
import { ScrollCta } from '@/components/ui/ScrollCta'

export function HeroSection() {
  const waHref = buildWhatsAppLink(siteSettings.whatsappNumber, siteSettings.whatsappDefaultMessage)

  return (
    <section id="beranda" className="relative overflow-hidden bg-white pb-20 pt-16 md:pt-24">
      {/* Subtle brand-teal background accent */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-brand-teal/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-purple/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-pill border border-brand-teal bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-purple"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-heading sm:text-5xl lg:text-5xl xl:text-6xl">
              {hero.headline}
            </h1>

            <p className="mt-6 text-lg font-light leading-relaxed text-body">
              {hero.subHeadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href={waHref} variant="primary">
                {hero.ctaPrimaryLabel}
              </LinkButton>
              <ScrollCta label={hero.ctaSecondaryLabel} targetId="layanan" />
            </div>
          </div>

          {/* Image column — hexagon crop (Design Direction B) */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-[320px] sm:w-[420px] lg:w-[480px]">
              {/* Outer hexagon decorative ring */}
              <div className="clip-hexagon absolute inset-0 bg-brand-purple/10" />
              {/* Inner hexagon image */}
              <div className="clip-hexagon relative overflow-hidden">
                <Image
                  src="/images/sections/products-collection.png"
                  alt="Jajaran produk skincare hasil produksi makloon berkualitas"
                  width={480}
                  height={480}
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 480px"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              {/* Floating accent dot */}
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-brand-teal/40" />
              <div className="absolute -right-4 top-8 h-10 w-10 rounded-full bg-brand-purple/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

