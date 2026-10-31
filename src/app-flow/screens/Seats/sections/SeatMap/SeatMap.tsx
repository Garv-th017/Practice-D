import { useState } from 'react'
import { deckSeats, isSleeper, MAX_SEATS, setDemo, useDemo } from '../../../../kit/demoStore'
import './SeatMap.css'

export function SeatMap({ deck }: { deck: 'L' | 'U' }) {
  const { busId, seats } = useDemo()
  const [limitHit, setLimitHit] = useState(false)
  const sleeper = isSleeper(busId)

  const toggle = (name: string) => {
    if (seats.includes(name)) {
      setLimitHit(false)
      setDemo({ seats: seats.filter((s) => s !== name) })
    } else if (seats.length >= MAX_SEATS) {
      setLimitHit(true)
    } else {
      setDemo({ seats: [...seats, name] })
    }
  }

  return (
    <div className="seat-map">
      <span className="seat-map__driver">Driver</span>
      <div className={`seat-map__grid ${sleeper ? 'seat-map__grid--sleeper' : ''}`}>
        {deckSeats(busId, deck).map(({ name, state }) => {
          const selected = seats.includes(name)
          return (
            <button
              key={name}
              type="button"
              className={`seat-map__seat is-${state} ${selected ? 'is-selected' : ''}`}
              disabled={state === 'booked'}
              aria-pressed={selected}
              aria-label={`Seat ${name}${state === 'booked' ? ', booked' : state === 'ladies' ? ', women only' : ''}`}
              onClick={() => toggle(name)}
            >
              {name}
            </button>
          )
        })}
      </div>
      {limitHit && <p className="seat-map__limit">You can book up to {MAX_SEATS} seats at a time.</p>}
    </div>
  )
}
