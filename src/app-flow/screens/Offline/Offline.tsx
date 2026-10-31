import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Icon } from '../../../components/Icon/Icon'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { OfflineHero } from './sections/OfflineHero/OfflineHero'
import './Offline.css'

const RETRY_MS = 1400

export function Offline() {
  const navigate = useNavigate()
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    if (!checking) return
    const timer = setTimeout(() => navigate('/app/home'), RETRY_MS)
    return () => clearTimeout(timer)
  }, [checking, navigate])

  return (
    <AppScreen className="offline">
      <OfflineHero checking={checking} />
      <div className="offline__actions">
        <AppButton disabled={checking} onClick={() => setChecking(true)}>
          {checking ? 'Checking connection…' : 'Try again'}
        </AppButton>
        <AppButton to="/app/ticket" variant="outline" icon={<Icon name="ticket" size={15} />}>
          Open my saved ticket
        </AppButton>
      </div>
    </AppScreen>
  )
}
