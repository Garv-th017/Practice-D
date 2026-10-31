import type { ReactNode } from 'react'
import './BottomBar.css'

interface BottomBarProps {
  /** Left side, e.g. a price summary */
  info?: ReactNode
  children: ReactNode
}

export function BottomBar({ info, children }: BottomBarProps) {
  return (
    <div className="bottom-bar">
      {info && <div className="bottom-bar__info">{info}</div>}
      <div className="bottom-bar__action">{children}</div>
    </div>
  )
}
