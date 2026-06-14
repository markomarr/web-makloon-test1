import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Music2, MessageCircle } from 'lucide-react'
import { siteSettings } from '@/data/siteSettings'
import { buildWhatsAppLink } from '@/lib/whatsapp'

export function Footer() {
  const waHref = buildWhatsAppLink(siteSettings.whatsappNumber, siteSettings.whatsappDefaultMessage)
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-subtle bg-heading text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Makloona — halaman utama">
              <Image
                src="/images/logo/logo-makloona-fallback.png"
                alt="Makloona"
                width={160}
                height={30}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm font-light text-subtle">
              Agency makloon yang membantu brand owner mewujudkan produk dari konsep hingga siap edar — efisien, transparan, dan profesional.
            </p>
            {/* Social */}
            <div className="mt-5 flex items-center gap-4">
              {siteSettings.socialFacebook && (
                <a href={siteSettings.socialFacebook} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full p-1.5 text-subtle transition-colors hover:text-white" aria-label="Facebook Makloona">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {siteSettings.socialInstagram && (
                <a href={siteSettings.socialInstagram} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full p-1.5 text-subtle transition-colors hover:text-white" aria-label="Instagram Makloona">
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {siteSettings.socialTiktok && (
                <a href={siteSettings.socialTiktok} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full p-1.5 text-subtle transition-colors hover:text-white" aria-label="TikTok Makloona">
                  <Music2 className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Navigasi footer">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-subtle">Navigasi</p>
            <ul className="space-y-2.5 text-sm font-light text-subtle">
              {[
                { label: 'Tentang Kami', href: '/#tentang' },
                { label: 'Layanan', href: '/#layanan' },
                { label: 'Proses', href: '/#proses' },
                { label: 'Blog', href: '/blog' },
                { label: 'Kontak', href: '/#kontak' },
                { label: 'Kebijakan Privasi', href: '/privacy' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="focus-ring transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-subtle">Kontak</p>
            <ul className="space-y-2.5 text-sm font-light text-subtle">
              {siteSettings.contactEmail && <li>{siteSettings.contactEmail}</li>}
              {siteSettings.contactPhone && <li>{siteSettings.contactPhone}</li>}
              {siteSettings.address && <li>{siteSettings.address}</li>}
            </ul>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-pill bg-brand-purple px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-purple-light"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs font-light text-subtle">
          <p>
            &copy; {year} Makloona. Hak cipta dilindungi. &middot;{' '}
            <Link href="/privacy" className="focus-ring hover:text-white">
              Kebijakan Privasi
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
