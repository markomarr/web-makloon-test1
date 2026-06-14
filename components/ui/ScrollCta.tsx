'use client'

type ScrollCtaProps = {
  label: string
  targetId: string
}

/** Smooth-scroll anchor for the Hero secondary CTA ("Lihat Layanan → #layanan"). */
export function ScrollCta({ label, targetId }: ScrollCtaProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (!el) return
    const offset = 80
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
  }

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="focus-ring inline-flex items-center justify-center gap-2 rounded-pill border border-brand-purple px-6 py-4 text-[15px] font-medium text-brand-purple transition-colors hover:bg-brand-purple hover:text-white"
    >
      {label}
    </a>
  )
}
