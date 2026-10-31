import './TabPills.css'

export interface TabPillItem<T extends string> {
  id: T
  label: string
  count?: number
}

interface TabPillsProps<T extends string> {
  items: TabPillItem<T>[]
  active: T
  onChange: (id: T) => void
  label: string
  className?: string
}

export function TabPills<T extends string>({ items, active, onChange, label, className = '' }: TabPillsProps<T>) {
  return (
    <div className={`tab-pills ${className}`} role="group" aria-label={label}>
      {items.map((t) => (
        <button
          key={t.id}
          type="button"
          className="tab-pills__item"
          aria-pressed={active === t.id}
          onClick={() => onChange(t.id)}
        >
          {t.label}
          {t.count !== undefined && <span>{t.count}</span>}
        </button>
      ))}
    </div>
  )
}
