import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TopBar } from '../../kit/TopBar/TopBar'
import { ReferCode } from './sections/ReferCode/ReferCode'
import { ReferHero } from './sections/ReferHero/ReferHero'
import { ReferInvites } from './sections/ReferInvites/ReferInvites'
import { ReferSteps } from './sections/ReferSteps/ReferSteps'
import './Refer.css'

export function Refer() {
  return (
    <AppScreen bare>
      <TopBar back="/app/profile" title="Refer and earn" />
      <AppBody className="refer__body">
        <ReferHero />
        <ReferCode />
        <ReferSteps />
        <ReferInvites />
      </AppBody>
    </AppScreen>
  )
}
