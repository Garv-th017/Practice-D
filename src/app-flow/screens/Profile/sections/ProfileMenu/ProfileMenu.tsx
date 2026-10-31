import { useState } from 'react'
import { ListRow } from '../../../../kit/ListRow/ListRow'
import './ProfileMenu.css'

const travellers = ['Aarav Kumar · 28', 'Priya Kumar · 26', 'Rohan Mehta · 31']

export function ProfileMenu({ onLogout }: { onLogout: () => void }) {
  const [showTravellers, setShowTravellers] = useState(false)

  return (
    <>
      <section className="k-section">
        <span className="k-label">Travel</span>
        <div className="k-card k-card--flush">
          <ListRow icon="ticket" title="My trips" sub="2 upcoming" to="/app/trips" />
          <ListRow
            icon="users"
            title="Saved travellers"
            sub={showTravellers ? 'Used to fill passenger details' : 'Aarav, Priya, Rohan'}
            onClick={() => setShowTravellers((v) => !v)}
          />
          {showTravellers && (
            <ul className="profile-menu__travellers">
              {travellers.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          <ListRow icon="wallet" title="Wallet" right={<b className="profile-menu__balance">₹1,250</b>} to="/app/wallet" />
          <ListRow icon="star" title="Rewards" sub="Gold member · 2,450 points" to="/app/rewards" />
          <ListRow icon="gift" title="Refer and earn" sub="Give ₹100, get ₹100" to="/app/refer" />
        </div>
      </section>
      <section className="k-section">
        <span className="k-label">App</span>
        <div className="k-card k-card--flush">
          <ListRow icon="bell" title="Notifications" to="/app/notifications" />
          <ListRow icon="help" title="Help and support" sub="Chat with us 24/7" to="/app/help" />
          <ListRow icon="gear" title="Settings" sub="Language, theme, alerts" to="/app/settings" />
        </div>
      </section>
      <div className="k-card k-card--flush">
        <ListRow icon="logout" title="Log out" onClick={onLogout} tone="danger" />
      </div>
    </>
  )
}
