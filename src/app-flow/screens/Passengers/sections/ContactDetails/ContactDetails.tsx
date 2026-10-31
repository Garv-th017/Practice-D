import { TextField } from '../../../../kit/TextField/TextField'
import './ContactDetails.css'

export function ContactDetails() {
  return (
    <section className="k-section contact-details">
      <span className="k-label">Contact details</span>
      <p className="k-muted">Your ticket and trip alerts are sent here.</p>
      <TextField label="Email" type="email" defaultValue="aarav@email.com" autoComplete="email" />
      <TextField label="Phone number" prefix="+91" defaultValue="98765 43210" inputMode="tel" autoComplete="tel-national" />
    </section>
  )
}
