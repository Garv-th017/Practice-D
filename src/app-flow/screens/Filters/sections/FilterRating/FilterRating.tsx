import { SegTabs } from '../../../../kit/SegTabs/SegTabs'
import './FilterRating.css'

const options = [
  { id: '0', label: 'Any' },
  { id: '4', label: '4.0+' },
  { id: '4.5', label: '4.5+' },
]

interface FilterRatingProps {
  value: number
  onChange: (value: number) => void
}

export function FilterRating({ value, onChange }: FilterRatingProps) {
  return (
    <section className="k-section filter-rating">
      <span className="k-label">Rating</span>
      <SegTabs label="Minimum rating" items={options} active={String(value)} onChange={(id) => onChange(Number(id))} />
    </section>
  )
}
