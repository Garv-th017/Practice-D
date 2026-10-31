import './RateTags.css'

const good = ['On time', 'Clean bus', 'Comfy seats', 'Polite staff', 'Safe driving', 'Good AC']
const bad = ['Late departure', 'Dirty bus', 'Rash driving', 'Rude staff', 'AC not working', 'Wrong pickup']

interface RateTagsProps {
  rating: number
  value: string[]
  onChange: (value: string[]) => void
}

export function RateTags({ rating, value, onChange }: RateTagsProps) {
  const tags = rating >= 4 ? good : bad

  return (
    <section className="k-section rate-tags">
      <span className="k-label">{rating >= 4 ? 'What went well?' : 'What went wrong?'}</span>
      <div className="k-chips">
        {tags.map((t) => {
          const on = value.includes(t)
          return (
            <button
              key={t}
              type="button"
              aria-pressed={on}
              className={`k-chip ${on ? 'is-on' : ''}`}
              onClick={() => onChange(on ? value.filter((x) => x !== t) : [...value, t])}
            >
              {t}
            </button>
          )
        })}
      </div>
    </section>
  )
}
