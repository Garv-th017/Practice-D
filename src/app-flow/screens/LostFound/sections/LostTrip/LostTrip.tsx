import './LostTrip.css'

const trips = [
  { id: 't1', route: 'Agra → New Delhi', when: 'Sun, 18 Oct · Royal Express' },
  { id: 't2', route: 'New Delhi → Agra', when: 'Fri, 16 Oct · Volvo Sky' },
]

interface LostTripProps {
  value: string
  onChange: (id: string) => void
}

export function LostTrip({ value, onChange }: LostTripProps) {
  return (
    <section className="k-section">
      <span className="k-label">Which trip?</span>
      <div className="lost-trips" role="radiogroup" aria-label="Trip">
        {trips.map((t) => {
          const on = t.id === value
          return (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={on}
              className={`lost-trip ${on ? 'is-on' : ''}`}
              onClick={() => onChange(t.id)}
            >
              <span className="lost-trip__radio" />
              <span className="k-grow">
                <b>{t.route}</b>
                <span className="k-muted">{t.when}</span>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
