import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'phone'
type Size = 'sm' | 'md' | 'lg' | 'xl'

interface BaseProps {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/30',
  secondary:
    'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 shadow-lg shadow-accent-600/25',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  ghost:
    'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#20BD5A] focus:ring-[#25D366] shadow-lg shadow-[#25D366]/25',
  phone:
    'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-700 shadow-lg shadow-primary-700/25',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-2.5 text-sm gap-2',
  lg: 'px-8 py-3 text-base gap-2.5',
  xl: 'px-10 py-4 text-lg gap-3',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    icon,
    iconPosition = 'left',
    className,
    children,
  } = props

  const classes = cn(
    'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer select-none',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && 'w-full',
    className as string
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  )

  const forwardedProps = { ...props } as Record<string, unknown>
  for (const prop of ['as', 'variant', 'size', 'fullWidth', 'icon', 'iconPosition', 'className', 'children']) {
    delete forwardedProps[prop]
  }

  if (props.as === 'a') {
    return (
      <a {...(forwardedProps as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button {...(forwardedProps as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {content}
    </button>
  )
}
