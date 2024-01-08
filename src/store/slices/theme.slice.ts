import themeService from '@/utils/theme'
import { createSlice } from '@reduxjs/toolkit'

export const updateTheme = (payload: boolean) => (dispatch: any) => {
  dispatch(update(payload))
}

const isServer = typeof window === 'undefined'
const THEME = 'theme'
const htmlAttributeName = 'data-theme'
const MEDIA = '(prefers-color-scheme: dark)'
const systemTheme = !isServer && window.matchMedia(MEDIA).matches
const localTheme = !isServer && localStorage.getItem('theme') === 'dark'

export const loadTheme = (payload: boolean) => (dispatch: any) => {
  dispatch(update(payload))
}

export const initTheme = () => (dispatch: any) => {
  if (!isServer) {
    const theme = localTheme ? localTheme : systemTheme
    console.log(systemTheme, localTheme, theme)
    dispatch(update(theme))
    if (theme) {
      document.documentElement.setAttribute(htmlAttributeName, 'dark')
      !isServer && localStorage.setItem(THEME, theme ? 'dark' : 'light')
    } else {
      document.documentElement.removeAttribute(htmlAttributeName)
      !isServer && localStorage.removeItem(THEME)
    }
  }
}

let initialState = {
  isDark: localTheme,
  isLoading: true,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    update(state, { payload }) {
      state.isDark = payload
      state.isLoading = false
    },
  },
})

const { reducer: themeReducer, actions } = themeSlice
const { update } = actions

export const getTheme = () => (state: any) => state.theme.isDark
export const getThemeLoading = () => (state: any) => state.theme.isLoading

export default themeReducer
