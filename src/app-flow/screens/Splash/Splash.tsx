import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { usePreviewMode } from '../../kit/previewMode'
import { SplashBrand } from './sections/SplashBrand/SplashBrand'
import { SplashLoader } from './sections/SplashLoader/SplashLoader'
import './Splash.css'

const SPLASH_MS = 2800

export function Splash() {
  const preview = usePreviewMode()
  const navigate = useNavigate()

  useEffect(() => {
    if (preview) return
    const timer = setTimeout(() => navigate('/app/onboarding'), SPLASH_MS)
    return () => clearTimeout(timer)
  }, [preview, navigate])

  return (
    <AppScreen tone="brand" className="splash">
      <SplashBrand />
      <SplashLoader />
    </AppScreen>
  )
}
