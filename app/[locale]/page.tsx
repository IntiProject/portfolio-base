import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SelectedWorks from '@/components/SelectedWorks'
import GalleryProjects from '@/components/GalleryProjects'
import CoffeeCatcher from '@/components/CoffeeCatcher'
import Toolbox from '@/components/Toolbox'
import WorkJourney from '@/components/WorkJourney'
import Education from '@/components/Education'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Background decorative shapes */}
      <div className="pointer-events-none fixed top-20 left-10 -z-10">
        <span className="material-symbols-outlined animate-float text-6xl text-primary opacity-30">
          star
        </span>
      </div>

      <div className="pointer-events-none fixed right-20 bottom-40 -z-10">
        <span className="material-symbols-outlined animate-float-fast text-8xl text-secondary-container opacity-40">
          change_history
        </span>
      </div>

      <div className="pointer-events-none fixed top-1/2 left-4 -z-10">
        <span className="material-symbols-outlined animate-float text-5xl text-tertiary-fixed opacity-50">
          circle
        </span>
      </div>

      <div className="pointer-events-none fixed top-[5%] left-[10%] -z-20 h-full w-32">
        <svg
          className="h-full w-full animate-float text-primary opacity-10"
          fill="none"
          preserveAspectRatio="none"
          stroke="currentColor"
          strokeDasharray="20 30"
          strokeWidth={4}
        >
          <path d="M16,0 Q120,500 16,1000 T120,2000 T16,3000 T120,4000 T16,5000" />
        </svg>
      </div>

      <div className="pointer-events-none fixed top-[10%] right-[10%] -z-20 h-full w-24">
        <svg
          className="h-full w-full text-secondary-container opacity-10"
          fill="none"
          preserveAspectRatio="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={6}
        >
          <path d="M50,0 L20,300 L80,600 L20,900 L80,1200 L20,1500 L80,1800 L20,2100 L80,2400 L20,2700 L80,3000 L20,3300 L80,3600 L50,4000" />
        </svg>
      </div>

      <Navbar />

      <main className="relative mx-auto mt-4 flex w-full max-w-7xl grow flex-col gap-24 overflow-hidden px-4 pb-32 sm:px-6 lg:px-8">
        <Hero />
        <SelectedWorks />
        <GalleryProjects />
        <CoffeeCatcher />
        <Toolbox />
        <WorkJourney />
        <Education />
        <About />
      </main>

      <Footer />
    </>
  )
}
