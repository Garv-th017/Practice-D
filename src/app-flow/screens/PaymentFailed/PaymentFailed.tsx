import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { FailedHero } from './sections/FailedHero/FailedHero'
import { FailedSummary } from './sections/FailedSummary/FailedSummary'
import './PaymentFailed.css'

export function PaymentFailed() {
  return (
    <AppScreen bare>
      <AppBody className="app-body--top payment-failed__body">
        <FailedHero />
        <FailedSummary />
      </AppBody>
      <BottomBar>
        <div className="payment-failed__actions">
          <AppButton to="/app/payment">Try again</AppButton>
          <AppButton to="/app/help" variant="outline">
            Get help
          </AppButton>
        </div>
      </BottomBar>
    </AppScreen>
  )
}
