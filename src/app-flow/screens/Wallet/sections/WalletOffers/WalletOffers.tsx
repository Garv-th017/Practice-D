import { useState } from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import './WalletOffers.css'

const offers = [
  { code: 'BUSFIRST', title: '₹120 off your first trip', note: 'New riders · min fare ₹499' },
  { code: 'SAVE10', title: '10% off, up to ₹150', note: 'Weekend trips' },
  { code: 'WALLET50', title: '₹50 cashback', note: 'Pay with BusTopia Wallet' },
]

export function WalletOffers() {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code)
    } catch {
      /* clipboard blocked: still show the code as picked */
    }
    setCopied(code)
  }

  return (
    <div className="wallet-offers">
      {offers.map((o) => (
        <div key={o.code} className="wallet-offer">
          <span className="k-icon">
            <Icon name="gift" size={15} />
          </span>
          <span className="k-grow">
            <b>{o.title}</b>
            <span className="k-muted">{o.note}</span>
          </span>
          <button type="button" className={`wallet-offer__code ${copied === o.code ? 'is-copied' : ''}`} onClick={() => copy(o.code)}>
            {copied === o.code ? 'Copied' : o.code}
          </button>
        </div>
      ))}
    </div>
  )
}
