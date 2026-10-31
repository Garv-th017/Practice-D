import { Icon } from '../../../../../components/Icon/Icon'
import { cityStop, formatDuration, type Bus } from '../../../../data'
import { useDemo } from '../../../../kit/demoStore'
import { OperatorLogo } from '../../../../kit/OperatorLogo/OperatorLogo'
import './BusOverview.css'

export function BusOverview({ bus }: { bus: Bus }) {
  const { from, to } = useDemo()

  return (
    <section className="k-section">
      <div className="k-row k-row--start">
        <OperatorLogo name={bus.name} size={30} />
        <span className="k-chip k-chip--success">
          <Icon name="star" size={10} /> {bus.rating}
        </span>
        <span className="k-muted">{bus.reviews.toLocaleString('en-IN')} ratings</span>
        <span className={`bus-overview__seats ${bus.seatsLeft < 8 ? 'k-danger' : ''}`}>{bus.seatsLeft} seats left</span>
      </div>
      <div className="k-card bus-overview__times">
        <span className="bus-overview__end">
          <b className="k-mono">{bus.depart}</b>
          <span className="k-muted">{cityStop(from) || from}</span>
        </span>
        <span className="bus-overview__mid">
          <Icon name="bus" size={14} />
          <small>{formatDuration(bus.minutes)}</small>
        </span>
        <span className="bus-overview__end bus-overview__end--right">
          <b className="k-mono">{bus.arrive}</b>
          <span className="k-muted">{cityStop(to) || to}</span>
        </span>
      </div>
    </section>
  )
}
