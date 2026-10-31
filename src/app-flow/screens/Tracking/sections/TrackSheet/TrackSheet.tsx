import { useState } from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import './TrackSheet.css'

const stops = ['Kashmere Gate', 'Azadpur', 'Gurugram', 'Jaipur']

export function TrackSheet({ onSos }: { onSos: () => void }) {
  const [shared, setShared] = useState(false)

  return (
    <section className="track-sheet">
      <span className="track-sheet__handle" />
      <div className="k-row">
        <span className="k-grow">
          <b className="k-mono">DL 1PC 4821</b>
          <span className="k-muted">Near Azadpur · on time</span>
        </span>
        <span className="k-chip k-chip--success">
          <span className="track-sheet__live" /> Live
        </span>
      </div>

      <div className="track-sheet__stops">
        {stops.map((s, i) => (
          <span key={s} className={`track-sheet__stop ${i < 2 ? 'is-done' : ''} ${i === 1 ? 'is-now' : ''}`}>
            <i />
            <small>{s}</small>
          </span>
        ))}
      </div>

      <div className="k-card k-row track-sheet__driver">
        <span className="k-row k-row--start">
          <span className="k-avatar">RS</span>
          <span className="k-grow">
            <b>Ramesh S.</b>
            <span className="k-muted">Driver · ★ 4.8</span>
          </span>
        </span>
        <a href="tel:+919876500000" className="track-sheet__call" aria-label="Call the driver">
          <Icon name="phone" size={14} />
        </a>
      </div>

      <div className="track-sheet__actions">
        <button type="button" className="track-sheet__share" onClick={() => setShared(true)}>
          <Icon name={shared ? 'check' : 'share'} size={14} /> {shared ? 'Trip shared' : 'Share live trip'}
        </button>
        <button type="button" className="track-sheet__sos" onClick={onSos}>
          SOS
        </button>
      </div>
    </section>
  )
}
