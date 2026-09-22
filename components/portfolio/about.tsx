import { BookOpen, GraduationCap, Sparkles } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { GlassCard } from './glass-card'
import { Section } from './section'

const highlights = [
  { Icon: GraduationCap, label: 'Studying', value: 'B.Sc. Computer Science' },
  { Icon: BookOpen, label: 'Background', value: 'Diploma in IT, Kaplan' },
  { Icon: Sparkles, label: 'Learning through', value: 'Hands-on projects' },
]

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About Me">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <GlassCard className="p-8 md:p-10">
          <p className="text-pretty text-lg leading-relaxed text-foreground/90">{profile.about}</p>
        </GlassCard>
        <ul className="flex flex-col gap-4">
          {highlights.map(({ Icon, label, value }) => (
            <GlassCard key={label} as="li" className="flex items-center gap-4 p-5">
              <div className="flex items-center gap-4">
                <span className="glass flex size-11 shrink-0 items-center justify-center rounded-xl text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                  <span className="font-heading font-medium text-foreground">{value}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </ul>
      </div>
    </Section>
  )
}
