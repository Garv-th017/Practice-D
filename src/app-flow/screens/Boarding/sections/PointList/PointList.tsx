import './PointList.css'

interface Point {
  name: string
  address: string
  time: string
}

interface PointListProps {
  label: string
  points: Point[]
  value: string
  onChange: (name: string) => void
}

export function PointList({ label, points, value, onChange }: PointListProps) {
  return (
    <section className="k-section point-list">
      <span className="k-label">{label}</span>
      <div className="point-list__items" role="radiogroup" aria-label={label}>
        {points.map((p) => {
          const on = p.name === value
          return (
            <button
              key={p.name}
              type="button"
              role="radio"
              aria-checked={on}
              className={`point-list__item ${on ? 'is-on' : ''}`}
              onClick={() => onChange(p.name)}
            >
              <span className="point-list__radio" />
              <span className="k-grow">
                <b>{p.name}</b>
                <span className="k-muted">{p.address}</span>
              </span>
              <b className="k-mono">{p.time}</b>
            </button>
          )
        })}
      </div>
    </section>
  )
}
