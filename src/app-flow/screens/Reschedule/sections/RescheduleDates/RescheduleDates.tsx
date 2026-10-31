import { addDays, fareForDay, toDate } from '../../../../data'
import './RescheduleDates.css'

interface RescheduleDatesProps {
  from: string
  value: string
  onChange: (iso: string) => void
}

export function RescheduleDates({ from, value, onChange }: RescheduleDatesProps) {
  const days = Array.from({ length: 7 }, (_, i) => addDays(from, i + 1))

  return (
    <section className="k-section">
      <span className="k-label">Pick a new date</span>
      <div className="k-scroll-x reschedule-dates" role="radiogroup" aria-label="New date">
        {days.map((iso) => {
          const d = toDate(iso)
          const on = iso === value
          return (
            <button
              key={iso}
              type="button"
              role="radio"
              aria-checked={on}
              className={`reschedule-date ${on ? 'is-on' : ''}`}
              onClick={() => onChange(iso)}
            >
              <small>{d.toLocaleDateString('en-IN', { weekday: 'short' })}</small>
              <b>{d.getDate()}</b>
              <small>₹{fareForDay(iso)}</small>
            </button>
          )
        })}
      </div>
    </section>
  )
}
