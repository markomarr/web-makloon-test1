import {
  LayoutGrid,
  Eye,
  Factory,
  Users,
  BadgeCheck,
  type LucideIcon,
} from 'lucide-react'
import { usp } from '@/data/usp'
import { SectionHeading } from '@/components/ui/SectionHeading'

const ICON_MAP: Record<string, LucideIcon> = {
  LayoutGrid,
  Eye,
  Factory,
  Users,
  BadgeCheck,
}

export function UspSection() {
  return (
    <section id="keunggulan" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Keunggulan Makloona"
          title="Kenapa Memilih Kami?"
          description="Kami dirancang untuk membuat proses produksi seefisien dan setransparan mungkin bagi brand owner."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {usp.map((item, index) => {
            const Icon = ICON_MAP[item.iconName]
            return (
              <div
                key={item.id}
                className={`rounded-2xl border border-subtle p-6 transition-shadow hover:shadow-md
                  ${index === 0 ? 'bg-brand-purple text-white lg:col-span-1' : 'bg-white'}`}
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl
                    ${index === 0 ? 'bg-white/20' : 'bg-brand-teal/15'}`}
                >
                  {Icon ? (
                    <Icon
                      className={`h-6 w-6 ${index === 0 ? 'text-white' : 'text-brand-teal'}`}
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <h3 className={`text-base font-semibold ${index === 0 ? 'text-white' : 'text-heading'}`}>
                  {item.title}
                </h3>
                <p className={`mt-2 text-sm font-light leading-relaxed ${index === 0 ? 'text-white/80' : 'text-body'}`}>
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
