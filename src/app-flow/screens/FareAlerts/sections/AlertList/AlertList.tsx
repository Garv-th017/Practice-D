import { Icon } from '../../../../../components/Icon/Icon'
import { rupees } from '../../../../data'
import { Toggle } from '../../../../kit/Toggle/Toggle'
import './AlertList.css'

export interface FareAlert {
  id: string
  route: string
  target: number
  on: boolean
  lowest: number | null
}

interface AlertListProps {
  alerts: FareAlert[]
  onToggle: (id: string, on: boolean) => void
  onRemove: (id: string) => void
}

export function AlertList({ alerts, onToggle, onRemove }: AlertListProps) {
  return (
    <section className="k-section">
      <span className="k-label">Your alerts</span>
      {alerts.length === 0 && <p className="k-empty">No alerts yet. Create one above.</p>}
      {alerts.map((a) => {
        const dropped = a.lowest !== null && a.lowest <= a.target
        return (
          <div key={a.id} className={`k-card alert-item ${a.on ? '' : 'is-off'}`}>
            <div className="k-row">
              <span className="k-grow">
                <b>{a.route}</b>
                <span className="k-muted">Alert me under {rupees(a.target)}</span>
              </span>
              <Toggle label={`Alert for ${a.route}`} checked={a.on} onChange={(v) => onToggle(a.id, v)} />
            </div>
            <div className="k-row">
              {dropped ? (
                <span className="k-chip k-chip--success">
                  <Icon name="bell" size={11} /> Dropped to {rupees(a.lowest ?? 0)}
                </span>
              ) : (
                <span className="k-muted">{a.lowest ? `Lowest now ${rupees(a.lowest)}` : 'Watching prices'}</span>
              )}
              <button type="button" className="k-link alert-item__remove" onClick={() => onRemove(a.id)}>
                Remove
              </button>
            </div>
          </div>
        )
      })}
    </section>
  )
}
