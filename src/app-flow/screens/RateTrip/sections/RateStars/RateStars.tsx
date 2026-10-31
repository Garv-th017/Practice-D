import { Icon } from '../../../../../components/Icon/Icon'
import './RateStars.css'

const labels = ['', 'Poor', 'Not great', 'Okay', 'Good', 'Excellent']

interface RateStarsProps {
  value: number
  onChange: (value: number) => void
}

export function RateStars({ value, onChange }: RateStarsProps) {
  return (
    <section className="rate-stars">
      <b className="rate-stars__question">How was your trip?</b>
      <div className="rate-stars__row" role="radiogroup" aria-label="Rating">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} star${n === 1 ? '' : 's'}`}
            className={`rate-stars__star ${n <= value ? 'is-on' : ''}`}
            onClick={() => onChange(n)}
          >
            <Icon name="star" size={30} />
          </button>
        ))}
      </div>
      <span className="rate-stars__label">{value ? labels[value] : 'Tap a star'}</span>
    </section>
  )
}
