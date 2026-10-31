import { useState } from 'react'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TabBar } from '../../kit/TabBar/TabBar'
import { SosSheet } from './sections/SosSheet/SosSheet'
import { TrackMap } from './sections/TrackMap/TrackMap'
import { TrackSheet } from './sections/TrackSheet/TrackSheet'
import './Tracking.css'

export function Tracking() {
  const [sosOpen, setSosOpen] = useState(false)

  return (
    <AppScreen bare className="tracking">
      <TrackMap />
      <TrackSheet onSos={() => setSosOpen(true)} />
      <TabBar active="track" />
      {sosOpen && <SosSheet onClose={() => setSosOpen(false)} />}
    </AppScreen>
  )
}
