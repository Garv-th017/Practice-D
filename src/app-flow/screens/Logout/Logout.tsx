import { Profile } from '../Profile/Profile'
import './Logout.css'

/** The Profile screen with the log out confirmation open */
export function Logout() {
  return (
    <div className="logout-screen">
      <Profile startWithLogout />
    </div>
  )
}
