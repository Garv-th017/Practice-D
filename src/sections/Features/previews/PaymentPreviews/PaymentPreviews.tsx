import { Icon } from '../../../../components/Icon/Icon'
import { d } from '../delay'
import './PaymentPreviews.css'

export function OneTapPayPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <span className="mini-muted">Pay with</span>
        <span className="pv-link">Change</span>
      </div>
      <div className="mini-row mini-row--start">
        <span className="pv-radio" />
        <span className="mini-grow">
          <b>UPI</b>
          <span className="mini-muted">aarav@okbank</span>
        </span>
      </div>
      <span className="mini-btn pv-tap">Pay ₹849</span>
    </div>
  )
}

const payOptions = [
  { name: 'UPI', sub: 'No extra fee' },
  { name: 'Card', sub: '•••• 4421' },
  { name: 'Wallet', sub: '₹1,250' },
  { name: 'Net banking', sub: 'All banks' },
]

export function PayOptionsPreview() {
  return (
    <div className="pv-payopts">
      {payOptions.map((o, i) => (
        <div key={o.name} className={`mini-card pv-payopt m-pop ${i === 0 ? 'is-on' : ''}`} style={d(i * 80)}>
          <b>{o.name}</b>
          <span className="mini-muted">{o.sub}</span>
        </div>
      ))}
    </div>
  )
}

export function WalletPreview() {
  return (
    <div className="pv-wallet m-up">
      <span className="pv-wallet__label">
        <Icon name="wallet" size={12} /> BusTopia Wallet
      </span>
      <b className="pv-wallet__amount">₹1,250</b>
      <div className="mini-row">
        <span className="pv-wallet__meta">+₹50 cashback added</span>
        <span className="pv-wallet__add">+ Add money</span>
      </div>
    </div>
  )
}

export function PromoCodePreview() {
  return (
    <div className="mini-stack">
      <div className="mini-card mini-row pv-promo">
        <span className="mini-mono">BUSFIRST</span>
        <span className="pv-link">Apply</span>
      </div>
      <span className="mini-chip mini-chip--success m-pop" style={d(300)}>
        <Icon name="check" size={11} strokeWidth={2.8} /> Code applied · −₹120
      </span>
      <div className="mini-row">
        <span className="mini-muted">Total</span>
        <span>
          <s className="mini-muted">₹849</s> <b className="mini-strong">₹729</b>
        </span>
      </div>
    </div>
  )
}

export function CashbackPreview() {
  return (
    <div className="mini-center">
      <div className="pv-scratch">
        <div className="pv-scratch__prize">
          <span className="mini-muted">You won</span>
          <b>₹50</b>
          <span className="mini-muted">cashback</span>
        </div>
        <div className="pv-scratch__cover">Scratch</div>
      </div>
    </div>
  )
}

const splits = [
  { initials: 'AK', name: 'You', paid: true },
  { initials: 'PK', name: 'Priya', paid: true },
  { initials: 'RS', name: 'Rohan', paid: false },
]

export function SplitFarePreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <b className="mini-strong">Split ₹2,547</b>
        <span className="mini-muted">3 friends</span>
      </div>
      {splits.map((s, i) => (
        <div key={s.name} className="mini-row m-left" style={d(i * 90)}>
          <span className="mini-row mini-row--start">
            <span className="mini-avatar">{s.initials}</span>
            {s.name}
          </span>
          <span className={`mini-chip ${s.paid ? 'mini-chip--success' : ''}`}>
            ₹849 · {s.paid ? 'Paid' : 'Pending'}
          </span>
        </div>
      ))}
    </div>
  )
}

export function PayLaterPreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <b className="mini-strong">Pay later</b>
        <span className="mini-chip mini-chip--accent">0% EMI</span>
      </div>
      <div className="pv-emi">
        {['Nov', 'Dec', 'Jan'].map((m, i) => (
          <div key={m} className={`pv-emi__step m-up ${i === 0 ? 'is-on' : ''}`} style={d(i * 100)}>
            <span className="mini-muted">{m}</span>
            <b className="mini-mono">₹283</b>
          </div>
        ))}
      </div>
      <div className="mini-bar">
        <span className="m-fill" style={d(350, { '--w': '33%' })} />
      </div>
    </div>
  )
}

export function InsurancePreview() {
  return (
    <div className="mini-card mini-stack">
      <div className="mini-row">
        <span className="mini-row mini-row--start">
          <span className="mini-icon">
            <Icon name="shield" size={14} />
          </span>
          <span className="mini-grow">
            <b>Trip insurance</b>
            <span className="mini-muted">Cover up to ₹5 lakh</span>
          </span>
        </span>
        <span className="mini-toggle is-on" />
      </div>
      <div className="mini-divider" />
      <div className="mini-row">
        <span className="mini-muted">Delays, accidents, lost bags</span>
        <span className="mini-chip mini-chip--success m-pop" style={d(350)}>
          +₹19
        </span>
      </div>
    </div>
  )
}
