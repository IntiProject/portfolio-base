export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-20 flex w-full flex-col items-center gap-8 overflow-hidden border-t-8 border-on-background bg-primary px-8 py-20 text-center text-on-primary"
    >
      <div
        className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg,#1d1c17 25%,transparent 25%,transparent 75%,#1d1c17 75%,#1d1c17),repeating-linear-gradient(45deg,#1d1c17 25%,transparent 25%,transparent 75%,#1d1c17 75%,#1d1c17)',
          backgroundPosition: '0 0,10px 10px',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="material-symbols-outlined absolute top-10 left-10 animate-float text-5xl text-secondary-container">
        celebration
      </div>
      <div className="material-symbols-outlined absolute right-20 bottom-20 animate-float-fast text-6xl text-tertiary-fixed">
        rocket_launch
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <div className="hover-wobbly mb-6 rotate-3 border-4 border-on-background bg-secondary-container px-4 py-1 font-(family-name:--font-headline-md) text-on-secondary-container shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Let&apos;s Collab!
        </div>

        <h2 className="mb-8 -rotate-2 border-4 border-on-background bg-surface p-4 font-(family-name:--font-headline-lg) text-5xl font-black text-on-background shadow-[12px_12px_0px_0px_rgba(253,192,3,1)] md:text-7xl">
          Have an idea?
          <br />
          <span className="text-primary underline decoration-wavy">Let&apos;s build it.</span>
        </h2>

        <a
          href="mailto:hello@ristian.dev"
          className="hover-wobbly mb-16 inline-flex rotate-2 items-center gap-3 border-4 border-on-background bg-secondary-container px-10 py-5 font-(family-name:--font-headline-md) text-2xl text-on-background shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(29,28,23,1)]"
        >
          Say Hello{' '}
          <span className="material-symbols-outlined animate-bounce text-3xl">waving_hand</span>
        </a>

        <div className="my-8 w-full border-t-4 border-dashed border-on-background" />

        <div className="mb-6 -rotate-1 bg-on-background px-4 py-1 font-(family-name:--font-headline-md) text-3xl font-black text-on-primary italic">
          Ristian
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-8">
          {['Github', 'LinkedIn', 'Dribbble'].map((name, i) => (
            <a
              key={name}
              href="#"
              className={`border-2 border-surface bg-on-background px-3 py-1 font-(family-name:--font-headline-md) text-xl text-surface transition-transform hover:scale-110 hover:text-secondary-container ${i % 2 === 0 ? 'hover:-rotate-3' : 'hover:rotate-3'}`}
            >
              {name}
            </a>
          ))}
        </div>

        <p className="border-2 border-dashed border-primary-fixed-dim px-4 py-2 font-(family-name:--font-body-md) text-lg font-bold text-primary-fixed-dim">
          © Ristian — Built with Scribbles, Coffee, &amp; Chaos
        </p>
      </div>
    </footer>
  )
}
