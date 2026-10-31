import { Icon } from '../../../../../components/Icon/Icon'
import './FailedHero.css'

export function FailedHero() {
  return (
    <section className="failed-hero">
      <span className="failed-hero__badge">
        <Icon name="x" size={32} strokeWidth={3} />
      </span>
      <h1>Payment didn’t go through</h1>
      <p>Your bank didn’t confirm the payment. No money was taken, and your seats are still held for a few minutes.</p>
    </section>
  )
}
