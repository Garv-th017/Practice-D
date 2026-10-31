import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import { Icon } from '../../../../../components/Icon/Icon'
import { AppButton } from '../../../../kit/AppButton/AppButton'
import { TextField } from '../../../../kit/TextField/TextField'
import './SignupForm.css'

type Field = 'name' | 'phone' | 'email'

const validate = (v: Record<Field, string>): Record<Field, string> => ({
  name: v.name.trim().length < 2 ? 'Enter your full name' : '',
  phone: v.phone.replace(/\D/g, '').length !== 10 ? 'Enter a 10-digit mobile number' : '',
  email: /^\S+@\S+\.\S+$/.test(v.email.trim()) ? '' : 'Enter an email like name@email.com',
})

export function SignupForm() {
  const navigate = useNavigate()
  const [agreed, setAgreed] = useState(false)
  const [values, setValues] = useState<Record<Field, string>>({ name: '', phone: '', email: '' })
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})

  const errors = validate(values)
  const errorFor = (f: Field) => (touched[f] ? errors[f] || undefined : undefined)
  const field = (f: Field) => ({
    value: values[f],
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValues((v) => ({ ...v, [f]: e.target.value })),
    onBlur: () => setTouched((t) => ({ ...t, [f]: true })),
    error: errorFor(f),
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (Object.values(errors).some(Boolean)) {
      setTouched({ name: true, phone: true, email: true })
      return
    }
    navigate('/app/otp')
  }

  return (
    <form className="signup-form" onSubmit={submit} noValidate>
      <TextField label="Full name" placeholder="Aarav Kumar" autoComplete="name" {...field('name')} />
      <TextField label="Phone number" prefix="+91" placeholder="98765 43210" inputMode="tel" autoComplete="tel-national" {...field('phone')} />
      <TextField label="Email" placeholder="aarav@email.com" type="email" autoComplete="email" {...field('email')} />

      <label className="signup-form__check">
        <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
        <span className="signup-form__box" aria-hidden="true">
          <Icon name="check" size={11} strokeWidth={3} />
        </span>
        <span>I agree to the Terms and Privacy policy</span>
      </label>

      <AppButton type="submit" disabled={!agreed}>
        Create account
      </AppButton>
    </form>
  )
}
