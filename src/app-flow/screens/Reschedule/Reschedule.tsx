import { useState } from 'react'
import { addDays, fareForDay, formatDate, rupees } from '../../data'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { setDemo, useDemo } from '../../kit/demoStore'
import { TopBar } from '../../kit/TopBar/TopBar'
import { RescheduleCurrent } from './sections/RescheduleCurrent/RescheduleCurrent'
import { RescheduleDates } from './sections/RescheduleDates/RescheduleDates'
import { RescheduleDone } from './sections/RescheduleDone/RescheduleDone'
import { RescheduleFare } from './sections/RescheduleFare/RescheduleFare'
import './Reschedule.css'

export const RESCHEDULE_FEE = 50

export function Reschedule() {
  const demo = useDemo()
  const [newDate, setNewDate] = useState(() => addDays(demo.date, 1))
  const [doneDate, setDoneDate] = useState<string | null>(null)

  const seats = Math.max(demo.seats.length, 1)
  const difference = (fareForDay(newDate) - fareForDay(demo.date)) * seats
  const total = difference + RESCHEDULE_FEE

  if (doneDate) {
    return (
      <AppScreen bare>
        <TopBar back="/app/ticket" title="Trip moved" />
        <AppBody>
          <RescheduleDone date={doneDate} />
        </AppBody>
        <BottomBar>
          <AppButton to="/app/ticket">View updated ticket</AppButton>
        </BottomBar>
      </AppScreen>
    )
  }

  return (
    <AppScreen bare>
      <TopBar back="/app/ticket" title="Change travel date" subtitle="Same bus, seats and boarding point" />
      <AppBody className="reschedule__body">
        <RescheduleCurrent />
        <RescheduleDates from={demo.date} value={newDate} onChange={setNewDate} />
        <RescheduleFare seats={seats} difference={difference} fee={RESCHEDULE_FEE} />
      </AppBody>
      <BottomBar
        info={
          <>
            <small>{total >= 0 ? 'To pay' : 'Back to wallet'}</small>
            <b>{rupees(Math.abs(total))}</b>
          </>
        }
      >
        <AppButton
          onClick={() => {
            setDemo({ date: newDate })
            setDoneDate(newDate)
          }}
        >
          Move to {formatDate(newDate).split(',')[0]}
        </AppButton>
      </BottomBar>
    </AppScreen>
  )
}
