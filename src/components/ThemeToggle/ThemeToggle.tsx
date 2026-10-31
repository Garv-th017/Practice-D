import type { MouseEvent } from 'react'
import { useTheme } from '../../theme/useTheme'
import { runThemeTransition } from '../../theme/viewTransition'
import './ThemeToggle.css'

export function ThemeToggle() {
  const { mode, toggleMode } = useTheme()
  const isDark = mode === 'dark'

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    runThemeTransition(toggleMode, {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
  }

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'is-dark' : ''}`}
      onClick={handleClick}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
    >
      <svg className="theme-toggle__icon" viewBox="0 0 24 24" aria-hidden="true">
        <mask id="theme-toggle-moon">
          <rect width="24" height="24" fill="#fff" />
          <circle className="theme-toggle__bite" cx="24" cy="4" r="7" fill="#000" />
        </mask>
        <circle className="theme-toggle__core" cx="12" cy="12" r="5" mask="url(#theme-toggle-moon)" />
        <g className="theme-toggle__rays">
          {Array.from({ length: 8 }, (_, i) => (
            <line key={i} x1="12" y1="1.5" x2="12" y2="3.5" transform={`rotate(${i * 45} 12 12)`} />
          ))}
        </g>
      </svg>
    </button>
  )
}
