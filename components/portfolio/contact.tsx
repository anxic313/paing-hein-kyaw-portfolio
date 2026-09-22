import { Briefcase, GitBranch, Mail } from 'lucide-react'
import { contacts } from '@/lib/portfolio-data'
import { GlassCard } from './glass-card'
import { Section } from './section'

const icons: Record<string, typeof Mail> = {
  Email: Mail,
  LinkedIn: Briefcase,
  GitHub: GitBranch,
}

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title={'Let\u2019s Connect'}>
      <GlassCard tilt={false} className="glass-strong overflow-hidden p-8 md:p-12">
        <div className="flex flex-col gap-10">
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground/90">
            Interested in connecting, collaborating, or simply having a conversation about technology? Feel free to
            reach out.
          </p>
          <ul className="grid gap-4 sm:grid-cols-3">
            {contacts.map((c) => {
              const Icon = icons[c.label] ?? Mail
              const hasValue = c.value.length > 0
              const href =
                c.label === 'Email' ? `mailto:${c.value}` : c.value
              const content = (
                <>
                  <span className="glass flex size-11 shrink-0 items-center justify-center rounded-xl text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="font-heading text-sm font-medium text-foreground">{c.label}</span>
                    <span className="truncate text-xs text-muted-foreground">
                      {hasValue ? c.value : c.placeholder}
                    </span>
                  </span>
                </>
              )
              return (
                <li key={c.label}>
                  {hasValue ? (
                    <a
                      href={href}
                      target={c.label === 'Email' ? undefined : '_blank'}
                      rel="noreferrer"
                      className="glass glow-border flex items-center gap-4 rounded-2xl p-4 transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="glass flex items-center gap-4 rounded-2xl p-4">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </GlassCard>
    </Section>
  )
}
