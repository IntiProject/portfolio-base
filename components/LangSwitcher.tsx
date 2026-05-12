'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useTransition, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'

const LANGS = {
  en: { countryCode: 'US', code: 'EN' },
  id: { countryCode: 'ID', code: 'ID' },
}

export default function LangSwitcher() {
  const locale = useLocale() as 'en' | 'id'
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [flipped, setFlipped] = useState(locale === 'id')

  const toggle = () => {
    if (isPending) return
    setFlipped((f) => !f)
    const next = locale === 'en' ? 'id' : 'en'
    startTransition(() => router.replace(pathname, { locale: next }))
  }

  return (
    <div
      onClick={toggle}
      role="button"
      aria-label="Toggle language"
      aria-pressed={flipped}
      className="hover-wobbly ml-5 h-14 w-14 -rotate-1 cursor-pointer transition-transform hover:rotate-0"
      style={{ perspective: '600px' }}
    >
      <div
        className="relative h-full w-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front — EN */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-xl border-[3px] border-on-background bg-surface/90 shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] backdrop-blur-sm"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <ReactCountryFlag
            countryCode={LANGS.en.countryCode}
            svg
            style={{ width: '1.75rem', height: '1.75rem', borderRadius: '4px' }}
            title="English"
          />
          <span className="font-label-sm text-[10px] font-bold tracking-widest text-on-background">
            {LANGS.en.code}
          </span>
        </div>

        {/* Back — ID */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-xl border-[3px] border-on-background bg-secondary-container shadow-[6px_6px_0px_0px_rgba(29,28,23,1)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <ReactCountryFlag
            countryCode={LANGS.id.countryCode}
            svg
            style={{ width: '1.75rem', height: '1.75rem', borderRadius: '4px' }}
            title="Indonesia"
          />
          <span className="font-label-sm text-[10px] font-bold tracking-widest text-on-background">
            {LANGS.id.code}
          </span>
        </div>
      </div>
    </div>
  )
}
