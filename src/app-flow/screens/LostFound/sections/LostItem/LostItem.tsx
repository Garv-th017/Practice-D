import './LostItem.css'

const items = ['Bag', 'Phone', 'Wallet', 'Documents', 'Headphones', 'Something else']

interface LostItemProps {
  value: string
  onChange: (value: string) => void
}

export function LostItem({ value, onChange }: LostItemProps) {
  return (
    <section className="k-section">
      <span className="k-label">What did you lose?</span>
      <div className="lost-items" role="radiogroup" aria-label="Item">
        {items.map((i) => (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={value === i}
            className={`k-chip lost-items__chip ${value === i ? 'is-on' : ''}`}
            onClick={() => onChange(i)}
          >
            {i}
          </button>
        ))}
      </div>
    </section>
  )
}
