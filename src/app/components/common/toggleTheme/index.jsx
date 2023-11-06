import { useContext } from 'react'
import { ThemeContext } from '../../../providers/theme.provider'
import './style.scss'

function ToggleTheme() {
  const { theme, setTheme } = useContext(ThemeContext)
  console.log('theme', theme)

  return (
    <div className="theme">
      <input
        type="checkbox"
        id="toggle"
        className="checkbox"
        value={theme}
        checked={theme === 'light' ? false : true}
        onChange={({ target }) => setTheme(target.value === 'light' ? 'dark' : 'light')}
      />
      <label htmlFor="toggle" className="label">
        <span className="background"></span>
      </label>
    </div>
  )
}

export default ToggleTheme
