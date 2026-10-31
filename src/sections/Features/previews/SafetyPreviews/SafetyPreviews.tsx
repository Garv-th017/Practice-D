import { Icon, type IconName } from '../../../../components/Icon/Icon'
import { d } from '../delay'
import './SafetyPreviews.css'

export function SosPreview() {
  return (
    <div className="mini-center">
      <span className="pv-sos">
        <span className="pv-sos__ring" />
        <span className="pv-sos__ring pv-sos__ring--late" />
        SOS
      </span>
      <span className="mini-muted">Hold 3 sec to alert 3 contacts + helpline</span>
    </div>
  )
}

export function VerifiedOperatorPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <span className="mini-row mini-row--start">
          <span className="mini-icon">
            <Icon name="shield" size={14} />
          </span>
          <span className="mini-grow">
            <b>GreenLine Travels</b>
            <span className="mini-muted">Verified operator</span>
          </span>
        </span>
        <span className="pv-verified m-pop" style={d(300)}>
          <Icon name="check" size={10} strokeWidth={3} />
        </span>
      </div>
      <div className="mini-row">
        <span className="mini-muted">Safety score</span>
        <b>4.9 / 5</b>
      </div>
      <div className="mini-bar">
        <span className="m-fill" style={d(400, { '--w': '96%' })} />
      </div>
    </div>
  )
}

export function WomenSafetyPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <b className="mini-strong">Women safety mode</b>
        <span className="mini-toggle is-on" />
      </div>
      {['Women-only buses first', 'Auto-share trip with family', 'Female staff on board'].map((t, i) => (
        <span key={t} className="mini-row mini-row--start m-left" style={d(300 + i * 90)}>
          <Icon name="check" size={11} strokeWidth={2.8} className="mini-ok" />
          {t}
        </span>
      ))}
    </div>
  )
}

const amenities: { icon: IconName; label: string }[] = [
  { icon: 'wifi', label: 'Wi-Fi' },
  { icon: 'plug', label: 'Charging' },
  { icon: 'droplet', label: 'Water' },
  { icon: 'moon', label: 'Blanket' },
]

export function AmenitiesPreview() {
  return (
    <div className="pv-amen">
      {amenities.map((a, i) => (
        <div key={a.label} className="mini-card pv-amen__item m-pop" style={d(i * 80)}>
          <Icon name={a.icon} size={16} />
          <span>{a.label}</span>
        </div>
      ))}
    </div>
  )
}

export function GpsTrackedPreview() {
  return (
    <div className="mini-center">
      <span className="pv-gps">
        <span className="pv-gps__wave" />
        <span className="pv-gps__wave pv-gps__wave--late" />
        <span className="pv-gps__core">
          <Icon name="pin" size={16} />
        </span>
      </span>
      <span className="mini-chip mini-chip--success">
        <span className="mini-live" /> GPS tracked · updated 5s ago
      </span>
    </div>
  )
}

export function AccessiblePreview() {
  return (
    <div className="mini-stack">
      <span className="mini-chip is-on">
        <Icon name="accessible" size={11} /> Wheelchair accessible
      </span>
      <div className="mini-card mini-stack">
        {['Low-floor boarding', 'Ramp and staff help', 'Space for a wheelchair'].map((t, i) => (
          <span key={t} className="mini-row mini-row--start m-left" style={d(i * 90)}>
            <Icon name="check" size={11} strokeWidth={2.8} className="mini-ok" />
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
