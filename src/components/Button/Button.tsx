import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router'
import './Button.css'

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent'
type Size = 'sm' | 'md' | 'lg'

interface CommonProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
  className?: string
  children: ReactNode
}

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps | 'href'>

type AsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & { href?: undefined; to?: undefined }
/** In-app route, rendered as a router <Link> (no page reload) */
type AsRoute = CommonProps & AnchorProps & { to: string; href?: undefined }
/** External link or in-page anchor */
type AsLink = CommonProps & AnchorProps & { href: string; to?: undefined }

export function Button(props: AsButton | AsRoute | AsLink) {
  const { variant = 'primary', size = 'md', icon, iconPosition = 'end', className = '', children, ...rest } = props
  const cls = `btn btn--${variant} btn--${size} btn--icon-${iconPosition} ${className}`
  const content = (
    <>
      {icon && iconPosition === 'start' && <span className="btn__icon">{icon}</span>}
      <span className="btn__label">{children}</span>
      {icon && iconPosition === 'end' && <span className="btn__icon">{icon}</span>}
    </>
  )

  if (rest.to !== undefined) {
    const { to, ...anchor } = rest as AnchorProps & { to: string }
    return (
      <Link to={to} className={cls} {...anchor}>
        {content}
      </Link>
    )
  }

  if (rest.href !== undefined) {
    return (
      <a className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    )
  }

  return (
    <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  )
}
