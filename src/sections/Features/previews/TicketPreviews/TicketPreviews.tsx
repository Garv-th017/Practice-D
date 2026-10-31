import { Icon } from '../../../../components/Icon/Icon'
import { QrCode } from '../../../../components/QrCode/QrCode'
import { d } from '../delay'
import './TicketPreviews.css'

export function ETicketPreview() {
  return (
    <div className="mini-center">
      <div className="pv-ticket m-up">
        <div className="pv-ticket__main">
          <span className="mini-muted">Delhi → Jaipur</span>
          <b className="mini-strong">Seat 14B</b>
          <span className="mini-muted">Fri, 30 Oct · 06:45</span>
          <span className="mini-mono pv-ticket__pnr">BT-48Q2X</span>
        </div>
        <div className="pv-ticket__qr">
          <QrCode value="BUSTOPIA:BT-48Q2X:14B:2026-10-30" size={64} />
        </div>
      </div>
    </div>
  )
}

export function TicketMessagePreview() {
  return (
    <div className="mini-stack">
      <span className="mini-muted pv-msg-from">BusTopia · SMS</span>
      <div className="pv-bubble m-left">
        Ticket confirmed! Seat 14B, Delhi → Jaipur, 30 Oct 06:45.
        <span className="mini-mono"> PNR BT-48Q2X</span>
        <span className="pv-bubble__meta">
          06:02
          <span className="pv-ticks">
            <Icon name="check" size={10} strokeWidth={2.6} />
            <Icon name="check" size={10} strokeWidth={2.6} />
          </span>
        </span>
      </div>
    </div>
  )
}

export function MyTripsPreview() {
  return (
    <div className="mini-stack">
      <div className="mini-seg" style={d(0, { '--n': 3, '--pos': 0 })}>
        <span className="mini-seg__thumb" />
        <span className="is-on">Upcoming</span>
        <span>Completed</span>
        <span>Cancelled</span>
      </div>
      <div className="mini-card mini-row m-up">
        <span className="mini-grow">
          <b>Delhi → Jaipur</b>
          <span className="mini-muted">Fri, 30 Oct · 06:45</span>
        </span>
        <span className="mini-chip mini-chip--success">Confirmed</span>
      </div>
      <div className="mini-card mini-row m-up" style={d(100)}>
        <span className="mini-grow">
          <b>Jaipur → Delhi</b>
          <span className="mini-muted">Mon, 2 Nov · 18:30</span>
        </span>
        <span className="mini-chip">Return</span>
      </div>
    </div>
  )
}

export function AddCalendarPreview() {
  return (
    <div className="mini-card mini-row mini-row--start">
      <div className="pv-caltile">
        <span>Oct</span>
        <b>30</b>
      </div>
      <span className="mini-grow pv-calinfo">
        <b>Delhi → Jaipur</b>
        <span className="mini-muted">06:45 – 11:20 · Seat 14B</span>
        <span className="mini-chip mini-chip--success m-pop" style={d(350)}>
          <Icon name="check" size={10} strokeWidth={2.8} /> Added to calendar
        </span>
      </span>
    </div>
  )
}

export function OfflineTicketPreview() {
  return (
    <div className="mini-stack">
      <div className="mini-card mini-row">
        <span className="mini-grow">
          <b>Ticket BT-48Q2X</b>
          <span className="mini-muted">Delhi → Jaipur · Seat 14B</span>
        </span>
        <span className="mini-icon pv-offline-icon">
          <Icon name="wifiOff" size={14} />
        </span>
      </div>
      <span className="mini-chip mini-chip--success m-pop" style={d(300)}>
        <Icon name="check" size={10} strokeWidth={2.8} /> Saved offline
      </span>
      <span className="mini-muted">Works with no internet at the bus stop</span>
    </div>
  )
}

export function ReschedulePreview() {
  return (
    <div className="mini-card mini-stack">
      <b className="mini-strong">Change travel date</b>
      <div className="mini-row mini-row--start">
        <span className="pv-resch__old">Fri, 30 Oct</span>
        <Icon name="arrowRight" size={12} />
        <span className="pv-resch__new m-pop" style={d(250)}>
          Mon, 2 Nov
        </span>
      </div>
      <div className="mini-row">
        <span className="mini-muted">Fare difference</span>
        <b>+₹60</b>
      </div>
      <span className="mini-btn">Confirm change</span>
    </div>
  )
}
