import type { CSSProperties } from 'react'
import './OperatorLogo.css'

const TONES = ['primary', 'accent', 'success', 'neutral'] as const

/** Monogram badge for a bus operator, with a stable colour per name. */
export function OperatorLogo({ name, size = 36 }: { name: string; size?: number }) {
  const letters = name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
  const tone = TONES[[...name].reduce((sum, c) => sum + c.charCodeAt(0), 0) % TONES.length]

  return (
    <span className={`op-logo is-${tone}`} style={{ '--size': `${size}px` } as CSSProperties} aria-hidden="true">
      {letters}
    </span>
  )
}
