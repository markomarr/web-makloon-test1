import Image from 'next/image'
import { about } from '@/data/about'

export function AboutSection() {
  return (
    <section id="tentang" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image — hexagon crop echoing the logo mark */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[300px] sm:w-[380px]">
              {/* Decorative teal ring behind hexagon */}
              <div className="clip-hexagon absolute inset-2 bg-brand-teal/20" />
              <div className="clip-hexagon overflow-hidden">
                <Image
                  src={about.imagePath}
                  alt="Tim Makloona melakukan riset formula produk"
                  width={380}
                  height={380}
                  sizes="(max-width: 640px) 300px, 380px"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 h-12 w-12 rounded-full bg-brand-purple/20" />
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-purple-light">
              Tentang Kami
            </span>
            <h2 className="mt-2 text-3xl font-semibold text-heading sm:text-4xl">{about.heading}</h2>
            <div className="mt-6 space-y-4">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-base font-light leading-relaxed text-body">
                  {p}
                </p>
              ))}
            </div>

            {/* Three proof-point chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['Sistem Terstruktur', 'Proses Transparan', 'Mitra Terpercaya'].map((label) => (
                <span
                  key={label}
                  className="rounded-pill bg-brand-purple/5 px-4 py-2 text-sm font-medium text-brand-purple"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
