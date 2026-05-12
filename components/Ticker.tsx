const items = [
  '⚡ CAFFEINATED & READY TO CODE',
  '🔥 BUILDING MAGIC',
  '🚀 OPEN FOR FREELANCE',
  '👾 SQUASHING BUGS',
  '🎨 SKETCHING IDEAS',
  '⚡ CAFFEINATED & READY TO CODE',
  '🔥 BUILDING MAGIC',
]

export default function Ticker() {
  return (
    <div className="fixed top-0 w-full overflow-hidden bg-primary text-white py-2 z-100 border-b-[3px] border-on-background shadow-[0_4px_0px_0px_rgba(29,28,23,1)]">
      {/* Duplicate the list so the scroll looks seamless */}
      <div className="flex gap-8 animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className="font-label-sm font-semibold text-sm uppercase tracking-wide px-4">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
