import type { ReactNode } from 'react'
import './AppBody.css'

export function AppBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`app-body ${className}`}>{children}</div>
}
