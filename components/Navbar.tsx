'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Mini-Game', href: '#game' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = links.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-4 z-50 max-w-[86.4rem] mx-auto flex justify-between items-center px-6 py-3 bg-surface/90 backdrop-blur-sm rounded-xl border-[3px] border-on-background m-4 shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] transform -rotate-1 hover:rotate-0 transition-transform">
      {/* Logo */}
      <div className="text-2xl font-black text-on-background border-2 border-on-background px-3 py-1 rotate-[-4deg] font-[family-name:var(--font-headline-md)] italic bg-secondary-container hover-wobbly shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer">
        Ristian
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6 items-center relative">
        <span className="absolute -top-6 -left-8 text-primary material-symbols-outlined transform rotate-45 text-3xl">south_east</span>
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className={`font-[family-name:var(--font-headline-md)] font-bold uppercase tracking-tight hover-wobbly transition-all
              ${active === href.slice(1)
                ? 'text-primary underline decoration-wavy decoration-2 underline-offset-4'
                : 'text-on-surface-variant px-3 py-1'
              }`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-background"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>

        <a
          href="/resume.pdf"
          target="_blank"
          className="bg-primary text-on-primary font-[family-name:var(--font-label-sm)] px-6 py-2 border-[3px] border-on-background shadow-[4px_4px_0px_0px_rgba(29,28,23,1)] hover-wobbly transition-all rotate-3 block"
        >
          Resume
        </a>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-surface border-[3px] border-on-background rounded-xl shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] p-4 flex flex-col gap-3 md:hidden">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-headline-md)] font-bold uppercase tracking-tight text-on-background py-2 px-3 border-b border-outline-variant last:border-0"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
