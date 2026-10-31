import { Link } from 'react-router'
import './AuthSwitch.css'

interface AuthSwitchProps {
  text: string
  linkText: string
  to: string
}

export function AuthSwitch({ text, linkText, to }: AuthSwitchProps) {
  return (
    <p className="auth-switch">
      {text} <Link to={to}>{linkText}</Link>
    </p>
  )
}
