'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useTransition } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { TranslateIcon } from '@hugeicons/core-free-icons'

export default function LangSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const toggle = () => {
    const next = locale === 'en' ? 'id' : 'en'
    startTransition(() => {
      router.replace(pathname, { locale: next })
    })
  }

  return (
    <button
      onClick={toggle}
      disabled={isPending}
      aria-label="Toggle language"
      className="hover-wobbly text-md ml-5 flex h-10 -rotate-1 transform cursor-pointer rounded-xl border-[3px] border-on-background bg-surface/90 px-3 py-1 font-label-sm shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] backdrop-blur-sm transition-transform hover:rotate-0"
    >
      <HugeiconsIcon icon={TranslateIcon} className="mr-3" />
      {locale === 'en' ? '🇮🇩 ID' : '🇺🇸 EN'}
    </button>
  )
}
