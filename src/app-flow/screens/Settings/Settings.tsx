import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { ConfirmSheet } from '../../kit/ConfirmSheet/ConfirmSheet'
import { TopBar } from '../../kit/TopBar/TopBar'
import { SettingsAccount } from './sections/SettingsAccount/SettingsAccount'
import { SettingsAlerts } from './sections/SettingsAlerts/SettingsAlerts'
import { SettingsAppearance } from './sections/SettingsAppearance/SettingsAppearance'
import { SettingsLanguage } from './sections/SettingsLanguage/SettingsLanguage'
import './Settings.css'

export function Settings() {
  const navigate = useNavigate()
  const [confirmLogout, setConfirmLogout] = useState(false)

  return (
    <AppScreen bare>
      <TopBar back="/app/profile" title="Settings" />
      <AppBody className="settings__body">
        <SettingsLanguage />
        <SettingsAppearance />
        <SettingsAlerts />
        <SettingsAccount onLogout={() => setConfirmLogout(true)} />
      </AppBody>
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
