import { useCallback, useLayoutEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type ThemeMode } from './ThemeContext'

const MODE_KEY = 'bustopia-theme'
const THEME_COLOR: Record<ThemeMode, string> = { light: '#F3F8F8', dark: '#061112' }

function initialMode(): ThemeMode {
  try {
    const saved = localStorage.getItem(MODE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* storage unavailable — fall back to system preference */
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(initialMode)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = mode
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[mode])
    try {
      localStorage.setItem(MODE_KEY, mode)
    } catch {
      /* storage unavailable — theme still works for this visit */
    }
  }, [mode])

  const toggleMode = useCallback(() => setMode((m) => (m === 'light' ? 'dark' : 'light')), [])
  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
