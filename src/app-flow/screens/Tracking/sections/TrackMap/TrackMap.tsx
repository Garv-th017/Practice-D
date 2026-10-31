import { Icon } from '../../../../../components/Icon/Icon'
import { MapArt } from '../../../../kit/MapArt/MapArt'
import './TrackMap.css'

export function TrackMap() {
  return (
    <div className="track-map">
      <MapArt />
      <svg className="track-map__overlay" viewBox="0 0 280 300" preserveAspectRatio="none" aria-hidden="true">
        <path className="track-map__route" d="M40 262C70 262 70 196 110 186S170 146 190 106 230 52 250 52" />
        <path className="track-map__done" d="M40 262C70 262 70 196 110 186" />
        <circle className="track-map__stop" cx="40" cy="262" r="6" />
        <circle className="track-map__stop track-map__stop--end" cx="250" cy="52" r="6" />
      </svg>
      <span className="track-map__bus">
        <Icon name="bus" size={13} strokeWidth={2.4} />
      </span>
      <span className="track-map__eta">
        <span className="track-map__live" /> Arriving in <b>6 min</b>
      </span>
    </div>
  )
}
