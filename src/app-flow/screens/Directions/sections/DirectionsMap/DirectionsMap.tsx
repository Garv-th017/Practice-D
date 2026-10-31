import { Icon } from '../../../../../components/Icon/Icon'
import { MapArt } from '../../../../kit/MapArt/MapArt'
import './DirectionsMap.css'

export function DirectionsMap() {
  return (
    <div className="dir-map">
      <MapArt />
      <svg className="dir-map__overlay" viewBox="0 0 280 240" preserveAspectRatio="none" aria-hidden="true">
        <path className="dir-map__walk" d="M40 210C70 210 90 190 90 170S90 110 130 90 200 70 210 50" />
        <circle className="dir-map__me" cx="40" cy="210" r="7" />
      </svg>
      <span className="dir-map__stop">
        <Icon name="bus" size={14} strokeWidth={2.4} />
      </span>
      <span className="dir-map__eta">
        <Icon name="clock" size={12} /> 6 min walk · 450 m
      </span>
    </div>
  )
}
