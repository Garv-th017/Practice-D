import { Icon } from '../../../../components/Icon/Icon'
import { d } from '../delay'
import './SearchPreviews.css'

export function RouteSearchPreview() {
  return (
    <div className="mini-card pv-route">
      <div className="pv-route__row">
        <span className="pv-route__dot" />
        <span className="mini-grow">
          <span className="mini-muted">From</span>
          <b className="mini-strong">New Delhi</b>
        </span>
      </div>
      <div className="pv-route__line" />
      <div className="pv-route__row">
        <span className="pv-route__dot pv-route__dot--to" />
        <span className="mini-grow">
          <span className="mini-muted">To</span>
          <b className="mini-strong">Jaipur</b>
        </span>
      </div>
      <span className="pv-route__swap">
        <span className="m-spin">
          <Icon name="swap" size={13} strokeWidth={2.4} />
        </span>
      </span>
    </div>
  )
}

const days = [
  { day: 'Thu', date: 29, price: '849' },
  { day: 'Fri', date: 30, price: '699' },
  { day: 'Sat', date: 31, price: '899' },
  { day: 'Sun', date: 1, price: '749' },
  { day: 'Mon', date: 2, price: '999' },
]

export function DateStripPreview() {
  return (
    <div className="pv-dates">
      {days.map((x, i) => (
        <span key={x.date} className={`pv-date m-up ${i === 1 ? 'is-on' : ''}`} style={d(i * 60)}>
          <span>{x.day}</span>
          <b>{x.date}</b>
          <em>₹{x.price}</em>
        </span>
      ))}
    </div>
  )
}

export function RecentSearchesPreview() {
  return (
    <div className="mini-stack pv-left">
      <span className="mini-muted">Recent searches</span>
      {['Delhi → Jaipur', 'Pune → Goa', 'Agra → Delhi'].map((t, i) => (
        <span key={t} className="mini-chip m-left" style={d(i * 90)}>
          <Icon name="clock" size={11} />
          {t}
        </span>
      ))}
    </div>
  )
}

const popular = [
  { route: 'Delhi → Manali', time: '12h 30m', price: '1,199' },
  { route: 'Mumbai → Goa', time: '11h 10m', price: '899' },
]

export function PopularRoutesPreview() {
  return (
    <div className="mini-stack">
      {popular.map((r, i) => (
        <div key={r.route} className="mini-card mini-row m-up" style={d(i * 100)}>
          <span className="mini-icon">
            <Icon name="bus" size={14} />
          </span>
          <span className="mini-grow">
            <b>{r.route}</b>
            <span className="mini-muted">{r.time}</span>
          </span>
          <span className="mini-price">
            <span className="mini-muted">from</span>
            <b>₹{r.price}</b>
          </span>
        </div>
      ))}
    </div>
  )
}

const filters = [
  { label: 'AC', on: true },
  { label: 'Sleeper', on: true },
  { label: 'Departs after 9 PM', on: false },
]

export function FiltersPreview() {
  return (
    <div className="mini-card mini-stack">
      <b className="mini-strong">Filters</b>
      {filters.map((f, i) => (
        <div key={f.label} className="mini-row">
          <span>{f.label}</span>
          <span className={`mini-toggle ${f.on ? 'is-on' : ''}`} style={d(i * 140)} />
        </div>
      ))}
    </div>
  )
}

export function SortPreview() {
  return (
    <div className="mini-stack">
      <div className="mini-seg" style={d(0, { '--n': 3, '--pos': 1 })}>
        <span className="mini-seg__thumb m-seg" />
        <span>Cheapest</span>
        <span className="is-on">Fastest</span>
        <span>Top rated</span>
      </div>
      {[
        { name: 'Volvo AC Sleeper', time: '4h 10m' },
        { name: 'Express Seater', time: '4h 35m' },
      ].map((r, i) => (
        <div key={r.name} className="mini-card mini-row m-up" style={d(600 + i * 100)}>
          <span>{r.name}</span>
          <b className="mini-mono">{r.time}</b>
        </div>
      ))}
    </div>
  )
}

export function BusResultPreview() {
  return (
    <div className="mini-card mini-stack m-up">
      <div className="mini-row">
        <b className="mini-strong">GreenLine Travels</b>
        <span className="mini-chip mini-chip--success">
          <Icon name="star" size={9} /> 4.6
        </span>
      </div>
      <div className="mini-row">
        <span className="mini-mono">06:45</span>
        <span className="pv-dash" />
        <span className="mini-muted">4h 35m</span>
        <span className="pv-dash" />
        <span className="mini-mono">11:20</span>
      </div>
      <div className="mini-row">
        <span className="mini-muted">AC Sleeper · 12 seats left</span>
        <b className="mini-strong">₹849</b>
      </div>
    </div>
  )
}

const prices = [9, 8, 7, 9, 6, 8, 9, 7, 6, 5, 8, 9, 7, 6]

export function PriceCalendarPreview() {
  return (
    <div className="mini-stack">
      <div className="mini-row">
        <b className="mini-strong">November</b>
        <span className="mini-muted">Lowest fares</span>
      </div>
      <div className="pv-cal">
        {prices.map((p, i) => (
          <span
            key={i}
            className={`pv-cal__day m-pop ${p <= 6 ? 'is-low' : ''} ${p === 5 ? 'is-on' : ''}`}
            style={d(i * 25)}
          >
            <b>{i + 1}</b>
            <em>{p}99</em>
          </span>
        ))}
      </div>
    </div>
  )
}

const points = [
  { name: 'Kashmere Gate', km: '0.8 km' },
  { name: 'Majnu Ka Tilla', km: '2.1 km' },
  { name: 'Azadpur', km: '3.4 km' },
]

export function NearbyPointsPreview() {
  return (
    <div className="mini-card mini-stack">
      <span className="mini-muted">Boarding points near you</span>
      {points.map((p, i) => (
        <div key={p.name} className={`mini-row pv-point m-left ${i === 0 ? 'is-on' : ''}`} style={d(i * 90)}>
          <span className="mini-row mini-row--start">
            <Icon name="pin" size={13} />
            {p.name}
          </span>
          <span className="mini-muted">{p.km}</span>
        </div>
      ))}
    </div>
  )
}

export function FareAlertPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <span className="mini-row mini-row--start">
          <span className="mini-icon">
            <Icon name="bell" size={13} />
          </span>
          <span className="mini-grow">
            <b>Delhi → Jaipur</b>
            <span className="mini-muted">Alert me under ₹750</span>
          </span>
        </span>
        <span className="mini-toggle is-on" />
      </div>
      <span className="mini-chip mini-chip--success m-pop" style={d(350)}>
        Price dropped to ₹699
      </span>
    </div>
  )
}

const cancelRows = [
  { name: 'GreenLine Travels', price: '₹849', free: true },
  { name: 'Express Seater', price: '₹699', free: false },
]

export function FreeCancellationPreview() {
  return (
    <div className="mini-stack">
      {cancelRows.map((r, i) => (
        <div key={r.name} className="mini-card mini-stack m-up" style={d(i * 100)}>
          <div className="mini-row">
            <b>{r.name}</b>
            <b className="mini-strong">{r.price}</b>
          </div>
          <span className={`mini-chip ${r.free ? 'mini-chip--success' : ''}`}>
            {r.free ? 'Free cancellation till 6 hrs before' : 'Partial refund only'}
          </span>
        </div>
      ))}
    </div>
  )
}
