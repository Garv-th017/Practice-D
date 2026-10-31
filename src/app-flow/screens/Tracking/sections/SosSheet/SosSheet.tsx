import { useState } from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import { AppButton } from '../../../../kit/AppButton/AppButton'
import './SosSheet.css'

const contacts = ['Mom', 'Dad', 'Priya']

export function SosSheet({ onClose }: { onClose: () => void }) {
  const [sent, setSent] = useState(false)

  return (
    <div className="sos" role="dialog" aria-modal="true" aria-label="Emergency SOS">
      <button type="button" className="sos__backdrop" aria-label="Close" onClick={onClose} />
      <div className="sos__sheet">
        <span className="sos__icon">
          <Icon name={sent ? 'check' : 'alert'} size={24} strokeWidth={2.4} />
        </span>
        <b className="sos__title">{sent ? 'Help is on the way' : 'Send an emergency alert?'}</b>
        <p className="k-muted">
          {sent
            ? 'Your live location was sent to your contacts and the BusTopia safety team.'
            : 'We’ll share your live location with your emergency contacts and our 24/7 safety team.'}
        </p>
        {!sent && (
          <div className="k-chips sos__contacts">
            {contacts.map((c) => (
              <span key={c} className="k-chip">
                {c}
              </span>
            ))}
            <span className="k-chip">Safety team</span>
          </div>
        )}
        {sent ? (
          <AppButton variant="outline" onClick={onClose}>
            Close
          </AppButton>
        ) : (
          <>
            <button type="button" className="sos__send" onClick={() => setSent(true)}>
              Send alert
            </button>
            <AppButton variant="text" onClick={onClose}>
              Cancel
            </AppButton>
          </>
        )}
      </div>
    </div>
  )
}
