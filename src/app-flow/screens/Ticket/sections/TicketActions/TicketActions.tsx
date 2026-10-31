import { useState } from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import { AppButton } from '../../../../kit/AppButton/AppButton'
import { useDemo } from '../../../../kit/demoStore'
import { ListRow } from '../../../../kit/ListRow/ListRow'
import './TicketActions.css'

export function TicketActions() {
  const { cancelled } = useDemo()
  const [saved, setSaved] = useState(false)
  const [shared, setShared] = useState(false)

  if (cancelled) {
    return (
      <AppButton to="/app/home" variant="outline">
        Book another trip
      </AppButton>
    )
  }

  return (
    <div className="ticket-actions">
      <AppButton to="/app/tracking" icon={<Icon name="pin" size={15} />}>
        Track your bus
      </AppButton>
      <div className="ticket-actions__row">
        <button type="button" className="ticket-actions__btn" onClick={() => setSaved(true)}>
          <Icon name={saved ? 'check' : 'download'} size={15} /> {saved ? 'Saved offline' : 'Save offline'}
        </button>
        <button type="button" className="ticket-actions__btn" onClick={() => setShared(true)}>
          <Icon name={shared ? 'check' : 'share'} size={15} /> {shared ? 'Link copied' : 'Share'}
        </button>
      </div>
      <div className="k-card k-card--flush">
        <ListRow icon="pin" title="Directions to boarding point" sub="6 min walk to Kashmere Gate" to="/app/directions" />
        <ListRow icon="calendar" title="Change travel date" sub="Keep your bus and seats" to="/app/reschedule" />
        <ListRow icon="x" title="Cancel ticket" sub="See your refund before you confirm" to="/app/cancel" tone="danger" />
      </div>
    </div>
  )
}
