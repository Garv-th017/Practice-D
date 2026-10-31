import { Icon } from '../../../../../components/Icon/Icon'
import { buses, formatDuration, rupees } from '../../../../data'
import './ReturnBuses.css'

const options = ['sunset', 'nightowl', 'royal']

interface ReturnBusesProps {
  value: string
  onChange: (id: string) => void
}

export function ReturnBuses({ value, onChange }: ReturnBusesProps) {
  const list = buses.filter((b) => options.includes(b.id))

  return (
    <section className="k-section">
      <span className="k-label">Choose a bus</span>
      <div className="return-buses" role="radiogroup" aria-label="Return bus">
        {list.map((b) => {
          const on = b.id === value
          return (
            <button
              key={b.id}
              type="button"
              role="radio"
              aria-checked={on}
              className={`return-bus ${on ? 'is-on' : ''}`}
              onClick={() => onChange(b.id)}
            >
              <span className="k-grow">
                <b>{b.name}</b>
                <span className="k-muted">
                  {b.depart} → {b.arrive} · {formatDuration(b.minutes)}
                </span>
              </span>
              <span className="return-bus__price">
                <span className="k-chip k-chip--success">
                  <Icon name="star" size={10} /> {b.rating}
                </span>
                <b>{rupees(b.price)}</b>
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
