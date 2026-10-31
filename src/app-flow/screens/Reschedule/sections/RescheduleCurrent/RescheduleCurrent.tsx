import { Icon } from '../../../../../components/Icon/Icon'
import { findBus, formatDate } from '../../../../data'
import { useDemo } from '../../../../kit/demoStore'
import './RescheduleCurrent.css'

export function RescheduleCurrent() {
  const { from, to, date, busId, seats } = useDemo()
  const bus = findBus(busId)

  return (
    <section className="k-card reschedule-current">
      <span className="k-icon">
        <Icon name="ticket" size={16} />
      </span>
      <span className="k-grow">
        <b>
          {from} → {to}
        </b>
        <span className="k-muted">
          Now: {formatDate(date)} · {bus.depart} · {seats.join(', ')}
        </span>
      </span>
    </section>
  )
}
