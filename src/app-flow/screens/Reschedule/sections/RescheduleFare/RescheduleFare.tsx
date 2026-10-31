import { rupees } from '../../../../data'
import './RescheduleFare.css'

interface RescheduleFareProps {
  seats: number
  difference: number
  fee: number
}

export function RescheduleFare({ seats, difference, fee }: RescheduleFareProps) {
  const total = difference + fee

  return (
    <section className="k-section">
      <span className="k-label">What it costs</span>
      <div className="k-card reschedule-fare">
        <div className="k-row">
          <span className="k-muted">
            Fare difference ({seats} seat{seats === 1 ? '' : 's'})
          </span>
          <span className={difference < 0 ? 'k-success' : ''}>
            {difference < 0 ? '−' : '+'}
            {rupees(Math.abs(difference))}
          </span>
        </div>
        <div className="k-row">
          <span className="k-muted">Change fee</span>
          <span>+{rupees(fee)}</span>
        </div>
        <div className="k-divider" />
        <div className="k-row">
          <b>{total >= 0 ? 'You pay' : 'You get back'}</b>
          <b className={`k-price ${total < 0 ? 'k-success' : ''}`}>{rupees(Math.abs(total))}</b>
        </div>
      </div>
      <p className="reschedule-fare__note">Cheaper days refund the difference to your BusTopia Wallet.</p>
    </section>
  )
}
