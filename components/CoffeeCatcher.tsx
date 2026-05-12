'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

type FallingItem = {
  id: number
  x: number
  y: number
  speed: number
  type: 'bean' | 'star' | 'cup' | 'bug'
  points: number
  icon: string
  color: string
}

const ITEM_TYPES = [
  { type: 'bean' as const, points: 5,   icon: 'eco',          color: '#4e342e', label: '+5' },
  { type: 'star' as const, points: 15,  icon: 'star_half',    color: '#5d39df', label: 'BONUS!' },
  { type: 'cup'  as const, points: 25,  icon: 'coffee_maker', color: '#fdc003', label: '+25' },
  { type: 'bug'  as const, points: -10, icon: 'bug_report',   color: '#ba1a1a', label: '-10' },
]

const GAME_WIDTH  = 600
const GAME_HEIGHT = 350
const CATCHER_W   = 96
const CATCHER_H   = 80

export default function CoffeeCatcher() {
  const nextIdRef = useRef(0)
  const [started, setStarted]     = useState(false)
  const [gameOver, setGameOver]   = useState(false)
  const [score, setScore]         = useState(0)
  const [highScore, setHighScore] = useState(1250)
  const [lives, setLives]         = useState(3)
  const [catcherX, setCatcherX]   = useState(GAME_WIDTH / 2 - CATCHER_W / 2)
  const [items, setItems]         = useState<FallingItem[]>([])
  const [pops, setPops]           = useState<{ id: number; x: number; y: number; text: string; color: string }[]>([])

  const catcherXRef  = useRef(catcherX)
  const scoreRef     = useRef(score)
  const livesRef     = useRef(lives)
  const areaRef      = useRef<HTMLDivElement>(null)
  const animFrameRef = useRef<number>(0)
  const lastSpawnRef = useRef(0)
  const keysRef      = useRef<Record<string, boolean>>({})

  catcherXRef.current = catcherX
  scoreRef.current    = score
  livesRef.current    = lives

  const endGame = useCallback(() => {
    setStarted(false)
    setGameOver(true)
    setHighScore(h => Math.max(h, scoreRef.current))
    cancelAnimationFrame(animFrameRef.current)
  }, [])

  const resetGame = useCallback(() => {
    setScore(0)
    setLives(3)
    setItems([])
    setPops([])
    setCatcherX(GAME_WIDTH / 2 - CATCHER_W / 2)
    setGameOver(false)
    setStarted(false)
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => { keysRef.current[e.key] = true }
    const up   = (e: KeyboardEvent) => { keysRef.current[e.key] = false }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!started) return
    const rect = areaRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left - CATCHER_W / 2
    setCatcherX(Math.max(0, Math.min(GAME_WIDTH - CATCHER_W, x)))
  }, [started])

  useEffect(() => {
    if (!started) return

    const loop = (ts: number) => {
      if (ts - lastSpawnRef.current > 900) {
        lastSpawnRef.current = ts
        const def = ITEM_TYPES[Math.floor(Math.random() * ITEM_TYPES.length)]
        setItems(prev => [...prev, {
          id:     nextIdRef.current++,
          x:      Math.random() * (GAME_WIDTH - 40),
          y:      -50,
          speed:  2 + Math.random() * 2 + scoreRef.current / 300,
          type:   def.type,
          points: def.points,
          icon:   def.icon,
          color:  def.color,
        }])
      }

      setCatcherX(prev => {
        let x = prev
        if (keysRef.current['ArrowLeft']  || keysRef.current['a']) x -= 8
        if (keysRef.current['ArrowRight'] || keysRef.current['d']) x += 8
        return Math.max(0, Math.min(GAME_WIDTH - CATCHER_W, x))
      })

      setItems(prev => {
        const cx = catcherXRef.current
        const cy = GAME_HEIGHT - CATCHER_H - 8
        const remaining: FallingItem[] = []

        prev.forEach(item => {
          const ny = item.y + item.speed
          const inX = item.x + 20 > cx && item.x < cx + CATCHER_W
          const inY = ny + 30 > cy && ny < cy + CATCHER_H
          if (inX && inY) {
            setScore(s => {
              const ns = Math.max(0, s + item.points)
              scoreRef.current = ns
              return ns
            })
            setPops(p => [...p, {
              id:    nextIdRef.current++,
              x:     item.x,
              y:     cy,
              text:  item.points >= 0 ? `+${item.points}` : `${item.points}`,
              color: item.points >= 0 ? '#5d39df' : '#ba1a1a',
            }])
            setTimeout(() => setPops(p => p.slice(1)), 800)
            return
          }
          if (ny > GAME_HEIGHT) {
            if (item.type !== 'bug') {
              setLives(l => {
                const nl = l - 1
                livesRef.current = nl
                if (nl <= 0) endGame()
                return nl
              })
            }
            return
          }
          remaining.push({ ...item, y: ny })
        })

        return remaining
      })

      animFrameRef.current = requestAnimationFrame(loop)
    }

    animFrameRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [started, endGame])

  return (
    <section className="pt-20 pb-10 relative" id="game">
      <div className="wobbly-border-2 border-4 border-on-background bg-secondary-fixed p-8 shadow-[12px_12px_0px_0px_rgba(29,28,23,1)] relative overflow-hidden">
        <h2 className="font-(family-name:--font-headline-lg) text-3xl text-on-background uppercase mb-2">☕ COFFEE CATCHER</h2>
        <p className="font-(family-name:--font-body-md) mb-6 font-bold">
          Catch coffee &amp; stars • Avoid bugs • Move with Mouse or Arrow Keys
        </p>

        <div
          ref={areaRef}
          className="relative bg-surface-container-highest border-4 border-on-background rounded-lg overflow-hidden cursor-crosshair shadow-inner select-none"
          style={{ width: '100%', maxWidth: GAME_WIDTH, height: GAME_HEIGHT, margin: '0 auto' }}
          onPointerMove={handlePointerMove}
        >
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px] opacity-10 pointer-events-none" />

          {!started && !gameOver && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-surface/80 backdrop-blur-sm">
              <div className="bg-secondary-container border-4 border-on-background p-6 wobbly-border-2 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] text-center -rotate-2">
                <h3 className="font-(family-name:--font-headline-md) text-2xl mb-2">Ready to Caffeinate?</h3>
                <p className="text-sm mb-4 font-label-sm">☕ +5 &nbsp;|&nbsp; ⭐ +15 &nbsp;|&nbsp; 🍵 +25 &nbsp;|&nbsp; 🐛 -10</p>
                <button
                  onClick={() => setStarted(true)}
                  className="bg-primary text-on-primary px-6 py-2 border-2 border-on-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-wobbly font-bold uppercase tracking-wider"
                >
                  Start Game
                </button>
                <p className="mt-3 font-label-sm opacity-70 text-xs">Mouse to move · Arrow Keys also work</p>
              </div>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-error/20 backdrop-blur-sm">
              <div className="bg-surface border-4 border-on-background p-6 wobbly-border shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] text-center rotate-1">
                <h3 className="font-(family-name:--font-headline-md) text-2xl mb-2 text-error">Game Over!</h3>
                <p className="font-(family-name:--font-body-md) mb-1">Score: <strong>{score}</strong></p>
                <p className="font-(family-name:--font-body-md) mb-4">Best: <strong>{highScore}</strong></p>
                <button
                  onClick={() => { resetGame(); setTimeout(() => setStarted(true), 50) }}
                  className="bg-primary text-on-primary px-6 py-2 border-2 border-on-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-wobbly font-bold uppercase"
                >
                  Play Again
                </button>
              </div>
            </div>
          )}

          {items.map(item => (
            <div
              key={item.id}
              className="absolute flex flex-col items-center pointer-events-none"
              style={{ left: item.x, top: item.y }}
            >
              <span
                className="material-symbols-outlined text-3xl bg-surface border-2 border-on-background rounded-full p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                style={{ color: item.color }}
              >
                {item.icon}
              </span>
            </div>
          ))}

          {pops.map(pop => (
            <div
              key={pop.id}
              className="absolute pointer-events-none font-black text-xl animate-bounce"
              style={{ left: pop.x, top: pop.y - 20, color: pop.color }}
            >
              {pop.text}
            </div>
          ))}

          <div
            className="absolute bottom-2 flex flex-col items-center pointer-events-none"
            style={{ left: catcherX, width: CATCHER_W }}
          >
            <div className="relative">
              <div className="w-24 h-20 bg-surface border-x-4 border-b-4 border-on-background wobbly-border-2 relative flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(29,28,23,0.2)]">
                <div className="absolute -top-2 left-0 right-0 h-4 border-4 border-on-background rounded-full bg-surface-container-highest" />
                <span className="material-symbols-outlined text-4xl text-on-background/20">water_drop</span>
              </div>
              <div className="absolute -top-8 -right-6 bg-primary text-on-primary text-[10px] font-bold px-2 py-1 border-2 border-on-background rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                RISTIAN&apos;S CUP
              </div>
            </div>
          </div>

          {started && (
            <div className="absolute top-2 right-2 flex gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} className={`text-xl ${i < lives ? 'opacity-100' : 'opacity-20'}`}>❤️</span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex justify-between items-center flex-wrap gap-3">
          <div className="flex gap-4">
            <span className="font-label-sm bg-surface px-4 py-2 border-2 border-on-background rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Score: <span className="text-primary font-black text-lg">{score}</span>
            </span>
            <span className="font-label-sm bg-on-background text-surface px-4 py-2 border-2 border-surface rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              Best: <span className="text-secondary-container font-black text-lg">{highScore}</span>
            </span>
          </div>
          <button
            onClick={resetGame}
            className="bg-error text-on-error font-label-sm px-6 py-2 border-2 border-on-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-wobbly uppercase font-bold tracking-tighter"
          >
            Reset Game
          </button>
        </div>
      </div>
    </section>
  )
}
