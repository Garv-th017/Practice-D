import { useId } from 'react'
import './BusMark.css'

interface BusMarkProps {
  size?: number
  /** inverse = light tile with a teal bus, for use on teal backgrounds */
  inverse?: boolean
  className?: string
}

export function BusMark({ size = 34, inverse = false, className = '' }: BusMarkProps) {
  const clipId = useId()

  return (
    <svg
      className={`bus-mark ${inverse ? 'bus-mark--inverse' : ''} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <rect width="32" height="32" rx="10" />
        </clipPath>
      </defs>
      <rect className="bus-mark__tile" width="32" height="32" rx="10" />
      <g clipPath={`url(#${clipId})`}>
        <path className="bus-mark__road" d="M-8 27.5H40" />
        <g className="bus-mark__bus">
          <rect className="bus-mark__body" x="5" y="8.5" width="22" height="13" rx="4" />
          <rect className="bus-mark__window" x="8" y="11" width="16" height="4.5" rx="1.5" />
          <circle className="bus-mark__wheel" cx="11" cy="22" r="2.5" />
          <circle className="bus-mark__wheel" cx="21" cy="22" r="2.5" />
        </g>
      </g>
    </svg>
  )
}
