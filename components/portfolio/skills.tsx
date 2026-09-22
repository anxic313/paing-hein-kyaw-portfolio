import { Code2, Database, GitBranch, Layers, Network, Table2 } from 'lucide-react'
import { skills } from '@/lib/portfolio-data'
import { GlassCard } from './glass-card'
import { Section } from './section'

const icons: Record<string, typeof Code2> = {
  'HTML/CSS': Code2,
  MySQL: Table2,
  Git: GitBranch,
  'Object-Oriented Programming': Layers,
  'Database Fundamentals': Database,
  'Networking Fundamentals': Network,
}

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={'What I\u2019m Working With'}
      description={'Areas I\u2019ve studied and continue to practise through coursework and projects.'}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          const Icon = icons[skill] ?? Code2
          return (
            <GlassCard key={skill} as="li" className="p-6">
              <div className="flex items-center gap-4">
                <span className="glass flex size-12 shrink-0 items-center justify-center rounded-xl text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="font-heading text-base font-medium text-foreground">{skill}</span>
              </div>
            </GlassCard>
          )
        })}
      </ul>
    </Section>
  )
}
