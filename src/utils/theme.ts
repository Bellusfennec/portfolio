const localName = 'theme'
const attributeName = 'data-theme'
const isServer = typeof window === 'undefined'

function documentReady() {
  return new Promise(resolve => {
    if (document.readyState === 'complete') {
      resolve('')
    } else {
      document.addEventListener('DOMContentLoaded', resolve)
    }
  })
}

function getFromSystem() {
  const MEDIA = '(prefers-color-scheme: dark)'
  return window.matchMedia(MEDIA).matches ? 'dark' : 'light'
}

function getFromLocalStorage() {
  return localStorage.getItem(localName)
}

function setAttribute(value?: string): void {
  console.log('setAttribute0', document.documentElement)
  if (value) {
    console.log('setAttribute1', document.documentElement)
    document.documentElement.setAttribute(attributeName, value)
  } else document.documentElement.removeAttribute(attributeName)
}

function setLocalStorage(value?: string): void {
  if (value) localStorage.setItem(localName, value)
  else localStorage.removeItem(localName)
}

function init() {
  console.log('init', isServer)

  if (!isServer) {
    // await documentReady()

    // console.log('Документ полностью загружен и проанализирован1')
    const system = getFromSystem()
    const local = getFromLocalStorage()
    const theme = system === 'dark' ? system : local ? local : 'light'
    console.log(system, local, theme)

    setAttribute(theme)
    setLocalStorage(theme)
    return theme
  }
}

const themeService = {
  init,
  getFromSystem,
  getFromLocalStorage,
  setAttribute,
  setLocalStorage,
}

export default themeService
