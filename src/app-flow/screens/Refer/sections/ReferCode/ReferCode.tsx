import { useState } from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import './ReferCode.css'

const CODE = 'AARAV100'

export function ReferCode() {
  const [copied, setCopied] = useState(false)
  const [shared, setShared] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CODE)
    } catch {
      /* clipboard blocked: still confirm the action */
    }
    setCopied(true)
  }

  return (
    <section className="k-section">
      <span className="k-label">Your invite code</span>
      <div className="refer-code">
        <b className="refer-code__value">{CODE}</b>
        <button type="button" className={`k-chip ${copied ? 'k-chip--success' : 'is-on'}`} onClick={copy}>
          <Icon name={copied ? 'check' : 'copy'} size={12} /> {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <button type="button" className="refer-code__share" onClick={() => setShared(true)}>
        <Icon name={shared ? 'check' : 'share'} size={15} /> {shared ? 'Invite link ready to send' : 'Share invite link'}
      </button>
    </section>
  )
}
