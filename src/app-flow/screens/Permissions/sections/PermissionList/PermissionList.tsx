import { Icon, type IconName } from '../../../../../components/Icon/Icon'
import './PermissionList.css'

const items: { id: string; icon: IconName; title: string; text: string }[] = [
  { id: 'location', icon: 'pin', title: 'Location', text: 'Nearby boarding points and live tracking' },
  { id: 'notifications', icon: 'bell', title: 'Notifications', text: 'Trip reminders, delays and refund updates' },
]

interface PermissionListProps {
  allowed: string[]
  onAllow: (id: string) => void
}

export function PermissionList({ allowed, onAllow }: PermissionListProps) {
  return (
    <section className="permission-list">
      {items.map((p) => {
        const on = allowed.includes(p.id)
        return (
          <div key={p.id} className={`k-card permission ${on ? 'is-on' : ''}`}>
            <span className="k-icon">
              <Icon name={p.icon} size={16} />
            </span>
            <span className="k-grow">
              <b>{p.title}</b>
              <span className="k-muted">{p.text}</span>
            </span>
            {on ? (
              <span className="k-chip k-chip--success">
                <Icon name="check" size={11} strokeWidth={2.8} /> Allowed
              </span>
            ) : (
              <button type="button" className="k-chip" onClick={() => onAllow(p.id)}>
                Allow
              </button>
            )}
          </div>
        )
      })}
    </section>
  )
}
