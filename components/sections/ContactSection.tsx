import { MessageCircle, Mail, Phone } from 'lucide-react'
import { contact } from '@/data/contact'
import { siteSettings } from '@/data/siteSettings'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function ContactSection() {
  const waHref = buildWhatsAppLink(siteSettings.whatsappNumber, siteSettings.whatsappDefaultMessage)

  return (
    <section id="kontak" className="bg-brand-purple py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Decorative accent */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/15">
          <MessageCircle className="h-7 w-7 text-white" aria-hidden="true" />
        </div>

        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mt-4 text-base font-light leading-relaxed text-white/80">
          {contact.subHeading}
        </p>

        {/* Primary CTA — no <form> or <input> per PRD */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-pill bg-white px-8 py-4 text-[15px] font-semibold text-brand-purple transition-colors hover:bg-brand-teal"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {contact.ctaLabel}
        </a>

        {/* Optional contact info — plain text only, no form */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-light text-white/70">
          {siteSettings.contactEmail && (
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {siteSettings.contactEmail}
            </span>
          )}
          {siteSettings.contactPhone && (
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              {siteSettings.contactPhone}
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
