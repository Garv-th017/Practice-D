import { Link } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { findBus, formatDate } from '../../../../data'
import { useDemo } from '../../../../kit/demoStore'
import './HomeUpcoming.css'

export function HomeUpcoming() {
  const { from, to, date, busId, cancelled } = useDemo()
  if (cancelled) return null
  const bus = findBus(busId)

  return (
    <section className="k-section">
      <div className="k-section__head">
        <span className="k-label">Upcoming trip</span>
        <Link to="/app/trips" className="k-link">
          All trips
        </Link>
      </div>
      <Link to="/app/ticket" className="k-card home-upcoming">
        <span className="k-icon">
          <Icon name="ticket" size={16} />
        </span>
        <span className="k-grow">
          <b>
            {from} → {to}
          </b>
          <span className="k-muted">
            {formatDate(date)} · {bus.depart} · {bus.name}
          </span>
        </span>
        <span className="k-chip k-chip--success">Confirmed</span>
      </Link>
    </section>
  )
}
