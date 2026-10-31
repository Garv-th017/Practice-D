import { Icon } from '../../../../../components/Icon/Icon'
import type { Passenger } from '../../../../kit/demoStore'
import './CancelSeats.css'

interface CancelSeatsProps {
  seats: string[]
  passengers: Passenger[]
  picked: string[]
  onChange: (picked: string[]) => void
}

export function CancelSeats({ seats, passengers, picked, onChange }: CancelSeatsProps) {
  const all = picked.length === seats.length

  return (
    <section className="k-section">
      <div className="k-section__head">
        <span className="k-label">Seats to cancel</span>
        <button type="button" className="k-link" onClick={() => onChange(all ? [] : seats)}>
          {all ? 'Clear' : 'Select all'}
        </button>
      </div>
      <div className="k-card k-card--flush">
        {seats.map((seat, i) => {
          const on = picked.includes(seat)
          return (
            <button
              key={seat}
              type="button"
              role="checkbox"
              aria-checked={on}
              className={`cancel-seat ${on ? 'is-on' : ''}`}
              onClick={() => onChange(on ? picked.filter((s) => s !== seat) : [...picked, seat])}
            >
              <span className="cancel-seat__box">
                <Icon name="check" size={11} strokeWidth={3} />
              </span>
              <span className="k-grow">
                <b>{passengers[i]?.name ?? 'Passenger'}</b>
                <span className="k-muted">Seat {seat}</span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
