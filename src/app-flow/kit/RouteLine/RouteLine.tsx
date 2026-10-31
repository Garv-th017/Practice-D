import type { CSSProperties } from 'react'
import { Icon } from '../../../components/Icon/Icon'
import './RouteLine.css'

interface RouteLineProps {
  /** Where the bus sits, 0 to 1 */
  progress?: number
  /** Bus drives back and forth (loading states) */
  moving?: boolean
  from?: string
  to?: string
}

/** BusTopia's signature motif: start ring, dashed road, bus, orange destination dot. */
export function RouteLine({ progress = 0.5, moving = false, from, to }: RouteLineProps) {
  return (
    <div className={`route-line ${moving ? 'is-moving' : ''}`} style={{ '--p': progress } as CSSProperties}>
      <div className="route-line__track">
        <span className="route-line__start" />
        <span className="route-line__road">
          <span className="route-line__done" />
          <span className="route-line__bus">
            <Icon name="bus" size={13} strokeWidth={2.4} />
          </span>
        </span>
        <span className="route-line__end" />
      </div>
      {(from || to) && (
        <div className="route-line__labels">
          <span>{from}</span>
          <span>{to}</span>
        </div>
      )}
    </div>
  )
}
