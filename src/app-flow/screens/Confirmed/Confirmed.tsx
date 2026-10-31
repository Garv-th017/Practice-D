import { AppBody } from '../../kit/AppBody/AppBody'
import { ListRow } from '../../kit/ListRow/ListRow'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { ConfirmedHero } from './sections/ConfirmedHero/ConfirmedHero'
import { ConfirmedSummary } from './sections/ConfirmedSummary/ConfirmedSummary'
import './Confirmed.css'

export function Confirmed() {
  return (
    <AppScreen bare>
      <AppBody className="app-body--top confirmed__body">
        <ConfirmedHero />
        <ConfirmedSummary />
        <div className="k-card k-card--flush confirmed__return">
          <ListRow icon="swap" title="Book your return trip" sub="Save ₹100 with a round trip" to="/app/return" />
        </div>
      </AppBody>
      <BottomBar>
        <div className="confirmed__actions">
          <AppButton to="/app/ticket">View ticket</AppButton>
          <AppButton to="/app/home" variant="outline">
            Back to home
          </AppButton>
        </div>
      </BottomBar>
    </AppScreen>
  )
}
