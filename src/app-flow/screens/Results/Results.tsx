import { Link } from 'react-router'
import { formatDate } from '../../data'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { activeFilterCount, filterBuses, useDemo } from '../../kit/demoStore'
import { ListRow } from '../../kit/ListRow/ListRow'
import { TopBar } from '../../kit/TopBar/TopBar'
import { ResultsDayStrip } from './sections/ResultsDayStrip/ResultsDayStrip'
import { ResultsFilterPill } from './sections/ResultsFilterPill/ResultsFilterPill'
import { ResultsList } from './sections/ResultsList/ResultsList'
import { ResultsToolbar } from './sections/ResultsToolbar/ResultsToolbar'
import './Results.css'

export function Results() {
  const { from, to, date, filters, sort } = useDemo()
  const list = filterBuses(filters, sort)

  return (
    <AppScreen bare>
      <TopBar
        back="/app/home"
        title={`${from} → ${to}`}
        subtitle={`${formatDate(date)} · ${list.length} buses`}
        action={
          <Link to="/app/home" className="results-edit">
            Edit
          </Link>
        }
      />
      <AppBody className="results__body">
        <ResultsDayStrip />
        <ResultsToolbar />
        <ResultsList buses={list} />
        <div className="k-card k-card--flush">
          <ListRow icon="bell" title="Get a fare alert" sub={`Tell me when ${from} → ${to} gets cheaper`} to="/app/fare-alerts" />
        </div>
      </AppBody>
      <ResultsFilterPill count={activeFilterCount(filters)} />
    </AppScreen>
  )
}
