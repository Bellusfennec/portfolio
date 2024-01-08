'use client'
import SwitchInput from '@/components/common/Input/SwitchInput'
import useLocalStorage from '@/hooks/useLocalStorage'
import { useTheme } from '@/hooks/useTheme'
import { getTheme, initTheme, updateTheme } from '@/store/slices/theme.slice'
import { useAppDispatch } from '@/store/store'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface IHandlerChange {
  name: string
  value: boolean
}

const Theme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  // const isServer = typeof window === 'undefined'
  // const dispatch = useAppDispatch()
  // const { isDark, handlerChange } = useTheme()
  // const isDark = useSelector(getTheme())
  // console.log('Theme dark', isDark)
  // const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)
  // const MEDIA = '(prefers-color-scheme: dark)'

  // const systemTheme = isServer && !!window.matchMedia(MEDIA).matches

  // const [darkMode, setDarkMode] = useState(false)
  // console.log('Theme dark', darkMode)

  // useEffect(() => {
  //   console.log(isServer, systemTheme !== darkMode, systemTheme, darkMode)

  //   if (isServer && systemTheme !== darkMode) {
  //     setDarkMode(systemTheme)
  //   }
  //   setDarkMode(systemTheme)
  // }, [])
  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark-mode')
  //   } else {
  //     document.body.classList.remove('dark-mode')
  //   }
  //   // if (isServer && systemTheme !== darkMode) {
  //   //   setDarkMode(systemTheme)
  //   // }
  // }, [darkMode])

  // const handlerChange = ({ value }: IHandlerChange) => {
  //   // dispatch(updateTheme(value))
  // }

  // useEffect(() => {
  //   dispatch(initTheme())
  // }, [])

  return (
    <>
      {/* <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode </button> */}
      {/* <SwitchInput value={darkMode} onChange={() => setDarkMode(!darkMode)} name="theme" />
      <input
        type="checkbox"
        id="theme"
        onChange={() => setDarkMode(!darkMode)}
        checked={darkMode}
      /> */}
      <SwitchInput
        value={theme === 'dark'}
        onChange={() => setTheme((state: string) => (state === 'dark' ? 'light' : 'dark'))}
        name="theme"
      />
    </>
  )
}

export default Theme
