import type { Metadata } from 'next'
import { posts } from '@/data/posts'
import { PostCard } from '@/components/blog/PostCard'
import { Pagination } from '@/components/blog/Pagination'

export const metadata: Metadata = {
  title: 'Blog & Insights',
  description:
    'Artikel seputar maklon, branding, regulasi produk, dan insight industri kecantikan dari tim Makloona.',
  alternates: { canonical: 'https://makloona.id/blog' },
}

const PER_PAGE = 9

type SearchParams = { page?: string }

export default function BlogPage({ searchParams }: { searchParams: SearchParams }) {
  const published = posts
    .filter((p) => p.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  const totalPages = Math.max(1, Math.ceil(published.length / PER_PAGE))
  const currentPage = Math.min(Math.max(1, Number(searchParams.page) || 1), totalPages)
  const start = (currentPage - 1) * PER_PAGE
  const pagePosts = published.slice(start, start + PER_PAGE)

  return (
    <main className="min-h-screen bg-white">
      {/* Page header */}
      <div className="border-b border-subtle bg-slate-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-heading sm:text-4xl">Blog & Insights</h1>
          <p className="mt-3 text-base font-light text-body">
            Artikel seputar maklon, branding, regulasi produk, dan insight industri kecantikan.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {pagePosts.length === 0 ? (
          /* Empty state — per PRD acceptance criteria */
          <p className="py-16 text-center text-base font-light text-body">
            Belum ada artikel. Nantikan update kami.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pagePosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/blog" />
      </div>
    </main>
  )
}
