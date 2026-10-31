import { useState } from 'react'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TopBar } from '../../kit/TopBar/TopBar'
import { AlertCreate } from './sections/AlertCreate/AlertCreate'
import { AlertList, type FareAlert } from './sections/AlertList/AlertList'
import './FareAlerts.css'

const initial: FareAlert[] = [
  { id: 'a1', route: 'New Delhi → Jaipur', target: 750, on: true, lowest: 699 },
  { id: 'a2', route: 'Mumbai → Goa', target: 800, on: false, lowest: 899 },
]

export function FareAlerts() {
  const [alerts, setAlerts] = useState(initial)

  return (
    <AppScreen bare>
      <TopBar back="/app/results" title="Fare alerts" subtitle="We tell you when a route gets cheaper" />
      <AppBody className="fare-alerts__body">
        <AlertCreate onCreate={(a) => setAlerts((list) => [a, ...list])} />
        <AlertList
          alerts={alerts}
          onToggle={(id, on) => setAlerts((list) => list.map((a) => (a.id === id ? { ...a, on } : a)))}
          onRemove={(id) => setAlerts((list) => list.filter((a) => a.id !== id))}
        />
      </AppBody>
    </AppScreen>
  )
}
