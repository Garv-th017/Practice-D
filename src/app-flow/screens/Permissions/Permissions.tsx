import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { PermissionList } from './sections/PermissionList/PermissionList'
import { PermissionsHero } from './sections/PermissionsHero/PermissionsHero'
import './Permissions.css'

const ALL = ['location', 'notifications']

export function Permissions() {
  const navigate = useNavigate()
  const [allowed, setAllowed] = useState<string[]>([])
  const all = allowed.length === ALL.length

  return (
    <AppScreen className="permissions">
      <PermissionsHero />
      <PermissionList allowed={allowed} onAllow={(id) => setAllowed((a) => (a.includes(id) ? a : [...a, id]))} />
      <div className="permissions__actions">
        {all ? (
          <AppButton to="/app/home">Continue</AppButton>
        ) : (
          <AppButton
            onClick={() => {
              setAllowed(ALL)
              navigate('/app/home')
            }}
          >
            Allow both and continue
          </AppButton>
        )}
        {!all && (
          <AppButton to="/app/home" variant="text" className="permissions__later">
            Not now
          </AppButton>
        )}
      </div>
    </AppScreen>
  )
}
