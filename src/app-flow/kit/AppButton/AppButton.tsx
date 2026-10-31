import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import './AppButton.css'

interface AppButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'text'
  /** In-app route: renders a router link instead of a button */
  to?: string
  icon?: ReactNode
}

export function AppButton({ children, variant = 'primary', to, icon, className = '', ...rest }: AppButtonProps) {
  const cls = `app-btn app-btn--${variant} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {icon && <span className="app-btn__icon">{icon}</span>}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={cls} {...rest}>
      {content}
    </button>
  )
}
