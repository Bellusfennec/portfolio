import { useEffect, useRef, useState } from 'react'
import ThemeProvider from '../app/providers/theme.provider'
import ButtonScrollUp from './components/buttonScrollUp'
import Experience from './components/experience'
import Footer from './components/footer'
import Portfolio from './components/portfolio'
import Sidebar from './components/sidebar'
import Welcome from './components/welcome'
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
        <Welcome observerRef={observerRef} />
        <Experience />
        <Portfolio />
        {/* <Contact /> */}
        <Footer />
        <ButtonScrollUp isIntersecting={isIntersecting} />
        {/* <Nav isIntersecting={isIntersecting} /> */}
      </ThemeProvider>
    </AppLoader>
  )
}

export default App
