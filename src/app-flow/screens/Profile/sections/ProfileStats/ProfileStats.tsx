import { Link } from 'react-router'
import './ProfileStats.css'

const stats = [
  { value: '12', label: 'Trips', to: '/app/trips' },
  { value: '₹1,840', label: 'Saved', to: '/app/wallet' },
  { value: '2,450', label: 'Points', to: '/app/rewards' },
]

export function ProfileStats() {
  return (
    <section className="profile-stats">
      {stats.map((s) => (
        <Link key={s.label} to={s.to} className="profile-stats__item">
          <b>{s.value}</b>
          <span className="k-muted">{s.label}</span>
        </Link>
      ))}
    </section>
  )
}
