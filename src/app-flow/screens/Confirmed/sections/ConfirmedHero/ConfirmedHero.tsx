import { Icon } from '../../../../../components/Icon/Icon'
import './ConfirmedHero.css'

export function ConfirmedHero() {
  return (
    <section className="confirmed-hero">
      <span className="confirmed-hero__badge">
        <Icon name="check" size={34} strokeWidth={3} />
      </span>
      <h1>Booking confirmed</h1>
      <p>Your ticket is ready and has been sent to aarav@email.com and +91 98765 43210.</p>
    </section>
  )
}
