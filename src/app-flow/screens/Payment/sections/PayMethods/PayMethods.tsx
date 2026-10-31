import { Icon, type IconName } from '../../../../../components/Icon/Icon'
import { rupees } from '../../../../data'
import { setDemo, useDemo } from '../../../../kit/demoStore'
import './PayMethods.css'

const WALLET_BALANCE = 1250

const methods: { id: string; icon: IconName; name: string; sub: string }[] = [
  { id: 'upi', icon: 'phone', name: 'UPI', sub: 'aarav@okbank' },
  { id: 'card', icon: 'card', name: 'Debit or credit card', sub: 'Visa •••• 4421' },
  { id: 'wallet', icon: 'wallet', name: 'BusTopia Wallet', sub: `Balance ${rupees(WALLET_BALANCE)}` },
  { id: 'netbanking', icon: 'home', name: 'Net banking', sub: 'All major banks' },
]

export function PayMethods({ total }: { total: number }) {
  const { payMethod } = useDemo()

  return (
    <section className="k-section">
      <span className="k-label">Pay with</span>
      <div className="pay-methods" role="radiogroup" aria-label="Payment method">
        {methods.map((m) => {
          const short = m.id === 'wallet' && total > WALLET_BALANCE
          const on = payMethod === m.id
          return (
            <button
              key={m.id}
              type="button"
              role="radio"
              aria-checked={on}
              disabled={short}
              className={`pay-method ${on ? 'is-on' : ''}`}
              onClick={() => setDemo({ payMethod: m.id })}
            >
              <span className="k-icon">
                <Icon name={m.icon} size={15} />
              </span>
              <span className="k-grow">
                <b>{m.name}</b>
                <span className={`k-muted ${short ? 'k-danger' : ''}`}>{short ? 'Not enough balance' : m.sub}</span>
              </span>
              <span className="pay-method__radio" />
            </button>
          )
        })}
      </div>
    </section>
  )
}
