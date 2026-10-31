import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { setDemo, useDemo, type Passenger } from '../../kit/demoStore'
import { FareSummary } from '../../kit/FareSummary/FareSummary'
import { TopBar } from '../../kit/TopBar/TopBar'
import { ContactDetails } from './sections/ContactDetails/ContactDetails'
import { PassengerForms } from './sections/PassengerForms/PassengerForms'
import { SavedTravellers } from './sections/SavedTravellers/SavedTravellers'
import './Passengers.css'

const empty: Passenger = { name: '', age: '', gender: 'Male' }

export function Passengers() {
  const navigate = useNavigate()
  const demo = useDemo()
  const seats = demo.seats.length ? demo.seats : ['L10']
  const [list, setList] = useState<Passenger[]>(() => seats.map((_, i) => demo.passengers[i] ?? empty))
  const complete = list.every((p) => p.name.trim() && p.age.trim())

  const update = (index: number, patch: Partial<Passenger>) =>
    setList((l) => l.map((p, i) => (i === index ? { ...p, ...patch } : p)))

  const fillNext = (p: Passenger) =>
    setList((l) => {
      if (l.some((x) => x.name === p.name)) return l
      const i = l.findIndex((x) => !x.name.trim())
      return i === -1 ? l : l.map((x, j) => (j === i ? p : x))
    })

  return (
    <AppScreen bare>
      <TopBar back="/app/boarding" title="Passenger details" subtitle={`${seats.length} seat${seats.length === 1 ? '' : 's'} · ${seats.join(', ')}`} />
      <AppBody className="passengers__body">
        <SavedTravellers used={list.map((p) => p.name)} onPick={fillNext} />
        <PassengerForms seats={seats} passengers={list} onChange={update} />
        <ContactDetails />
      </AppBody>
      <BottomBar info={<FareSummary />}>
        <AppButton
          disabled={!complete}
          onClick={() => {
            setDemo({ passengers: list })
            navigate('/app/review')
          }}
        >
          Continue
        </AppButton>
      </BottomBar>
    </AppScreen>
  )
}
