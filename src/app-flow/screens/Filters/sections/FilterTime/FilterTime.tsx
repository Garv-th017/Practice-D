import type { TimeSlot } from '../../../../data'
import './FilterTime.css'

const slots: { id: TimeSlot; label: string; range: string }[] = [
  { id: 'morning', label: 'Morning', range: '6 am – 12 pm' },
  { id: 'afternoon', label: 'Afternoon', range: '12 – 5 pm' },
  { id: 'evening', label: 'Evening', range: '5 – 9 pm' },
  { id: 'night', label: 'Night', range: '9 pm – 6 am' },
]

interface FilterTimeProps {
  value: TimeSlot[]
  onChange: (value: TimeSlot[]) => void
}

export function FilterTime({ value, onChange }: FilterTimeProps) {
  return (
    <section className="k-section">
      <span className="k-label">Departure time</span>
      <div className="filter-time">
        {slots.map((s) => {
          const on = value.includes(s.id)
          return (
            <button
              key={s.id}
              type="button"
              className={`filter-time__slot ${on ? 'is-on' : ''}`}
              aria-pressed={on}
              onClick={() => onChange(on ? value.filter((x) => x !== s.id) : [...value, s.id])}
            >
              <b>{s.label}</b>
              <small>{s.range}</small>
            </button>
          )
        })}
      </div>
    </section>
  )
}
