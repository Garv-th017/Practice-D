import type { BusType } from '../../../../data'
import './FilterBusType.css'

const types: BusType[] = ['AC', 'Non-AC', 'Sleeper', 'Seater']

interface FilterBusTypeProps {
  value: BusType[]
  onChange: (value: BusType[]) => void
}

export function FilterBusType({ value, onChange }: FilterBusTypeProps) {
  return (
    <section className="k-section">
      <span className="k-label">Bus type</span>
      <div className="filter-types">
        {types.map((t) => {
          const on = value.includes(t)
          return (
            <button
              key={t}
              type="button"
              className={`k-chip filter-types__chip ${on ? 'is-on' : ''}`}
              aria-pressed={on}
              onClick={() => onChange(on ? value.filter((x) => x !== t) : [...value, t])}
            >
              {t}
            </button>
          )
        })}
      </div>
    </section>
  )
}
