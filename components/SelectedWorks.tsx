'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

const projectMeta = [
  {
    id: 1,
    tags: ['Laravel', 'Vue.js'],
    badge: 'SaaS',
    badgeClass: 'bg-primary text-on-primary rotate-3',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujfsO1n64OFkCpPgAsBgjhAyuQ-cOq34HswNxqFifa77CmjbfCqDnk9m1y50_fK2WMx4hM5GJ8XW0Sle8_gsUSoGHTjpEN8gCFB7cFKnrM3ABcHXkMulWzZLV3mmAGXnRongj_C8lXVca-0qCoTNWMGpPnqXljhoUrjQWYt1BB-GpncI0o2LLthFOxMnBfh0sIzdvFEpT_cZzRFQiK3bqE6US_xCeBigScRlT5n3Hwp6gIEWpttBz7IYd25DpWdnGy_2c2SJ8QtiQ',
    wrapClass:
      'wobbly-border shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] hover:shadow-[12px_12px_0px_0px_rgba(29,28,23,1)] bg-surface -rotate-2',
    tagBg: 'bg-surface-container-high',
    emoji: null,
  },
  {
    id: 2,
    tags: ['React', 'Node.js'],
    badge: null,
    badgeClass: '',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uj3ZLA4uPZwRlIut2IRCJHNLcD1wlsj8ljiN6WQmHwMBc8-1jNtpyyDOTJBeRZBc0wO9vft90xF1P_wr6e1KhnlJoWCX_BjNMg5zB3PRUXaSaxJOcf_Tab3Fkdc0cewJ4wbyR-sDjhh6EN0Es5WLEkgiql-cnqS44KZNjvxQ-dcsKlsjiP7UbC-0PpyB9ID-HpIhk6jiWlYDxM4zyPb1gpXJ2aqKQgL5n4gsYK-cryaFXcFTbMqISXDixmfnKn-R4s1gIdvZyfriI4',
    wrapClass:
      'wobbly-border-2 shadow-[8px_8px_0px_0px_rgba(119,87,249,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(119,87,249,0.8)] bg-surface-bright rotate-3',
    tagBg: 'bg-surface',
    emoji: '🔥',
  },
  {
    id: 3,
    tags: ['Next.js', 'Tailwind'],
    badge: 'E-Commerce',
    badgeClass: 'bg-secondary-container text-on-secondary-container -rotate-3',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujbveCOeo3zMRbETu3ikdiYJFEz6cfepWC2xr1xF39bQXP2pDWOOCnsqKsVIS_TPjqxen9lk_bzYWWClRW4GAG1MRx7GFmPLnXb_9cuOo_FjILTCWYaz4qQPSEXo-mUymgpOI7xpTgFiAt4D1_UroeD8qDA1PP9ic09LPtCMG-qHkyRYx3-PB-ga6APFL5ht65RD0c0XyyviCXVs1IuAE79mRtc01b8PCII71mp8kDd68obIz_KG4ADLINIU_5-zB8VWiWhWt0rYr8',
    wrapClass:
      'wobbly-border shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] hover:shadow-[12px_12px_0px_0px_rgba(29,28,23,1)] bg-surface-container-lowest -rotate-1',
    tagBg: 'bg-surface-container',
    emoji: null,
  },
]

export default function SelectedWorks() {
  const t = useTranslations('selectedWorks')
  const projectTexts = t.raw('projects') as { title: string; desc: string }[]
  const projects = projectMeta.map((meta, i) => ({ ...meta, ...projectTexts[i] }))

  return (
    <section className="relative pt-10" id="work">
      <div className="material-symbols-outlined pointer-events-none absolute top-20 -right-10 rotate-12 text-7xl text-outline-variant opacity-10">
        <span>auto_awesome</span>
      </div>

      <div className="relative mb-16 flex items-center gap-4">
        <div className="material-symbols-outlined absolute -left-10 -rotate-12 text-6xl text-outline-variant opacity-50">
          brush
        </div>
        <h2 className="hover-wobbly z-10 inline-block -rotate-3 border-4 border-on-background bg-secondary-container px-6 py-3 font-(family-name:--font-headline-md) text-4xl text-on-background uppercase shadow-[6px_6px_0px_0px_rgba(29,28,23,1)]">
          {t('title')}
        </h2>
        <div className="mt-2 grow border-t-4 border-dashed border-on-background" />
      </div>

      <div className="relative z-10 mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className={`group hover-wobbly overflow-hidden border-4 border-on-background p-5 transition-all duration-300 ${p.wrapClass}`}
          >
            {p.emoji && (
              <div className="absolute -top-4 -left-4 z-10 rounded-full border-2 border-on-background bg-secondary-container p-2 text-4xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {p.emoji}
              </div>
            )}
            <div className="relative mb-4 h-56 w-full overflow-hidden rounded-lg border-2 border-on-background">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              {p.badge && (
                <div
                  className={`absolute top-2 right-2 z-10 border-2 border-on-background px-3 py-1 font-label-sm text-sm shadow-[2px_2px_0px_0px_rgba(29,28,23,1)] ${p.badgeClass}`}
                >
                  {p.badge}
                </div>
              )}
            </div>
            <h3 className="mb-2 font-(family-name:--font-headline-md) text-2xl font-bold text-on-background">
              {p.title}
            </h3>
            <p className="mb-4 font-(family-name:--font-body-md) text-base text-on-surface-variant">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-1 ${p.tagBg} border-2 border-on-background font-label-sm text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
