import './Illustrations.css'

/* Drawn "photos" for bus details. Colours come from CSS classes, so they follow the theme. */

export function BusOutside() {
  return (
    <svg className="ill" viewBox="0 0 200 120" aria-hidden="true">
      <rect className="ill-sky" width="200" height="120" />
      <circle className="ill-sun" cx="164" cy="26" r="12" />
      <path className="ill-hill" d="M0 82 Q50 58 102 80 T200 72 V120 H0z" />
      <rect className="ill-road" y="94" width="200" height="26" />
      <path className="ill-road-line" d="M0 107 H200" />
      <g transform="translate(36 48)">
        <rect className="ill-bus" width="128" height="46" rx="10" />
        <rect className="ill-stripe" y="30" width="128" height="5" />
        <rect className="ill-window" x="10" y="8" width="20" height="16" rx="3" />
        <rect className="ill-window" x="34" y="8" width="20" height="16" rx="3" />
        <rect className="ill-window" x="58" y="8" width="20" height="16" rx="3" />
        <rect className="ill-window" x="82" y="8" width="20" height="16" rx="3" />
        <rect className="ill-window" x="108" y="8" width="13" height="22" rx="3" />
        <circle className="ill-wheel" cx="28" cy="46" r="9" />
        <circle className="ill-hub" cx="28" cy="46" r="3.5" />
        <circle className="ill-wheel" cx="100" cy="46" r="9" />
        <circle className="ill-hub" cx="100" cy="46" r="3.5" />
      </g>
    </svg>
  )
}

export function BusSeats() {
  return (
    <svg className="ill" viewBox="0 0 200 120" aria-hidden="true">
      <rect className="ill-wall" width="200" height="120" />
      <path className="ill-floor" d="M70 120 L88 40 H112 L130 120 Z" />
      {[0, 1, 2].map((i) => {
        const s = 1 - i * 0.22
        const y = 92 - i * 24
        return (
          <g key={i}>
            <rect className="ill-seat" x={70 - 44 * s} y={y - 22 * s} width={40 * s} height={28 * s} rx={6 * s} />
            <rect className="ill-seat-back" x={70 - 44 * s} y={y - 34 * s} width={40 * s} height={14 * s} rx={5 * s} />
            <rect className="ill-seat" x={130 + 4 * s} y={y - 22 * s} width={40 * s} height={28 * s} rx={6 * s} />
            <rect className="ill-seat-back" x={130 + 4 * s} y={y - 34 * s} width={40 * s} height={14 * s} rx={5 * s} />
          </g>
        )
      })}
      <rect className="ill-light" x="84" y="8" width="32" height="5" rx="2.5" />
    </svg>
  )
}

export function BusBerth() {
  return (
    <svg className="ill" viewBox="0 0 200 120" aria-hidden="true">
      <rect className="ill-wall" width="200" height="120" />
      <rect className="ill-window-band" x="0" y="10" width="200" height="22" />
      {[22, 72].map((y) => (
        <g key={y}>
          <rect className="ill-berth" x="22" y={y} width="156" height="34" rx="8" />
          <rect className="ill-pillow" x="30" y={y + 7} width="34" height="20" rx="7" />
          <rect className="ill-blanket" x="70" y={y + 9} width="100" height="18" rx="6" />
          <path className="ill-curtain" d={`M168 ${y - 4} q6 8 0 18 q-6 10 0 20`} />
        </g>
      ))}
    </svg>
  )
}

export function BusWashroom() {
  return (
    <svg className="ill" viewBox="0 0 200 120" aria-hidden="true">
      <rect className="ill-wall" width="200" height="120" />
      <rect className="ill-mirror" x="72" y="14" width="56" height="40" rx="10" />
      <path className="ill-shine" d="M84 22 l14 0 M84 30 l8 0" />
      <rect className="ill-counter" x="52" y="66" width="96" height="12" rx="4" />
      <path className="ill-sink" d="M80 66 q20 18 40 0z" />
      <path className="ill-tap" d="M100 58 v8 M96 58 h8" />
      <rect className="ill-cabinet" x="60" y="78" width="80" height="34" rx="4" />
    </svg>
  )
}
