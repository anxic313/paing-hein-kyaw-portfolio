import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-20 md:py-28', className)}>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 md:px-8">
        <header className="flex max-w-2xl flex-col gap-3">
          <p className="font-heading text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>
          {description ? (
            <p className="text-pretty leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}
