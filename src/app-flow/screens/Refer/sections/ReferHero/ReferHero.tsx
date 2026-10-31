import { Icon } from '../../../../../components/Icon/Icon'
import './ReferHero.css'

export function ReferHero() {
  return (
    <section className="refer-hero">
      <span className="refer-hero__icon">
        <Icon name="gift" size={28} />
      </span>
      <h1>Give ₹100, get ₹100</h1>
      <p>Friends get ₹100 off their first trip. You get ₹100 in your wallet when they travel.</p>
      <div className="refer-hero__earned">
        <b>₹200</b>
        <span>earned so far</span>
      </div>
    </section>
  )
}
