import { Icon } from '../../../../../components/Icon/Icon'
import './RateDone.css'

export function RateDone({ rating }: { rating: number }) {
  return (
    <section className="rate-done">
      <span className="rate-done__badge">
        <Icon name="star" size={32} />
      </span>
      <b>You rated this trip {rating} out of 5</b>
      <p className="k-muted">Thanks! Your review is shared with Royal Express and helps other riders choose.</p>
      <span className="k-chip k-chip--success">+20 points added</span>
    </section>
  )
}
