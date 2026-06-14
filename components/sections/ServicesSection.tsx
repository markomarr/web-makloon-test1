import {
  MessageCircle,
  Building2,
  FlaskConical,
  ShieldCheck,
  ScanLine,
  Package,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/data/services'
import { SectionHeading } from '@/components/ui/SectionHeading'

const ICON_MAP: Record<string, LucideIcon> = {
  MessageCircle,
  Building2,
  FlaskConical,
  ShieldCheck,
  ScanLine,
  Package,
}

export function ServicesSection() {
  return (
    <section id="layanan" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Layanan Kami"
          title="Solusi Lengkap dari Satu Pintu"
          description="Dari konsultasi awal hingga produk siap edar — Makloona menangani setiap tahapan agar proses produksi Anda berjalan efisien."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICON_MAP[service.iconName]
            return (
              <div
                key={service.id}
                className="rounded-2xl border border-subtle bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-purple/10">
                  {Icon ? <Icon className="h-6 w-6 text-brand-purple" aria-hidden="true" /> : null}
                </div>
                <h3 className="text-base font-semibold text-heading">{service.title}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-body">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
