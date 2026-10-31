import './SegTabs.css'

interface SegTabsProps<T extends string> {
  items: { id: T; label: string }[]
  active: T
  onChange: (id: T) => void
  label: string
}

export function SegTabs<T extends string>({ items, active, onChange, label }: SegTabsProps<T>) {
  return (
    <div className="seg-tabs" role="group" aria-label={label}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={item.id === active ? 'is-on' : ''}
          aria-pressed={item.id === active}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
