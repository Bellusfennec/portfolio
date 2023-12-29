import React, { useState, useEffect } from 'react'

const localTheme = localStorage.getItem('globalTheme')
const initialTheme = localTheme === 'light' || localTheme === 'dark' ? true : false
const initialThemeState = { theme: initialTheme ? localTheme : 'light', setTheme: () => null }

export const ThemeContext = React.createContext(initialThemeState)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialThemeState.theme)

  useEffect(() => {
    if (localTheme) setTheme(localTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem('globalTheme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
