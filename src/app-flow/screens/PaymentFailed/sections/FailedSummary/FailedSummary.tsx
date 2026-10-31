import { rupees } from '../../../../data'
import { fareOf, useDemo } from '../../../../kit/demoStore'
import './FailedSummary.css'

const methodNames: Record<string, string> = {
  upi: 'UPI',
  card: 'Debit or credit card',
  wallet: 'BusTopia Wallet',
  netbanking: 'Net banking',
}

export function FailedSummary() {
  const demo = useDemo()
  const { total } = fareOf(demo)

  const rows = [
    { label: 'Amount', value: rupees(total) },
    { label: 'Paid with', value: methodNames[demo.payMethod] ?? 'UPI' },
    { label: 'Reference', value: 'TXN-77310' },
    { label: 'Money taken', value: 'None' },
  ]

  return (
    <section className="k-section">
      <div className="k-card k-card--flush">
        {rows.map((r) => (
          <div key={r.label} className="failed-summary__row">
            <span className="k-muted">{r.label}</span>
            <b>{r.value}</b>
          </div>
        ))}
      </div>
      <p className="failed-summary__tip">Tip: UPI and cards usually work best. If money was taken by mistake, it is refunded automatically within 3 days.</p>
    </section>
  )
}
