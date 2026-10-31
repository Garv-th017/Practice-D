import { Icon } from '../../../../components/Icon/Icon'
import { d } from '../delay'
import './SupportPreviews.css'

export function ReviewsPreview() {
  return (
    <div className="mini-card mini-stack pv-review">
      <b className="mini-strong">How was your trip?</b>
      <div className="pv-stars">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={`pv-star m-pop ${i < 4 ? 'is-on' : ''}`} style={d(i * 90)}>
            <Icon name="star" size={18} />
          </span>
        ))}
      </div>
      <div className="pv-tags">
        {['On time', 'Clean bus', 'Polite staff'].map((t, i) => (
          <span key={t} className={`mini-chip m-pop ${i < 2 ? 'is-on' : ''}`} style={d(500 + i * 80)}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function CancellationPreview() {
  return (
    <div className="mini-card mini-stack">
      <b className="mini-strong">Cancel ticket</b>
      <div className="mini-row">
        <span className="mini-muted">Ticket fare</span>
        <span>₹849</span>
      </div>
      <div className="mini-row">
        <span className="mini-muted">Cancellation fee</span>
        <span>−₹85</span>
      </div>
      <div className="mini-divider" />
      <div className="mini-row">
        <b>You get back</b>
        <b className="pv-refund m-pop" style={d(300)}>
          ₹764
        </b>
      </div>
    </div>
  )
}

const refundSteps = ['Requested', 'Processing', 'Credited']

export function RefundTrackerPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <b className="mini-strong">Refund ₹764</b>
        <span className="mini-muted">ID R-2291</span>
      </div>
      <div className="pv-steps">
        <span className="pv-steps__line">
          <span className="pv-steps__fill" />
        </span>
        {refundSteps.map((s, i) => (
          <span key={s} className={`pv-steps__step ${i < 2 ? 'is-done' : 'is-now'}`}>
            <span className="pv-steps__dot m-pop" style={d(i * 250)}>
              {i < 2 && <Icon name="check" size={9} strokeWidth={3.2} />}
            </span>
            <span className="mini-muted">{s}</span>
          </span>
        ))}
      </div>
      <span className="mini-muted">Lands in your account by tomorrow</span>
    </div>
  )
}

export function ChatSupportPreview() {
  return (
    <div className="pv-chat">
      <span className="pv-chat__msg pv-chat__msg--me m-up">Where's my bus right now?</span>
      <span className="pv-chat__msg m-up" style={d(300)}>
        It's 2 stops away, about 6 min. You can track it live on the Track tab.
      </span>
      <span className="pv-chat__typing m-up" style={d(600)}>
        <i />
        <i />
        <i />
      </span>
    </div>
  )
}

export function LostFoundPreview() {
  return (
    <div className="mini-card mini-stack">
      <b className="mini-strong">Report a lost item</b>
      {[
        { label: 'Item', value: 'Black backpack' },
        { label: 'Bus & seat', value: 'DL 1PC 4821 · 14B' },
      ].map((f, i) => (
        <div key={f.label} className="pv-field m-up" style={d(i * 90)}>
          <span className="mini-muted">{f.label}</span>
          <span>{f.value}</span>
        </div>
      ))}
      <span className="mini-btn">Submit report</span>
    </div>
  )
}
