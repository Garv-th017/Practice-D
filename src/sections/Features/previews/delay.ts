import type { CSSProperties } from 'react'

/** Inline style for a staggered preview animation (--d), plus any extra custom properties. */
export const d = (ms: number, extra: Record<string, string | number> = {}) =>
  ({ '--d': `${ms}ms`, ...extra }) as CSSProperties
