import type { CSSProperties } from 'react'
import './Typography.css'

const families = [
  {
    name: 'Bricolage Grotesque',
    role: 'Headings',
    token: '--font-display',
    sample: 'Book smarter, ride happier.',
    weights: [500, 600, 700, 800],
  },
  {
    name: 'DM Sans',
    role: 'Body text and interface',
    token: '--font-body',
    sample: 'Compare 4,500+ operators and pick the exact seat you want.',
    weights: [400, 500, 600, 700],
  },
  {
    name: 'JetBrains Mono',
    role: 'Codes, times and plates',
    token: '--font-mono',
    sample: 'BT-48Q2X · 06:45 → 11:20',
    weights: [500, 700],
  },
]

const scale = [
  { label: 'Hero headline', token: '--text-hero', size: '48–104px', display: true },
  { label: 'Section title', token: '--text-4xl', size: '40–72px', display: true },
  { label: 'Large title', token: '--text-3xl', size: '32–48px', display: true },
  { label: 'Title', token: '--text-2xl', size: '24–32px', display: true },
  { label: 'Subtitle', token: '--text-xl', size: '20–24px', display: true },
  { label: 'Lead text', token: '--text-lg', size: '17–20px', display: false },
  { label: 'Body', token: '--text-base', size: '16px', display: false },
  { label: 'Small', token: '--text-sm', size: '14px', display: false },
  { label: 'Caption', token: '--text-xs', size: '12px', display: false },
]

export function Typography() {
  return (
    <section className="sg-block reveal" aria-labelledby="sg-type">
      <div className="sg-block__head">
        <h3 id="sg-type">Typography</h3>
        <p>Three families. Sentence case everywhere, never all caps.</p>
      </div>

      <div className="sg-fonts">
        {families.map((f) => (
          <article key={f.name} className="sg-font" style={{ '--family': `var(${f.token})` } as CSSProperties}>
            <span className="sg-font__aa">Aa</span>
            <div className="sg-font__meta">
              <strong>{f.name}</strong>
              <span className="sg-label">{f.role}</span>
              <code className="sg-code">{f.token}</code>
            </div>
            <p className="sg-font__sample">{f.sample}</p>
            <div className="sg-font__weights">
              {f.weights.map((w) => (
                <span key={w} style={{ fontWeight: w }}>
                  {w}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="sg-group">
        <span className="sg-label">Type scale (fluid between phone and desktop)</span>
        <div className="sg-scale">
          {scale.map((s) => (
            <div key={s.token} className="sg-scale__row">
              <div className="sg-scale__meta">
                <strong>{s.label}</strong>
                <code className="sg-code">
                  {s.token} · {s.size}
                </code>
              </div>
              <span
                className={`sg-scale__sample ${s.display ? 'is-display' : ''}`}
                style={{ fontSize: `var(${s.token})` }}
              >
                Your next bus trip
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
