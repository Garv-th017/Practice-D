import { AppBar } from '../../kit/AppBar/AppBar'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { AuthSwitch } from '../../kit/AuthSwitch/AuthSwitch'
import { GoogleButton } from '../../kit/GoogleButton/GoogleButton'
import { SignupForm } from './sections/SignupForm/SignupForm'
import './Signup.css'

export function Signup() {
  return (
    <AppScreen className="signup">
      <AppBar back="/app/login" />
      <div className="signup__head">
        <h1>Create your account</h1>
        <p>It takes less than a minute.</p>
      </div>
      <GoogleButton to="/app/otp" label="Sign up with Google" />
      <div className="signup__or">
        <span>or with your details</span>
      </div>
      <SignupForm />
      <AuthSwitch text="Already have an account?" linkText="Log in" to="/app/login" />
    </AppScreen>
  )
}
