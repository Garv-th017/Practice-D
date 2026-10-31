import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { ConfirmSheet } from '../../kit/ConfirmSheet/ConfirmSheet'
import { TabBar } from '../../kit/TabBar/TabBar'
import { ProfileCard } from './sections/ProfileCard/ProfileCard'
import { ProfileMenu } from './sections/ProfileMenu/ProfileMenu'
import { ProfileStats } from './sections/ProfileStats/ProfileStats'
import './Profile.css'

export function Profile({ startWithLogout = false }: { startWithLogout?: boolean }) {
  const navigate = useNavigate()
  const [confirmLogout, setConfirmLogout] = useState(startWithLogout)

  return (
    <AppScreen bare>
      <AppBody className="app-body--top profile__body">
        <ProfileCard />
        <ProfileStats />
        <ProfileMenu onLogout={() => setConfirmLogout(true)} />
      </AppBody>
      <TabBar active="profile" />
      {confirmLogout && (
        <ConfirmSheet
          icon="logout"
          title="Log out of BusTopia?"
          text="Your tickets stay saved. You’ll need to sign in with Google again to book."
          confirmLabel="Log out"
          onConfirm={() => navigate('/app/login')}
          onCancel={() => setConfirmLogout(false)}
        />
      )}
    </AppScreen>
  )
}
