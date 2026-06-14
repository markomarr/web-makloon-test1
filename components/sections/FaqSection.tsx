'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '@/data/faq'
import { SectionHeading } from '@/components/ui/SectionHeading'

const KONFIRMASI_PREFIX = '[KONFIRMASI'

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Ditanyakan"
        />

        <dl className="mt-10 space-y-3">
          {faq.map((item) => {
            const isPending = item.answer.startsWith(KONFIRMASI_PREFIX)
            const isOpen = openId === item.id

            return (
              <div key={item.id} className="rounded-xl border border-subtle bg-white overflow-hidden">
                <dt>
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-heading transition-colors hover:bg-slate-50"
                    >
                      <span>{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-brand-purple transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                </dt>

                {isOpen && (
                  <dd id={`faq-panel-${item.id}`} className="px-5 pb-5 pt-1">
                    {isPending ? (
                      /* [KONFIRMASI] answers render as visible placeholder during development
                         per PRD acceptance criteria: "render as teks placeholder saat development,
                         TIDAK ditampilkan di production." */
                      <p className="text-sm italic text-subtle">
                        Jawaban untuk pertanyaan ini sedang disiapkan oleh tim Makloona.
                      </p>
                    ) : (
                      <p className="text-sm font-light leading-relaxed text-body">{item.answer}</p>
                    )}
                  </dd>
                )}
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
