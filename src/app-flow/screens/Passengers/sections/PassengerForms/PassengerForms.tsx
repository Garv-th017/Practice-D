import type { Passenger } from '../../../../kit/demoStore'
import { SegTabs } from '../../../../kit/SegTabs/SegTabs'
import { TextField } from '../../../../kit/TextField/TextField'
import './PassengerForms.css'

const genders: { id: Passenger['gender']; label: string }[] = [
  { id: 'Male', label: 'Male' },
  { id: 'Female', label: 'Female' },
  { id: 'Other', label: 'Other' },
]

interface PassengerFormsProps {
  seats: string[]
  passengers: Passenger[]
  onChange: (index: number, patch: Partial<Passenger>) => void
}

export function PassengerForms({ seats, passengers, onChange }: PassengerFormsProps) {
  return (
    <div className="passenger-forms">
      {passengers.map((p, i) => (
        <section key={seats[i]} className="k-card passenger-form">
          <div className="k-row">
            <b>Passenger {i + 1}</b>
            <span className="k-chip">Seat {seats[i]}</span>
          </div>
          <TextField label="Full name" value={p.name} placeholder="As on ID proof" onChange={(e) => onChange(i, { name: e.target.value })} />
          <div className="passenger-form__row">
            <TextField
              label="Age"
              value={p.age}
              inputMode="numeric"
              maxLength={3}
              placeholder="28"
              onChange={(e) => onChange(i, { age: e.target.value.replace(/\D/g, '') })}
            />
            <div className="passenger-form__gender">
              <span className="app-field__label">Gender</span>
              <SegTabs label={`Gender of passenger ${i + 1}`} items={genders} active={p.gender} onChange={(gender) => onChange(i, { gender })} />
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
