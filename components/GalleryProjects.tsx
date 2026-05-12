'use client'

import { useTranslations } from 'next-intl'

const galleryMeta = [
  { id: 1, icon: 'shopping_cart', bg: 'bg-surface', rotate: '-rotate-3' },
  { id: 2, icon: 'web', bg: 'bg-primary-fixed', rotate: 'rotate-2' },
  { id: 3, icon: 'database', bg: 'bg-secondary-fixed', rotate: '-rotate-1' },
]

export default function GalleryProjects() {
  const t = useTranslations('gallery')
  const items = t.raw('items') as { title: string; sub: string }[]
  const gallery = galleryMeta.map((meta, i) => ({ ...meta, ...items[i] }))

  return (
    <section className="relative pt-20" id="gallery">
      <h2 className="hover-wobbly mb-12 inline-block rotate-2 border-4 border-on-background bg-tertiary-fixed px-6 py-3 font-(family-name:--font-headline-md) text-4xl text-on-background uppercase shadow-[6px_6px_0px_0px_rgba(29,28,23,1)]">
        {t('title')}
      </h2>

      <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <div
            key={item.id}
            className={`wobbly-border border-4 border-on-background ${item.bg} hover-wobbly p-4 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] ${item.rotate} group transform transition-transform hover:scale-105`}
          >
            <div className="relative mb-4 flex h-40 items-center justify-center overflow-hidden border-2 border-on-background bg-surface-variant">
              <span className="material-symbols-outlined text-6xl text-outline opacity-50">
                {item.icon}
              </span>
            </div>
            <h3 className="mb-1 font-(family-name:--font-headline-md) text-xl font-bold">
              {item.title}
            </h3>
            <p className="font-label-sm text-on-surface-variant">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
