'use client'

import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials, type Testimonial } from '@/data/testimonials'
import { siteSettings } from '@/data/siteSettings'
import { SectionHeading } from '@/components/ui/SectionHeading'

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export function TestimonialsSection() {
  const published = [...testimonials]
    .filter((t) => t.published)
    .sort((a, b) => a.order - b.order)

  if (!siteSettings.showTestimonials || published.length === 0) return null

  return <TestimonialsCarousel items={published} />
}

function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0)
  const total = items.length

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])

  // Always render 3 slots; CSS controls how many are visible per breakpoint.
  // slot 0: always visible | slot 1: md+ | slot 2: lg+
  const slots = [
    items[index % total],
    items[(index + 1) % total],
    items[(index + 2) % total],
  ]

  return (
    <section id="testimoni" className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni Klien"
          title="Kata Mereka tentang Makloona"
        />

        <div className="mt-12">
          {/* Card grid — slot visibility controlled by breakpoint classes */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard testimonial={slots[0]} className="block" />
            <TestimonialCard testimonial={slots[1]} className="hidden md:flex" />
            <TestimonialCard testimonial={slots[2]} className="hidden lg:flex" />
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-white text-body transition-colors hover:border-brand-purple hover:text-brand-purple"
              aria-label="Testimoni sebelumnya"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Pilih testimoni">
              {items.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  onClick={() => setIndex(i)}
                  className={`focus-ring rounded-full transition-all ${
                    i === index ? 'h-2 w-6 bg-brand-purple' : 'h-2 w-2 bg-subtle hover:bg-brand-purple/40'
                  }`}
                  aria-label={`Testimoni ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-white text-body transition-colors hover:border-brand-purple hover:text-brand-purple"
              aria-label="Testimoni berikutnya"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, className = '' }: { testimonial: Testimonial; className?: string }) {
  return (
    <div className={`flex-col rounded-2xl border border-subtle bg-white p-6 shadow-sm ${className}`}>
      <Quote className="mb-4 h-8 w-8 shrink-0 text-brand-teal" aria-hidden="true" />
      <blockquote className="flex-1 text-sm font-light leading-relaxed text-body">
        {testimonial.quote}
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-purple text-sm font-semibold text-white">
          {getInitials(testimonial.clientName)}
        </div>
        <div>
          <p className="text-sm font-semibold text-heading">{testimonial.clientName}</p>
          {testimonial.clientBrand && (
            <p className="text-xs font-light text-body">{testimonial.clientBrand}</p>
          )}
        </div>
      </div>
    </div>
  )
}
