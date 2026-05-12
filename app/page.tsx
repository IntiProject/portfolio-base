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
      <div className="fixed top-20 left-10 -z-10 pointer-events-none">
        <span className="text-primary opacity-30 text-6xl animate-float material-symbols-outlined">star</span>
      </div>

      <div className="fixed bottom-40 right-20 -z-10 pointer-events-none">
        <span className="text-secondary-container opacity-40 text-8xl animate-float-fast material-symbols-outlined">change_history</span>
      </div>

      <div className="fixed top-1/2 left-4 -z-10 pointer-events-none">
        <span className="text-tertiary-fixed opacity-50 text-5xl animate-float material-symbols-outlined">circle</span>
      </div>

      <div className="fixed top-[5%] left-[10%] w-32 h-full -z-20 pointer-events-none">
        <svg className="w-full h-full text-primary opacity-10 animate-float" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeDasharray="20 30" strokeWidth={4}>
          <path d="M16,0 Q120,500 16,1000 T120,2000 T16,3000 T120,4000 T16,5000" />
        </svg>
      </div>

      <div className="fixed top-[10%] right-[10%] w-24 h-full -z-20 pointer-events-none">
        <svg className="w-full h-full text-secondary-container opacity-10" fill="none" preserveAspectRatio="none" stroke="currentColor" strokeLinecap="round" strokeWidth={6}>
          <path d="M50,0 L20,300 L80,600 L20,900 L80,1200 L20,1500 L80,1800 L20,2100 L80,2400 L20,2700 L80,3000 L20,3300 L80,3600 L50,4000" />
        </svg>
      </div>

      <Navbar />

      <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-4 flex flex-col gap-24 relative pb-32 overflow-hidden">
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
