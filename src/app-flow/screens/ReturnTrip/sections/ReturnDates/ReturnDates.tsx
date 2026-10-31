import { addDays, toDate } from '../../../../data'
import './ReturnDates.css'

interface ReturnDatesProps {
  from: string
  value: string
  onChange: (iso: string) => void
}

export function ReturnDates({ from, value, onChange }: ReturnDatesProps) {
  const days = Array.from({ length: 6 }, (_, i) => addDays(from, i + 1))

  return (
    <section className="k-section">
      <span className="k-label">Return date</span>
      <div className="k-scroll-x" role="radiogroup" aria-label="Return date">
        {days.map((iso) => {
          const d = toDate(iso)
          const on = iso === value
          return (
            <button
              key={iso}
              type="button"
              role="radio"
              aria-checked={on}
              className={`return-date ${on ? 'is-on' : ''}`}
              onClick={() => onChange(iso)}
            >
              <small>{d.toLocaleDateString('en-IN', { weekday: 'short' })}</small>
              <b>{d.getDate()}</b>
              <small>{d.toLocaleDateString('en-IN', { month: 'short' })}</small>
            </button>
          )
        })}
      </div>
    </section>
  )
}
