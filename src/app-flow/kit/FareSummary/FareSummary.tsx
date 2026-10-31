import { useState } from 'react'
import { Icon } from '../../../components/Icon/Icon'
import { rupees } from '../../data'
import { fareOf, useDemo } from '../demoStore'
import './FareSummary.css'

/** Sticky total for booking steps; tap to see the full fare breakdown. */
export function FareSummary() {
  const demo = useDemo()
  const [open, setOpen] = useState(false)

  if (!demo.seats.length) {
    return (
      <span className="fare-summary is-empty">
        <small>No seats yet</small>
        <b>₹0</b>
      </span>
    )
  }

  const f = fareOf(demo)

  return (
    <>
      <button type="button" className="fare-summary" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <small>
          {f.seats} seat{f.seats === 1 ? '' : 's'} · incl. taxes
        </small>
        <b>
          {rupees(f.total)}
          <Icon name="chevronRight" size={14} className={`fare-summary__chev ${open ? 'is-open' : ''}`} />
        </b>
      </button>
      {open && (
        <div className="fare-summary__panel" role="dialog" aria-label="Fare details">
          <div className="k-row">
            <span className="k-muted">
              Fare ({f.seats} × {rupees(f.bus.price)})
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
      )}
    </>
  )
}
