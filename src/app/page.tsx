import Sidebar from '@/components/ui/Sidebar'
import HeroSection from '@/components/ui/sections/HeroSection'

export default function Home() {
  // const [isIntersectingHero, setIntersectingHero] = useState(false)

  return (
    <div className="grow flex bg-blue-#6">
      <aside className="bg-white min-h-screen"></aside>
      <main className="w-full p-[35px] py-[34px] px-[36px]">
        <Sidebar />
        <HeroSection
        // onIntersected={bool => setIntersectingHero(bool)}
        />
        {/*<Experience id="experience" />
      <Portfolio id="portfolio" />
      <Document id="document" />
      <Contact id="contact" />
      <ButtonScrollUp visible={isIntersectingHero} /> */}
      </main>
    </div>
  )
}
