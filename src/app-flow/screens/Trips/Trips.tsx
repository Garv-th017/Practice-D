import { useState } from 'react'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { SegTabs } from '../../kit/SegTabs/SegTabs'
import { TabBar } from '../../kit/TabBar/TabBar'
import { TopBar } from '../../kit/TopBar/TopBar'
import { TripList, type TripTab } from './sections/TripList/TripList'
import './Trips.css'

const tabs: { id: TripTab; label: string }[] = [
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'completed', label: 'Completed' },
  { id: 'cancelled', label: 'Cancelled' },
]

export function Trips() {
  const [tab, setTab] = useState<TripTab>('upcoming')

  return (
    <AppScreen bare>
      <TopBar title="My trips" subtitle="Your bookings in one place" />
      <AppBody className="trips__body">
        <SegTabs label="Trip status" items={tabs} active={tab} onChange={setTab} />
        <TripList tab={tab} />
        <div className="trips__plan">
          <b>Planning another trip?</b>
          <span className="k-muted">Search 4,500+ operators and book in under a minute.</span>
          <AppButton to="/app/home" variant="outline">
            Book a new trip
          </AppButton>
        </div>
      </AppBody>
      <TabBar active="trips" />
    </AppScreen>
  )
}
