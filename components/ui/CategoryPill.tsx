'use client'

interface CategoryPillProps {
  /** The label text to display */
  children: React.ReactNode
  /** Color variant */
  variant?: 'primary' | 'gold' | 'orange' | 'neutral'
  /** Size variant - affects font size and padding */
  size?: 'sm' | 'md' | 'lg'
  /** Additional className */
  className?: string
}

const variantClasses = {
  primary: 'bg-primary-50 text-primary-600',
  gold: 'bg-amber-50 text-amber-700',
  orange: 'bg-orange-50 text-orange-600',
  neutral: 'bg-neutral-100 text-neutral-600',
}

const sizeClasses = {
  sm: 'px-3 py-1 text-xs tracking-wide',
  md: 'px-4 py-1.5 text-sm tracking-wide',
  lg: 'px-5 py-2 text-base tracking-widest',
}

export function CategoryPill({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: CategoryPillProps) {
  return (
    <span
      className={`inline-block rounded-full font-semibold uppercase ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  )
}
