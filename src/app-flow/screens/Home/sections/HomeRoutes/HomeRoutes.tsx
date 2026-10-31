import { useNavigate } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { setDemo } from '../../../../kit/demoStore'
import './HomeRoutes.css'

const recent = [
  { from: 'New Delhi', to: 'Jaipur' },
  { from: 'Pune', to: 'Goa' },
  { from: 'Agra', to: 'New Delhi' },
]

const popular = [
  { from: 'New Delhi', to: 'Manali', time: '12h 30m', price: '1,199' },
  { from: 'Mumbai', to: 'Goa', time: '11h 10m', price: '899' },
  { from: 'Bengaluru', to: 'Hyderabad', time: '9h 40m', price: '999' },
]

export function HomeRoutes() {
  const navigate = useNavigate()
  const search = (from: string, to: string) => {
    setDemo({ from, to })
    navigate('/app/searching')
  }

  return (
    <>
      <section className="k-section">
        <span className="k-label">Recent searches</span>
        <div className="k-scroll-x">
          {recent.map((r) => (
            <button key={r.from + r.to} type="button" className="k-chip" onClick={() => search(r.from, r.to)}>
              <Icon name="clock" size={12} />
              {r.from} → {r.to}
            </button>
          ))}
        </div>
      </section>

      <section className="k-section">
        <span className="k-label">Popular routes</span>
        <div className="k-card k-card--flush">
          {popular.map((p) => (
            <button key={p.to} type="button" className="home-route" onClick={() => search(p.from, p.to)}>
              <span className="k-icon">
                <Icon name="bus" size={15} />
              </span>
              <span className="k-grow">
                <b>
                  {p.from} → {p.to}
                </b>
                <span className="k-muted">{p.time}</span>
              </span>
              <span className="home-route__price">
                <span className="k-muted">from</span>
                <b>₹{p.price}</b>
              </span>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}
