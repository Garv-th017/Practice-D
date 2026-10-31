import { Link } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { useDemo } from '../../../../kit/demoStore'
import './HomeHeader.css'

export function HomeHeader() {
  const { from } = useDemo()

  return (
    <header className="home-header">
      <span className="k-avatar">AK</span>
      <span className="k-grow">
        <span className="k-muted">Good morning</span>
        <b className="home-header__name">Aarav</b>
      </span>
      <span className="home-header__loc">
        <Icon name="pin" size={12} /> {from}
      </span>
      <Link to="/app/notifications" className="home-header__bell" aria-label="Notifications">
        <Icon name="bell" size={16} />
      </Link>
    </header>
  )
}
