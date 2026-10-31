import { RouteLine } from '../../../../kit/RouteLine/RouteLine'
import './PermissionsHero.css'

export function PermissionsHero() {
  return (
    <section className="permissions-hero">
      <div className="permissions-hero__art">
        <RouteLine progress={0.55} from="You" to="Your stop" />
      </div>
      <h1>Two quick permissions</h1>
      <p>They let us find stops near you, track your bus and warn you about delays. We never share your location.</p>
    </section>
  )
}
