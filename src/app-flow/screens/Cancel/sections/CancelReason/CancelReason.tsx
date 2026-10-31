import './CancelReason.css'

const reasons = ['Change of plans', 'Found a better option', 'Booked by mistake', 'Bus timing changed', 'Something else']

interface CancelReasonProps {
  value: string
  onChange: (value: string) => void
}

export function CancelReason({ value, onChange }: CancelReasonProps) {
  return (
    <section className="k-section">
      <span className="k-label">Why are you cancelling?</span>
      <div className="k-chips" role="radiogroup" aria-label="Reason">
        {reasons.map((r) => (
          <button
            key={r}
            type="button"
            role="radio"
            aria-checked={value === r}
            className={`k-chip cancel-reason ${value === r ? 'is-on' : ''}`}
            onClick={() => onChange(r)}
          >
            {r}
          </button>
        ))}
      </div>
    </section>
  )
}
