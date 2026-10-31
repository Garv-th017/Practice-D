import { Icon } from '../../../../../components/Icon/Icon'
import './RewardsRedeem.css'

const rewards = [
  { id: 'r1', title: '₹50 off your next trip', cost: 500 },
  { id: 'r2', title: 'Free seat change', cost: 800 },
  { id: 'r3', title: '₹150 wallet cash', cost: 1500 },
]

interface RewardsRedeemProps {
  points: number
  redeemed: string[]
  onRedeem: (id: string, cost: number) => void
}

export function RewardsRedeem({ points, redeemed, onRedeem }: RewardsRedeemProps) {
  return (
    <section className="k-section">
      <span className="k-label">Use your points</span>
      <div className="k-card k-card--flush">
        {rewards.map((r) => {
          const done = redeemed.includes(r.id)
          const short = points < r.cost
          return (
            <div key={r.id} className="rewards-redeem">
              <span className="k-icon">
                <Icon name="gift" size={15} />
              </span>
              <span className="k-grow">
                <b>{r.title}</b>
                <span className="k-muted">{r.cost.toLocaleString('en-IN')} points</span>
              </span>
              {done ? (
                <span className="k-chip k-chip--success">
                  <Icon name="check" size={11} strokeWidth={2.8} /> Redeemed
                </span>
              ) : (
                <button type="button" className="k-link rewards-redeem__btn" disabled={short} onClick={() => onRedeem(r.id, r.cost)}>
                  {short ? 'Not enough' : 'Redeem'}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
