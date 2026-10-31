import type { Profile } from '../../../../kit/demoStore'
import { TextField } from '../../../../kit/TextField/TextField'
import './ProfileForm.css'

interface ProfileFormProps {
  value: Profile
  onChange: (patch: Partial<Profile>) => void
}

export function ProfileForm({ value, onChange }: ProfileFormProps) {
  return (
    <section className="profile-form">
      <TextField label="Full name" value={value.name} autoComplete="name" onChange={(e) => onChange({ name: e.target.value })} />
      <TextField
        label="Phone number"
        prefix="+91"
        value={value.phone}
        inputMode="tel"
        autoComplete="tel-national"
        onChange={(e) => onChange({ phone: e.target.value })}
      />
      <TextField label="Email" type="email" value={value.email} autoComplete="email" onChange={(e) => onChange({ email: e.target.value })} />
      <div className="profile-form__group">
        <TextField
          label="Emergency contact"
          prefix="+91"
          value={value.emergency}
          inputMode="tel"
          onChange={(e) => onChange({ emergency: e.target.value })}
        />
        <p className="k-muted">Gets your live location when you press SOS during a trip.</p>
      </div>
    </section>
  )
}
