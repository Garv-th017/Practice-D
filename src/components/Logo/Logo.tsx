import { Link } from 'react-router'
import { BusMark } from '../BusMark/BusMark'
import './Logo.css'

export function Logo() {
  return (
    <Link to="/" className="logo" aria-label="BusTopia home">
      <BusMark />
      <span className="logo__word">
        Bus<span>Topia</span>
      </span>
    </Link>
  )
}
