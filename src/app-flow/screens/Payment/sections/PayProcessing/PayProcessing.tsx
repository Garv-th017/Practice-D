import { rupees } from '../../../../data'
import './PayProcessing.css'

export function PayProcessing({ total }: { total: number }) {
  return (
    <div className="pay-processing" role="status">
      <span className="pay-processing__spinner" />
      <b>Processing {rupees(total)}</b>
      <span className="k-muted">Please don’t close the app</span>
    </div>
  )
}
