import { Icon } from '../../../../../components/Icon/Icon'
import { formatDate, rupees } from '../../../../data'
import { useDemo } from '../../../../kit/demoStore'
import './PayAmount.css'

export function PayAmount({ total }: { total: number }) {
  const { from, to, date, seats } = useDemo()

  return (
    <section className="pay-amount">
      <span className="k-muted">Amount to pay</span>
      <b className="pay-amount__value">{rupees(total)}</b>
      <span className="k-muted">
        {from} → {to} · {formatDate(date)} · {seats.length} seat{seats.length === 1 ? '' : 's'}
      </span>
      <span className="pay-amount__safe">
        <Icon name="shield" size={13} /> Payments are encrypted and secure
      </span>
    </section>
  )
}
