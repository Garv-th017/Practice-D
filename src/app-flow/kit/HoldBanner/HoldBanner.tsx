import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { Icon } from '../../../components/Icon/Icon'
import { usePreviewMode } from '../previewMode'
import './HoldBanner.css'

const HOLD_SECONDS = 9 * 60 + 59

/** Seats are held while the rider checks out; counts down once a second. */
export function HoldBanner() {
  const preview = usePreviewMode()
  const [left, setLeft] = useState(HOLD_SECONDS)

  useEffect(() => {
    if (preview || left === 0) return
    const timer = setTimeout(() => setLeft((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [left, preview])

  if (left === 0) {
    return (
      <div className="hold-banner is-expired" role="status">
        <Icon name="alert" size={15} />
        <span className="k-grow">Your seats were released</span>
        <Link to="/app/seats" className="k-link">
          Pick again
        </Link>
      </div>
    )
  }

  const mm = Math.floor(left / 60)
  const ss = String(left % 60).padStart(2, '0')

  return (
    <div className={`hold-banner ${left < 120 ? 'is-low' : ''}`} role="timer" aria-live="off">
      <Icon name="clock" size={15} />
      <span className="k-grow">Seats held for you</span>
      <b className="hold-banner__time">
        {mm}:{ss}
      </b>
    </div>
  )
}
