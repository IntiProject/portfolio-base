import Image from 'next/image'

const projects = [
  {
    title: 'Invite+',
    desc: 'Digital invitation creator platform. Making events easier to manage.',
    tags: ['Laravel', 'Vue.js'],
    badge: 'SaaS',
    badgeClass: 'bg-primary text-on-primary rotate-3',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujfsO1n64OFkCpPgAsBgjhAyuQ-cOq34HswNxqFifa77CmjbfCqDnk9m1y50_fK2WMx4hM5GJ8XW0Sle8_gsUSoGHTjpEN8gCFB7cFKnrM3ABcHXkMulWzZLV3mmAGXnRongj_C8lXVca-0qCoTNWMGpPnqXljhoUrjQWYt1BB-GpncI0o2LLthFOxMnBfh0sIzdvFEpT_cZzRFQiK3bqE6US_xCeBigScRlT5n3Hwp6gIEWpttBz7IYd25DpWdnGy_2c2SJ8QtiQ',
    wrapClass: 'wobbly-border shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] hover:shadow-[12px_12px_0px_0px_rgba(29,28,23,1)] bg-surface -rotate-2',
    tagBg: 'bg-surface-container-high',
    emoji: null,
  },
  {
    title: 'Wargame Sesko TNI',
    desc: 'Tactical simulation platform. Complex state management.',
    tags: ['React', 'Node.js'],
    badge: null,
    badgeClass: '',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0uj3ZLA4uPZwRlIut2IRCJHNLcD1wlsj8ljiN6WQmHwMBc8-1jNtpyyDOTJBeRZBc0wO9vft90xF1P_wr6e1KhnlJoWCX_BjNMg5zB3PRUXaSaxJOcf_Tab3Fkdc0cewJ4wbyR-sDjhh6EN0Es5WLEkgiql-cnqS44KZNjvxQ-dcsKlsjiP7UbC-0PpyB9ID-HpIhk6jiWlYDxM4zyPb1gpXJ2aqKQgL5n4gsYK-cryaFXcFTbMqISXDixmfnKn-R4s1gIdvZyfriI4',
    wrapClass: 'wobbly-border-2 shadow-[8px_8px_0px_0px_rgba(119,87,249,0.8)] hover:shadow-[12px_12px_0px_0px_rgba(119,87,249,0.8)] bg-surface-bright rotate-3',
    tagBg: 'bg-surface',
    emoji: '🔥',
  },
  {
    title: 'Tokoports',
    desc: 'Custom e-commerce solution with integrated payments.',
    tags: ['Next.js', 'Tailwind'],
    badge: 'E-Commerce',
    badgeClass: 'bg-secondary-container text-on-secondary-container -rotate-3',
    img: 'https://lh3.googleusercontent.com/aida/ADBb0ujbveCOeo3zMRbETu3ikdiYJFEz6cfepWC2xr1xF39bQXP2pDWOOCnsqKsVIS_TPjqxen9lk_bzYWWClRW4GAG1MRx7GFmPLnXb_9cuOo_FjILTCWYaz4qQPSEXo-mUymgpOI7xpTgFiAt4D1_UroeD8qDA1PP9ic09LPtCMG-qHkyRYx3-PB-ga6APFL5ht65RD0c0XyyviCXVs1IuAE79mRtc01b8PCII71mp8kDd68obIz_KG4ADLINIU_5-zB8VWiWhWt0rYr8',
    wrapClass: 'wobbly-border shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] hover:shadow-[12px_12px_0px_0px_rgba(29,28,23,1)] bg-surface-container-lowest -rotate-1',
    tagBg: 'bg-surface-container',
    emoji: null,
  },
]

export default function SelectedWorks() {
  return (
    <section className="pt-10 relative" id="work">
      <div className="absolute -right-10 top-20 text-7xl material-symbols-outlined text-outline-variant opacity-10 pointer-events-none rotate-12">
        <span>auto_awesome</span>
      </div>

      <div className="flex items-center gap-4 mb-16 relative">
        <div className="absolute -left-10 text-6xl text-outline-variant material-symbols-outlined opacity-50 -rotate-12">brush</div>
        <h2 className="font-(family-name:--font-headline-md) text-4xl text-on-background uppercase -rotate-3 bg-secondary-container px-6 py-3 border-4 border-on-background shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] inline-block z-10 hover-wobbly">
          Selected Works
        </h2>
        <div className="grow border-t-4 border-dashed border-on-background mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 relative z-10">
        {projects.map((p) => (
          <div key={p.title} className={`group border-4 border-on-background overflow-hidden transition-all duration-300 p-5 hover-wobbly ${p.wrapClass}`}>
            {p.emoji && (
              <div className="absolute -top-4 -left-4 text-4xl bg-secondary-container border-2 border-on-background rounded-full p-2 z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {p.emoji}
              </div>
            )}
            <div className="relative h-56 w-full border-2 border-on-background overflow-hidden mb-4 rounded-lg">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              {p.badge && (
                <div className={`absolute top-2 right-2 px-3 py-1 font-label-sm border-2 border-on-background shadow-[2px_2px_0px_0px_rgba(29,28,23,1)] text-sm z-10 ${p.badgeClass}`}>
                  {p.badge}
                </div>
              )}
            </div>
            <h3 className="font-(family-name:--font-headline-md) text-2xl text-on-background font-bold mb-2">{p.title}</h3>
            <p className="font-(family-name:--font-body-md) text-on-surface-variant mb-4 text-base">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(tag => (
                <span key={tag} className={`px-2 py-1 ${p.tagBg} border-2 border-on-background text-xs font-label-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
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
