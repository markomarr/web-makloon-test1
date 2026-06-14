type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

/** Shared `<h2>` block used across Home sections — keeps heading hierarchy and styling consistent. */
export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClasses}`}>
      {eyebrow ? (
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-purple-light">{eyebrow}</span>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold text-heading sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base font-light text-body sm:text-lg">{description}</p> : null}
    </div>
  )
}
