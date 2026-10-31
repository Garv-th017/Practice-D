import { Icon, type IconName } from '../../../../../components/Icon/Icon'
import './RewardsEarn.css'

const ways: { icon: IconName; title: string; points: string }[] = [
  { icon: 'bus', title: 'Complete a trip', points: '+1 per ₹10' },
  { icon: 'star', title: 'Rate your trip', points: '+20' },
  { icon: 'users', title: 'Refer a friend', points: '+200' },
]

export function RewardsEarn() {
  return (
    <section className="k-section">
      <span className="k-label">Ways to earn</span>
      <div className="rewards-earn">
        {ways.map((w) => (
          <div key={w.title} className="rewards-earn__item">
            <Icon name={w.icon} size={16} />
            <span className="k-grow">{w.title}</span>
            <b>{w.points}</b>
          </div>
        ))}
      </div>
    </section>
  )
}
