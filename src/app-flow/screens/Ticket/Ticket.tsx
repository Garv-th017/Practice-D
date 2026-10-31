import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TopBar } from '../../kit/TopBar/TopBar'
import { TicketActions } from './sections/TicketActions/TicketActions'
import { TicketPass } from './sections/TicketPass/TicketPass'
import './Ticket.css'

export function Ticket() {
  return (
    <AppScreen bare>
      <TopBar back="/app/trips" title="Your ticket" subtitle="Show the QR code when boarding" />
      <AppBody className="ticket-screen__body">
        <TicketPass />
        <TicketActions />
      </AppBody>
    </AppScreen>
  )
}
