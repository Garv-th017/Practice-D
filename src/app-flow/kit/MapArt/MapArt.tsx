import './MapArt.css'

/** Stylised city map (river, parks, blocks, roads) drawn in theme colours. Overlay routes on top. */
export function MapArt() {
  return (
    <svg className="map-art" viewBox="0 0 280 300" preserveAspectRatio="none" aria-hidden="true">
      <rect className="map-land" width="280" height="300" />
      <path className="map-water" d="M232 0 C212 60 262 110 236 170 S262 250 244 300 L280 300 L280 0 Z" />
      <rect className="map-park" x="12" y="94" width="62" height="48" rx="12" />
      <rect className="map-park" x="112" y="238" width="62" height="46" rx="12" />
      {[
        [96, 14, 42, 30],
        [148, 20, 30, 40],
        [14, 14, 50, 22],
        [96, 100, 40, 36],
        [150, 96, 36, 46],
        [14, 236, 42, 44],
        [190, 236, 26, 40],
        [96, 160, 44, 40],
      ].map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} className="map-block" x={x} y={y} width={w} height={h} rx="5" />
      ))}
      <path className="map-road-minor" d="M0 150H230M140 0V300M30 150V300M0 40H230" />
      <path className="map-road" d="M0 82H280M0 222H280M84 0V300M196 0V300" />
      <text className="map-label" x="18" y="122">Civil Lines</text>
      <text className="map-label map-label--water" x="246" y="140" transform="rotate(80 246 140)">Yamuna</text>
    </svg>
  )
}
