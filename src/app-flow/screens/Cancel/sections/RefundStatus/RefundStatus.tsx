import { Icon } from '../../../../../components/Icon/Icon'
import { rupees } from '../../../../data'
import './RefundStatus.css'

const steps = [
  { title: 'Cancellation confirmed', sub: 'Just now', done: true },
  { title: 'Refund started', sub: 'Sent to your UPI account', done: true },
  { title: 'Money in your account', sub: 'Usually by tomorrow', done: false },
]

export function RefundStatus({ seats, refund }: { seats: string[]; refund: number }) {
  return (
    <section className="refund-status">
      <div className="refund-status__hero">
        <span className="refund-status__badge">
          <Icon name="check" size={28} strokeWidth={3} />
        </span>
        <b>{rupees(refund)} is on its way</b>
        <span className="k-muted">
          Seat{seats.length === 1 ? '' : 's'} {seats.join(', ')} cancelled
        </span>
      </div>
      <ol className="refund-status__steps">
        {steps.map((s) => (
          <li key={s.title} className={s.done ? 'is-done' : ''}>
            <span className="refund-status__dot">{s.done && <Icon name="check" size={10} strokeWidth={3} />}</span>
            <span className="k-grow">
              <b>{s.title}</b>
              <span className="k-muted">{s.sub}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
