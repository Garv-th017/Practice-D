import { Icon } from '../../../../../components/Icon/Icon'
import { rupees } from '../../../../data'
import './WalletHistory.css'

export interface WalletEntry {
  id: string
  title: string
  when: string
  amount: number
}

export function WalletHistory({ entries }: { entries: WalletEntry[] }) {
  return (
    <div className="k-card k-card--flush">
      {entries.map((e) => (
        <div key={e.id} className="wallet-entry">
          <span className={`wallet-entry__icon ${e.amount > 0 ? 'is-in' : 'is-out'}`}>
            <Icon name={e.amount > 0 ? 'plus' : 'minus'} size={13} strokeWidth={2.6} />
          </span>
          <span className="k-grow">
            <b>{e.title}</b>
            <span className="k-muted">{e.when}</span>
          </span>
          <b className={e.amount > 0 ? 'k-success' : ''}>
            {e.amount > 0 ? '+' : '−'}
            {rupees(Math.abs(e.amount))}
          </b>
        </div>
      ))}
    </div>
  )
}
