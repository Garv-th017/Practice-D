import type { CSSProperties } from 'react'
import './RewardsCard.css'

const PLATINUM_AT = 3000

export function RewardsCard({ points }: { points: number }) {
  const progress = Math.min(points / PLATINUM_AT, 1)

  return (
    <section className="rewards-card">
      <div className="rewards-card__ring" style={{ '--off': 1 - progress } as CSSProperties}>
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <circle className="rewards-card__track" cx="32" cy="32" r="27" />
          <circle className="rewards-card__bar" cx="32" cy="32" r="27" pathLength={1} />
        </svg>
        <b>{Math.round(progress * 100)}%</b>
      </div>
      <div className="rewards-card__text">
        <span className="rewards-card__tier">Gold member</span>
        <b className="rewards-card__points">{points.toLocaleString('en-IN')} points</b>
        <span className="rewards-card__next">
          {points >= PLATINUM_AT ? 'You reached Platinum' : `${(PLATINUM_AT - points).toLocaleString('en-IN')} more to Platinum`}
        </span>
      </div>
    </section>
  )
}
