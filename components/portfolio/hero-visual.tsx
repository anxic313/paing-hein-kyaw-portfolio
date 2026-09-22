import { Braces, Database, Network, Terminal } from 'lucide-react'

const CUBE_FACES = [
  'rotateY(0deg) translateZ(70px)',
  'rotateY(90deg) translateZ(70px)',
  'rotateY(180deg) translateZ(70px)',
  'rotateY(-90deg) translateZ(70px)',
  'rotateX(90deg) translateZ(70px)',
  'rotateX(-90deg) translateZ(70px)',
]

const ORBITERS = [
  { Icon: Braces, duration: 22, delay: 0 },
  { Icon: Database, duration: 22, delay: -7.3 },
  { Icon: Network, duration: 22, delay: -14.6 },
]

export function HeroVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex aspect-square w-full max-w-[26rem] items-center justify-center lg:max-w-[30rem]"
      style={{ perspective: '1200px' }}
    >
      <div className="absolute inset-[12%] rounded-full bg-primary/15 blur-3xl animate-pulse-soft" />

      <div className="absolute inset-[6%] rounded-full border border-border/60" />
      <div className="absolute inset-[22%] rounded-full border border-dashed border-border/40" />

      <div className="preserve-3d relative size-[140px] animate-spin-slow">
        {CUBE_FACES.map((transform, i) => (
          <div
            key={i}
            className="glass-strong absolute inset-0 rounded-xl"
            style={{ transform, backfaceVisibility: 'visible' }}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(72px)' }}>
          <Terminal className="size-10 text-primary drop-shadow-[0_0_12px_oklch(0.68_0.17_255/_60%)]" />
        </div>
      </div>

      {ORBITERS.map(({ Icon, duration, delay }, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 size-0 [--orbit-r:140px] sm:[--orbit-r:190px]"
          style={{ animation: `orbit ${duration}s linear ${delay}s infinite` }}
        >
          <div className="glass -translate-x-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-xl">
            <Icon className="size-5 text-foreground/80" />
          </div>
        </div>
      ))}

      <div className="glass absolute left-[6%] top-[14%] size-16 rounded-full animate-float-slow" />
      <div
        className="glass absolute bottom-[12%] right-[8%] size-10 rounded-full animate-float-medium"
        style={{ animationDelay: '-2s' }}
      />
      <div
        className="glass absolute right-[10%] top-[10%] size-8 rotate-45 rounded-md animate-float-slow"
        style={{ animationDelay: '-4s' }}
      />
      <div
        className="glass absolute bottom-[18%] left-[8%] h-6 w-14 rounded-full animate-float-medium"
        style={{ animationDelay: '-1s' }}
      />
    </div>
  )
}
