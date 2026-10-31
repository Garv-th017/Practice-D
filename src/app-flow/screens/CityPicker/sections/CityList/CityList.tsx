import { useNavigate } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { cities } from '../../../../data'
import { setDemo, useDemo } from '../../../../kit/demoStore'
import { ListRow } from '../../../../kit/ListRow/ListRow'
import './CityList.css'

interface CityListProps {
  field: 'from' | 'to'
  query: string
}

const recent = ['New Delhi', 'Jaipur', 'Agra']

export function CityList({ field, query }: CityListProps) {
  const navigate = useNavigate()
  const demo = useDemo()

  const choose = (name: string) => {
    const other = field === 'from' ? 'to' : 'from'
    // Picking the city already on the other side swaps them
    setDemo(demo[other] === name ? { [field]: name, [other]: demo[field] } : { [field]: name })
    navigate('/app/home')
  }

  const q = query.trim().toLowerCase()
  const matches = cities.filter((c) => `${c.name} ${c.state} ${c.stop}`.toLowerCase().includes(q))

  if (q) {
    return matches.length ? (
      <div className="k-card k-card--flush">
        {matches.map((c) => (
          <ListRow key={c.name} icon="pin" title={c.name} sub={`${c.stop}, ${c.state}`} onClick={() => choose(c.name)} />
        ))}
      </div>
    ) : (
      <div className="k-empty">
        <Icon name="search" size={22} />
        <span>No city matches “{query}”</span>
      </div>
    )
  }

  return (
    <>
      <div className="k-card k-card--flush">
        <ListRow icon="crosshair" title="Use current location" sub="New Delhi" onClick={() => choose('New Delhi')} />
      </div>

      <section className="k-section">
        <span className="k-label">Recent</span>
        <div className="k-chips">
          {recent.map((name) => (
            <button key={name} type="button" className="k-chip" onClick={() => choose(name)}>
              <Icon name="clock" size={12} /> {name}
            </button>
          ))}
        </div>
      </section>

      <section className="k-section">
        <span className="k-label">Popular cities</span>
        <div className="k-card k-card--flush city-list">
          {cities.map((c) => (
            <ListRow
              key={c.name}
              title={c.name}
              sub={c.state}
              onClick={() => choose(c.name)}
              right={demo[field] === c.name ? <span className="k-chip is-on">Selected</span> : undefined}
            />
          ))}
        </div>
      </section>
    </>
  )
}
