import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi Makloona — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
  alternates: { canonical: 'https://makloona.id/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Draft notice */}
      <div className="mb-8 rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-800">
        <strong>Draf dokumen</strong> — Konten kebijakan privasi ini masih dalam tahap penyusunan dan belum ditinjau secara legal. Wajib direview dan disetujui oleh tim Makloona sebelum dipublikasikan ke production (PRD Open Question #9).
      </div>

      <h1 className="text-3xl font-semibold text-heading">Kebijakan Privasi</h1>
      <p className="mt-2 text-sm font-light text-subtle">Terakhir diperbarui: 9 Juni 2026 (draf)</p>

      <div className="mt-8 space-y-8 text-base font-light leading-relaxed text-body">
        <section>
          <h2 className="text-xl font-semibold text-heading">1. Informasi yang Kami Kumpulkan</h2>
          <p className="mt-3">
            Makloona mengumpulkan informasi yang Anda berikan secara sukarela, seperti nama dan informasi kontak, ketika Anda menghubungi kami melalui WhatsApp atau saluran komunikasi lainnya.
          </p>
          <p className="mt-3">
            Website ini tidak menggunakan formulir pendaftaran, login pengguna, atau sistem penyimpanan data pengunjung secara aktif. Interaksi utama dilakukan melalui aplikasi pihak ketiga (WhatsApp) dengan kebijakan privasi mereka sendiri.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading">2. Penggunaan Informasi</h2>
          <p className="mt-3">
            Informasi yang Anda bagikan hanya digunakan untuk merespons pertanyaan, memberikan informasi yang relevan tentang layanan Makloona, dan menjalankan komunikasi bisnis yang berhubungan dengan kebutuhan produksi Anda.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading">3. Berbagi Data dengan Pihak Ketiga</h2>
          <p className="mt-3">
            Makloona tidak menjual, memperdagangkan, atau memindahkan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali diwajibkan oleh hukum yang berlaku.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading">4. Analitik & Cookie</h2>
          <p className="mt-3">
            Website ini menggunakan Vercel Analytics untuk menganalisis performa dan penggunaan halaman secara anonim. Data yang dikumpulkan tidak mengidentifikasi pengunjung secara personal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading">5. Keamanan Data</h2>
          <p className="mt-3">
            Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi informasi Anda. Namun, tidak ada metode transmisi melalui internet yang sepenuhnya aman.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading">6. Perubahan Kebijakan</h2>
          <p className="mt-3">
            Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Versi terbaru akan selalu tersedia di halaman ini dengan tanggal pembaruan yang tertera.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-heading">7. Hubungi Kami</h2>
          <p className="mt-3">
            Jika Anda memiliki pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami melalui email:{' '}
            <span className="font-medium text-brand-purple">makloona@darinari.co.id</span>
          </p>
        </section>
      </div>

      <div className="mt-12 border-t border-subtle pt-8">
        <Link
          href="/"
          className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-brand-purple hover:text-brand-purple-light"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </main>
  )
}
