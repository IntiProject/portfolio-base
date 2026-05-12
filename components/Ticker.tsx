'use client'

import { useTranslations } from 'next-intl'

export default function Ticker() {
  const t = useTranslations('ticker')
  const items = t.raw('items') as string[]

  return (
    <div className="fixed top-0 z-100 w-full overflow-hidden border-b-[3px] border-on-background bg-primary py-2 text-white shadow-[0_4px_0px_0px_rgba(29,28,23,1)]">
      <div className="flex animate-ticker gap-8 whitespace-nowrap" style={{ width: 'max-content' }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="px-4 font-label-sm text-sm font-semibold tracking-wide uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
