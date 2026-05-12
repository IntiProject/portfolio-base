export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-20 w-full flex flex-col items-center gap-8 py-20 px-8 text-center bg-primary text-on-primary border-t-8 border-on-background relative overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg,#1d1c17 25%,transparent 25%,transparent 75%,#1d1c17 75%,#1d1c17),repeating-linear-gradient(45deg,#1d1c17 25%,transparent 25%,transparent 75%,#1d1c17 75%,#1d1c17)',
          backgroundPosition: '0 0,10px 10px',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute top-10 left-10 text-5xl material-symbols-outlined text-secondary-container animate-float">celebration</div>
      <div className="absolute bottom-20 right-20 text-6xl material-symbols-outlined text-tertiary-fixed animate-float-fast">rocket_launch</div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="bg-secondary-container text-on-secondary-container px-4 py-1 border-4 border-on-background font-(family-name:--font-headline-md) rotate-3 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover-wobbly">
          Let&apos;s Collab!
        </div>

        <h2 className="font-(family-name:--font-headline-lg) text-5xl md:text-7xl font-black mb-8 -rotate-2 bg-surface text-on-background p-4 border-4 border-on-background shadow-[12px_12px_0px_0px_rgba(253,192,3,1)]">
          Have an idea?<br />
          <span className="text-primary underline decoration-wavy">Let&apos;s build it.</span>
        </h2>

        <a
          href="mailto:hello@ristian.dev"
          className="inline-flex items-center gap-3 bg-secondary-container text-on-background font-(family-name:--font-headline-md) text-2xl px-10 py-5 border-4 border-on-background shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(29,28,23,1)] transition-all rotate-2 mb-16 hover-wobbly"
        >
          Say Hello <span className="material-symbols-outlined text-3xl animate-bounce">waving_hand</span>
        </a>

        <div className="w-full border-t-4 border-dashed border-on-background my-8" />

        <div className="text-3xl font-black italic text-on-primary font-(family-name:--font-headline-md) mb-6 bg-on-background px-4 py-1 -rotate-1">
          Ristian
        </div>

        <div className="flex gap-8 mb-8 flex-wrap justify-center">
          {['Github', 'LinkedIn', 'Dribbble'].map((name, i) => (
            <a
              key={name}
              href="#"
              className={`text-surface hover:text-secondary-container font-(family-name:--font-headline-md) text-xl transition-transform bg-on-background px-3 py-1 border-2 border-surface hover:scale-110 ${i % 2 === 0 ? 'hover:-rotate-3' : 'hover:rotate-3'}`}
            >
              {name}
            </a>
          ))}
        </div>

        <p className="font-(family-name:--font-body-md) text-lg text-primary-fixed-dim font-bold border-2 border-primary-fixed-dim px-4 py-2 border-dashed">
          © Ristian — Built with Scribbles, Coffee, &amp; Chaos
        </p>
      </div>
    </footer>
  )
}
