import { useEffect, useRef, useState } from 'react'
import ThemeProvider from '../app/providers/theme.provider'
import ButtonScrollUp from './components/common/buttonScrollUp'
import Section from './components/common/section'
import Experience from './components/ui/experience'
import Hero from './components/ui/hero'
import Portfolio from './components/ui/portfolio'
import Sidebar from './components/ui/sidebar'
import AppLoader from './hoc/appLoader'

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin: '-300px' }
    )
    if (observerRef.current !== null) {
      observer.observe(observerRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <AppLoader>
      <ThemeProvider>
        <Sidebar />
        <Hero ref={observerRef} />
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="portfolio">
          <Portfolio />
        </Section>
        <ButtonScrollUp isIntersecting={isIntersecting} />
      </ThemeProvider>
    </AppLoader>
  )
}

export default App
