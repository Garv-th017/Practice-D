import { Link } from 'react-router'
import './HomeOffers.css'

const offers = [
  { code: 'BUSFIRST', title: '₹120 off your first trip', tone: 'primary' },
  { code: 'SAVE10', title: '10% off weekend trips', tone: 'accent' },
  { code: 'WALLET50', title: '₹50 cashback with Wallet', tone: 'success' },
]

export function HomeOffers() {
  return (
    <section className="k-section">
      <div className="k-section__head">
        <span className="k-label">Offers for you</span>
        <Link to="/app/wallet" className="k-link">
          See all
        </Link>
      </div>
      <div className="k-scroll-x">
        {offers.map((o) => (
          <div key={o.code} className={`home-offer home-offer--${o.tone}`}>
            <b>{o.title}</b>
            <span className="home-offer__code">{o.code}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
