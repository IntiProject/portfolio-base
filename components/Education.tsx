'use client'

import { useTranslations } from 'next-intl'

export default function Education() {
  const t = useTranslations('education')

  return (
    <section className="relative pt-32 pb-20">
      <h2 className="hover-wobbly mb-12 inline-block rotate-3 border-4 border-on-background bg-surface-container-highest px-6 py-3 font-(family-name:--font-headline-md) text-4xl text-on-background uppercase shadow-[6px_6px_0px_0px_rgba(29,28,23,1)]">
        {t('title')}
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="group wobbly-border relative h-72 w-72 -rotate-6 transform border-4 border-on-background bg-yellow-100 p-6 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] transition-transform hover:z-10 hover:scale-105">
          <div className="absolute -top-4 left-1/2 h-8 w-16 -translate-x-1/2 -rotate-12 bg-red-400/50 backdrop-blur-sm" />
          <h3 className="mb-2 font-(family-name:--font-headline-md) text-xl font-bold">
            {t('degreeTitle')}
          </h3>
          <p className="font-(family-name:--font-body-md) text-on-surface-variant">
            {t('degreeSchool')}
          </p>
          <p className="mt-4 font-label-sm">{t('degreeNote')}</p>
          <div className="mt-8 border-t-2 border-dashed border-on-background pt-2 text-center text-3xl opacity-50 group-hover:opacity-100">
            🎓
          </div>
        </div>

        <div className="group wobbly-border-2 relative h-64 w-64 rotate-4 transform border-4 border-on-background bg-blue-100 p-6 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] transition-transform hover:z-10 hover:scale-105">
          <div className="absolute -top-4 right-8 h-6 w-12 rotate-45 bg-green-400/50 backdrop-blur-sm" />
          <h3 className="mb-2 font-(family-name:--font-headline-md) text-xl font-bold">
            {t('selfTitle')}
          </h3>
          <p className="font-(family-name:--font-body-md) text-on-surface-variant">
            {t('selfSchool')}
          </p>
          <p className="mt-4 font-label-sm">{t('selfNote')}</p>
          <div className="mt-4 border-t-2 border-dashed border-on-background pt-2 text-center text-3xl opacity-50 group-hover:opacity-100">
            💻
          </div>
        </div>
      </div>
    </section>
  )
}
