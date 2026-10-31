import { useEffect, useState } from 'react'
import { usePreviewMode } from '../../../../kit/previewMode'
import './OtpResend.css'

const WAIT_SECONDS = 30

export function OtpResend() {
  const preview = usePreviewMode()
  const [left, setLeft] = useState(WAIT_SECONDS)

  useEffect(() => {
    if (preview || left === 0) return
    const timer = setTimeout(() => setLeft((s) => s - 1), 1000)
    return () => clearTimeout(timer)
  }, [left, preview])

  return (
    <p className="otp-resend">
      Didn’t get it?{' '}
      {left > 0 ? (
        <span className="otp-resend__wait">
          Resend in <span className="otp-resend__time">0:{String(left).padStart(2, '0')}</span>
        </span>
      ) : (
        <button type="button" className="otp-resend__btn" onClick={() => setLeft(WAIT_SECONDS)}>
          Resend code
        </button>
      )}
    </p>
  )
}
