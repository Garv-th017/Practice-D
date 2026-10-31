import './Surfaces.css'

const radii = [
  { label: 'Extra small', token: '--radius-xs', value: '6px' },
  { label: 'Small', token: '--radius-sm', value: '10px' },
  { label: 'Medium', token: '--radius-md', value: '14px' },
  { label: 'Large', token: '--radius-lg', value: '20px' },
  { label: 'Extra large', token: '--radius-xl', value: '28px' },
  { label: 'Pill', token: '--radius-pill', value: '999px' },
]

const shadows = [
  { label: 'Extra small', token: '--shadow-xs' },
  { label: 'Small', token: '--shadow-sm' },
  { label: 'Medium', token: '--shadow-md', note: 'Navbar after scrolling' },
  { label: 'Large', token: '--shadow-lg' },
]

const spacing = [
  { token: '--space-1', value: 4 },
  { token: '--space-2', value: 8 },
  { token: '--space-3', value: 12 },
  { token: '--space-4', value: 16 },
  { token: '--space-6', value: 24 },
  { token: '--space-8', value: 32 },
  { token: '--space-12', value: 48 },
  { token: '--space-16', value: 64 },
]

export function Surfaces() {
  return (
    <section className="sg-block reveal" aria-labelledby="sg-surfaces">
      <div className="sg-block__head">
        <h3 id="sg-surfaces">Corners, shadows and spacing</h3>
        <p>Surfaces are flat with a 1px border. Shadows are only for layers that float above the page.</p>
      </div>

      <div className="sg-group">
        <span className="sg-label">Corner radius</span>
        <div className="sg-radii">
          {radii.map((r) => (
            <div key={r.token} className="sg-radius">
              <span className="sg-radius__box" style={{ borderRadius: `var(${r.token})` }} />
              <strong>{r.label}</strong>
              <code className="sg-code">
                {r.token} · {r.value}
              </code>
            </div>
          ))}
        </div>
      </div>

      <div className="sg-group">
        <span className="sg-label">Shadows (never on buttons or cards)</span>
        <div className="sg-shadows">
          {shadows.map((s) => (
            <div key={s.token} className="sg-shadow">
              <span className="sg-shadow__box" style={{ boxShadow: `var(${s.token})` }} />
              <strong>{s.label}</strong>
              <code className="sg-code">{s.token}</code>
              {s.note && <span className="sg-shadow__note">{s.note}</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="sg-group">
        <span className="sg-label">Spacing (4px base)</span>
        <div className="sg-spacing">
          {spacing.map((s) => (
            <div key={s.token} className="sg-space">
              <code className="sg-code">{s.token}</code>
              <span className="sg-space__bar" style={{ width: `var(${s.token})` }} />
              <span className="sg-space__px">{s.value}px</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
