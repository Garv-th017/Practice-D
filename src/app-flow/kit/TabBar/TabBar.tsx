import { Link } from 'react-router'
import { Icon, type IconName } from '../../../components/Icon/Icon'
import './TabBar.css'

const tabs: { id: string; to: string; icon: IconName; label: string }[] = [
  { id: 'home', to: '/app/home', icon: 'home', label: 'Home' },
  { id: 'trips', to: '/app/trips', icon: 'ticket', label: 'Trips' },
  { id: 'track', to: '/app/tracking', icon: 'pin', label: 'Track' },
  { id: 'profile', to: '/app/profile', icon: 'user', label: 'Profile' },
]

export function TabBar({ active }: { active: 'home' | 'trips' | 'track' | 'profile' }) {
  return (
    <nav className="tab-bar" aria-label="App">
      {tabs.map((t) => (
        <Link
          key={t.id}
          to={t.to}
          className={`tab-bar__item ${t.id === active ? 'is-on' : ''}`}
          aria-current={t.id === active ? 'page' : undefined}
        >
          <Icon name={t.icon} size={19} />
          <small>{t.label}</small>
        </Link>
      ))}
    </nav>
  )
}
