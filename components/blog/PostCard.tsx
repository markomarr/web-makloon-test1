import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/data/posts'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-subtle bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Cover image */}
      <Link href={`/blog/${post.slug}`} className="focus-ring block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-light text-subtle">
          <span>{post.author.name}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        </div>

        <h2 className="mt-2 text-base font-semibold leading-snug text-heading">
          <Link href={`/blog/${post.slug}`} className="focus-ring hover:text-brand-purple">
            {post.title}
          </Link>
        </h2>

        <p className="mt-2 flex-1 text-sm font-light leading-relaxed text-body">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="focus-ring mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium text-brand-purple hover:text-brand-purple-light"
        >
          Baca selengkapnya
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
