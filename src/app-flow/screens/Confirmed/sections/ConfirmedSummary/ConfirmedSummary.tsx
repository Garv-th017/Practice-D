import { formatDate, rupees } from '../../../../data'
import { fareOf, PNR, useDemo } from '../../../../kit/demoStore'
import './ConfirmedSummary.css'

export function ConfirmedSummary() {
  const demo = useDemo()
  const { bus, total } = fareOf(demo)

  const rows = [
    { label: 'Booking ID', value: PNR, mono: true },
    { label: 'Route', value: `${demo.from} → ${demo.to}` },
    { label: 'Date', value: `${formatDate(demo.date)} · ${bus.depart}` },
    { label: 'Bus', value: bus.name },
    { label: 'Seats', value: demo.seats.join(', ') },
    { label: 'Boarding', value: demo.boarding },
    { label: 'Paid', value: rupees(total) },
  ]

  return (
    <section className="k-card k-card--flush confirmed-summary">
      {rows.map((r) => (
        <div key={r.label} className="confirmed-summary__row">
          <span className="k-muted">{r.label}</span>
          <b className={r.mono ? 'k-mono' : ''}>{r.value}</b>
        </div>
      ))}
    </section>
  )
}
