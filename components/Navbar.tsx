'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import LangSwitcher from '@/components/LangSwitcher'

const SECTION_HREFS = ['#work', '#skills', '#about', '#game'] as const

export default function Navbar() {
  const t = useTranslations('navbar')
  const links_labels = t.raw('links') as string[]
  const links = SECTION_HREFS.map((href, i) => ({ href, label: links_labels[i] }))

  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    SECTION_HREFS.forEach((href) => {
      const el = document.getElementById(href.slice(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-4 z-50 m-4 mx-auto flex items-center">
      <nav className="flex max-w-[86.4rem] -rotate-1 transform items-center justify-between rounded-xl border-[3px] border-on-background bg-surface/90 px-6 py-3 shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] backdrop-blur-sm transition-transform hover:rotate-0">
        {/* Logo */}
        <div className="hover-wobbly mr-4 rotate-[-4deg] cursor-pointer border-2 border-on-background bg-secondary-container px-3 py-1 font-(family-name:--font-headline-md) text-2xl font-black text-on-background italic shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Ristian
        </div>

        {/* Desktop links */}
        <div className="relative hidden items-center gap-6 md:flex">
          <span className="material-symbols-outlined absolute -top-6 -left-8 rotate-45 transform text-3xl text-primary">
            south_east
          </span>
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`hover-wobbly font-(family-name:--font-headline-md) font-bold tracking-tight uppercase transition-all ${
                active === href.slice(1)
                  ? 'text-primary underline decoration-wavy decoration-2 underline-offset-4'
                  : 'px-3 py-1 text-on-surface-variant'
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
            className="text-on-background md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="absolute top-full right-0 left-0 mt-2 flex flex-col gap-3 rounded-xl border-[3px] border-on-background bg-surface p-4 shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] md:hidden">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-outline-variant px-3 py-2 font-(family-name:--font-headline-md) font-bold tracking-tight text-on-background uppercase last:border-0"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>
      <LangSwitcher />
    </div>
  )
}
