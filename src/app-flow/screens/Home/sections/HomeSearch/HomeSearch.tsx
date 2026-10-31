import { Link } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { addDays, cityStop, formatDate, TODAY } from '../../../../data'
import { AppButton } from '../../../../kit/AppButton/AppButton'
import { setDemo, useDemo } from '../../../../kit/demoStore'
import './HomeSearch.css'

const quickDates = [
  { label: 'Today', offset: 0 },
  { label: 'Tomorrow', offset: 1 },
  { label: 'Day after', offset: 2 },
]

export function HomeSearch() {
  const { from, to, date } = useDemo()

  return (
    <section className="home-search">
      <h1 className="home-search__title">
        Where are you <span>heading</span> today?
      </h1>

      <div className="k-card home-search__route">
        <Link to="/app/city?field=from" className="home-search__field">
          <span className="home-search__dot" />
          <span className="k-grow">
            <span className="k-muted">From</span>
            <b>{from}</b>
            <span className="k-muted">{cityStop(from)}</span>
          </span>
        </Link>
        <div className="home-search__line" />
        <Link to="/app/city?field=to" className="home-search__field">
          <span className="home-search__dot home-search__dot--to" />
          <span className="k-grow">
            <span className="k-muted">To</span>
            <b>{to}</b>
            <span className="k-muted">{cityStop(to)}</span>
          </span>
        </Link>
        <button
          type="button"
          className="home-search__swap"
          aria-label="Swap cities"
          onClick={() => setDemo({ from: to, to: from })}
        >
          <Icon name="swap" size={15} strokeWidth={2.4} />
        </button>
      </div>

      <div className="home-search__dates">
        <Link to="/app/date" className="home-search__date">
          <Icon name="calendar" size={15} />
          <span className="k-grow">
            <span className="k-muted">Travel date</span>
            <b>{formatDate(date)}</b>
          </span>
        </Link>
        <div className="home-search__quick">
          {quickDates.map((q) => {
            const iso = addDays(TODAY, q.offset)
            return (
              <button
                key={q.label}
                type="button"
                className={`k-chip ${date === iso ? 'is-on' : ''}`}
                onClick={() => setDemo({ date: iso })}
              >
                {q.label}
              </button>
            )
          })}
        </div>
      </div>

      <AppButton to="/app/searching" icon={<Icon name="search" size={15} strokeWidth={2.4} />}>
        Search buses
      </AppButton>
    </section>
  )
}
