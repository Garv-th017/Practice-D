import { useState } from 'react'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { TopBar } from '../../kit/TopBar/TopBar'
import { LostDetails } from './sections/LostDetails/LostDetails'
import { LostDone } from './sections/LostDone/LostDone'
import { LostItem } from './sections/LostItem/LostItem'
import { LostTrip } from './sections/LostTrip/LostTrip'
import './LostFound.css'

export function LostFound() {
  const [trip, setTrip] = useState('t1')
  const [item, setItem] = useState('')
  const [details, setDetails] = useState('')
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <AppScreen bare>
        <TopBar back="/app/help" title="Report sent" />
        <AppBody>
          <LostDone item={item} />
        </AppBody>
        <BottomBar>
          <AppButton to="/app/help">Back to help</AppButton>
        </BottomBar>
      </AppScreen>
    )
  }

  return (
    <AppScreen bare>
      <TopBar back="/app/help" title="Lost and found" subtitle="We’ll contact the bus operator for you" />
      <AppBody className="lost-found__body">
        <LostTrip value={trip} onChange={setTrip} />
        <LostItem value={item} onChange={setItem} />
        <LostDetails value={details} onChange={setDetails} />
      </AppBody>
      <BottomBar>
        <AppButton disabled={!item} onClick={() => setSent(true)}>
          {item ? 'Send report' : 'Choose what you lost'}
        </AppButton>
      </BottomBar>
    </AppScreen>
  )
}
