import { Link } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { initials, useDemo } from '../../../../kit/demoStore'
import './ProfileCard.css'

export function ProfileCard() {
  const { profile } = useDemo()

  return (
    <section className="profile-card">
      <span className="profile-card__avatar">{initials(profile.name)}</span>
      <span className="k-grow">
        <b className="profile-card__name">{profile.name}</b>
        <span className="k-muted">+91 {profile.phone}</span>
        <span className="k-muted">{profile.email}</span>
      </span>
      <Link to="/app/edit-profile" className="profile-card__edit" aria-label="Edit profile">
        <Icon name="edit" size={15} />
      </Link>
    </section>
  )
}
