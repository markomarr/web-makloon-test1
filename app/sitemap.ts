import type { MetadataRoute } from 'next'
import { posts } from '@/data/posts'

const BASE_URL = 'https://makloona.id'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), priority: 0.9, changeFrequency: 'weekly' },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), priority: 0.3, changeFrequency: 'yearly' },
  ]

  const blogRoutes: MetadataRoute.Sitemap = posts
    .filter((p) => p.published)
    .map((p) => ({
      url: `${BASE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    }))

  return [...staticRoutes, ...blogRoutes]
}
