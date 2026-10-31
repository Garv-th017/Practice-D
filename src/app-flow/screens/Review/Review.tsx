import { rupees } from '../../data'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { fareOf, useDemo } from '../../kit/demoStore'
import { HoldBanner } from '../../kit/HoldBanner/HoldBanner'
import { TopBar } from '../../kit/TopBar/TopBar'
import { FareBreakdown } from './sections/FareBreakdown/FareBreakdown'
import { InsuranceOption } from './sections/InsuranceOption/InsuranceOption'
import { OfferPicker } from './sections/OfferPicker/OfferPicker'
import { TripSummary } from './sections/TripSummary/TripSummary'
import './Review.css'

export function Review() {
  const demo = useDemo()
  const fare = fareOf(demo)

  return (
    <AppScreen bare>
      <TopBar back="/app/passengers" title="Review your trip" subtitle="Check everything before you pay" />
      <AppBody className="review__body">
        <HoldBanner />
        <TripSummary />
        <OfferPicker base={fare.base} />
        <InsuranceOption seats={fare.seats} />
        <FareBreakdown />
      </AppBody>
      <BottomBar
        info={
          <>
            <small>Total</small>
            <b>{rupees(fare.total)}</b>
          </>
        }
      >
        <AppButton to="/app/payment">Continue to pay</AppButton>
      </BottomBar>
    </AppScreen>
  )
}
