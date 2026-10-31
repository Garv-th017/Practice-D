import { useState } from 'react'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { fareOf, useDemo } from '../../kit/demoStore'
import { FareSummary } from '../../kit/FareSummary/FareSummary'
import { TopBar } from '../../kit/TopBar/TopBar'
import { SeatDeck } from './sections/SeatDeck/SeatDeck'
import { SeatMap } from './sections/SeatMap/SeatMap'
import './Seats.css'

export function Seats() {
  const demo = useDemo()
  const { bus } = fareOf(demo)
  const [deck, setDeck] = useState<'L' | 'U'>('L')
  const count = demo.seats.length

  return (
    <AppScreen bare>
      <TopBar back="/app/bus" title={bus.tags.includes('Sleeper') ? 'Select berths' : 'Select seats'} subtitle={`${bus.name} · ${bus.type}`} />
      <AppBody className="seats__body">
        <SeatDeck deck={deck} onDeckChange={setDeck} />
        <SeatMap deck={deck} />
      </AppBody>
      <BottomBar
        info={<FareSummary />}
      >
        <AppButton to={count ? '/app/boarding' : undefined} disabled={!count}>
          Continue
        </AppButton>
      </BottomBar>
    </AppScreen>
  )
}
