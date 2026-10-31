import { useState } from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import { rupees } from '../../../../data'
import './WalletBalance.css'

const amounts = [500, 1000, 2000]

interface WalletBalanceProps {
  balance: number
  onAdd: (amount: number) => void
}

export function WalletBalance({ balance, onAdd }: WalletBalanceProps) {
  const [amount, setAmount] = useState(500)

  return (
    <section className="wallet-balance">
      <span className="wallet-balance__label">
        <Icon name="wallet" size={13} /> BusTopia Wallet
      </span>
      <b className="wallet-balance__value">{rupees(balance)}</b>
      <div className="wallet-balance__amounts">
        {amounts.map((a) => (
          <button
            key={a}
            type="button"
            className={`wallet-balance__chip ${amount === a ? 'is-on' : ''}`}
            aria-pressed={amount === a}
            onClick={() => setAmount(a)}
          >
            +{rupees(a)}
          </button>
        ))}
      </div>
      <button type="button" className="wallet-balance__add" onClick={() => onAdd(amount)}>
        Add {rupees(amount)}
      </button>
    </section>
  )
}
