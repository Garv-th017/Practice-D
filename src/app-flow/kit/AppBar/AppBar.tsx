import { Link } from 'react-router'
import { Icon } from '../../../components/Icon/Icon'
import './AppBar.css'

interface AppBarProps {
  back: string
  title?: string
}

export function AppBar({ back, title }: AppBarProps) {
  return (
    <header className="app-bar">
      <Link to={back} className="app-bar__back" aria-label="Back">
        <Icon name="arrowLeft" size={17} />
      </Link>
      {title && <b className="app-bar__title">{title}</b>}
    </header>
  )
}
