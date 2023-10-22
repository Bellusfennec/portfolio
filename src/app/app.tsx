import React, { useEffect, useRef, useState } from 'react'
import Welcome from './components/welcome'
import Footer from './components/footer'
import Experience from './components/experience'
import Contact from './components/contact'
import Nav from './components/nav'
import Portfolio from './components/portfolio'
import ButtonScrollUp from './components/buttonScrollUp'
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
      <Welcome observerRef={observerRef} />
      <Portfolio />
      <Experience />
      {/* <Contact /> */}
      <Footer />
      <ButtonScrollUp isIntersecting={isIntersecting} />
      <Nav isIntersecting={isIntersecting} />
    </AppLoader>
  )
}

export default App
