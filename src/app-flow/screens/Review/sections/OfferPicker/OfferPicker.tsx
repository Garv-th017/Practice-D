import { Icon } from '../../../../../components/Icon/Icon'
import { coupons, rupees } from '../../../../data'
import { setDemo, useDemo } from '../../../../kit/demoStore'
import './OfferPicker.css'

export function OfferPicker({ base }: { base: number }) {
  const { coupon } = useDemo()

  return (
    <section className="k-section">
      <span className="k-label">Offers</span>
      {coupons.map((c) => {
        const on = coupon === c.code
        return (
          <div key={c.code} className={`offer-row ${on ? 'is-on' : ''}`}>
            <span className="k-icon">
              <Icon name="percent" size={15} />
            </span>
            <span className="k-grow">
              <b className="k-mono">{c.code}</b>
              <span className="k-muted">{on ? `You save ${rupees(c.off(base))}` : c.title}</span>
            </span>
            <button type="button" className="k-link offer-row__btn" onClick={() => setDemo({ coupon: on ? null : c.code })}>
              {on ? 'Remove' : 'Apply'}
            </button>
          </div>
        )
      })}
    </section>
  )
}
