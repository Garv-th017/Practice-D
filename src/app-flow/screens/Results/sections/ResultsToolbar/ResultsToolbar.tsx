import type { BusType } from '../../../../data'
import { setDemo, useDemo, type SortBy } from '../../../../kit/demoStore'
import { SegTabs } from '../../../../kit/SegTabs/SegTabs'
import './ResultsToolbar.css'

const quick: BusType[] = ['AC', 'Sleeper', 'Seater', 'Non-AC']

const sorts: { id: SortBy; label: string }[] = [
  { id: 'cheapest', label: 'Cheapest' },
  { id: 'fastest', label: 'Fastest' },
  { id: 'rating', label: 'Top rated' },
]

export function ResultsToolbar() {
  const { filters, sort } = useDemo()

  const toggle = (t: BusType) =>
    setDemo({
      filters: {
        ...filters,
        types: filters.types.includes(t) ? filters.types.filter((x) => x !== t) : [...filters.types, t],
      },
    })

  return (
    <div className="results-toolbar">
      <div className="k-scroll-x">
        {quick.map((t) => (
          <button
            key={t}
            type="button"
            className={`k-chip ${filters.types.includes(t) ? 'is-on' : ''}`}
            aria-pressed={filters.types.includes(t)}
            onClick={() => toggle(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <SegTabs label="Sort buses" items={sorts} active={sort} onChange={(id) => setDemo({ sort: id })} />
    </div>
  )
}
