import { Icon } from '../../../../../components/Icon/Icon'
import type { Passenger } from '../../../../kit/demoStore'
import './SavedTravellers.css'

const saved: Passenger[] = [
  { name: 'Aarav Kumar', age: '28', gender: 'Male' },
  { name: 'Priya Kumar', age: '26', gender: 'Female' },
  { name: 'Rohan Mehta', age: '31', gender: 'Male' },
]

interface SavedTravellersProps {
  used: string[]
  onPick: (p: Passenger) => void
}

export function SavedTravellers({ used, onPick }: SavedTravellersProps) {
  return (
    <section className="k-section">
      <div className="k-section__head">
        <span className="k-label">Saved travellers</span>
        <span className="k-muted">Tap to fill</span>
      </div>
      <div className="k-scroll-x">
        {saved.map((p) => {
          const on = used.includes(p.name)
          return (
            <button key={p.name} type="button" className={`k-chip saved-traveller ${on ? 'is-on' : ''}`} onClick={() => onPick(p)}>
              {on && <Icon name="check" size={11} strokeWidth={2.8} />}
              {p.name}
            </button>
          )
        })}
      </div>
    </section>
  )
}
