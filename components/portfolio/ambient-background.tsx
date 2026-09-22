'use client'

import { useEffect, useRef } from 'react'

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 2 + ((i * 7) % 3),
  delay: -((i * 1.7) % 18),
  duration: 16 + ((i * 3) % 12),
  drift: ((i % 5) - 2) * 40,
}))

export function AmbientBackground() {
  const lightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lightRef.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return
    let frame = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={lightRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-60 transition-transform duration-300 ease-out will-change-transform"
        style={{
          background:
            'radial-gradient(circle, oklch(0.68 0.17 255 / 14%), oklch(0.62 0.16 290 / 6%) 40%, transparent 70%)',
          transform: 'translate3d(-50vw, -50vh, 0)',
        }}
      />
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse-soft" />
      <div
        className="absolute -right-24 top-2/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-pulse-soft"
        style={{ animationDelay: '-3s' }}
      />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-foreground/60"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              '--drift-x': `${p.drift}px`,
              animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
              boxShadow: '0 0 8px oklch(0.68 0.17 255 / 60%)',
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
