import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center overflow-hidden">
      {/* Main Yellow Container */}
      <div className="wobbly-border-2 relative z-10 mx-auto mt-20 flex w-full max-w-6xl flex-col items-center justify-between gap-6 rounded-4xl border-8 border-on-background bg-secondary-container p-6 shadow-[16px_16px_0px_0px_rgba(29,28,23,1)] md:flex-row md:p-10">
        {/* Background text LEFT — anchored precisely to container top-left */}
        <div className="pointer-events-none absolute top-[-9.7rem] left-0 z-0">
          <p className="font-(family-name:--font-headline-lg) leading-none uppercase">
            <span
              className="block -rotate-2 text-[2rem] font-black tracking-widest italic md:text-[2.6rem]"
              style={{ WebkitTextStroke: '1px rgba(29,28,23,0.5)', color: 'transparent' }}
            >
              FULL STACK
            </span>
            <span
              className="block text-[5.2rem] font-black text-on-background md:text-[6.3rem]"
              style={{ letterSpacing: '-0.05em', lineHeight: 1 }}
            >
              DEVELOPER
            </span>
          </p>
        </div>

        {/* Background text RIGHT — anchored precisely to container top-right */}
        <div className="pointer-events-none absolute top-[-8.8rem] right-0 z-0 text-right">
          <p className="font-(family-name:--font-headline-lg) leading-none uppercase">
            <span
              className="block rotate-2 text-[2rem] font-black tracking-widest italic md:text-[2.6rem]"
              style={{ WebkitTextStroke: '1px rgba(29,28,23,0.5)', color: 'transparent' }}
            >
              KEEP THE
            </span>
            <span
              className="block text-[5.2rem] font-black text-on-background md:text-[6.3rem]"
              style={{ letterSpacing: '-0.05em', lineHeight: 1 }}
            >
              MAGIC
            </span>
          </p>
        </div>

        {/* Left Content */}
        <div className="relative z-20 flex max-w-md flex-1 flex-col items-start gap-4">
          <div className="font-label-sm text-xs font-bold tracking-widest text-on-secondary-container uppercase opacity-80 mix-blend-color-burn">
            AVAILABLE FOR WORK
          </div>
          <h2 className="font-(family-name:--font-headline-md) text-4xl leading-tight font-black text-on-background md:text-5xl">
            Where Code Meets Your Vision
          </h2>
          <p className="max-w-sm font-(family-name:--font-body-lg) text-sm text-on-secondary-fixed-variant opacity-90 md:text-base">
            Step into the future of web development today. Crafting digital experiences with
            precision and creativity.
          </p>
          <a
            href="#work"
            className="hover-wobbly group mt-2 flex items-center gap-3 rounded-full border-4 border-on-background bg-primary px-6 py-3 font-label-sm font-bold text-on-primary shadow-[6px_6px_0px_0px_rgba(29,28,23,1)] transition-all"
          >
            View Projects
            <span className="material-symbols-outlined rounded-full border-2 border-on-background bg-surface p-1 text-sm text-on-background transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>

          {/* Rating Badge */}
          <div className="hover-wobbly wobbly-border flex w-50 -rotate-2 flex-col gap-2 border-4 border-on-background bg-secondary-fixed p-3 shadow-[6px_6px_0px_0px_rgba(29,28,23,1)]">
            <div className="flex -space-x-3">
              <div className="h-8 w-8 rounded-full border-2 border-on-background bg-linear-to-br from-pink-400 to-orange-300" />
              <div className="h-8 w-8 rounded-full border-2 border-on-background bg-linear-to-br from-cyan-400 to-blue-300" />
              <div className="h-8 w-8 rounded-full border-2 border-on-background bg-linear-to-br from-green-400 to-teal-300" />
              <div className="h-8 w-8 rounded-full border-2 border-on-background bg-linear-to-br from-purple-400 to-pink-300" />
            </div>
            <div className="flex items-start gap-1 font-label-sm text-xs leading-tight font-bold text-on-background">
              <span className="material-symbols-outlined text-sm text-primary">star</span>
              Rated 5 Stars by
              <br />
              Happy Clients
            </div>
          </div>
        </div>

        {/* Center Character Image — extends above container top border */}
        <div className="pointer-events-none absolute bottom-0 left-[55%] z-30 w-85 -translate-x-1/2 md:w-131.75">
          <Image
            src="/images/hero-avatar.png"
            alt="Developer Portrait"
            width={544}
            height={544}
            className="h-auto w-full object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)]"
          />
        </div>

        {/* Right Content */}
        <div className="relative z-20 flex flex-1 flex-col items-end gap-6">
          {/* Feature Icons */}
          <div className="flex gap-6 pt-4 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-2xl text-on-background">code</span>
              <span className="w-14 font-label-sm text-[10px] font-bold text-on-background uppercase mix-blend-color-burn">
                CLEAN CODE
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-2xl text-on-background">
                design_services
              </span>
              <span className="w-14 font-label-sm text-[10px] font-bold text-on-background uppercase mix-blend-color-burn">
                UNIQUE DESIGNS
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="material-symbols-outlined text-2xl text-on-background">speed</span>
              <span className="w-14 font-label-sm text-[10px] font-bold text-on-background uppercase mix-blend-color-burn">
                FAST DELIVERY
              </span>
            </div>
          </div>

          <div className="font-label-sm text-xs font-bold opacity-80 mix-blend-color-burn">
            Featured Stack
          </div>

          {/* Featured Stack Card */}
          <div className="hover-wobbly wobbly-border-2 w-full max-w-60 rotate-2 rounded-2xl border-4 border-on-background bg-surface p-3 shadow-[8px_8px_0px_0px_rgba(29,28,23,1)]">
            <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-xl border-4 border-on-background bg-on-background">
              <Image
                src="https://lh3.googleusercontent.com/aida/ADBb0ujgXzN_-dwMDc2bQVc_okpdwR8MD2ESGY7iCo0ZvDfpkD40wMP-2pvCBiD4_P03T0P86D_hL7XEdgGPBudVcAz5Fcx4pcW_Xx_-wrj06SLDaVH64x-Js9gVzRAXV41SgyKdoSkzFTtbYpAbDl_Rv1nq9AwobDgZia4FHzWQvmmXfcShM44SBVWySjqT8yun7y2IeNWMVAmEyY2nF7XQ9LFiaotIEjg3mRaeMx2GN6dCFAdGIxR1h1S9PeSgMu-eLcwbO4bSWb8KsPs"
                alt="Next.js Vanguard"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mb-1 text-center font-(family-name:--font-headline-md) text-base font-bold">
              Next.js Vanguard
            </h3>
            <p className="mb-3 text-center font-label-sm text-[10px] text-on-surface-variant">
              Unmatched performance.
            </p>
            <button className="hover-wobbly flex w-full items-center justify-center gap-2 rounded-full border-4 border-on-background bg-primary px-3 py-2 font-label-sm text-xs font-bold text-on-primary shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              Ready
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
