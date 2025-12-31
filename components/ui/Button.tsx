'use client'

import Link from 'next/link'
import { forwardRef, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
  children: ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  // Primary: Solid red/primary button (like "Découvrir nos formations" and "S'inscrire")
  primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
  // Secondary: Transparent with border (like "Voir la vidéo")
  secondary: 'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20',
  // Ghost: Minimal styling for text-like buttons
  ghost: 'bg-transparent text-primary-500 hover:bg-primary-50 hover:text-primary-600',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm sm:px-4 sm:py-2',
  md: 'px-4 py-2 text-sm sm:px-6 sm:py-2.5',
  lg: 'px-5 py-2.5 text-sm sm:px-8 sm:py-3 sm:text-base',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      fullWidth = false,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-semibold rounded-full
      transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
    `

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ')

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </>
    )

    // If href is provided, render as Link
    if ('href' in props && props.href) {
      const { href, ...linkProps } = props as ButtonAsLink
      return (
        <Link
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={combinedClassName}
          {...linkProps}
        >
          {content}
        </Link>
      )
    }

    // Otherwise, render as button
    const buttonProps = props as ButtonAsButton
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...buttonProps}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
