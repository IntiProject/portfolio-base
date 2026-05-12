const journey = [
  {
    company: 'PIPT Senopati',
    role: 'Senior Developer',
    period: '2021 - Present',
    desc: 'Leading frontend architecture and dropping sick beats in code reviews.',
    dotBg: 'bg-secondary-container',
    cardBg: 'bg-surface',
    roleColor: 'text-primary',
    shape: 'wobbly-border',
    rotate: 'rotate-1',
  },
  {
    company: 'JDS (Jabar Digital Service)',
    role: 'Web Developer',
    period: '2019 - 2021',
    desc: "Built public service apps that didn't crash on day one. A major win.",
    dotBg: 'bg-primary',
    cardBg: 'bg-surface-bright',
    roleColor: 'text-tertiary',
    shape: 'wobbly-border-2',
    rotate: '-rotate-1',
  },
  {
    company: 'Freelance Hustler',
    role: 'Code Mercenary',
    period: '2017 - 2019',
    desc: 'Surviving on caffeine and client approvals. Learned how to center a div the hard way.',
    dotBg: 'bg-error',
    cardBg: 'bg-surface-container-lowest',
    roleColor: 'text-secondary',
    shape: 'wobbly-border',
    rotate: 'rotate-2',
  },
]

export default function WorkJourney() {
  return (
    <section className="pt-32 relative" id="about">
      <div className="absolute -top-10 right-1/4 z-0 opacity-50 pointer-events-none drawn-arrow rotate-180" />

      <h2 className="font-(family-name:--font-headline-md) text-4xl text-on-background uppercase -rotate-2 bg-primary-fixed px-6 py-3 border-4 border-on-background shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] inline-block mb-16 hover-wobbly">
        Work Journey
      </h2>

      <div className="relative border-l-4 border-dashed border-on-background ml-4 md:ml-10 space-y-16 pl-8">
        {journey.map((item) => (
          <div key={item.company} className="relative">
            <div className={`absolute -left-12 top-0 w-8 h-8 ${item.dotBg} border-4 border-on-background rounded-full hover-wobbly`} />
            <div className={`${item.cardBg} border-4 border-on-background p-6 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] ${item.shape} transform ${item.rotate} hover:scale-[1.02] transition-transform`}>
              <h3 className="font-(family-name:--font-headline-md) text-2xl font-bold">{item.company}</h3>
              <p className={`font-label-sm ${item.roleColor} mb-2`}>
                {item.role} | {item.period}
              </p>
              <p className="font-(family-name:--font-body-md) text-on-surface-variant">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
