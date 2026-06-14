import Image from 'next/image'
import type { ContentBlock } from '@/data/posts'

/** Renders inline `[text](url)` markdown links within paragraph/list text. */
function InlineText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)

  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (match) {
          return (
            <a
              key={i}
              href={match[2]}
              className="font-medium text-brand-purple underline underline-offset-2 hover:text-brand-purple-light"
            >
              {match[1]}
            </a>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

/** Renders a typed `ContentBlock[]` array — mirrors Portable Text block kinds so swapping in @portabletext/react is a drop-in. */
export function PostBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading': {
            const Tag = `h${block.level}` as 'h2' | 'h3' | 'h4'
            const sizeClass = block.level === 2 ? 'text-2xl' : block.level === 3 ? 'text-xl' : 'text-lg'
            return (
              <Tag
                key={i}
                className={`${sizeClass} font-semibold text-heading`}
              >
                {block.text}
              </Tag>
            )
          }
          case 'paragraph':
            return (
              <p key={i} className="text-base font-light leading-relaxed text-body">
                <InlineText text={block.text} />
              </p>
            )
          case 'image':
            return (
              <figure key={i} className="overflow-hidden rounded-xl">
                <Image
                  src={block.src}
                  alt={block.alt}
                  width={800}
                  height={450}
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="h-auto w-full object-cover"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-xs font-light text-subtle">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )
          case 'list':
            return block.style === 'number' ? (
              <ol key={i} className="list-decimal space-y-2 pl-5 text-base font-light text-body">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="list-disc space-y-2 pl-5 text-base font-light text-body">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed pl-1">
                    <InlineText text={item} />
                  </li>
                ))}
              </ul>
            )
          case 'blockquote':
            return (
              <blockquote
                key={i}
                className="border-l-4 border-brand-teal bg-brand-teal/5 py-3 pl-5 pr-4 text-base font-light italic text-body"
              >
                <InlineText text={block.text} />
              </blockquote>
            )
          case 'code':
            return (
              <pre key={i} className="overflow-x-auto rounded-xl bg-heading p-4 text-sm text-subtle">
                <code>{block.code}</code>
              </pre>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
