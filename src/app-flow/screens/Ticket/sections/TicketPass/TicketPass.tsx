import { Icon } from '../../../../../components/Icon/Icon'
import { QrCode } from '../../../../../components/QrCode/QrCode'
import { findBus, formatDate, formatDuration } from '../../../../data'
import { PNR, useDemo } from '../../../../kit/demoStore'
import './TicketPass.css'

const code = (city: string) => city.replace('New ', '').slice(0, 3).toUpperCase()

export function TicketPass() {
  const { from, to, date, busId, seats, boarding, passengers, cancelled } = useDemo()
  const bus = findBus(busId)

  return (
    <article className={`ticket-pass ${cancelled ? 'is-cancelled' : ''}`}>
      <div className="ticket-pass__top">
        <div className="k-row">
          {cancelled ? (
            <span className="k-chip ticket-pass__status--cancelled">Cancelled</span>
          ) : (
            <span className="k-chip k-chip--success">
              <Icon name="check" size={10} strokeWidth={2.8} /> Confirmed
            </span>
          )}
          <span className="k-muted">{formatDate(date)}</span>
        </div>
        <div className="ticket-pass__route">
          <span>
            <b>{code(from)}</b>
            <small className="k-mono">{bus.depart}</small>
            <small className="k-muted">{from}</small>
          </span>
          <span className="ticket-pass__path">
            <Icon name="bus" size={16} />
            <small className="k-muted">{formatDuration(bus.minutes)}</small>
          </span>
          <span className="ticket-pass__end">
            <b>{code(to)}</b>
            <small className="k-mono">{bus.arrive}</small>
            <small className="k-muted">{to}</small>
          </span>
        </div>
      </div>

      <div className="ticket-pass__tear" />

      <dl className="ticket-pass__details">
        <div>
          <dt>Passengers</dt>
          <dd>{passengers.map((p) => p.name.split(' ')[0]).join(', ')}</dd>
        </div>
        <div>
          <dt>Seats</dt>
          <dd>{seats.join(', ')}</dd>
        </div>
        <div>
          <dt>Boarding</dt>
          <dd>{boarding}</dd>
        </div>
        <div>
          <dt>Bus</dt>
          <dd>{bus.name}</dd>
        </div>
      </dl>

      <div className="ticket-pass__qr">
        <QrCode value={`BUSTOPIA:${PNR}:${seats.join(',')}:${date}`} size={112} />
        <span className="k-mono ticket-pass__pnr">PNR · {PNR}</span>
      </div>
    </article>
  )
}
