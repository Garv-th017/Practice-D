import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { fareForDay, isoDate, toDate, TODAY } from '../../../../data'
import { setDemo, useDemo } from '../../../../kit/demoStore'
import './DateCalendar.css'

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export function DateCalendar() {
  const navigate = useNavigate()
  const { date } = useDemo()
  const [month, setMonth] = useState(() => {
    const d = toDate(date)
    return new Date(d.getFullYear(), d.getMonth(), 1)
  })

  const first = toDate(TODAY)
  const canGoBack = month > new Date(first.getFullYear(), first.getMonth(), 1)
  const offset = (month.getDay() + 6) % 7
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()
  const days = Array.from({ length: daysInMonth }, (_, i) => isoDate(new Date(month.getFullYear(), month.getMonth(), i + 1)))
  const bookable = days.filter((d) => d >= TODAY)
  const lowest = Math.min(...bookable.map(fareForDay))

  const shift = (n: number) => setMonth(new Date(month.getFullYear(), month.getMonth() + n, 1))

  return (
    <div className="k-card date-cal">
      <div className="date-cal__head">
        <button type="button" className="date-cal__nav" aria-label="Previous month" disabled={!canGoBack} onClick={() => shift(-1)}>
          <Icon name="chevronLeft" size={16} />
        </button>
        <b>{month.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}</b>
        <button type="button" className="date-cal__nav" aria-label="Next month" onClick={() => shift(1)}>
          <Icon name="chevronRight" size={16} />
        </button>
      </div>

      <div className="date-cal__grid">
        {WEEKDAYS.map((w) => (
          <span key={w} className="date-cal__weekday">
            {w}
          </span>
        ))}
        {Array.from({ length: offset }, (_, i) => (
          <span key={`gap-${i}`} />
        ))}
        {days.map((iso) => {
          const past = iso < TODAY
          const fare = fareForDay(iso)
          return (
            <button
              key={iso}
              type="button"
              disabled={past}
              className={`date-cal__day ${iso === date ? 'is-on' : ''} ${!past && fare === lowest ? 'is-low' : ''}`}
              onClick={() => {
                setDemo({ date: iso })
                navigate('/app/home')
              }}
            >
              <b>{toDate(iso).getDate()}</b>
              {!past && <small>₹{fare}</small>}
            </button>
          )
        })}
      </div>

      <div className="date-cal__legend">
        <span className="date-cal__swatch" /> Lowest fare this month
      </div>
    </div>
  )
}
