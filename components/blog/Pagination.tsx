import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type PaginationProps = {
  currentPage: number
  totalPages: number
  basePath: string
}

export function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null

  const pageHref = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`

  return (
    <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Halaman blog">
      {/* Prev */}
      <Link
        href={pageHref(currentPage - 1)}
        aria-disabled={currentPage === 1}
        tabIndex={currentPage === 1 ? -1 : undefined}
        className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-subtle transition-colors
          ${currentPage === 1
            ? 'pointer-events-none opacity-40'
            : 'hover:border-brand-purple hover:text-brand-purple'
          }`}
        aria-label="Halaman sebelumnya"
      >
        <ChevronLeft className="h-5 w-5" />
      </Link>

      {/* Page numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={pageHref(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-colors
            ${page === currentPage
              ? 'border-brand-purple bg-brand-purple text-white'
              : 'border-subtle text-body hover:border-brand-purple hover:text-brand-purple'
            }`}
        >
          {page}
        </Link>
      ))}

      {/* Next */}
      <Link
        href={pageHref(currentPage + 1)}
        aria-disabled={currentPage === totalPages}
        tabIndex={currentPage === totalPages ? -1 : undefined}
        className={`focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-subtle transition-colors
          ${currentPage === totalPages
            ? 'pointer-events-none opacity-40'
            : 'hover:border-brand-purple hover:text-brand-purple'
          }`}
        aria-label="Halaman berikutnya"
      >
        <ChevronRight className="h-5 w-5" />
      </Link>
    </nav>
  )
}
