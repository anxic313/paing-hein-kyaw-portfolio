'use client'

import { useRef, type ReactNode, type PointerEvent } from 'react'
import { cn } from '@/lib/utils'

type GlassCardProps = {
  children: ReactNode
  className?: string
  tilt?: boolean
  as?: 'div' | 'article' | 'li'
}

export function GlassCard({ children, className, tilt = true, as = 'div' }: GlassCardProps) {
  const ref = useRef<HTMLElement>(null)
  const Tag = as

  const handleMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el || !tilt || e.pointerType !== 'mouse') return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--mx', `${x * 100}%`)
    el.style.setProperty('--my', `${y * 100}%`)
    el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 6}deg) rotateY(${(x - 0.5) * 6}deg) translateY(-4px)`
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
  }

  return (
    <Tag
      ref={ref as never}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn(
        'glass glow-border group rounded-2xl transition-[transform,box-shadow] duration-300 ease-out will-change-transform',
        'hover:shadow-[0_24px_60px_-20px_oklch(0.68_0.17_255_/_35%)] focus-within:shadow-[0_24px_60px_-20px_oklch(0.68_0.17_255_/_35%)]',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), oklch(0.96 0.01 250 / 8%), transparent 45%)',
        }}
      />
      <div className="relative">{children}</div>
    </Tag>
  )
}
