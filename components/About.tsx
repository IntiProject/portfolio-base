import Image from 'next/image'

export default function About() {
  return (
    <section className="relative flex flex-col items-center gap-12 pt-24 pb-10 md:flex-row">
      <div className="relative order-2 flex-1 md:order-1">
        <div className="group relative mx-auto w-3/4 md:w-2/3">
          <div className="relative aspect-3/4 w-full">
            <Image
              src="/images/tarrot-card.png"
              alt="Tarot card — The Charioteer"
              fill
              className="-rotate-6 border-4 border-on-background bg-surface object-cover p-3 shadow-[16px_16px_0px_0px_rgba(29,28,23,1)] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0 group-hover:shadow-[20px_20px_0px_0px_rgba(29,28,23,1)]"
            />
          </div>

          <svg
            className="absolute -top-12 -right-12 h-24 w-24 animate-spin-slow text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth={5}
            viewBox="0 0 100 100"
          >
            <path
              d="M50 10 C 70 10, 90 30, 90 50 C 90 70, 70 90, 50 90 C 30 90, 10 70, 10 50 C 10 30, 30 10, 50 10 Z"
              strokeDasharray="15 15"
            />
          </svg>

          <div className="hover-wobbly absolute -bottom-6 -left-6 rotate-12 border-2 border-on-background bg-secondary-container p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined text-3xl">visibility</span>
          </div>
        </div>
      </div>

      <div className="relative order-1 flex flex-1 flex-col items-start gap-6 md:order-2">
        <div className="material-symbols-outlined absolute top-0 right-0 -z-10 text-8xl text-outline-variant opacity-20">
          psychology
        </div>

        <div className="dymo-label hover-wobbly mb-2 rotate-3 bg-primary px-5 py-2 text-on-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <span className="font-label-sm text-lg tracking-widest uppercase">The Philosophy</span>
        </div>

        <h2 className="mb-4 -rotate-1 transform font-(family-name:--font-headline-lg) text-5xl leading-tight text-on-background uppercase md:text-6xl">
          Steady Mind,
          <br />
          <span className="scribble-underline bg-on-background px-2 text-secondary-container">
            Soft Heart.
          </span>
        </h2>

        <div className="wobbly-border-2 hover-wobbly relative space-y-6 border-4 border-on-background bg-surface-container-low p-8 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)]">
          <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full border-2 border-on-background bg-error" />
          <p className="font-(family-name:--font-body-lg) leading-relaxed font-bold text-on-surface-variant">
            I approach development like solving a complex puzzle—with patience, logic, and a bit of
            creative intuition. I believe great software isn&apos;t just about clean code; it&apos;s
            about the humans who use it.
          </p>
          <p className="font-(family-name:--font-body-md) text-on-surface-variant">
            When I&apos;m not untangling spaghetti code, you&apos;ll find me exploring new tech
            stacks or probably sketching out ideas on actual paper.
          </p>
        </div>
      </div>
    </section>
  )
}
