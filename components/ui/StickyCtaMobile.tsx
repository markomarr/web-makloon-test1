'use client'

import { MessageCircle } from 'lucide-react'
import { siteSettings } from '@/data/siteSettings'
import { buildWhatsAppLink } from '@/lib/whatsapp'

/** Fixed-bottom WhatsApp CTA, visible on mobile only — keeps "WA ≤ 1 tap" true on every page. */
export function StickyCtaMobile() {
  const href = buildWhatsAppLink(siteSettings.whatsappNumber, siteSettings.whatsappDefaultMessage)

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 md:hidden">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring flex w-full items-center justify-center gap-2 rounded-pill bg-brand-purple px-6 py-4 text-[15px] font-medium text-white shadow-lg shadow-brand-purple/30 transition-colors hover:bg-brand-purple-light"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        Hubungi via WhatsApp
      </a>
    </div>
  )
}
