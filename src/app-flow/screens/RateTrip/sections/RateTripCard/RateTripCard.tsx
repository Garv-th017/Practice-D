import { Icon } from '../../../../../components/Icon/Icon'
import './RateTripCard.css'

export function RateTripCard() {
  return (
    <section className="k-card rate-trip-card">
      <span className="k-icon">
        <Icon name="bus" size={16} />
      </span>
      <span className="k-grow">
        <b>Agra → New Delhi</b>
        <span className="k-muted">Sun, 18 Oct · Royal Express · Seat 7</span>
      </span>
      <span className="k-chip">Completed</span>
    </section>
  )
}
