import { useId, type ReactNode } from 'react'
import { wires, type WireBlock } from '../userFlowData'
import './Wireframe.css'

/* Phone screen in wireframe units (same ratio as the real 280 × 592 screen) */
const SW = 120
const SH = 254
const X = 8
const W = 104
const TOP = 18
const GAP = 5
const PINNED: WireBlock['t'][] = ['tabbar', 'bottombar', 'cta', 'cta2', 'fab', 'sheet', 'tracksheet', 'loader']

export interface WireMark {
  n: number
  label: string
  /** Vertical centre of the section, 0–1 of the screen height */
  at: number
}

/* ---------- Drawing helpers ---------- */
const Line = ({ x, y, w, strong = false }: { x: number; y: number; w: number; strong?: boolean }) => (
  <rect className={strong ? 'wf-strong' : 'wf-line'} x={x} y={y} width={w} height={strong ? 3.2 : 2.6} rx={1.4} />
)
const Box = ({ x, y, w, h, r = 4, c = 'wf-box' }: { x: number; y: number; w: number; h: number; r?: number; c?: string }) => (
  <rect className={c} x={x} y={y} width={w} height={h} rx={r} />
)
const Dot = ({ x, y, r = 3, c = 'wf-fill' }: { x: number; y: number; r?: number; c?: string }) => (
  <circle className={c} cx={x} cy={y} r={r} />
)
const centered = (w: number) => SW / 2 - w / 2

function heightOf(b: WireBlock): number {
  const n = b.n ?? 1
  switch (b.t) {
    case 'top':
    case 'hello':
      return 20
    case 'heading':
      return 12
    case 'title':
      return n * 8
    case 'text':
      return n * 6
    case 'label':
      return 4
    case 'list':
      return n * (b.v === 'tall' ? 22 : 16)
    case 'cards':
      return n * 38 - 4
    case 'skeleton':
      return n * 34 - 4
    case 'chips':
    case 'banner':
    case 'slider':
      return 10
    case 'tabs':
      return 12
    case 'seats':
      return 104
    case 'calendar':
      return 74
    case 'fields':
      return n * 19 - 2
    case 'otp':
    case 'stars':
      return 16
    case 'dots':
      return 5
    case 'button':
    case 'ghost':
    case 'row3':
      return 14
    case 'link':
      return 6
    case 'stats':
      return 24
    case 'grid4':
      return b.v === 'legend' ? 14 : 34
    case 'textarea':
      return 36
    case 'center':
      return b.v === 'amount' ? 26 : 46
    case 'route':
      return 40
    case 'ticket':
      return 156
    case 'steps':
      return n * 13
    case 'ring':
      return 46
    case 'account':
      return 30
    case 'code':
      return 22
    // Pinned
    case 'tabbar':
      return 24
    case 'bottombar':
      return 32
    case 'cta':
      return b.v === 'link' ? 32 : 22
    case 'cta2':
      return b.v === 'link' ? 34 : 40
    case 'fab':
      return 24
    case 'tracksheet':
      return 100
    case 'loader':
      return 34
    default:
      return b.h ?? 20
  }
}

/* ---------- One block, drawn at y = 0 ---------- */
function Block({ b }: { b: WireBlock }): ReactNode {
  const n = b.n ?? 1
  const h = heightOf(b)

  switch (b.t) {
    case 'top':
      return (
        <>
          <circle className="wf-box" cx={X + 6} cy={10} r={6} />
          <Line x={X + 17} y={5.5} w={44} strong />
          <Line x={X + 17} y={12} w={30} />
          {b.v === 'action' && <Box x={X + W - 22} y={4} w={22} h={12} r={6} />}
        </>
      )
    case 'hello':
      return (
        <>
          <Dot x={X + 8} y={10} r={8} />
          <Line x={X + 20} y={5} w={24} />
          <Line x={X + 20} y={11.5} w={34} strong />
          <circle className="wf-box" cx={X + W - 7} cy={10} r={7} />
        </>
      )
    case 'heading':
      return <rect className="wf-strong" x={X} y={2} width={52} height={6} rx={3} />
    case 'title':
      return Array.from({ length: n }, (_, i) => {
        const w = i === 0 ? 78 : 56
        return (
          <rect key={i} className="wf-strong" x={b.v === 'center' ? centered(w) : X} y={i * 8} width={w} height={5} rx={2.5} />
        )
      })
    case 'text':
      return Array.from({ length: n }, (_, i) => {
        const w = [W, W - 18, W - 40][i % 3]
        return <Line key={i} x={b.v === 'center' ? centered(w) : X} y={i * 6} w={w} />
      })
    case 'label':
      return <Line x={X} y={0} w={34} strong />
    case 'card': {
      const lines = Math.max(1, Math.floor((h - 8) / 7))
      if (b.v === 'search') {
        return (
          <>
            <Box x={X} y={0} w={W} h={h} r={6} />
            <Dot x={X + 8} y={11} r={2.5} c="wf-box" />
            <Line x={X + 15} y={9.5} w={38} strong />
            <line className="wf-divider" x1={X + 15} x2={X + W - 20} y1={h / 2} y2={h / 2} />
            <Dot x={X + 8} y={h - 11} r={2.5} c="wf-fill" />
            <Line x={X + 15} y={h - 12.5} w={30} strong />
            <circle className="wf-solid" cx={X + W - 11} cy={h / 2} r={6} />
            <Box x={X} y={h + 4} w={W} h={14} r={5} />
            <Line x={X + 8} y={h + 9.5} w={40} strong />
          </>
        )
      }
      return (
        <>
          <Box x={X} y={0} w={W} h={h} r={6} c={b.v === 'dark' ? 'wf-dark' : 'wf-box'} />
          {Array.from({ length: lines }, (_, i) => (
            <rect
              key={i}
              className={b.v === 'dark' ? 'wf-on-dark' : i === 0 ? 'wf-strong' : 'wf-line'}
              x={X + 7}
              y={6 + i * 7}
              width={i === 0 ? 46 : [66, 52, 70][i % 3]}
              height={i === 0 ? 3.2 : 2.6}
              rx={1.4}
            />
          ))}
          {b.v === 'dark' && <Box x={X + 7} y={h - 14} w={36} h={9} r={4.5} c="wf-on-dark" />}
        </>
      )
    }
    case 'list': {
      const rh = b.v === 'tall' ? 22 : 16
      return (
        <>
          <Box x={X} y={0} w={W} h={n * rh} r={6} />
          {Array.from({ length: n }, (_, i) => {
            const y = i * rh
            const end = X + W - 7
            return (
              <g key={i}>
                {i > 0 && <line className="wf-divider" x1={X + 4} x2={X + W - 4} y1={y} y2={y} />}
                <Box x={X + 5} y={y + rh / 2 - 5} w={10} h={10} r={3} c="wf-fill" />
                <Line x={X + 20} y={y + rh / 2 - 4.5} w={40} strong />
                <Line x={X + 20} y={y + rh / 2 + 1.5} w={b.v === 'tall' ? 62 : 28} />
                {b.v === 'tall' && <Line x={X + 20} y={y + rh / 2 + 6.5} w={44} />}
                {b.v === 'chev' && <path className="wf-stroke" d={`M${end - 2} ${y + rh / 2 - 3} l3 3 l-3 3`} />}
                {b.v === 'toggle' && <Box x={end - 11} y={y + rh / 2 - 3.5} w={13} h={7} r={3.5} c={i === 0 ? 'wf-solid' : 'wf-box'} />}
                {b.v === 'radio' && <circle className={i === 0 ? 'wf-solid' : 'wf-box'} cx={end - 2} cy={y + rh / 2} r={3} />}
                {b.v === 'check' && <Box x={end - 5} y={y + rh / 2 - 3} w={6} h={6} r={1.5} c={i === 0 ? 'wf-solid' : 'wf-box'} />}
                {b.v === 'button' && <Box x={end - 18} y={y + rh / 2 - 4} w={20} h={8} r={4} />}
                {b.v === 'link' && <Line x={end - 16} y={y + rh / 2 - 1.3} w={18} strong />}
              </g>
            )
          })}
        </>
      )
    }
    case 'cards':
    case 'skeleton':
      return Array.from({ length: n }, (_, i) => {
        const y = i * (b.t === 'cards' ? 38 : 34)
        const ch = b.t === 'cards' ? 34 : 30
        return (
          <g key={i}>
            <Box x={X} y={y} w={W} h={ch} r={6} />
            {b.t === 'cards' ? (
              <>
                <Box x={X + 5} y={y + 5} w={10} h={10} r={3} c="wf-fill" />
                <Line x={X + 19} y={y + 5.5} w={40} strong />
                <Line x={X + 19} y={y + 11} w={26} />
                <rect className="wf-strong" x={X + W - 24} y={y + 5} width={18} height={5} rx={2} />
                <Line x={X + 5} y={y + 21} w={16} strong />
                <line className="wf-dash" x1={X + 26} x2={X + W - 30} y1={y + 22.5} y2={y + 22.5} />
                <Line x={X + W - 22} y={y + 21} w={16} strong />
                <Line x={X + 5} y={y + 27.5} w={34} />
              </>
            ) : (
              <>
                <Box x={X + 6} y={y + 6} w={46} h={4} r={2} c="wf-fill" />
                <Box x={X + 6} y={y + 14} w={W - 12} h={4} r={2} c="wf-fill" />
                <Box x={X + 6} y={y + 22} w={30} h={4} r={2} c="wf-fill" />
              </>
            )}
          </g>
        )
      })
    case 'chips': {
      let x = X
      return [18, 22, 20, 24].map((w, i) => {
        const el = <Box key={i} x={x} y={0} w={w} h={10} r={5} c={i === 0 ? 'wf-solid' : 'wf-box'} />
        x += w + 3
        return el
      })
    }
    case 'tabs':
      return (
        <>
          <Box x={X} y={0} w={W} h={12} r={6} />
          <Box x={X + 1.5} y={1.5} w={W / 2 - 1.5} h={9} r={4.5} c="wf-solid" />
          <Line x={X + W * 0.75 - 10} y={4.7} w={20} />
        </>
      )
    case 'strip': {
      // Wide tiles for offers and levels, narrow ones for dates and travellers; the last one runs off the edge
      const tw = h > 20 ? 42 : 26
      return Array.from({ length: Math.ceil(SW / (tw + 4)) }, (_, i) => (
        <Box key={i} x={X + i * (tw + 4)} y={0} w={tw} h={h} r={5} c={i === 0 ? 'wf-solid' : 'wf-box'} />
      ))
    }
    case 'image':
    case 'map': {
      const bleed = b.v === 'bleed'
      const x = bleed ? 0 : X
      const w = bleed ? SW : W
      const y = bleed ? -TOP : 0
      const hh = bleed ? h + TOP : h
      if (b.t === 'image') {
        return (
          <>
            <Box x={x} y={y} w={w} h={hh} r={6} c="wf-fill" />
            <path className="wf-cross" d={`M${x} ${y}L${x + w} ${y + hh}M${x + w} ${y}L${x} ${y + hh}`} />
          </>
        )
      }
      return (
        <>
          <Box x={x} y={y} w={w} h={hh} r={bleed ? 0 : 6} c="wf-fill" />
          <path
            className="wf-road"
            d={`M${x} ${y + hh * 0.3}H${x + w}M${x} ${y + hh * 0.72}H${x + w}M${x + w * 0.3} ${y}V${y + hh}M${x + w * 0.72} ${y}V${y + hh}`}
          />
          <path className="wf-route" d={`M${x + w * 0.18} ${y + hh * 0.85}C${x + w * 0.3} ${y + hh * 0.4} ${x + w * 0.6} ${y + hh * 0.7} ${x + w * 0.82} ${y + hh * 0.22}`} />
          <circle className="wf-solid" cx={x + w * 0.45} cy={y + hh * 0.55} r={4} />
          <circle className="wf-box" cx={x + w * 0.82} cy={y + hh * 0.22} r={3} />
        </>
      )
    }
    case 'seats': {
      const cols = [X + 14, X + 50, X + 72]
      const booked = new Set([4, 5, 9])
      const picked = new Set([1, 7])
      return (
        <>
          <Box x={X} y={0} w={W} h={h} r={6} />
          {Array.from({ length: 15 }, (_, i) => {
            const c = cols[i % 3]
            const r = Math.floor(i / 3)
            const cls = picked.has(i) ? 'wf-solid' : booked.has(i) ? 'wf-fill' : 'wf-box'
            return <Box key={i} x={c} y={8 + r * 19} w={18} h={15} r={3} c={cls} />
          })}
        </>
      )
    }
    case 'calendar': {
      const cw = (W - 6 * 4) / 7
      return (
        <>
          <Line x={X} y={0} w={40} strong />
          {Array.from({ length: 35 }, (_, i) => (
            <Box
              key={i}
              x={X + (i % 7) * (cw + 4)}
              y={8 + Math.floor(i / 7) * 13.2}
              w={cw}
              h={10}
              r={3}
              c={i === 12 ? 'wf-solid' : i < 3 ? 'wf-fill' : 'wf-box'}
            />
          ))}
        </>
      )
    }
    case 'fields':
      return Array.from({ length: n }, (_, i) => (
        <g key={i}>
          {b.v !== 'bare' && <Line x={X} y={i * 19} w={22} />}
          <Box x={X} y={i * 19 + (b.v === 'bare' ? 0 : 5)} w={W} h={12} r={4} />
        </g>
      ))
    case 'otp': {
      const bw = (W - 5 * 4) / 6
      return Array.from({ length: 6 }, (_, i) => (
        <g key={i}>
          <Box x={X + i * (bw + 4)} y={0} w={bw} h={16} r={4} c={i === 2 ? 'wf-active' : 'wf-box'} />
          {i < 2 && <Line x={X + i * (bw + 4) + bw / 2 - 2} y={7} w={4} strong />}
        </g>
      ))
    }
    case 'dots':
      return (
        <>
          <Box x={centered(22)} y={0} w={10} h={5} r={2.5} c="wf-solid" />
          <Dot x={SW / 2 + 4.5} y={2.5} r={2.5} />
          <Dot x={SW / 2 + 11.5} y={2.5} r={2.5} />
        </>
      )
    case 'button':
      return (
        <>
          <Box x={X} y={0} w={W} h={14} r={7} c="wf-solid" />
          <rect className="wf-on-solid" x={centered(30)} y={5.7} width={30} height={2.6} rx={1.3} />
        </>
      )
    case 'ghost':
      return (
        <>
          <Box x={X} y={0} w={W} h={14} r={7} />
          {b.v === 'icon' && <Dot x={centered(30) - 6} y={7} r={3} />}
          <Line x={centered(30)} y={5.7} w={30} strong />
        </>
      )
    case 'link':
      return <Line x={b.v === 'right' ? X + W - 16 : centered(40)} y={1.5} w={b.v === 'right' ? 16 : 40} strong />
    case 'stats': {
      const bw = (W - 8) / 3
      return Array.from({ length: 3 }, (_, i) => (
        <g key={i}>
          <Box x={X + i * (bw + 4)} y={0} w={bw} h={24} r={5} />
          <rect className="wf-strong" x={X + i * (bw + 4) + bw / 2 - 8} y={7} width={16} height={4} rx={2} />
          <Line x={X + i * (bw + 4) + bw / 2 - 10} y={15} w={20} />
        </g>
      ))
    }
    case 'grid4': {
      const bw = (W - 4) / 2
      if (b.v === 'legend') {
        return Array.from({ length: 4 }, (_, i) => (
          <g key={i}>
            <Box x={X + (i % 2) * (bw + 4)} y={Math.floor(i / 2) * 8} w={5} h={5} r={1.5} c={['wf-box', 'wf-solid', 'wf-fill', 'wf-active'][i]} />
            <Line x={X + (i % 2) * (bw + 4) + 9} y={Math.floor(i / 2) * 8 + 1.2} w={24} />
          </g>
        ))
      }
      return Array.from({ length: 4 }, (_, i) => (
        <g key={i}>
          <Box x={X + (i % 2) * (bw + 4)} y={Math.floor(i / 2) * 19} w={bw} h={15} r={5} c={i === 1 ? 'wf-active' : 'wf-box'} />
          <Dot x={X + (i % 2) * (bw + 4) + 8} y={Math.floor(i / 2) * 19 + 7.5} r={2.5} />
          <Line x={X + (i % 2) * (bw + 4) + 14} y={Math.floor(i / 2) * 19 + 6.2} w={28} />
        </g>
      ))
    }
    case 'slider':
      return (
        <>
          <rect className="wf-fill" x={X} y={4} width={W} height={2.5} rx={1.25} />
          <rect className="wf-solid" x={X} y={4} width={W * 0.62} height={2.5} rx={1.25} />
          <circle className="wf-knob" cx={X + W * 0.62} cy={5.25} r={4.5} />
        </>
      )
    case 'textarea':
      return (
        <>
          <Box x={X} y={0} w={W} h={36} r={5} />
          <Line x={X + 6} y={6} w={60} />
          <Line x={X + 6} y={12} w={44} />
        </>
      )
    case 'center': {
      if (b.v === 'amount') {
        return (
          <>
            <Line x={centered(30)} y={0} w={30} />
            <rect className="wf-strong" x={centered(46)} y={7} width={46} height={9} rx={3} />
            <Line x={centered(40)} y={21} w={40} />
          </>
        )
      }
      const cls = b.v === 'logo' ? 'wf-solid' : b.v === 'avatar' ? 'wf-fill' : 'wf-box'
      return (
        <>
          <circle className={cls} cx={SW / 2} cy={15} r={15} />
          {b.v === 'check' && <path className="wf-stroke" d={`M${SW / 2 - 6} 15l4 4l8 -8`} />}
          {b.v === 'alert' && <path className="wf-stroke" d={`M${SW / 2} 8v9M${SW / 2} 21v0.5`} />}
          {b.v === 'avatar' && <circle className="wf-box" cx={SW / 2 + 11} cy={26} r={4.5} />}
          {b.v !== 'avatar' && (
            <>
              <rect className="wf-strong" x={centered(56)} y={36} width={56} height={4.5} rx={2.2} />
              <Line x={centered(40)} y={43.4} w={40} />
            </>
          )}
        </>
      )
    }
    case 'route':
      return (
        <>
          <Box x={X} y={0} w={W} h={40} r={6} c="wf-fill" />
          <circle className="wf-box" cx={X + 12} cy={16} r={3} />
          <line className="wf-dash" x1={X + 16} x2={X + W - 16} y1={16} y2={16} />
          <line className="wf-solid-line" x1={X + 16} x2={X + W / 2 - 6} y1={16} y2={16} />
          <Box x={X + W / 2 - 6} y={10} w={12} h={12} r={4} c="wf-solid" />
          <circle className="wf-solid" cx={X + W - 12} cy={16} r={3} />
          <Line x={X + 6} y={29} w={18} />
          <Line x={X + W - 26} y={29} w={20} />
        </>
      )
    case 'ticket':
      return (
        <>
          <Box x={X} y={0} w={W} h={h} r={8} />
          <rect className="wf-strong" x={X + 8} y={10} width={24} height={8} rx={2} />
          <rect className="wf-strong" x={X + W - 32} y={10} width={24} height={8} rx={2} />
          <line className="wf-dash" x1={X + 36} x2={X + W - 36} y1={14} y2={14} />
          <Line x={X + 8} y={23} w={30} />
          <Line x={X + W - 38} y={23} w={30} />
          {[36, 50].map((y) => (
            <g key={y}>
              <Line x={X + 8} y={y} w={24} />
              <Line x={X + 8} y={y + 5} w={34} strong />
              <Line x={X + W / 2 + 4} y={y} w={24} />
              <Line x={X + W / 2 + 4} y={y + 5} w={30} strong />
            </g>
          ))}
          <line className="wf-dash" x1={X + 8} x2={X + W - 8} y1={70} y2={70} />
          <circle className="wf-notch" cx={X} cy={70} r={4} />
          <circle className="wf-notch" cx={X + W} cy={70} r={4} />
          <Box x={centered(56)} y={80} w={56} h={56} r={3} />
          {[
            [0, 0],
            [40, 0],
            [0, 40],
          ].map(([dx, dy]) => (
            <Box key={`${dx}-${dy}`} x={centered(56) + 4 + dx} y={84 + dy} w={8} h={8} r={1} c="wf-solid" />
          ))}
          {Array.from({ length: 14 }, (_, i) => (
            <rect key={i} className="wf-qr" x={centered(56) + 16 + ((i * 7) % 26)} y={86 + Math.floor(i / 4) * 9 + (i % 3) * 3} width={4} height={4} />
          ))}
          <Line x={centered(36)} y={142} w={36} strong />
        </>
      )
    case 'steps':
      return Array.from({ length: n }, (_, i) => (
        <g key={i}>
          {i < n - 1 && <line className="wf-divider" x1={X + 4} x2={X + 4} y1={i * 13 + 4} y2={i * 13 + 17} />}
          <circle className={i === 0 ? 'wf-solid' : 'wf-box'} cx={X + 4} cy={i * 13 + 4} r={3.5} />
          <Line x={X + 12} y={i * 13 + 1} w={[46, 58, 38][i % 3]} strong={i === 0} />
          <Line x={X + 12} y={i * 13 + 6.5} w={30} />
        </g>
      ))
    case 'banner':
      return (
        <>
          <Box x={X} y={0} w={W} h={10} r={5} c="wf-fill" />
          <Dot x={X + 7} y={5} r={2} c="wf-solid" />
          <Line x={X + 13} y={3.7} w={56} />
        </>
      )
    case 'ring':
      return (
        <>
          <Box x={X} y={0} w={W} h={46} r={6} />
          <circle className="wf-ring" cx={X + 22} cy={23} r={13} />
          <Box x={X + 44} y={8} w={26} h={7} r={3.5} c="wf-fill" />
          <rect className="wf-strong" x={X + 44} y={19} width={40} height={6} rx={2} />
          <Line x={X + 44} y={30} w={46} />
        </>
      )
    case 'row3': {
      const bw = (W - 8) / 3
      return Array.from({ length: 3 }, (_, i) => (
        <g key={i}>
          <Box x={X + i * (bw + 4)} y={0} w={bw} h={14} r={7} />
          <Line x={X + i * (bw + 4) + bw / 2 - 9} y={5.7} w={18} />
        </g>
      ))
    }
    case 'account':
      return (
        <>
          <Dot x={X + 13} y={15} r={13} />
          <Line x={X + 32} y={7} w={44} strong />
          <Line x={X + 32} y={14} w={34} />
          <Line x={X + 32} y={20} w={40} />
          <circle className="wf-box" cx={X + W - 7} cy={15} r={7} />
        </>
      )
    case 'stars':
      return Array.from({ length: 5 }, (_, i) => {
        const cx = SW / 2 + (i - 2) * 18
        return (
          <path
            key={i}
            className={i < 4 ? 'wf-solid' : 'wf-box'}
            d={`M${cx} 1l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7z`}
          />
        )
      })
    case 'code':
      return (
        <>
          <rect className="wf-dashed-box" x={X} y={0} width={W} height={22} rx={6} />
          <rect className="wf-strong" x={X + 8} y={9} width={40} height={4.5} rx={2} />
          <Box x={X + W - 30} y={5} w={24} h={12} r={6} c="wf-solid" />
        </>
      )
    case 'form':
      return (
        <>
          <Box x={X} y={0} w={W} h={h} r={6} />
          <Line x={X + 7} y={6} w={40} strong />
          <Line x={X + 7} y={14} w={20} />
          <Box x={X + 7} y={19} w={W - 14} h={11} r={3.5} />
          {h > 50 && (
            <>
              <Line x={X + 7} y={35} w={16} />
              <Box x={X + 7} y={40} w={30} h={11} r={3.5} />
              {b.v === 'slider' ? (
                <>
                  <rect className="wf-solid" x={X + 44} y={44.5} width={W - 58} height={2.5} rx={1.25} />
                  <Box x={X + 7} y={58} w={W - 14} h={11} r={5.5} c="wf-solid" />
                </>
              ) : (
                <Box x={X + 42} y={40} w={W - 49} h={11} r={5.5} c="wf-active" />
              )}
            </>
          )}
        </>
      )
    default:
      return null
  }
}

/* ---------- Pinned bottom blocks, drawn at their own y ---------- */
function Pinned({ b, y }: { b: WireBlock; y: number }): ReactNode {
  const h = heightOf(b)
  switch (b.t) {
    case 'tabbar':
      return (
        <>
          <rect className="wf-bar" x={0} y={y} width={SW} height={SH - y} />
          {Array.from({ length: 4 }, (_, i) => {
            const cx = 15 + i * 30
            return (
              <g key={i}>
                <rect className={i === 0 ? 'wf-solid' : 'wf-fill'} x={cx - 4} y={y + 5} width={8} height={7} rx={2} />
                <rect className={i === 0 ? 'wf-strong' : 'wf-line'} x={cx - 8} y={y + 15} width={16} height={2.4} rx={1.2} />
              </g>
            )
          })}
        </>
      )
    case 'bottombar':
      return (
        <>
          <rect className="wf-bar" x={0} y={y} width={SW} height={SH - y} />
          <Line x={X} y={y + 7} w={30} />
          <rect className="wf-strong" x={X} y={y + 13} width={32} height={5} rx={2} />
          <Box x={X + W - 46} y={y + 5} w={46} h={14} r={7} c="wf-solid" />
        </>
      )
    case 'cta':
      return (
        <>
          <Box x={X} y={y} w={W} h={14} r={7} c="wf-solid" />
          <rect className="wf-on-solid" x={centered(30)} y={y + 5.7} width={30} height={2.6} rx={1.3} />
          {b.v === 'link' && <Line x={centered(40)} y={y + 21} w={40} />}
        </>
      )
    case 'cta2':
      return (
        <>
          <Box x={X} y={y} w={W} h={14} r={7} c="wf-solid" />
          <rect className="wf-on-solid" x={centered(30)} y={y + 5.7} width={30} height={2.6} rx={1.3} />
          {b.v === 'link' ? (
            <Line x={centered(46)} y={y + 22} w={46} />
          ) : (
            <>
              <Box x={X} y={y + 18} w={W} h={14} r={7} />
              <Line x={centered(30)} y={y + 23.7} w={30} strong />
            </>
          )}
        </>
      )
    case 'fab':
      return (
        <>
          <Box x={centered(52)} y={y} w={52} h={14} r={7} c="wf-dark" />
          <rect className="wf-on-dark" x={centered(30)} y={y + 5.7} width={30} height={2.6} rx={1.3} />
        </>
      )
    case 'sheet':
      return (
        <>
          <rect className="wf-dim" x={0} y={0} width={SW} height={SH} />
          <path className="wf-sheet" d={`M0 ${y + 10}a10 10 0 0 1 10 -10h${SW - 20}a10 10 0 0 1 10 10V${SH}H0z`} />
          <rect className="wf-fill" x={centered(18)} y={y + 5} width={18} height={2.5} rx={1.25} />
          <rect className="wf-strong" x={X} y={y + 16} width={50} height={4.5} rx={2} />
          <Line x={X} y={y + 25} w={W - 10} />
          <Line x={X} y={y + 31} w={W - 40} />
          <Box x={X} y={y + 42} w={W} h={14} r={7} c="wf-solid" />
          <Box x={X} y={y + 60} w={W} h={14} r={7} />
        </>
      )
    case 'tracksheet':
      return (
        <>
          <path className="wf-sheet" d={`M0 ${y + 10}a10 10 0 0 1 10 -10h${SW - 20}a10 10 0 0 1 10 10V${y + h}H0z`} />
          <rect className="wf-fill" x={centered(18)} y={y + 4} width={18} height={2.5} rx={1.25} />
          <rect className="wf-strong" x={X} y={y + 12} width={44} height={4.5} rx={2} />
          <Line x={X} y={y + 20} w={34} />
          <line className="wf-divider" x1={X + 4} x2={X + W - 4} y1={y + 32} y2={y + 32} />
          {Array.from({ length: 4 }, (_, i) => (
            <circle key={i} className={i < 2 ? 'wf-solid' : 'wf-knob'} cx={X + 4 + i * ((W - 8) / 3)} cy={y + 32} r={3} />
          ))}
          <Box x={X} y={y + 44} w={W} h={22} r={5} />
          <Dot x={X + 10} y={y + 55} r={6} />
          <Line x={X + 20} y={y + 51} w={34} strong />
          <Box x={X} y={y + 72} w={W - 30} h={14} r={7} c="wf-solid" />
          <Box x={X + W - 26} y={y + 72} w={26} h={14} r={7} c="wf-alert" />
        </>
      )
    case 'loader':
      return (
        <>
          <rect className="wf-fill" x={centered(50)} y={y} width={50} height={3} rx={1.5} />
          <rect className="wf-solid" x={centered(50)} y={y} width={30} height={3} rx={1.5} />
          <Line x={centered(36)} y={y + 9} w={36} />
        </>
      )
    default:
      return null
  }
}

/** Lays out one screen's blocks; returns the drawing and where each labelled section sits */
function layout(blocks: WireBlock[]) {
  const content: ReactNode[] = []
  const marks: { label: string; y: number }[] = []
  const pinned = blocks.filter((b) => PINNED.includes(b.t))
  const flowing = blocks.filter((b) => !PINNED.includes(b.t))

  // Pinned blocks stack up from the bottom; bars sit flush, buttons leave room for the home indicator
  let bottom = SH
  const pinnedNodes: ReactNode[] = []
  const pinnedMarks: { label: string; y: number }[] = []
  for (const b of [...pinned].reverse()) {
    const flush = b.t === 'tabbar' || b.t === 'bottombar' || b.t === 'sheet'
    const h = b.t === 'sheet' ? (b.h ?? 90) : heightOf(b)
    const y = (flush ? bottom : Math.min(bottom, SH - 10)) - h - (b.t === 'fab' ? 4 : 0)
    pinnedNodes.unshift(<Pinned key={`p${pinnedNodes.length}`} b={b} y={y} />)
    if (b.label) pinnedMarks.unshift({ label: b.label, y: y + Math.min(h, 40) / 2 })
    bottom = b.t === 'sheet' || b.t === 'fab' ? bottom : y - 4
  }

  let y = TOP
  flowing.forEach((b, i) => {
    const h = b.t === 'gap' ? (b.h ?? 8) : b.t === 'card' && b.v === 'search' ? (b.h ?? 40) + 18 : (b.h && ['card', 'image', 'map', 'strip', 'form'].includes(b.t) ? b.h : heightOf(b))
    if (b.t !== 'gap') {
      content.push(
        <g key={i} transform={`translate(0 ${y})`}>
          <Block b={b} />
        </g>,
      )
      // Only note sections that are visible above the pinned area
      if (b.label && y < bottom - 6) marks.push({ label: b.label, y: y + Math.min(h, 60) / 2 })
    }
    y += h + (b.t === 'gap' ? 0 : GAP)
  })

  const all = [...marks, ...pinnedMarks].map((m, i) => ({ n: i + 1, label: m.label, at: m.y / SH }))
  return { content, pinned: pinnedNodes, marks: all }
}

/** The numbered section notes that go with an annotated wireframe */
export function WireNotes({ id }: { id: string }) {
  const marks: WireMark[] = layout(wires[id] ?? []).marks
  return (
    <ol className="wf-notes">
      {marks.map((m) => (
        <li key={m.n}>
          <span>{m.n}</span>
          {m.label}
        </li>
      ))}
    </ol>
  )
}

interface WireframeProps {
  id: string
  /** Show numbered notes for each section (large view) */
  annotate?: boolean
  className?: string
}

export function Wireframe({ id, annotate = false, className = '' }: WireframeProps) {
  const clip = useId()
  const { content, pinned, marks } = layout(wires[id] ?? [])

  return (
    <div className={`wf ${className}`}>
      <svg className="wf__svg" viewBox={`0 0 ${SW} ${SH}`} aria-hidden="true">
        <defs>
          <clipPath id={clip}>
            <rect width={SW} height={SH} rx={12} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clip})`}>
          <rect className="wf-screen" width={SW} height={SH} />
          {/* Status bar */}
          <Line x={X + 2} y={6} w={12} strong />
          <rect className="wf-strong" x={SW - 26} y={5.5} width={16} height={4} rx={1.5} />
          {content}
          {pinned}
          <rect className="wf-strong" x={centered(34)} y={SH - 4.5} width={34} height={2} rx={1} />
        </g>
        <rect className="wf-edge" x={0.5} y={0.5} width={SW - 1} height={SH - 1} rx={12} />
      </svg>
      {annotate &&
        marks.map((m) => (
          <span key={m.n} className="wf__mark" style={{ top: `${m.at * 100}%` }} aria-hidden="true">
            {m.n}
          </span>
        ))}
    </div>
  )
}
