import './NotificationFilters.css'

export type NoticeFilter = 'all' | 'trip' | 'offer'

const filters: { id: NoticeFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'trip', label: 'Trips' },
  { id: 'offer', label: 'Offers' },
]

interface NotificationFiltersProps {
  value: NoticeFilter
  onChange: (value: NoticeFilter) => void
  counts: Record<NoticeFilter, number>
}

export function NotificationFilters({ value, onChange, counts }: NotificationFiltersProps) {
  return (
    <div className="notice-filters" role="group" aria-label="Show notifications">
      {filters.map((f) => (
        <button
          key={f.id}
          type="button"
          aria-pressed={value === f.id}
          className={`k-chip notice-filters__chip ${value === f.id ? 'is-on' : ''}`}
          onClick={() => onChange(f.id)}
        >
          {f.label}
          <span className="notice-filters__count">{counts[f.id]}</span>
        </button>
      ))}
    </div>
  )
}
