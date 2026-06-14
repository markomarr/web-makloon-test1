import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

const baseClasses =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-pill px-6 py-4 text-[15px] font-medium transition-colors'

const variantClasses: Record<Variant, string> = {
  primary: 'bg-brand-purple text-white hover:bg-brand-purple-light',
  secondary: 'border border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white',
}

function classes(variant: Variant, className: string) {
  return `${baseClasses} ${variantClasses[variant]} ${className}`.trim()
}

type LinkButtonProps = {
  href: string
  variant?: Variant
  className?: string
  children: ReactNode
  'aria-label'?: string
}

/** Pill-shaped CTA link — matches the brand's Elementor button spec (shape, padding, colors). External links (incl. wa.me) open in a new tab. */
export function LinkButton({ href, variant = 'primary', className = '', children, ...rest }: LinkButtonProps) {
  const isExternal = href.startsWith('http')

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes(variant, className)} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes(variant, className)} {...rest}>
      {children}
    </Link>
  )
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

/** Pill-shaped CTA `<button>` for in-page actions (e.g. smooth-scroll triggers). */
export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonProps) {
  return (
    <button className={classes(variant, className)} {...rest}>
      {children}
    </button>
  )
}
