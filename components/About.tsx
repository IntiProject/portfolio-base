import Image from 'next/image'

export default function About() {
  return (
    <section className="pt-24 pb-10 relative flex flex-col md:flex-row items-center gap-12">

      <div className="flex-1 relative order-2 md:order-1">
        <div className="relative w-3/4 md:w-2/3 mx-auto group">
          <div className="relative aspect-3/4 w-full">
            <Image
              src="/images/tarrot-card.png"
              alt="Tarot card — The Charioteer"
              fill
              className="object-cover border-4 border-on-background shadow-[16px_16px_0px_0px_rgba(29,28,23,1)] -rotate-6 bg-surface p-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-[20px_20px_0px_0px_rgba(29,28,23,1)]"
            />
          </div>

          <svg className="absolute -top-12 -right-12 w-24 h-24 text-primary animate-spin-slow" fill="none" stroke="currentColor" strokeWidth={5} viewBox="0 0 100 100">
            <path d="M50 10 C 70 10, 90 30, 90 50 C 90 70, 70 90, 50 90 C 30 90, 10 70, 10 50 C 10 30, 30 10, 50 10 Z" strokeDasharray="15 15" />
          </svg>

          <div className="absolute -bottom-6 -left-6 bg-secondary-container border-2 border-on-background p-2 rotate-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-wobbly">
            <span className="material-symbols-outlined text-3xl">visibility</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-start gap-6 order-1 md:order-2 relative">
        <div className="absolute top-0 right-0 text-outline-variant opacity-20 text-8xl material-symbols-outlined -z-10">psychology</div>

        <div className="dymo-label px-5 py-2 rotate-3 mb-2 bg-primary text-on-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-wobbly">
          <span className="font-label-sm tracking-widest uppercase text-lg">The Philosophy</span>
        </div>

        <h2 className="font-(family-name:--font-headline-lg) text-5xl md:text-6xl text-on-background uppercase leading-tight mb-4 transform -rotate-1">
          Steady Mind,<br />
          <span className="text-secondary-container scribble-underline bg-on-background px-2">Soft Heart.</span>
        </h2>

        <div className="wobbly-border-2 border-4 border-on-background p-8 bg-surface-container-low shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] space-y-6 hover-wobbly relative">
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-error rounded-full border-2 border-on-background" />
          <p className="font-(family-name:--font-body-lg) text-on-surface-variant font-bold leading-relaxed">
            I approach development like solving a complex puzzle—with patience, logic, and a bit of creative intuition. I believe great software isn&apos;t just about clean code; it&apos;s about the humans who use it.
          </p>
          <p className="font-(family-name:--font-body-md) text-on-surface-variant">
            When I&apos;m not untangling spaghetti code, you&apos;ll find me exploring new tech stacks or probably sketching out ideas on actual paper.
          </p>
        </div>
      </div>
    </section>
  )
}
