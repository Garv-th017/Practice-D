import { Link } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { notices, type NoticeDay, type NoticeKind } from '../../../../data'
import './NotificationList.css'

const DAYS: NoticeDay[] = ['Today', 'Yesterday', 'Earlier']

interface NotificationListProps {
  kind: NoticeKind | null
  isUnread: (id: string) => boolean
  onRead: (id: string) => void
}

export function NotificationList({ kind, isUnread, onRead }: NotificationListProps) {
  const list = notices.filter((n) => !kind || n.kind === kind)

  if (!list.length) {
    return (
      <div className="k-empty">
        <Icon name="bell" size={26} />
        <b>No notifications here</b>
        <span>We’ll let you know about trips and offers.</span>
      </div>
    )
  }

  return (
    <div className="notice-groups">
      {DAYS.map((day) => {
        const items = list.filter((n) => n.day === day)
        if (!items.length) return null
        return (
          <section key={day} className="notice-group" aria-label={day}>
            <span className="notice-group__day">{day}</span>
            <div className="notice-group__list">
              {items.map((n) => {
                const unread = isUnread(n.id)
                return (
                  <article key={n.id} className={`notice-row ${unread ? 'is-unread' : ''}`}>
                    <span className={`notice-row__icon is-${n.tone === 'warning' ? 'warning' : n.kind}`}>
                      <Icon name={n.icon} size={16} />
                      {unread && <span className="notice-row__dot" aria-label="New" />}
                    </span>
                    <div className="notice-row__body">
                      <button type="button" className="notice-row__main" onClick={() => onRead(n.id)}>
                        <b className="notice-row__title">{n.title}</b>
                        <span className="notice-row__text">{n.text}</span>
                      </button>
                      <div className="notice-row__foot">
                        <span className="notice-row__when">{n.when}</span>
                        {n.action && (
                          <Link to={n.action.to} className="notice-row__action" onClick={() => onRead(n.id)}>
                            {n.action.label}
                            <Icon name="chevronRight" size={13} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
