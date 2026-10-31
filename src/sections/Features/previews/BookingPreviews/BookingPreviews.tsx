import { Icon } from '../../../../components/Icon/Icon'
import { d } from '../delay'
import './BookingPreviews.css'

const seatMap = ['', 'b', '', '', 'b', 's', '', 'l', '', '', 'b', '']

export function SeatMapPreview() {
  return (
    <div className="mini-center">
      <div className="pv-seatmap">
        {seatMap.map((s, i) => (
          <span
            key={i}
            className={`mini-seat ${s === 'b' ? 'is-booked' : ''} ${s === 'l' ? 'is-ladies' : ''} ${s === 's' ? 'is-selected m-pop' : ''}`}
            style={s === 's' ? d(250) : undefined}
          />
        ))}
      </div>
      <span className="mini-chip is-on m-up" style={d(400)}>
        Seat 6 · ₹849
      </span>
    </div>
  )
}

export function WomenSeatsPreview() {
  return (
    <div className="mini-center">
      <div className="pv-seatrow">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`mini-seat ${i < 2 ? 'is-ladies m-pop' : ''}`} style={d(i * 120)} />
        ))}
      </div>
      <span className="mini-chip pv-ladies m-up" style={d(300)}>
        Reserved for women
      </span>
    </div>
  )
}

const seatPrices = [
  { label: 'Window', price: '₹899', on: true },
  { label: 'Aisle', price: '₹849', on: false },
]

export function SeatPricePreview() {
  return (
    <div className="pv-seatprice">
      {seatPrices.map((s, i) => (
        <div key={s.label} className={`mini-card pv-seatprice__item m-up ${s.on ? 'is-on' : ''}`} style={d(i * 100)}>
          <span className={`mini-seat ${s.on ? 'is-selected' : ''}`} />
          <span className="mini-muted">{s.label}</span>
          <b className="mini-strong">{s.price}</b>
        </div>
      ))}
    </div>
  )
}

const stops = [
  { name: 'Kashmere Gate', time: '06:45' },
  { name: 'Majnu Ka Tilla', time: '07:05' },
  { name: 'Azadpur', time: '07:20' },
]

export function BoardingPickerPreview() {
  return (
    <div className="mini-card pv-timeline">
      {stops.map((s, i) => (
        <div key={s.name} className={`pv-timeline__stop m-left ${i === 1 ? 'is-on' : ''}`} style={d(i * 90)}>
          <span className="pv-timeline__dot" />
          <span className="mini-grow">
            <b>{s.name}</b>
            <span className="mini-muted">Boarding point</span>
          </span>
          <span className="mini-mono">{s.time}</span>
        </div>
      ))}
    </div>
  )
}

const travellers = [
  { initials: 'AK', name: 'Aarav Kumar', meta: '28 · Male' },
  { initials: 'PK', name: 'Priya Kumar', meta: '26 · Female' },
]

export function SavedTravellersPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <b className="mini-strong">Passengers</b>
        <span className="mini-chip mini-chip--success">Saved</span>
      </div>
      {travellers.map((t, i) => (
        <div key={t.name} className="mini-row mini-row--start m-up" style={d(i * 100)}>
          <span className="mini-avatar">{t.initials}</span>
          <span className="mini-grow">
            <b>{t.name}</b>
            <span className="mini-muted">{t.meta}</span>
          </span>
          <Icon name="check" size={13} strokeWidth={2.6} className="mini-ok" />
        </div>
      ))}
      <span className="pv-add">+ Add traveller</span>
    </div>
  )
}

export function GroupBookingPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <b className="mini-strong">Passengers</b>
        <span className="pv-counter">
          <span>
            <Icon name="minus" size={11} strokeWidth={2.6} />
          </span>
          <b className="m-pop" style={d(300)}>
            4
          </b>
          <span className="is-on">
            <Icon name="plus" size={11} strokeWidth={2.6} />
          </span>
        </span>
      </div>
      <div className="pv-avatars">
        {['AK', 'PK', 'RS', 'MJ'].map((a, i) => (
          <span key={a} className="mini-avatar m-pop" style={d(i * 90)}>
            {a}
          </span>
        ))}
      </div>
      <span className="mini-muted">Up to 6 seats in one booking</span>
    </div>
  )
}

export function HoldTimerPreview() {
  return (
    <div className="mini-center">
      <div className="mini-ring" style={d(0, { '--off': 0.12 })}>
        <svg viewBox="0 0 64 64">
          <circle className="mini-ring__track" cx="32" cy="32" r="27" />
          <circle className="mini-ring__bar" cx="32" cy="32" r="27" pathLength={1} />
        </svg>
        <span className="pv-hold">
          <b className="mini-mono">08:47</b>
          <span className="mini-muted">left</span>
        </span>
      </div>
      <span className="mini-muted">Your 2 seats are held while you pay</span>
    </div>
  )
}

export function RoundTripPreview() {
  return (
    <div className="mini-stack">
      <div className="mini-seg" style={d(0, { '--n': 2, '--pos': 1 })}>
        <span className="mini-seg__thumb m-seg" />
        <span>Onward · 30 Oct</span>
        <span className="is-on">Return · 2 Nov</span>
      </div>
      <div className="mini-card mini-row m-up" style={d(600)}>
        <span>Jaipur → Delhi</span>
        <b className="mini-strong">₹799</b>
      </div>
      <span className="mini-chip mini-chip--success m-pop" style={d(750)}>
        Save ₹100 on round trips
      </span>
    </div>
  )
}

const photos = ['Inside', 'Sleeper berth', 'Outside']

export function BusPhotosPreview() {
  return (
    <div className="pv-photos">
      {photos.map((p, i) => (
        <span key={p} className={`pv-photo pv-photo--${i + 1} m-pop`} style={d(i * 90)}>
          <Icon name="image" size={i === 0 ? 20 : 14} />
          <small>{p}</small>
        </span>
      ))}
      <span className="mini-chip pv-photos__count">1 / 12</span>
    </div>
  )
}

const luggage = [
  { label: 'Cabin bag', value: '7 kg', ok: true },
  { label: 'Check-in bag', value: '15 kg', ok: true },
  { label: 'Extra bag', value: '+₹100', ok: false },
]

export function LuggagePreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row mini-row--start">
        <span className="mini-icon">
          <Icon name="bag" size={14} />
        </span>
        <b className="mini-strong">Luggage allowance</b>
      </div>
      {luggage.map((l, i) => (
        <div key={l.label} className="mini-row m-left" style={d(i * 90)}>
          <span className="mini-row mini-row--start">
            {l.ok ? (
              <Icon name="check" size={11} strokeWidth={2.8} className="mini-ok" />
            ) : (
              <Icon name="plus" size={11} strokeWidth={2.6} />
            )}
            {l.label}
          </span>
          <b className="mini-mono">{l.value}</b>
        </div>
      ))}
    </div>
  )
}
