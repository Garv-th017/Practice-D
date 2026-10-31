import { useState } from 'react'
import { Toggle } from '../../../../kit/Toggle/Toggle'
import './SettingsAlerts.css'

const alerts = [
  { id: 'trip', title: 'Trip reminders', sub: 'Departure time and boarding point' },
  { id: 'delay', title: 'Delay alerts', sub: 'When your bus runs late' },
  { id: 'offers', title: 'Offers and cashback', sub: 'Deals on your usual routes' },
]

export function SettingsAlerts() {
  const [on, setOn] = useState<Record<string, boolean>>({ trip: true, delay: true, offers: false })

  return (
    <section className="k-section">
      <span className="k-label">Notifications</span>
      <div className="k-card k-card--flush">
        {alerts.map((a) => (
          <div key={a.id} className="settings-alert">
            <span className="k-grow">
              <b>{a.title}</b>
              <span className="k-muted">{a.sub}</span>
            </span>
            <Toggle label={a.title} checked={on[a.id]} onChange={(v) => setOn((s) => ({ ...s, [a.id]: v }))} />
          </div>
        ))}
      </div>
    </section>
  )
}
