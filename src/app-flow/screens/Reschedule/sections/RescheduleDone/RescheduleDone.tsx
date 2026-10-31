import { Icon } from '../../../../../components/Icon/Icon'
import { formatDate } from '../../../../data'
import './RescheduleDone.css'

export function RescheduleDone({ date }: { date: string }) {
  return (
    <section className="reschedule-done">
      <span className="reschedule-done__badge">
        <Icon name="calendar" size={30} />
      </span>
      <b>Your trip is now on {formatDate(date)}</b>
      <p className="k-muted">Same bus, seats and boarding point. Your ticket and QR code are updated.</p>
    </section>
  )
}
