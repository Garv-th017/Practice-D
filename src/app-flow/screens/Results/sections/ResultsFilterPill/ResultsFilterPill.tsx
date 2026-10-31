import { Link } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import './ResultsFilterPill.css'

/** Floating button in the thumb zone; the most used action on a results list */
export function ResultsFilterPill({ count }: { count: number }) {
  return (
    <Link to="/app/filters" className="filter-pill">
      <Icon name="sliders" size={15} />
      Sort and filter
      {count > 0 && <span className="filter-pill__count">{count}</span>}
    </Link>
  )
}
