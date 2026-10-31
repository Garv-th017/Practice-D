import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { AuthSwitch } from '../../kit/AuthSwitch/AuthSwitch'
import { LoginHero } from './sections/LoginHero/LoginHero'
import { LoginOptions } from './sections/LoginOptions/LoginOptions'
import './Login.css'

export function Login() {
  return (
    <AppScreen className="login">
      <LoginHero />
      <LoginOptions />
      <AuthSwitch text="New to BusTopia?" linkText="Sign up" to="/app/signup" />
    </AppScreen>
  )
}
