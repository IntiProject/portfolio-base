export default function Education() {
  return (
    <section className="pt-32 pb-20 relative">
      <h2 className="font-(family-name:--font-headline-md) text-4xl text-on-background uppercase rotate-3 bg-surface-container-highest px-6 py-3 border-4 border-on-background shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] inline-block mb-12 hover-wobbly">
        Education / Scrapbook
      </h2>

      <div className="flex flex-wrap gap-8 justify-center items-center">
        <div className="w-72 h-72 bg-yellow-100 border-4 border-on-background p-6 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] transform -rotate-6 relative hover:z-10 hover:scale-105 transition-transform group wobbly-border">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-red-400/50 backdrop-blur-sm -rotate-12" />
          <h3 className="font-(family-name:--font-headline-md) text-xl font-bold mb-2">B.Sc. Computer Science</h3>
          <p className="font-(family-name:--font-body-md) text-on-surface-variant">University of Awesome Tech</p>
          <p className="font-label-sm mt-4">
            Graduated with a minor in &quot;StackOverflow Copypasting&quot;
          </p>
          <div className="mt-8 border-t-2 border-dashed border-on-background pt-2 text-center text-3xl opacity-50 group-hover:opacity-100">🎓</div>
        </div>

        <div className="w-64 h-64 bg-blue-100 border-4 border-on-background p-6 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] transform rotate-4 relative hover:z-10 hover:scale-105 transition-transform group wobbly-border-2">
          <div className="absolute -top-4 right-8 w-12 h-6 bg-green-400/50 backdrop-blur-sm rotate-45" />
          <h3 className="font-(family-name:--font-headline-md) text-xl font-bold mb-2">Self-Taught Masterclass</h3>
          <p className="font-(family-name:--font-body-md) text-on-surface-variant">The Internet</p>
          <p className="font-label-sm mt-4">Countless hours of YouTube tutorials and documentation.</p>
          <div className="mt-4 border-t-2 border-dashed border-on-background pt-2 text-center text-3xl opacity-50 group-hover:opacity-100">💻</div>
        </div>
      </div>
    </section>
  )
}
