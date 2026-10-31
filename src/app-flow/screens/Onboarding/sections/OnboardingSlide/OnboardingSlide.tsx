import { Icon } from '../../../../../components/Icon/Icon'
import './OnboardingSlide.css'

function SearchArt() {
  return (
    <div className="ob-art ob-art--search">
      <div className="ob-card ob-route">
        <span><i className="ob-dot" /> New Delhi</span>
        <span><i className="ob-dot ob-dot--to" /> Jaipur</span>
      </div>
      {[
        { name: 'GreenLine', time: '06:45', price: '₹849', type: 'AC Sleeper' },
        { name: 'Royal Express', time: '07:30', price: '₹699', type: 'AC Seater' },
      ].map((b) => (
        <div key={b.name} className="ob-card ob-result">
          <span>
            <b>{b.name}</b>
            <small>
              {b.time} · {b.type}
            </small>
          </span>
          <b>{b.price}</b>
        </div>
      ))}
    </div>
  )
}

const seats = ['', 'b', '', '', 'b', 's', 's', '', '', '', 'b', '']

function SeatArt() {
  return (
    <div className="ob-art">
      <div className="ob-card ob-seats">
        {seats.map((s, i) => (
          <span key={i} className={`ob-seat ${s === 'b' ? 'is-booked' : ''} ${s === 's' ? 'is-on' : ''}`} />
        ))}
      </div>
      <span className="ob-chip">2 seats · ₹1,698</span>
    </div>
  )
}

function TrackArt() {
  return (
    <div className="ob-art">
      <div className="ob-card ob-track">
        <span className="ob-track__line">
          <span className="ob-track__done" />
          <span className="ob-track__bus">
            <Icon name="bus" size={12} strokeWidth={2.4} />
          </span>
        </span>
        <span className="ob-track__labels">
          <small>Kashmere Gate</small>
          <small>Jaipur</small>
        </span>
      </div>
      <span className="ob-chip">
        <i className="ob-live" /> Arriving in 6 min
      </span>
    </div>
  )
}

const slides = [
  {
    title: 'Search and compare in seconds',
    text: 'See every bus on your route with times, ratings and prices side by side.',
    Art: SearchArt,
  },
  {
    title: 'Pick the exact seat you want',
    text: 'Window or aisle, lower or upper deck. Choose it on a clear seat map.',
    Art: SeatArt,
  },
  {
    title: 'Track your bus live',
    text: 'Know exactly where your bus is and when to head to the stop.',
    Art: TrackArt,
  },
]

export const SLIDE_COUNT = slides.length

export function OnboardingSlide({ index }: { index: number }) {
  const { title, text, Art } = slides[index]
  return (
    <div className="ob-slide">
      <div className="ob-slide__stage">
        <Art />
      </div>
      <h2 className="ob-slide__title">{title}</h2>
      <p className="ob-slide__text">{text}</p>
    </div>
  )
}
