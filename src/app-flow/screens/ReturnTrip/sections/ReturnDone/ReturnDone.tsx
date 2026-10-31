import { Icon } from '../../../../../components/Icon/Icon'
import { findBus, formatDate } from '../../../../data'
import { useDemo } from '../../../../kit/demoStore'
import './ReturnDone.css'

export function ReturnDone() {
  const { from, to, returnTrip } = useDemo()
  if (!returnTrip) return null
  const bus = findBus(returnTrip.busId)

  return (
    <section className="return-done">
      <span className="return-done__badge">
        <Icon name="check" size={30} strokeWidth={3} />
      </span>
      <b>
        {to} → {from}
      </b>
      <p className="k-muted">
        {formatDate(returnTrip.date)} · {bus.depart} · {bus.name}. Same passengers, ₹100 round-trip saving applied.
      </p>
    </section>
  )
}
