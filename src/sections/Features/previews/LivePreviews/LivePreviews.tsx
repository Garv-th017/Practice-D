import { Icon } from '../../../../components/Icon/Icon'
import { d } from '../delay'
import './LivePreviews.css'

export function LiveTrackingPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="pv-track">
        <span className="pv-track__line" />
        <span className="pv-track__done" />
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`pv-track__stop ${i < 2 ? 'is-done' : ''}`} style={{ left: `${i * 33.333}%` }} />
        ))}
        <span className="pv-track__bus">
          <Icon name="bus" size={11} strokeWidth={2.4} />
        </span>
      </div>
      <div className="mini-row">
        <span className="mini-muted">Kashmere Gate</span>
        <span className="mini-muted">Jaipur</span>
      </div>
      <div className="mini-row">
        <b className="mini-strong">Near Azadpur</b>
        <span className="mini-chip mini-chip--success">
          <span className="mini-live" /> Live
        </span>
      </div>
    </div>
  )
}

export function EtaPreview() {
  return (
    <div className="mini-card mini-stack">
      <span className="mini-row mini-row--start mini-muted">
        <span className="mini-live" /> Live · updated now
      </span>
      <b className="pv-eta m-pop">
        6<small> min</small>
      </b>
      <span className="mini-muted">Bus arriving at Kashmere Gate</span>
      <div className="mini-bar">
        <span className="m-fill" style={d(300, { '--w': '78%' })} />
      </div>
    </div>
  )
}

export function ShareTripPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row mini-row--start">
        <span className="mini-icon">
          <Icon name="share" size={13} />
        </span>
        <span className="mini-grow">
          <b>Share live trip</b>
          <span className="mini-muted">Family can follow your bus</span>
        </span>
      </div>
      <div className="pv-contacts">
        {['Mom', 'Dad', 'Priya'].map((n, i) => (
          <span key={n} className={`mini-chip m-pop ${i === 0 ? 'is-on' : ''}`} style={d(i * 90)}>
            {n}
          </span>
        ))}
      </div>
      <span className="mini-btn">Send trip link</span>
    </div>
  )
}

export function BusDriverPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <span className="pv-plate mini-mono">DL 1PC 4821</span>
        <span className="mini-muted">Volvo AC Sleeper</span>
      </div>
      <div className="mini-divider" />
      <div className="mini-row">
        <span className="mini-row mini-row--start">
          <span className="mini-avatar">RS</span>
          <span className="mini-grow">
            <b>Ramesh S.</b>
            <span className="mini-muted">Driver · ★ 4.8</span>
          </span>
        </span>
        <span className="pv-call m-pop" style={d(300)}>
          <Icon name="phone" size={12} />
        </span>
      </div>
    </div>
  )
}

export function StopAlertPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <span className="mini-row mini-row--start">
          <span className="mini-icon">
            <Icon name="bell" size={13} />
          </span>
          <b>Stop alert</b>
        </span>
        <span className="mini-toggle is-on" style={d(100)} />
      </div>
      <span className="mini-muted">Wake me 10 min before my stop</span>
      <span className="mini-chip is-on m-pop" style={d(400)}>
        <Icon name="pin" size={10} /> Jaipur · Sindhi Camp
      </span>
    </div>
  )
}

export function DelayAlertPreview() {
  return (
    <div className="pv-notifs">
      <div className="pv-notif">
        <span className="pv-notif__app">
          <Icon name="bus" size={13} />
        </span>
        <span className="mini-grow">
          <span className="mini-row">
            <b>BusTopia</b>
            <span className="mini-muted">now</span>
          </span>
          <span>Your bus is running 12 min late. New ETA 07:02.</span>
        </span>
      </div>
      <div className="pv-notif pv-notif--ghost" />
    </div>
  )
}

export function DirectionsPreview() {
  return (
    <div className="pv-map">
      <svg viewBox="0 0 220 120" preserveAspectRatio="none" aria-hidden="true">
        <path className="pv-map__road" d="M0 82H220M64 0V120M156 0V120" />
        <path className="pv-map__walk" d="M30 100C60 100 64 62 100 62S150 40 172 30" pathLength={1} />
        <circle className="pv-map__me" cx="30" cy="100" r="5" />
      </svg>
      <span className="pv-map__pin">
        <Icon name="pin" size={18} strokeWidth={2.2} />
      </span>
      <span className="mini-chip pv-map__chip">4 min walk</span>
    </div>
  )
}
