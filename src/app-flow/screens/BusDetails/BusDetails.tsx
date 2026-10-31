import { findBus, rupees } from '../../data'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { useDemo } from '../../kit/demoStore'
import { TopBar } from '../../kit/TopBar/TopBar'
import { BusAmenities } from './sections/BusAmenities/BusAmenities'
import { BusGallery } from './sections/BusGallery/BusGallery'
import { BusOverview } from './sections/BusOverview/BusOverview'
import { BusPolicy } from './sections/BusPolicy/BusPolicy'
import { BusReviews } from './sections/BusReviews/BusReviews'
import './BusDetails.css'

export function BusDetails() {
  const { busId } = useDemo()
  const bus = findBus(busId)

  return (
    <AppScreen bare>
      <TopBar back="/app/results" title={bus.name} subtitle={bus.type} />
      <AppBody className="bus-details__body">
        <BusGallery />
        <BusOverview bus={bus} />
        <BusAmenities bus={bus} />
        <BusPolicy bus={bus} />
        <BusReviews bus={bus} />
      </AppBody>
      <BottomBar
        info={
          <>
            <small>Per seat</small>
            <b>{rupees(bus.price)}</b>
          </>
        }
      >
        <AppButton to="/app/seats">{bus.tags.includes('Sleeper') ? 'Select berths' : 'Select seats'}</AppButton>
      </BottomBar>
    </AppScreen>
  )
}
