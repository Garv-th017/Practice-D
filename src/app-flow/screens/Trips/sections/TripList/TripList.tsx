import { Link } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { findBus, formatDate } from '../../../../data'
import { useDemo } from '../../../../kit/demoStore'
import './TripList.css'

export type TripTab = 'upcoming' | 'completed' | 'cancelled'

interface Trip {
  id: string
  route: string
  when: string
  bus: string
  status: string
  tone: 'success' | 'muted' | 'danger'
  to?: string
}

const past: Trip[] = [
  { id: 'p1', route: 'Agra → New Delhi', when: 'Sun, 18 Oct · 07:30', bus: 'Royal Express', status: 'Rate trip', tone: 'muted', to: '/app/rate' },
  { id: 'p2', route: 'New Delhi → Agra', when: 'Fri, 16 Oct · 06:15', bus: 'Volvo Sky', status: 'Rated 5★', tone: 'success' },
]

const oldCancelled: Trip = {
  id: 'c1',
  route: 'Pune → Goa',
  when: 'Sat, 3 Oct · 21:00',
  bus: 'Night Owl',
  status: 'Refunded ₹764',
  tone: 'danger',
}

export function TripList({ tab }: { tab: TripTab }) {
  const { from, to, date, busId, cancelled, returnTrip: booked } = useDemo()
  const bus = findBus(busId)
  const current: Trip = {
    id: 'current',
    route: `${from} → ${to}`,
    when: `${formatDate(date)} · ${bus.depart}`,
    bus: bus.name,
    status: cancelled ? 'Refund on the way' : 'Confirmed',
    tone: cancelled ? 'danger' : 'success',
    to: '/app/ticket',
  }
  const returnBus = booked ? findBus(booked.busId) : null
  const returnTrip: Trip = {
    id: 'return',
    route: `${to} → ${from}`,
    when: booked && returnBus ? `${formatDate(booked.date)} · ${returnBus.depart}` : 'Mon, 2 Nov · 18:30',
    bus: returnBus?.name ?? 'Sunset Travels',
    status: 'Confirmed',
    tone: 'success',
  }

  const lists: Record<TripTab, Trip[]> = {
    upcoming: cancelled ? [returnTrip] : [current, returnTrip],
    completed: past,
    cancelled: cancelled ? [current, oldCancelled] : [oldCancelled],
  }
  const trips = lists[tab]

  return (
    <div className="trip-list">
      {trips.map((t) => {
        const body = (
          <>
            <span className="k-icon">
              <Icon name="bus" size={15} />
            </span>
            <span className="k-grow">
              <b>{t.route}</b>
              <span className="k-muted">{t.when}</span>
              <span className="k-muted">{t.bus}</span>
            </span>
            <span className={`trip-list__status is-${t.tone}`}>{t.status}</span>
          </>
        )
        return t.to ? (
          <Link key={t.id} to={t.to} className="k-card trip-list__item is-link">
            {body}
          </Link>
        ) : (
          <div key={t.id} className="k-card trip-list__item">
            {body}
          </div>
        )
      })}
    </div>
  )
}
