import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { rupees } from '../../data'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { fareOf, setDemo, useDemo } from '../../kit/demoStore'
import { HoldBanner } from '../../kit/HoldBanner/HoldBanner'
import { TopBar } from '../../kit/TopBar/TopBar'
import { PayAmount } from './sections/PayAmount/PayAmount'
import { PayMethods } from './sections/PayMethods/PayMethods'
import { PayProcessing } from './sections/PayProcessing/PayProcessing'
import './Payment.css'

const PROCESSING_MS = 1600

export function Payment() {
  const navigate = useNavigate()
  const demo = useDemo()
  const { total } = fareOf(demo)
  const [processing, setProcessing] = useState(false)

  useEffect(() => {
    if (!processing) return
    const timer = setTimeout(() => {
      // Demo: net banking always fails so the failed-payment screen can be seen
      if (demo.payMethod === 'netbanking') {
        navigate('/app/payment-failed')
        return
      }
      setDemo({ cancelled: false })
      navigate('/app/confirmed')
    }, PROCESSING_MS)
    return () => clearTimeout(timer)
  }, [processing, navigate, demo.payMethod])

  return (
    <AppScreen bare className="payment">
      <TopBar back="/app/review" title="Payment" subtitle="Secure checkout" />
      <AppBody className="payment__body">
        <HoldBanner />
        <PayAmount total={total} />
        <PayMethods total={total} />
      </AppBody>
      <BottomBar>
        <AppButton onClick={() => setProcessing(true)}>Pay {rupees(total)}</AppButton>
      </BottomBar>
      {processing && <PayProcessing total={total} />}
    </AppScreen>
  )
}
