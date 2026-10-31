import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Icon } from '../../../components/Icon/Icon'
import './TopBar.css'

interface TopBarProps {
  title: string
  subtitle?: string
  /** Route for the back button; omit for top-level screens */
  back?: string
  backIcon?: 'arrowLeft' | 'x'
  action?: ReactNode
}

export function TopBar({ title, subtitle, back, backIcon = 'arrowLeft', action }: TopBarProps) {
  return (
    <header className="top-bar">
      {back && (
        <Link to={back} className="top-bar__btn" aria-label={backIcon === 'x' ? 'Close' : 'Back'}>
          <Icon name={backIcon} size={17} />
        </Link>
      )}
      <span className="top-bar__text">
        <b>{title}</b>
        {subtitle && <small>{subtitle}</small>}
      </span>
      {action}
    </header>
  )
}
