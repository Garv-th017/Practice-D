import { Icon } from '../../../../components/Icon/Icon'
import { d } from '../delay'
import './ExtraPreviews.css'

export function LoyaltyPreview() {
  return (
    <div className="mini-row mini-row--start pv-loyalty">
      <div className="mini-ring" style={d(0, { '--off': 0.3 })}>
        <svg viewBox="0 0 64 64">
          <circle className="mini-ring__track" cx="32" cy="32" r="27" />
          <circle className="mini-ring__bar" cx="32" cy="32" r="27" pathLength={1} />
        </svg>
        <b className="pv-loyalty__pct">70%</b>
      </div>
      <div className="mini-stack">
        <span className="mini-chip mini-chip--accent m-pop" style={d(300)}>
          Gold member
        </span>
        <b className="mini-strong">2,450 points</b>
        <span className="mini-muted">550 more to Platinum</span>
      </div>
    </div>
  )
}

export function ReferPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row mini-row--start">
        <span className="mini-icon">
          <Icon name="gift" size={14} />
        </span>
        <span className="mini-grow">
          <b>Invite friends</b>
          <span className="mini-muted">You both get ₹100</span>
        </span>
      </div>
      <div className="pv-code">
        <span className="mini-mono">AARAV100</span>
        <span className="mini-chip mini-chip--success m-pop" style={d(350)}>
          <Icon name="copy" size={10} /> Copied
        </span>
      </div>
    </div>
  )
}

const languages = ['English', 'हिंदी', 'தமிழ்', 'বাংলা', 'मराठी', 'తెలుగు']

export function LanguagePreview() {
  return (
    <div className="mini-stack">
      <span className="mini-row mini-row--start mini-muted">
        <Icon name="globe" size={12} /> App language
      </span>
      <div className="pv-langs">
        {languages.map((l, i) => (
          <span key={l} className={`mini-chip m-pop ${i === 1 ? 'is-on' : ''}`} style={d(i * 70)}>
            {l}
          </span>
        ))}
      </div>
    </div>
  )
}
