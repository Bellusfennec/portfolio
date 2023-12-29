import { useState } from 'react'
// import ThemeProvider from './providers/theme.provider.js'
import ButtonScrollUp from './components/common/buttonScrollUp'
import Experience from './components/ui/experience'
import Hero from './components/ui/hero'
import Portfolio from './components/ui/portfolio'
import Sidebar from './components/ui/sidebar'
import AppLoader from './hoc/appLoader'
import Document from './components/ui/document'
import Contact from './components/ui/contact'

function App() {
  const [isIntersectingHero, setIntersectingHero] = useState(false)

  return (
    <AppLoader>
      {/* <ThemeProvider> */}
      <Sidebar />
      <Hero onIntersected={bool => setIntersectingHero(bool)} />
      <Experience id="experience" />
      <Portfolio id="portfolio" />
      <Document id="document" />
      <Contact id="contact" />
      <ButtonScrollUp visible={isIntersectingHero} />
      {/* </ThemeProvider> */}
    </AppLoader>
  )
}

export default App
