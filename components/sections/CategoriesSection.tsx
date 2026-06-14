import Image from 'next/image'
import { categories } from '@/data/categories'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function CategoriesSection() {
  return (
    <section id="kategori" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kategori Produk"
          title="Apa yang Bisa Kami Produksikan?"
          description="Makloona melayani berbagai kategori produk kecantikan dan perawatan — dari riset formula hingga produk siap edar."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.id}
              className="group overflow-hidden rounded-2xl border border-subtle bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Category image — diamond crop */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-teal/10 to-brand-purple/5">
                <div className="clip-diamond h-40 w-40 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={cat.imagePath}
                    alt={cat.name}
                    width={160}
                    height={160}
                    sizes="160px"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <h3 className="text-base font-semibold text-heading">{cat.name}</h3>
                <p className="mt-2 text-sm font-light leading-relaxed text-body">{cat.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
