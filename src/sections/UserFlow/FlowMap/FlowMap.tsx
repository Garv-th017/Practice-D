import { useLayoutEffect, useRef, useState } from 'react'
import { flowScreens } from '../../../app-flow/flow'
import { edges, lanes, places } from '../userFlowData'
import { Wireframe } from '../Wireframe/Wireframe'
import './FlowMap.css'

/* ---------- Geometry (px) ---------- */
const NODE_W = 108
const WIRE_H = Math.round((NODE_W * 254) / 120)
const NODE_H = WIRE_H + 30
const COL = 152
const ROW_GAP = 44
const GUTTER = 64
const LANE_HEAD = 64
const LANE_GAP = 40

const maxCol = Math.max(...Object.values(places).map((p) => p.col))
const MAP_W = GUTTER + maxCol * COL + NODE_W

const laneHeight = (rows: number) => LANE_HEAD + rows * NODE_H + (rows - 1) * ROW_GAP
const laneTops = lanes.reduce<number[]>((tops, _lane, i) => {
  tops.push(i === 0 ? 0 : tops[i - 1] + laneHeight(lanes[i - 1].rows) + LANE_GAP)
  return tops
}, [])
// Extra room at the bottom for two-line titles under the last row
const MAP_H = laneTops[laneTops.length - 1] + laneHeight(lanes[lanes.length - 1].rows) + 24

const posOf = (id: string) => {
  const p = places[id]
  const x = GUTTER + p.col * COL
  const y = laneTops[p.lane] + LANE_HEAD + p.row * (NODE_H + ROW_GAP)
  return { ...p, x, y, cx: x + NODE_W / 2, mid: y + WIRE_H / 2, bottom: y + NODE_H }
}

/** Polyline with rounded corners */
function rounded(points: [number, number][], r = 10) {
  let d = `M${points[0][0]} ${points[0][1]}`
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1]
    const [x, y] = points[i]
    const [nx, ny] = points[i + 1]
    const inLen = Math.hypot(x - px, y - py)
    const outLen = Math.hypot(nx - x, ny - y)
    const ri = Math.min(r, inLen / 2, outLen / 2)
    const bx = x - ((x - px) / (inLen || 1)) * ri
    const by = y - ((y - py) / (inLen || 1)) * ri
    const ax = x + ((nx - x) / (outLen || 1)) * ri
    const ay = y + ((ny - y) / (outLen || 1)) * ri
    d += `L${bx} ${by}Q${x} ${y} ${ax} ${ay}`
  }
  const [lx, ly] = points[points.length - 1]
  return `${d}L${lx} ${ly}`
}

const crossLane = edges.filter((e) => places[e.from].lane !== places[e.to].lane)

function edgePath(from: string, to: string) {
  const a = posOf(from)
  const b = posOf(to)

  // Into another journey: drop below the row, run down the left channel, then in from above
  if (a.lane !== b.lane) {
    const k = crossLane.findIndex((e) => e.from === from && e.to === to)
    const yA = a.bottom + 12 + 5 * k
    const gx = 14 + 9 * k
    const yB = b.y - 12 - 3 * k
    return rounded([
      [a.cx, a.bottom],
      [a.cx, yA],
      [gx, yA],
      [gx, yB],
      [b.cx, yB],
      [b.cx, b.y],
    ])
  }
  // Same row: straight across to the next screen, or over the top when skipping
  if (a.row === b.row) {
    if (b.col === a.col + 1) return rounded([[a.x + NODE_W, a.mid], [b.x, b.mid]])
    const lift = a.y - 14
    return rounded([[a.cx, a.y], [a.cx, lift], [b.cx, lift], [b.cx, b.y]])
  }
  // Down to the row below
  if (b.row > a.row) {
    if (a.col === b.col) return rounded([[a.cx, a.bottom], [b.cx, b.y]])
    const ym = a.bottom + ROW_GAP / 2 + 6
    return rounded([[a.cx, a.bottom], [a.cx, ym], [b.cx, ym], [b.cx, b.y]])
  }
  // Up to the row above
  const ym = a.y - ROW_GAP / 2 - 6
  return rounded([[a.cx, a.y], [a.cx, ym], [b.cx, ym], [b.cx, b.bottom]])
}

const paths = edges.map((e) => ({ ...e, d: edgePath(e.from, e.to) }))

interface FlowMapProps {
  hot: string | null
  selected: string | null
  onHover: (id: string | null) => void
  onSelect: (id: string) => void
}

export function FlowMap({ hot, selected, onHover, onSelect }: FlowMapProps) {
  // Shrink to fit narrower windows, so the page is the only thing that scrolls
  const fit = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const el = fit.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => setScale(Math.min(1, entry.contentRect.width / MAP_W)))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const linked = new Set<string>()
  if (hot) {
    for (const e of edges) {
      if (e.from === hot) linked.add(e.to)
      if (e.to === hot) linked.add(e.from)
    }
  }

  return (
    <div className="uf-map__fit" ref={fit} style={{ height: MAP_H * scale }}>
      <div
        className={`uf-map ${hot ? 'has-hot' : ''}`}
        style={{ width: MAP_W, height: MAP_H, transform: scale < 1 ? `scale(${scale})` : undefined }}
      >
        {lanes.map((lane, i) => (
          <h2 key={lane.id} className="uf-lane" style={{ top: laneTops[i] }}>
            {lane.title}
          </h2>
        ))}

        <svg className="uf-edges" width={MAP_W} height={MAP_H} aria-hidden="true">
          <defs>
            {(['main', 'alt', 'error'] as const).map((k) => (
              <marker
                key={k}
                id={`uf-arrow-${k}`}
                viewBox="0 0 10 10"
                refX="8.5"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                markerUnits="userSpaceOnUse"
                orient="auto"
              >
                <path className={`uf-arrow uf-arrow--${k}`} d="M0 0L10 5L0 10z" />
              </marker>
            ))}
          </defs>
          {paths.map((p) => {
            const isHot = hot !== null && (p.from === hot || p.to === hot)
            return (
              <path
                key={`${p.from}-${p.to}`}
                className={`uf-edge uf-edge--${p.kind} ${isHot ? 'is-hot' : ''}`}
                d={p.d}
                markerEnd={`url(#uf-arrow-${p.kind})`}
              />
            )
          })}
        </svg>

        {flowScreens.map((s) => {
          const p = posOf(s.id)
          const dim = hot !== null && s.id !== hot && !linked.has(s.id)
          return (
            <article
              key={s.id}
              className={`uf-node ${dim ? 'is-dim' : ''} ${selected === s.id ? 'is-selected' : ''} ${p.state ? 'is-state' : ''}`}
              style={{ left: p.x, top: p.y, width: NODE_W }}
              onMouseEnter={() => onHover(s.id)}
              onMouseLeave={() => onHover(null)}
            >
              <div className="uf-node__shot" inert aria-hidden="true">
                <Wireframe id={s.id} />
              </div>
              <h3 className="uf-node__title">{s.title}</h3>
              <button
                type="button"
                className="uf-node__hit"
                aria-label={`${s.title}: show details`}
                aria-pressed={selected === s.id}
                onClick={() => onSelect(s.id)}
                onFocus={() => onHover(s.id)}
                onBlur={() => onHover(null)}
              />
            </article>
          )
        })}
      </div>
    </div>
  )
}
