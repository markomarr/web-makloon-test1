import Link from 'next/link'

export default function BlogNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-5xl font-semibold text-brand-purple">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-heading">Artikel tidak ditemukan</h1>
      <p className="mt-3 text-base font-light text-body">
        Artikel yang Anda cari tidak ada atau telah dipindahkan.
      </p>
      <Link
        href="/blog"
        className="focus-ring mt-8 inline-flex items-center gap-2 rounded-pill border border-brand-purple px-6 py-3 text-sm font-medium text-brand-purple transition-colors hover:bg-brand-purple hover:text-white"
      >
        ← Kembali ke Blog
      </Link>
    </main>
  )
}
