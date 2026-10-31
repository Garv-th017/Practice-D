import { useRef, type ClipboardEvent, type KeyboardEvent } from 'react'
import './OtpCode.css'

export const OTP_LENGTH = 6

interface OtpCodeProps {
  digits: string[]
  onChange: (digits: string[]) => void
}

export function OtpCode({ digits, onChange }: OtpCodeProps) {
  const inputs = useRef<(HTMLInputElement | null)[]>([])

  const setDigit = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1)
    const next = [...digits]
    next[index] = digit
    onChange(next)
    if (digit && index < OTP_LENGTH - 1) inputs.current[index + 1]?.focus()
  }

  const onKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) inputs.current[index - 1]?.focus()
  }

  const onPaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    if (!pasted) return
    e.preventDefault()
    onChange(Array.from({ length: OTP_LENGTH }, (_, i) => pasted[i] ?? ''))
    inputs.current[Math.min(pasted.length, OTP_LENGTH - 1)]?.focus()
  }

  return (
    <div className="otp-code" role="group" aria-label="Verification code">
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => {
            inputs.current[i] = el
          }}
          className={`otp-code__box ${d ? 'is-filled' : ''}`}
          value={d}
          inputMode="numeric"
          autoComplete={i === 0 ? 'one-time-code' : 'off'}
          maxLength={2}
          aria-label={`Digit ${i + 1}`}
          onChange={(e) => setDigit(i, e.target.value)}
          onKeyDown={(e) => onKeyDown(i, e)}
          onPaste={onPaste}
        />
      ))}
    </div>
  )
}
