import { ArrowUpRight, Check, FolderCode } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { projects } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { GlassCard } from './glass-card'
import { Section } from './section'

const projectButtonClass =
  'glass h-10 rounded-xl border-border bg-transparent px-4 text-foreground hover:bg-secondary hover:text-foreground dark:bg-transparent dark:hover:bg-secondary'

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Featured Project"
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <GlassCard key={project.title} as="li" className="flex flex-col p-6 md:p-7">
            <div className="flex h-full flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <span className="glass flex size-12 items-center justify-center rounded-xl text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  <FolderCode className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Featured project
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
              </div>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(buttonVariants({ variant: 'outline' }), projectButtonClass)}
                  >
                    View Project
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                ) : (
                  <Button variant="outline" disabled className={cn(projectButtonClass, 'opacity-60')}>
                    View Project
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">(link coming soon)</span>
                  </Button>
                )}
              </div>
            </div>
          </GlassCard>
        ))}
      </ul>
    </Section>
  )
}
