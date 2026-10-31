import './ReferInvites.css'

const invites = [
  { initials: 'RM', name: 'Rohan Mehta', status: 'Travelled · ₹100 earned', done: true },
  { initials: 'MK', name: 'Meera Kapoor', status: 'Travelled · ₹100 earned', done: true },
  { initials: 'KS', name: 'Kabir Singh', status: 'Joined · waiting for first trip', done: false },
]

export function ReferInvites() {
  return (
    <section className="k-section">
      <span className="k-label">Your invites</span>
      <div className="k-card k-card--flush">
        {invites.map((i) => (
          <div key={i.name} className="refer-invite">
            <span className="k-avatar refer-invite__avatar">{i.initials}</span>
            <span className="k-grow">
              <b>{i.name}</b>
              <span className={i.done ? 'refer-invite__done' : 'k-muted'}>{i.status}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
