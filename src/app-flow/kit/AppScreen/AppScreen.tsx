import type { ReactNode } from 'react'
import './AppScreen.css'

interface AppScreenProps {
  children: ReactNode
  /** brand = full teal background (splash) */
  tone?: 'default' | 'brand'
  /** bare = no padding, for screens built from TopBar + AppBody + bottom bars */
  bare?: boolean
  className?: string
}

export function AppScreen({ children, tone = 'default', bare = false, className = '' }: AppScreenProps) {
  const cls = `app-screen ${tone === 'brand' ? 'app-screen--brand' : ''} ${bare ? 'app-screen--bare' : ''} ${className}`
  return <div className={cls}>{children}</div>
}
