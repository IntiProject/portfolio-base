'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useTransition } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { TranslateIcon } from '@hugeicons/core-free-icons'

const LANGS = {
  en: { flag: '🇺🇸', code: 'EN' },
  id: { flag: '🇮🇩', code: 'ID' },
}

export default function LangSwitcher() {
  const locale = useLocale() as 'en' | 'id'
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const active = LANGS[locale]
  const inactive = LANGS[locale === 'en' ? 'id' : 'en']

  const toggle = () => {
    const next = locale === 'en' ? 'id' : 'en'
    const doSwitch = () => startTransition(() => router.replace(pathname, { locale: next }))

    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      document.startViewTransition(doSwitch)
    } else {
      doSwitch()
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      aria-label="Toggle language"
      className="hover-wobbly ml-5 flex -rotate-1 cursor-pointer items-center gap-2 rounded-xl border-[3px] border-on-background bg-surface/90 py-1.5 pr-2 pl-3 shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] backdrop-blur-sm transition-transform hover:rotate-0 disabled:opacity-60"
    >
      <HugeiconsIcon icon={TranslateIcon} size={16} className="shrink-0 text-on-surface-variant" />

      {/* Inactive language — muted hint */}
      <span className="text-xs text-on-surface-variant opacity-60 select-none">
        {inactive.flag}
      </span>

      <span className="text-xs text-on-surface-variant opacity-40 select-none">→</span>

      {/* Active language — yellow badge */}
      <span className="flex items-center gap-1 rounded-lg border-2 border-on-background bg-secondary-container px-2 py-0.5 font-label-sm font-bold text-on-background shadow-[2px_2px_0px_0px_rgba(29,28,23,1)] select-none">
        {active.flag}
        <span className="text-xs">{active.code}</span>
      </span>
    </button>
  )
}
