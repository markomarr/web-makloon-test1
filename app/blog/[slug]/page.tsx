import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { posts } from '@/data/posts'
import { PostBody } from '@/components/blog/PostBody'

type Params = { slug: string }

export async function generateStaticParams() {
  return posts.filter((p) => p.published).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = posts.find((p) => p.slug === params.slug && p.published)
  if (!post) return {}

  const title = post.seoTitle ?? post.title
  const description = post.seoDescription ?? post.excerpt
  const canonicalUrl = `https://makloona.id/blog/${post.slug}`
  const ogImage = post.coverImage.src

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonicalUrl,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: ogImage, alt: post.coverImage.alt }],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export default function BlogDetailPage({ params }: { params: Params }) {
  const post = posts.find((p) => p.slug === params.slug && p.published)

  if (!post) notFound()

  const canonicalUrl = `https://makloona.id/blog/${post.slug}`

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://makloona.id${post.coverImage.src}`,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Makloona',
      url: 'https://makloona.id',
    },
    url: canonicalUrl,
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      {/* Cover image */}
      <div className="relative h-56 w-full sm:h-72 md:h-96">
        <Image
          src={post.coverImage.src}
          alt={post.coverImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-heading/40" />
      </div>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm font-light text-subtle" aria-label="Breadcrumb">
          <Link href="/blog" className="focus-ring hover:text-brand-purple">
            Blog
          </Link>
          <span aria-hidden="true">/</span>
          <span className="truncate text-body">{post.title}</span>
        </nav>

        {/* Header */}
        <header>
          <h1 className="text-3xl font-semibold leading-tight text-heading sm:text-4xl">
            {post.title}
          </h1>

          {/* Author + date */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-purple text-sm font-semibold text-white">
              {getInitials(post.author.name)}
            </div>
            <div>
              <p className="text-sm font-medium text-heading">{post.author.name}</p>
              <p className="text-xs font-light text-subtle">{post.author.bio}</p>
            </div>
            <span className="ml-auto text-sm font-light text-subtle">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </span>
          </div>

          <p className="mt-6 text-lg font-light leading-relaxed text-body">{post.excerpt}</p>
          <hr className="mt-6 border-subtle" />
        </header>

        {/* Body */}
        <div className="mt-8">
          <PostBody blocks={post.body} />
        </div>

        {/* Back to blog */}
        <div className="mt-12 border-t border-subtle pt-8">
          <Link
            href="/blog"
            className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-brand-purple hover:text-brand-purple-light"
          >
            <span aria-hidden="true">←</span>
            Kembali ke Blog
          </Link>
        </div>
      </article>
    </main>
  )
}
