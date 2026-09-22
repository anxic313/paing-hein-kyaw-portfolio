import { CheckCircle2, Clock, MapPin } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { GlassCard } from './glass-card'
import { Section } from './section'

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic Journey"
      description="From a foundation diploma in Singapore to a Computer Science degree in Bangkok."
    >
      <ol className="relative flex flex-col gap-8 md:gap-10">
        <span
          aria-hidden="true"
          className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/70 via-border to-transparent md:left-1/2 md:-translate-x-1/2"
        />
        {education.map((entry, i) => {
          const isCurrent = entry.status === 'current'
          const alignRight = i % 2 === 1
          return (
            <li
              key={entry.school + entry.degree}
              className={cn(
                'relative grid gap-4 pl-12 md:grid-cols-2 md:pl-0',
                alignRight ? 'md:[&>article]:col-start-2' : 'md:[&>article]:col-start-1',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'absolute left-0 top-6 flex size-8 items-center justify-center rounded-full border md:left-1/2 md:-translate-x-1/2',
                  isCurrent
                    ? 'border-primary/60 bg-primary/20 text-primary shadow-[0_0_24px_-4px_var(--glow)]'
                    : 'glass text-muted-foreground',
                )}
              >
                {isCurrent ? <Clock className="size-4" /> : <CheckCircle2 className="size-4" />}
              </span>

              <GlassCard
                as="article"
                className={cn('p-6 md:p-7', alignRight ? 'md:ml-10' : 'md:mr-10', isCurrent && 'glass-strong')}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={cn(
                        'rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider',
                        isCurrent
                          ? 'bg-primary/20 text-primary ring-1 ring-primary/40'
                          : 'bg-secondary text-muted-foreground',
                      )}
                    >
                      {isCurrent ? 'Currently enrolled' : 'Completed'}
                    </span>
                    <span className="font-heading text-sm text-muted-foreground">{entry.period}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold text-foreground">{entry.school}</h3>
                    <p className="text-foreground/85">{entry.degree}</p>
                  </div>
                  <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5" aria-hidden="true" />
                    {entry.location}
                  </p>
                </div>
              </GlassCard>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
