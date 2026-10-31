import { addDays, fareForDay, toDate, TODAY } from '../../../../data'
import { setDemo, useDemo } from '../../../../kit/demoStore'
import './ResultsDayStrip.css'

/** Hop to a nearby day without going back to Home; each day shows its lowest fare */
export function ResultsDayStrip() {
  const { date } = useDemo()
  const start = addDays(date, -2) < TODAY ? TODAY : addDays(date, -2)
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i))
  const lowest = Math.min(...days.map(fareForDay))

  return (
    <div className="k-scroll-x day-strip" role="radiogroup" aria-label="Travel date">
      {days.map((iso) => {
        const d = toDate(iso)
        const on = iso === date
        const fare = fareForDay(iso)
        return (
          <button
            key={iso}
            type="button"
            role="radio"
            aria-checked={on}
            className={`day-strip__day ${on ? 'is-on' : ''}`}
            onClick={() => setDemo({ date: iso })}
          >
            <small>
              {d.toLocaleDateString('en-IN', { weekday: 'short' })} {d.getDate()}
            </small>
            <b className={fare === lowest && !on ? 'is-low' : ''}>₹{fare}</b>
          </button>
        )
      })}
    </div>
  )
}
