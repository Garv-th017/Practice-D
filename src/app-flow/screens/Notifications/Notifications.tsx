import { useState } from 'react'
import { notices, type NoticeKind } from '../../data'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TopBar } from '../../kit/TopBar/TopBar'
import { NotificationFilters, type NoticeFilter } from './sections/NotificationFilters/NotificationFilters'
import { NotificationList } from './sections/NotificationList/NotificationList'
import './Notifications.css'

export function Notifications() {
  const [filter, setFilter] = useState<NoticeFilter>('all')
  const [read, setRead] = useState<string[]>([])

  const isUnread = (id: string) => notices.some((n) => n.id === id && n.unread) && !read.includes(id)
  const unread = notices.filter((n) => isUnread(n.id)).length
  const markRead = (id: string) => setRead((r) => (r.includes(id) ? r : [...r, id]))

  return (
    <AppScreen bare>
      <TopBar
        back="/app/home"
        title="Notifications"
        subtitle={unread ? `${unread} new` : 'You’re all caught up'}
        action={
          unread > 0 && (
            <button type="button" className="k-link notifications__read" onClick={() => setRead(notices.map((n) => n.id))}>
              Mark all read
            </button>
          )
        }
      />
      <AppBody className="notifications__body">
        <NotificationFilters
          value={filter}
          onChange={setFilter}
          counts={{
            all: notices.length,
            trip: notices.filter((n) => n.kind === 'trip').length,
            offer: notices.filter((n) => n.kind === 'offer').length,
          }}
        />
        <NotificationList kind={filter === 'all' ? null : (filter as NoticeKind)} isUnread={isUnread} onRead={markRead} />
      </AppBody>
    </AppScreen>
  )
}
