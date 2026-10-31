import { useState } from 'react'
import { addDays, findBus, rupees } from '../../data'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { setDemo, useDemo } from '../../kit/demoStore'
import { TopBar } from '../../kit/TopBar/TopBar'
import { ReturnBuses } from './sections/ReturnBuses/ReturnBuses'
import { ReturnDates } from './sections/ReturnDates/ReturnDates'
import { ReturnDone } from './sections/ReturnDone/ReturnDone'
import { ReturnSaving } from './sections/ReturnSaving/ReturnSaving'
import './ReturnTrip.css'

export const ROUND_TRIP_SAVING = 100

export function ReturnTrip() {
  const demo = useDemo()
  const [date, setDate] = useState(() => addDays(demo.date, 2))
  const [busId, setBusId] = useState('sunset')
  const [done, setDone] = useState(false)

  const seats = Math.max(demo.seats.length, 1)
  const total = findBus(busId).price * seats - ROUND_TRIP_SAVING

  if (done) {
    return (
      <AppScreen bare>
        <TopBar back="/app/confirmed" title="Return trip booked" />
        <AppBody>
          <ReturnDone />
        </AppBody>
        <BottomBar>
          <AppButton to="/app/trips">View my trips</AppButton>
        </BottomBar>
      </AppScreen>
    )
  }

  return (
    <AppScreen bare>
      <TopBar back="/app/confirmed" title="Book your return" subtitle={`${demo.to} → ${demo.from}`} />
      <AppBody className="return-trip__body">
        <ReturnSaving />
        <ReturnDates from={demo.date} value={date} onChange={setDate} />
        <ReturnBuses value={busId} onChange={setBusId} />
      </AppBody>
      <BottomBar
        info={
          <>
            <small>
              {seats} seat{seats === 1 ? '' : 's'} · ₹{ROUND_TRIP_SAVING} off
            </small>
            <b>{rupees(total)}</b>
          </>
        }
      >
        <AppButton
          onClick={() => {
            setDemo({ returnTrip: { date, busId } })
            setDone(true)
          }}
        >
          Book return
        </AppButton>
      </BottomBar>
    </AppScreen>
  )
}
