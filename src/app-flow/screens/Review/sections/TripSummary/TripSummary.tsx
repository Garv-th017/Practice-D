import { Link } from 'react-router'
import { findBus, formatDate } from '../../../../data'
import { useDemo } from '../../../../kit/demoStore'
import './TripSummary.css'

export function TripSummary() {
  const { from, to, date, busId, seats, boarding, drop, passengers } = useDemo()
  const bus = findBus(busId)

  return (
    <section className="k-card trip-summary">
      <div className="k-row">
        <span className="k-grow">
          <b className="trip-summary__route">
            {from} → {to}
          </b>
          <span className="k-muted">
            {formatDate(date)} · {bus.depart} – {bus.arrive}
          </span>
        </span>
        <Link to="/app/home" className="k-link">
          Change
        </Link>
      </div>
      <div className="k-divider" />
      <dl className="trip-summary__list">
        <div>
          <dt>Bus</dt>
          <dd>{bus.name}</dd>
        </div>
        <div>
          <dt>Seats</dt>
          <dd>{seats.join(', ') || '—'}</dd>
        </div>
        <div>
          <dt>Boarding</dt>
          <dd>{boarding}</dd>
        </div>
        <div>
          <dt>Drop</dt>
          <dd>{drop}</dd>
        </div>
        <div className="trip-summary__wide">
          <dt>Passengers</dt>
          <dd>{passengers.map((p) => p.name).join(', ')}</dd>
        </div>
      </dl>
    </section>
  )
}
