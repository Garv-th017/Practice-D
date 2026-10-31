import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Icon, type IconName } from '../../../components/Icon/Icon'
import './ListRow.css'

interface ListRowProps {
  title: string
  sub?: string
  icon?: IconName
  /** Extra content on the right, before the chevron */
  right?: ReactNode
  to?: string
  onClick?: () => void
  tone?: 'default' | 'danger'
}

export function ListRow({ title, sub, icon, right, to, onClick, tone = 'default' }: ListRowProps) {
  const content = (
    <>
      {icon && (
        <span className="list-row__icon">
          <Icon name={icon} size={16} />
        </span>
      )}
      <span className="list-row__text">
        <b>{title}</b>
        {sub && <small>{sub}</small>}
      </span>
      {right}
      {(to || onClick) && <Icon name="chevronRight" size={16} className="list-row__chevron" />}
    </>
  )
  const cls = `list-row ${tone === 'danger' ? 'list-row--danger' : ''}`

  if (to) {
    return (
      <Link to={to} className={cls}>
        {content}
      </Link>
    )
  }
  if (onClick) {
    return (
      <button type="button" className={cls} onClick={onClick}>
        {content}
      </button>
    )
  }
  return <div className={cls}>{content}</div>
}
