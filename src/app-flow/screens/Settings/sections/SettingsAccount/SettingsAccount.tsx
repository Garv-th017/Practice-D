import { useState } from 'react'
import { ListRow } from '../../../../kit/ListRow/ListRow'
import './SettingsAccount.css'

const info = {
  privacy: 'We keep your name, phone, email and trips to run your bookings. We never sell your data, and you can ask us to delete it at any time.',
  about: 'BusTopia 1.0 · Book buses across 120+ cities, pick your seat and track your ride live.',
}

export function SettingsAccount({ onLogout }: { onLogout: () => void }) {
  const [open, setOpen] = useState<keyof typeof info | null>(null)
  const toggle = (id: keyof typeof info) => setOpen((o) => (o === id ? null : id))

  return (
    <section className="k-section">
      <span className="k-label">Account</span>
      <div className="k-card k-card--flush">
        <ListRow icon="shield" title="Privacy and data" sub="What we store and why" onClick={() => toggle('privacy')} />
        {open === 'privacy' && <p className="settings-account__info">{info.privacy}</p>}
        <ListRow icon="help" title="About BusTopia" sub="Version 1.0" onClick={() => toggle('about')} />
        {open === 'about' && <p className="settings-account__info">{info.about}</p>}
        <ListRow icon="logout" title="Log out" onClick={onLogout} tone="danger" />
      </div>
      <p className="settings-account__note">Made with care for every rider.</p>
    </section>
  )
}
