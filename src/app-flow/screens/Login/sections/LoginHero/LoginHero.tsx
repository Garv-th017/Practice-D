import { BusMark } from '../../../../../components/BusMark/BusMark'
import './LoginHero.css'

export function LoginHero() {
  return (
    <div className="login-hero">
      <div className="login-hero__art" aria-hidden="true">
        <span className="login-hero__route" />
        <span className="login-hero__stop login-hero__stop--from" />
        <span className="login-hero__stop login-hero__stop--to" />
        <BusMark size={64} />
      </div>
      <h1 className="login-hero__title">Welcome back</h1>
      <p className="login-hero__text">Log in to book buses, manage your trips and track your ride.</p>
    </div>
  )
}
