import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Icon } from '../../../components/Icon/Icon'
import { AppBar } from '../../kit/AppBar/AppBar'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { OtpCode, OTP_LENGTH } from './sections/OtpCode/OtpCode'
import { OtpResend } from './sections/OtpResend/OtpResend'
import './Otp.css'

export function Otp() {
  const navigate = useNavigate()
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(''))
  const complete = digits.every((d) => d !== '')

  return (
    <AppScreen className="otp">
      <AppBar back="/app/signup" />
      <div className="otp__head">
        <span className="otp__icon">
          <Icon name="phone" size={22} />
        </span>
        <h1>Verify your phone</h1>
        <p>
          Enter the 6-digit code we sent to <b>+91 98765 43210</b>
        </p>
      </div>
      <OtpCode digits={digits} onChange={setDigits} />
      <OtpResend />
      <div className="otp__actions">
        <AppButton disabled={!complete} onClick={() => navigate('/app/permissions')}>
          Verify and continue
        </AppButton>
      </div>
    </AppScreen>
  )
}
