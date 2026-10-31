import { useNavigate } from 'react-router'
import { addDays, toDate, TODAY } from '../../../../data'
import { setDemo, useDemo } from '../../../../kit/demoStore'
import './DateQuick.css'

/* Days until next Sunday; if that is tomorrow, the "Tomorrow" chip already covers it */
const daysToSunday = (7 - toDate(TODAY).getDay()) % 7 || 7
const quick = [
  { label: 'Today', offset: 0 },
  { label: 'Tomorrow', offset: 1 },
  ...(daysToSunday > 1 ? [{ label: 'This Sunday', offset: daysToSunday }] : []),
  { label: 'Next week', offset: 7 },
]

export function DateQuick() {
  const navigate = useNavigate()
  const { date } = useDemo()

  return (
    <div className="k-chips date-quick">
      {quick.map((q) => {
        const iso = addDays(TODAY, q.offset)
        return (
          <button
            key={q.label}
            type="button"
            className={`k-chip ${date === iso ? 'is-on' : ''}`}
            onClick={() => {
              setDemo({ date: iso })
              navigate('/app/home')
            }}
          >
            {q.label}
          </button>
        )
      })}
    </div>
  )
}
