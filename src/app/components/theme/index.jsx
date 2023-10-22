import React, { useContext } from 'react'
import { ThemeContext } from '../../providers/theme.provider'
import style from './style.module.scss'

function ThemeSetter() {
  console.log('theme')
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
      <select value={theme} onChange={e => setTheme(e.currentTarget.value)}>
        {themeOptions.map((option, idx) => (
          <option value={option.value} key={idx}>
            {option.value}
          </option>
        ))}
      </select>
      <input type="checkbox" id="toggle" className={style.checkbox} />
      <label htmlFor="toggle" className={style.label}>
        <span className={style.background}></span>
      </label>
    </>
  )
}
const themeOptions = [{ value: 'light' }, { value: 'dark' }]

export default ThemeSetter
