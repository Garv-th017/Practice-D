import { rupees } from '../../../../data'
import { fareOf, useDemo } from '../../../../kit/demoStore'
import './FareBreakdown.css'

export function FareBreakdown() {
  const demo = useDemo()
  const f = fareOf(demo)

  return (
    <section className="k-section">
      <span className="k-label">Fare breakdown</span>
      <div className="k-card fare-breakdown">
        <div className="k-row">
          <span className="k-muted">
            Base fare ({f.seats} × {rupees(f.bus.price)})
          </span>
          <span>{rupees(f.base)}</span>
        </div>
        {f.discount > 0 && (
          <div className="k-row k-success">
            <span>Offer {demo.coupon}</span>
            <span>−{rupees(f.discount)}</span>
          </div>
        )}
        {f.insurance > 0 && (
          <div className="k-row">
            <span className="k-muted">Travel insurance</span>
            <span>{rupees(f.insurance)}</span>
          </div>
        )}
        <div className="k-row">
          <span className="k-muted">Taxes and fees</span>
          <span>{rupees(f.taxes)}</span>
        </div>
        <div className="k-divider" />
        <div className="k-row">
          <b>Total</b>
          <b className="k-price">{rupees(f.total)}</b>
        </div>
      </div>
    </section>
  )
}
