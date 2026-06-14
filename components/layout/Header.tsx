'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { siteSettings } from '@/data/siteSettings'
import { buildWhatsAppLink } from '@/lib/whatsapp'

const NAV_LINKS = [
  { label: 'Beranda', href: '/#beranda' },
  { label: 'Tentang Kami', href: '/#tentang' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Proses', href: '/#proses' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Blog', href: '/blog' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const waHref = buildWhatsAppLink(siteSettings.whatsappNumber, siteSettings.whatsappDefaultMessage)

  const handleAnchor = (href: string) => {
    setOpen(false)
    if (!href.startsWith('/#')) return
    const id = href.slice(2)
    if (pathname !== '/') return
    const el = document.getElementById(id)
    if (!el) return
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-subtle bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="focus-ring shrink-0" aria-label="Makloona — halaman utama">
          <Image
            src="/images/logo/logo-makloona-web.png"
            alt="Makloona"
            width={160}
            height={30}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/blog' ? pathname.startsWith('/blog') : false
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleAnchor(link.href)}
                className={`focus-ring text-sm font-medium transition-colors hover:text-brand-purple
                  ${isActive ? 'text-brand-purple' : 'text-body'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring hidden items-center gap-2 rounded-pill bg-brand-purple px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-purple-light md:flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Hubungi Kami
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="focus-ring rounded-md p-2 text-body md:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-subtle bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-4 pb-4 pt-2" aria-label="Navigasi mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleAnchor(link.href)}
                className="focus-ring rounded-lg px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-subtle/40 hover:text-brand-purple"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 flex items-center gap-2 rounded-pill bg-brand-purple px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-purple-light"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hubungi via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
