import { useNavigate } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { boardingPoints, dropPoints, formatDuration, rupees, type Bus } from '../../../../data'
import { AppButton } from '../../../../kit/AppButton/AppButton'
import { defaultFilters, setDemo, useDemo } from '../../../../kit/demoStore'
import { OperatorLogo } from '../../../../kit/OperatorLogo/OperatorLogo'
import './ResultsList.css'

export function ResultsList({ buses }: { buses: Bus[] }) {
  const navigate = useNavigate()
  const { busId } = useDemo()

  if (!buses.length) {
    return (
      <div className="k-empty">
        <Icon name="bus" size={26} />
        <b>No buses match your filters</b>
        <span>Try removing a filter to see more options.</span>
        <AppButton variant="outline" onClick={() => setDemo({ filters: defaultFilters })}>
          Clear filters
        </AppButton>
      </div>
    )
  }

  return (
    <div className="results-list">
      {buses.map((b) => (
        <button
          key={b.id}
          type="button"
          className="k-card results-bus"
          onClick={() => {
            // A different bus has a different seat map, so start the seat choice fresh
            setDemo(b.id === busId ? { busId: b.id } : { busId: b.id, seats: [] })
            navigate('/app/bus')
          }}
        >
          <span className="k-row results-bus__head">
            <OperatorLogo name={b.name} size={34} />
            <span className="k-grow">
              <b>{b.name}</b>
              <span className="k-muted">{b.type}</span>
            </span>
            <span className="results-bus__price">
              <span className="k-price">{rupees(b.price)}</span>
              <small>per seat</small>
            </span>
          </span>
          <span className="k-row">
            <span className="k-mono">{b.depart}</span>
            <span className="results-bus__line" />
            <span className="k-muted">{formatDuration(b.minutes)}</span>
            <span className="results-bus__line" />
            <span className="k-mono">{b.arrive}</span>
          </span>
          <span className="results-bus__stops">
            {boardingPoints[0].name} → {dropPoints[0].name}
          </span>
          <span className="k-row">
            <span className="k-row k-row--start">
              <span className="k-chip k-chip--success">
                <Icon name="star" size={10} /> {b.rating}
              </span>
              {b.freeCancel && <span className="results-bus__free">Free cancellation</span>}
            </span>
            <span className={`results-bus__seats ${b.seatsLeft < 8 ? 'is-low' : ''}`}>{b.seatsLeft} left</span>
          </span>
        </button>
      ))}
    </div>
  )
}
