import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TopBar } from '../../kit/TopBar/TopBar'
import { DirectionsMap } from './sections/DirectionsMap/DirectionsMap'
import { DirectionsSheet } from './sections/DirectionsSheet/DirectionsSheet'
import './Directions.css'

export function Directions() {
  return (
    <AppScreen bare className="directions">
      <TopBar back="/app/ticket" title="Walk to your bus" subtitle="Kashmere Gate · ISBT, Gate 4" />
      <DirectionsMap />
      <DirectionsSheet />
    </AppScreen>
  )
}
