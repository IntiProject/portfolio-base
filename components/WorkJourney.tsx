'use client'

import { useTranslations } from 'next-intl'

const journeyMeta = [
  {
    id: 1,
    dotBg: 'bg-secondary-container',
    cardBg: 'bg-surface',
    roleColor: 'text-primary',
    shape: 'wobbly-border',
    rotate: 'rotate-1',
  },
  {
    id: 2,
    dotBg: 'bg-primary',
    cardBg: 'bg-surface-bright',
    roleColor: 'text-tertiary',
    shape: 'wobbly-border-2',
    rotate: '-rotate-1',
  },
  {
    id: 3,
    dotBg: 'bg-error',
    cardBg: 'bg-surface-container-lowest',
    roleColor: 'text-secondary',
    shape: 'wobbly-border',
    rotate: 'rotate-2',
  },
]

export default function WorkJourney() {
  const t = useTranslations('workJourney')
  const journeyTexts = t.raw('items') as {
    company: string
    role: string
    period: string
    desc: string
  }[]
  const journey = journeyMeta.map((meta, i) => ({ ...meta, ...journeyTexts[i] }))

  return (
    <section className="relative pt-32" id="about">
      <div className="drawn-arrow pointer-events-none absolute -top-10 right-1/4 z-0 rotate-180 opacity-50" />

      <h2 className="hover-wobbly mb-16 inline-block -rotate-2 border-4 border-on-background bg-primary-fixed px-6 py-3 font-(family-name:--font-headline-md) text-4xl text-on-background uppercase shadow-[6px_6px_0px_0px_rgba(29,28,23,1)]">
        {t('title')}
      </h2>

      <div className="relative ml-4 space-y-16 border-l-4 border-dashed border-on-background pl-8 md:ml-10">
        {journey.map((item) => (
          <div key={item.id} className="relative">
            <div
              className={`absolute top-0 -left-12 h-8 w-8 ${item.dotBg} hover-wobbly rounded-full border-4 border-on-background`}
            />
            <div
              className={`${item.cardBg} border-4 border-on-background p-6 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] ${item.shape} transform ${item.rotate} transition-transform hover:scale-[1.02]`}
            >
              <h3 className="font-(family-name:--font-headline-md) text-2xl font-bold">
                {item.company}
              </h3>
              <p className={`font-label-sm ${item.roleColor} mb-2`}>
                {item.role} | {item.period}
              </p>
              <p className="font-(family-name:--font-body-md) text-on-surface-variant">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
