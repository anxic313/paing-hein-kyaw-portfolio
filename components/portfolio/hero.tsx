import { ArrowRight, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { HeroVisual } from './hero-visual'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-svh items-center pt-28 pb-16 md:pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="flex flex-col gap-7">
          <div className="animate-rise-in glass inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Currently enrolled · Bachelor of Science in Computer Science
          </div>

          <div className="flex flex-col gap-4">
            <h1
              className="animate-rise-in text-balance text-5xl font-semibold leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
              style={{ animationDelay: '80ms' }}
            >
              <span className="text-gradient">Paing Hein Kyaw (Anxic)</span>
            </h1>
            <p
              className="animate-rise-in font-heading text-xl font-medium text-foreground/90 md:text-2xl"
              style={{ animationDelay: '160ms' }}
            >
              {profile.role}
            </p>
            <p
              className="animate-rise-in flex items-center gap-2 text-sm text-muted-foreground"
              style={{ animationDelay: '220ms' }}
            >
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {profile.institution} · {profile.location}
            </p>
          </div>

          <p
            className="animate-rise-in max-w-xl text-pretty leading-relaxed text-muted-foreground"
            style={{ animationDelay: '300ms' }}
          >
            {profile.intro}
          </p>

          <div className="animate-rise-in flex flex-wrap gap-3" style={{ animationDelay: '380ms' }}>
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-12 rounded-xl bg-primary px-6 text-primary-foreground shadow-[0_0_30px_-8px_var(--glow)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_0_40px_-6px_var(--glow)]',
              )}
            >
              View Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'glass h-12 rounded-xl border-border bg-transparent px-6 text-foreground transition-all hover:-translate-y-0.5 hover:bg-secondary hover:text-foreground dark:bg-transparent dark:hover:bg-secondary',
              )}
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="animate-rise-in" style={{ animationDelay: '200ms' }}>
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
