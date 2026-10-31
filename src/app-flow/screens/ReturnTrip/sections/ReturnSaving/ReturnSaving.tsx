import { Icon } from '../../../../../components/Icon/Icon'
import './ReturnSaving.css'

export function ReturnSaving() {
  return (
    <section className="return-saving">
      <span className="return-saving__icon">
        <Icon name="swap" size={16} />
      </span>
      <span className="k-grow">
        <b>Save ₹100 on your way back</b>
        <span className="return-saving__text">Round-trip price applied automatically. Same passengers.</span>
      </span>
    </section>
  )
}
