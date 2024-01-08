// import { ThemeProvider } from '@/hooks/useTheme'
import ReduxProvider from '@/store/ReduxProvider'
import '@/styles/main.scss'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'

const inter = Inter({ weight: ['400', '500', '600', '700', '800'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Niyaz Zaytsev | Portfolio',
  description: '',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props

  return (
    <html
      lang="ru"
      // suppressHydrationWarning
    >
      <body className={'min-h-screen flex flex-col ' + inter.className}>
        <ReduxProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
