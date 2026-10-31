import { Icon } from '../../../../../components/Icon/Icon'
import type { Bus } from '../../../../data'
import './BusReviews.css'

const reviews = [
  { initials: 'RS', name: 'Rohan S.', rating: 5, text: 'Left right on time and the seats were clean. Driver was careful on the highway.' },
  { initials: 'MK', name: 'Meera K.', rating: 4, text: 'Comfortable ride and easy boarding at Kashmere Gate. Charging point worked well.' },
]

export function BusReviews({ bus }: { bus: Bus }) {
  return (
    <section className="k-section">
      <div className="k-section__head">
        <span className="k-label">Reviews</span>
        <span className="k-muted">{bus.reviews.toLocaleString('en-IN')} ratings</span>
      </div>
      {reviews.map((r) => (
        <div key={r.name} className="k-card bus-review">
          <div className="k-row k-row--start">
            <span className="k-avatar bus-review__avatar">{r.initials}</span>
            <b className="k-grow">{r.name}</b>
            <span className="bus-review__stars" aria-label={`${r.rating} out of 5`}>
              {Array.from({ length: 5 }, (_, i) => (
                <Icon key={i} name="star" size={11} className={i < r.rating ? 'is-on' : ''} />
              ))}
            </span>
          </div>
          <p>{r.text}</p>
        </div>
      ))}
    </section>
  )
}
