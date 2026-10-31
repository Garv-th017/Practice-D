import { Icon } from '../../../../../components/Icon/Icon'
import { setDemo, useDemo } from '../../../../kit/demoStore'
import { Toggle } from '../../../../kit/Toggle/Toggle'
import './InsuranceOption.css'

export function InsuranceOption({ seats }: { seats: number }) {
  const { insurance } = useDemo()

  return (
    <section className={`k-card insurance ${insurance ? 'is-on' : ''}`}>
      <div className="k-row">
        <span className="k-row k-row--start">
          <span className="k-icon">
            <Icon name="shield" size={15} />
          </span>
          <span className="k-grow">
            <b>Travel insurance</b>
            <span className="k-muted">₹19 per seat · ₹{19 * seats} total</span>
          </span>
        </span>
        <Toggle label="Add travel insurance" checked={insurance} onChange={(v) => setDemo({ insurance: v })} />
      </div>
      <p className="insurance__text">Covers accidents, delays over 3 hours and lost luggage, up to ₹5 lakh.</p>
    </section>
  )
}
