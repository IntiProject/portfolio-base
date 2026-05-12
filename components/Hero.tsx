import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-6rem)] overflow-hidden flex flex-col items-center justify-center w-full">

      {/* Main Yellow Container */}
      <div className="relative w-full max-w-6xl mx-auto bg-secondary-container border-8 border-on-background rounded-4xl p-6 md:p-10 shadow-[16px_16px_0px_0px_rgba(29,28,23,1)] mt-20 z-10 flex flex-col md:flex-row items-center justify-between gap-6 wobbly-border-2">

        {/* Background text LEFT — anchored precisely to container top-left */}
        <div className="absolute top-[-9.7rem] left-0 pointer-events-none z-0">
          <p className="font-(family-name:--font-headline-lg) uppercase leading-none">
            <span
              className="block text-[2rem] md:text-[2.6rem] italic -rotate-2 font-black tracking-widest"
              style={{ WebkitTextStroke: '1px rgba(29,28,23,0.5)', color: 'transparent' }}
            >
              FULL STACK
            </span>
            <span
              className="block text-[5.2rem] md:text-[6.3rem] font-black text-on-background"
              style={{ letterSpacing: '-0.05em', lineHeight: 1 }}
            >
              DEVELOPER
            </span>
          </p>
        </div>

        {/* Background text RIGHT — anchored precisely to container top-right */}
        <div className="absolute top-[-8.8rem] right-0 pointer-events-none z-0 text-right">
          <p className="font-(family-name:--font-headline-lg) uppercase leading-none">
            <span
              className="block text-[2rem] md:text-[2.6rem] italic rotate-2 font-black tracking-widest"
              style={{ WebkitTextStroke: '1px rgba(29,28,23,0.5)', color: 'transparent' }}
            >
              KEEP THE
            </span>
            <span
              className="block text-[5.2rem] md:text-[6.3rem] font-black text-on-background"
              style={{ letterSpacing: '-0.05em', lineHeight: 1 }}
            >
              MAGIC
            </span>
          </p>
        </div>

        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start gap-4 relative z-20 max-w-md">
          <div className="font-label-sm tracking-widest text-on-secondary-container uppercase font-bold opacity-80 mix-blend-color-burn text-xs">
            AVAILABLE FOR WORK
          </div>
          <h2 className="font-(family-name:--font-headline-md) text-4xl md:text-5xl text-on-background leading-tight font-black">
            Where Code Meets Your Vision
          </h2>
          <p className="font-(family-name:--font-body-lg) text-on-secondary-fixed-variant opacity-90 max-w-sm text-sm md:text-base">
            Step into the future of web development today. Crafting digital experiences with precision and creativity.
          </p>
          <a
            href="#work"
            className="bg-primary text-on-primary font-label-sm px-6 py-3 border-4 border-on-background rounded-full shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] hover-wobbly transition-all flex items-center gap-3 mt-2 group font-bold"
          >
            View Projects
            <span className="material-symbols-outlined bg-surface text-on-background rounded-full p-1 group-hover:translate-x-1 transition-transform border-2 border-on-background text-sm">
              arrow_forward
            </span>
          </a>

          {/* Rating Badge */}
          <div className="bg-secondary-fixed border-4 border-on-background p-3 flex flex-col gap-2 shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] -rotate-2 hover-wobbly w-50 wobbly-border">
            <div className="flex -space-x-3">
              <div className="w-8 h-8 rounded-full border-2 border-on-background bg-linear-to-br from-pink-400 to-orange-300" />
              <div className="w-8 h-8 rounded-full border-2 border-on-background bg-linear-to-br from-cyan-400 to-blue-300" />
              <div className="w-8 h-8 rounded-full border-2 border-on-background bg-linear-to-br from-green-400 to-teal-300" />
              <div className="w-8 h-8 rounded-full border-2 border-on-background bg-linear-to-br from-purple-400 to-pink-300" />
            </div>
            <div className="font-label-sm font-bold text-xs leading-tight flex items-start gap-1 text-on-background">
              <span className="material-symbols-outlined text-primary text-sm">star</span>
              Rated 5 Stars by<br />Happy Clients
            </div>
          </div>
        </div>

        {/* Center Character Image — extends above container top border */}
        <div className="absolute bottom-0 left-[55%] -translate-x-1/2 w-85 md:w-131.75 z-30 pointer-events-none">
          <Image
            src="/images/hero-avatar.png"
            alt="Developer Portrait"
            width={544}
            height={544}
            className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col items-end gap-6 relative z-20">

          {/* Feature Icons */}
          <div className="flex gap-6 text-center pt-4">
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-2xl text-on-background">code</span>
              <span className="font-label-sm text-[10px] font-bold uppercase w-14 text-on-background mix-blend-color-burn">CLEAN CODE</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-2xl text-on-background">design_services</span>
              <span className="font-label-sm text-[10px] font-bold uppercase w-14 text-on-background mix-blend-color-burn">UNIQUE DESIGNS</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-2xl text-on-background">speed</span>
              <span className="font-label-sm text-[10px] font-bold uppercase w-14 text-on-background mix-blend-color-burn">FAST DELIVERY</span>
            </div>
          </div>

          <div className="font-label-sm font-bold opacity-80 mix-blend-color-burn text-xs">
            Featured Stack
          </div>

          {/* Featured Stack Card */}
          <div className="bg-surface border-4 border-on-background rounded-2xl p-3 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)] rotate-2 hover-wobbly max-w-60 w-full wobbly-border-2">
            <div className="w-full bg-on-background rounded-xl overflow-hidden mb-3 border-4 border-on-background aspect-square relative">
              <Image
                src="https://lh3.googleusercontent.com/aida/ADBb0ujgXzN_-dwMDc2bQVc_okpdwR8MD2ESGY7iCo0ZvDfpkD40wMP-2pvCBiD4_P03T0P86D_hL7XEdgGPBudVcAz5Fcx4pcW_Xx_-wrj06SLDaVH64x-Js9gVzRAXV41SgyKdoSkzFTtbYpAbDl_Rv1nq9AwobDgZia4FHzWQvmmXfcShM44SBVWySjqT8yun7y2IeNWMVAmEyY2nF7XQ9LFiaotIEjg3mRaeMx2GN6dCFAdGIxR1h1S9PeSgMu-eLcwbO4bSWb8KsPs"
                alt="Next.js Vanguard"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="font-(family-name:--font-headline-md) text-base font-bold text-center mb-1">
              Next.js Vanguard
            </h3>
            <p className="font-label-sm text-[10px] text-center text-on-surface-variant mb-3">
              Unmatched performance.
            </p>
            <button className="w-full bg-primary text-on-primary font-label-sm px-3 py-2 border-4 border-on-background rounded-full hover-wobbly shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 font-bold text-xs">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              Ready
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
