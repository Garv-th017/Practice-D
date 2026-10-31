import { GoogleButton } from '../../../../kit/GoogleButton/GoogleButton'
import './LoginOptions.css'

export function LoginOptions() {
  return (
    <div className="login-options">
      <GoogleButton to="/app/otp" />
      <p className="login-options__terms">
        By continuing you agree to our <span>Terms</span> and <span>Privacy policy</span>.
      </p>
    </div>
  )
}
