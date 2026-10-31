import { useMemo } from 'react'
import { encode } from 'uqr'
import './QrCode.css'

interface QrCodeProps {
  value: string
  size?: number
  className?: string
}

export function QrCode({ value, size = 72, className = '' }: QrCodeProps) {
  const { modules, path } = useMemo(() => {
    const qr = encode(value, { border: 0 })
    let d = ''
    qr.data.forEach((row, y) =>
      row.forEach((dark, x) => {
        if (dark) d += `M${x} ${y}h1v1h-1z`
      }),
    )
    return { modules: qr.size, path: d }
  }, [value])

  return (
    <svg
      className={`qr ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${modules} ${modules}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={`QR code for ${value}`}
    >
      <path d={path} />
    </svg>
  )
}
