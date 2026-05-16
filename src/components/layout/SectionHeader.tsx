import { cn } from '@/lib/cn'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  light?: boolean
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12 md:mb-16', className)}>
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg max-w-2xl leading-relaxed',
            centered && 'mx-auto',
            light ? 'text-white/80' : 'text-gray-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
