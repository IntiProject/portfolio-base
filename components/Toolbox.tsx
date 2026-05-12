'use client'

import { useRef, useState, useCallback } from 'react'

type Sticker = {
  id: number
  label: string
  x: number
  y: number
  rotate: number
  bg: string
  text: string
  size: string
}

const INITIAL_STICKERS: Sticker[] = [
  { id: 1, label: 'Laravel',      x: 60,  y: 30,  rotate: 6,   bg: 'bg-surface',              text: 'text-on-background',             size: 'text-xl' },
  { id: 2, label: 'React',        x: 200, y: 120, rotate: -12, bg: 'bg-surface',              text: 'text-on-background',             size: 'text-xl' },
  { id: 3, label: 'Next.js',      x: 340, y: 60,  rotate: 3,   bg: 'bg-primary',              text: 'text-on-primary',               size: 'text-2xl' },
  { id: 4, label: 'Tailwind CSS', x: 440, y: 150, rotate: -6,  bg: 'bg-secondary-container',  text: 'text-on-secondary-container',   size: 'text-xl' },
  { id: 5, label: 'Node.js',      x: 80,  y: 180, rotate: 12,  bg: 'bg-surface',              text: 'text-on-background',             size: 'text-xl' },
  { id: 6, label: 'Vue.js',       x: 320, y: 200, rotate: -8,  bg: 'bg-tertiary-fixed',       text: 'text-on-tertiary-fixed',        size: 'text-xl' },
  { id: 7, label: 'PostgreSQL',   x: 540, y: 80,  rotate: 4,   bg: 'bg-surface',              text: 'text-on-background',             size: 'text-xl' },
]

export default function Toolbox() {
  const [stickers, setStickers] = useState<Sticker[]>(INITIAL_STICKERS)
  const dragging = useRef<{ id: number; ox: number; oy: number } | null>(null)
  const boardRef = useRef<HTMLDivElement>(null)
  const stickersRef = useRef(stickers)
  stickersRef.current = stickers

  const onPointerDown = useCallback((e: React.PointerEvent, id: number) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    const sticker = stickersRef.current.find(s => s.id === id)
    if (!sticker) return
    dragging.current = { id, ox: e.clientX - sticker.x, oy: e.clientY - sticker.y }
    setStickers(prev => {
      const target = prev.find(s => s.id === id)!
      return [...prev.filter(s => s.id !== id), target]
    })
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current || !boardRef.current) return
    const rect = boardRef.current.getBoundingClientRect()
    const { id, ox, oy } = dragging.current
    setStickers(prev => prev.map(s => {
      if (s.id !== id) return s
      return {
        ...s,
        x: Math.max(0, Math.min(rect.width - 120, e.clientX - ox)),
        y: Math.max(0, Math.min(rect.height - 60, e.clientY - oy)),
      }
    }))
  }, [])

  const onPointerUp = useCallback(() => {
    dragging.current = null
  }, [])

  return (
    <section className="pt-32 relative" id="skills">
      <div className="absolute -top-10 left-1/4 -translate-x-1/2 drawn-arrow z-0 opacity-50 rotate-90" />

      <h2 className="font-(family-name:--font-headline-md) text-5xl text-on-background uppercase text-center mb-16 relative">
        <span className="scribble-underline bg-secondary-container px-4 py-1 border-2 border-on-background transform rotate-2 inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-wobbly">
          My Toolbox
        </span>
        <span className="absolute -top-6 right-1/4 text-4xl material-symbols-outlined text-primary rotate-12">handyman</span>
      </h2>

      <div className="relative w-full bg-surface-container-highest wobbly-border-2 border-8 border-on-background p-4 shadow-[12px_12px_0px_0px_rgba(29,28,23,0.3)] overflow-hidden" style={{ minHeight: 320 }}>
        <p className="text-center font-label-sm mb-2 relative z-10 bg-surface inline-block border-2 border-on-background px-4 py-1 -rotate-1 text-sm mx-auto w-fit">
          Drag the stickers around the workbench!
        </p>

        <div
          ref={boardRef}
          className="relative w-full touch-none"
          style={{ height: 280 }}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {stickers.map(s => (
            <div
              key={s.id}
              className={`absolute ${s.bg} ${s.text} px-6 py-3 border-4 border-on-background font-(family-name:--font-headline-md) ${s.size} shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] hover-wobbly cursor-grab active:cursor-grabbing select-none`}
              style={{ left: s.x, top: s.y, transform: `rotate(${s.rotate}deg)`, userSelect: 'none' }}
              onPointerDown={e => onPointerDown(e, s.id)}
            >
              {s.label}
            </div>
          ))}

          <div className="absolute bottom-4 right-6 text-6xl material-symbols-outlined opacity-30 -rotate-45 pointer-events-none">construction</div>
          <div className="absolute top-4 left-8 text-4xl material-symbols-outlined opacity-20 rotate-12 pointer-events-none">coffee</div>
        </div>
      </div>
    </section>
  )
}
