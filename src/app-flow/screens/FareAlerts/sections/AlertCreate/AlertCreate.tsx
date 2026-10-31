import { useState, type CSSProperties } from 'react'
import { rupees } from '../../../../data'
import { AppButton } from '../../../../kit/AppButton/AppButton'
import { useDemo } from '../../../../kit/demoStore'
import type { FareAlert } from '../AlertList/AlertList'
import './AlertCreate.css'

const MIN = 399
const MAX = 1200

export function AlertCreate({ onCreate }: { onCreate: (alert: FareAlert) => void }) {
  const { from, to } = useDemo()
  const [target, setTarget] = useState(650)
  const [added, setAdded] = useState(false)

  return (
    <section className="k-card alert-create">
      <div className="k-row">
        <span className="k-grow">
          <span className="k-muted">New alert</span>
          <b>
            {from} → {to}
          </b>
        </span>
        <b className="alert-create__target">Under {rupees(target)}</b>
      </div>
      <input
        className="alert-create__range"
        type="range"
        min={MIN}
        max={MAX}
        step={50}
        value={target}
        aria-label="Alert me when the fare is under"
        style={{ '--fill': `${((target - MIN) / (MAX - MIN)) * 100}%` } as CSSProperties}
        onChange={(e) => {
          setTarget(Number(e.target.value))
          setAdded(false)
        }}
      />
      <AppButton
        variant={added ? 'outline' : 'primary'}
        disabled={added}
        onClick={() => {
          onCreate({ id: `a${Date.now()}`, route: `${from} → ${to}`, target, on: true, lowest: null })
          setAdded(true)
        }}
      >
        {added ? 'Alert added' : 'Create alert'}
      </AppButton>
    </section>
  )
}
