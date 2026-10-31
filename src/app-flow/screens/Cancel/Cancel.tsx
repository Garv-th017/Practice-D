import { useState } from 'react'
import { rupees } from '../../data'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { fareOf, setDemo, useDemo } from '../../kit/demoStore'
import { TopBar } from '../../kit/TopBar/TopBar'
import { CancelReason } from './sections/CancelReason/CancelReason'
import { CancelSeats } from './sections/CancelSeats/CancelSeats'
import { RefundStatus } from './sections/RefundStatus/RefundStatus'
import './Cancel.css'

const FEE_RATE = 0.1

export function Cancel() {
  const demo = useDemo()
  const { total } = fareOf(demo)
  const perSeat = total / Math.max(demo.seats.length, 1)
  const [picked, setPicked] = useState<string[]>(demo.seats)
  const [reason, setReason] = useState('Change of plans')
  const [done, setDone] = useState<{ seats: string[]; refund: number } | null>(null)

  const paid = Math.round(perSeat * picked.length)
  const fee = Math.round(paid * FEE_RATE)
  const refund = paid - fee

  const confirm = () => {
    const remaining = demo.seats.filter((s) => !picked.includes(s))
    setDone({ seats: picked, refund })
    setDemo(
      remaining.length
        ? { seats: remaining, passengers: demo.passengers.filter((_, i) => !picked.includes(demo.seats[i])) }
        : { cancelled: true },
    )
  }

  if (done) {
    return (
      <AppScreen bare>
        <TopBar back="/app/trips" title="Cancellation done" />
        <AppBody>
          <RefundStatus seats={done.seats} refund={done.refund} />
        </AppBody>
        <BottomBar>
          <AppButton to="/app/trips">Go to my trips</AppButton>
        </BottomBar>
      </AppScreen>
    )
  }

  return (
    <AppScreen bare>
      <TopBar back="/app/ticket" title="Cancel ticket" subtitle={`${demo.from} → ${demo.to}`} />
      <AppBody className="cancel__body">
        <CancelSeats seats={demo.seats} passengers={demo.passengers} picked={picked} onChange={setPicked} />
        <CancelReason value={reason} onChange={setReason} />
        <section className="k-card cancel__refund">
          <div className="k-row">
            <span className="k-muted">Paid for {picked.length} seat{picked.length === 1 ? '' : 's'}</span>
            <span>{rupees(paid)}</span>
          </div>
          <div className="k-row">
            <span className="k-muted">Cancellation fee (10%)</span>
            <span>−{rupees(fee)}</span>
          </div>
          <div className="k-divider" />
          <div className="k-row">
            <b>You get back</b>
            <b className="k-price k-success">{rupees(refund)}</b>
          </div>
        </section>
      </AppBody>
      <BottomBar>
        <button type="button" className="cancel__confirm" disabled={!picked.length} onClick={confirm}>
          {picked.length ? `Cancel ${picked.length} seat${picked.length === 1 ? '' : 's'}` : 'Pick a seat to cancel'}
        </button>
      </BottomBar>
    </AppScreen>
  )
}
