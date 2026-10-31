import type { Bus } from '../../../../data'
import './BusPolicy.css'

export function BusPolicy({ bus }: { bus: Bus }) {
  const rows = bus.freeCancel
    ? [
        { when: 'More than 6 hrs before', refund: '100%' },
        { when: '2 to 6 hrs before', refund: '50%' },
        { when: 'Less than 2 hrs before', refund: 'No refund' },
      ]
    : [
        { when: 'More than 24 hrs before', refund: '90%' },
        { when: '6 to 24 hrs before', refund: '50%' },
        { when: 'Less than 6 hrs before', refund: 'No refund' },
      ]

  return (
    <section className="k-section">
      <span className="k-label">Cancellation policy</span>
      <div className="k-card k-card--flush">
        {rows.map((r) => (
          <div key={r.when} className="bus-policy__row">
            <span>{r.when}</span>
            <b className={r.refund === 'No refund' ? 'k-danger' : 'k-success'}>{r.refund}</b>
          </div>
        ))}
      </div>
    </section>
  )
}
