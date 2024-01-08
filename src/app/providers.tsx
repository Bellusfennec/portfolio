'use client'
import ThemeProvider from '@/providers/ThemeProvider'
import ReduxProvider from '@/store/ReduxProvider'
import themeService from '@/utils/theme'
import { useEffect } from 'react'

export default function RootProviders({ children }: { children: React.ReactNode }) {
  console.log(typeof window, 'themeService.init RootTemplate 1')
  // themeService.init()
  useEffect(() => {
    console.log(typeof window, 'themeService.init RootTemplate 2---')
    themeService.init()
  }, [])

  return <ReduxProvider>{children}</ReduxProvider> //<ThemeProvider>{children}</ThemeProvider>
}
