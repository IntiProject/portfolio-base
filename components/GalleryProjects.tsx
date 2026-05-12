const gallery = [
  { icon: 'shopping_cart', title: 'POS System', sub: 'Vue & Node.js', bg: 'bg-surface', rotate: '-rotate-3' },
  { icon: 'web', title: 'Company Profile', sub: 'WordPress Theme', bg: 'bg-primary-fixed', rotate: 'rotate-2' },
  { icon: 'database', title: 'Inventory API', sub: 'Laravel & PostgreSQL', bg: 'bg-secondary-fixed', rotate: '-rotate-1' },
]

export default function GalleryProjects() {
  return (
    <section className="pt-20 relative" id="gallery">
      <h2 className="font-(family-name:--font-headline-md) text-4xl text-on-background uppercase rotate-2 bg-tertiary-fixed px-6 py-3 border-4 border-on-background shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] inline-block mb-12 hover-wobbly">
        More Doodles &amp; Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {gallery.map((item) => (
          <div key={item.title} className={`wobbly-border border-4 border-on-background ${item.bg} p-4 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] hover-wobbly ${item.rotate} transform hover:scale-105 transition-transform group`}>
            <div className="h-40 border-2 border-on-background bg-surface-variant overflow-hidden mb-4 relative flex items-center justify-center">
              <span className="text-6xl material-symbols-outlined text-outline opacity-50">{item.icon}</span>
            </div>
            <h3 className="font-(family-name:--font-headline-md) text-xl font-bold mb-1">{item.title}</h3>
            <p className="font-label-sm text-on-surface-variant">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
