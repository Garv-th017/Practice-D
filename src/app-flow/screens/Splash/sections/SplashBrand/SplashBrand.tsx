import { BusMark } from '../../../../../components/BusMark/BusMark'
import './SplashBrand.css'

export function SplashBrand() {
  return (
    <div className="splash-brand">
      <BusMark size={84} inverse className="splash-brand__mark" />
      <h1 className="splash-brand__name">BusTopia</h1>
      <p className="splash-brand__tagline">Book smarter. Ride happier.</p>
    </div>
  )
}
