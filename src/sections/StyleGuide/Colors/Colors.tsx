import { useMemo, useRef, useState, useSyncExternalStore } from 'react'
import './Colors.css'

const groups = [
  {
    title: 'Brand',
    tokens: [
      ['Primary', '--color-primary'],
      ['Primary hover', '--color-primary-hover'],
      ['Primary soft', '--color-primary-soft'],
      ['Accent', '--color-accent'],
      ['Accent hover', '--color-accent-hover'],
      ['Accent soft', '--color-accent-soft'],
    ],
  },
  {
    title: 'Surfaces and lines',
    tokens: [
      ['Background', '--color-bg'],
      ['Surface', '--color-bg-elevated'],
      ['Sunken', '--color-bg-sunken'],
      ['Border', '--color-border'],
      ['Border strong', '--color-border-strong'],
    ],
  },
  {
    title: 'Text',
    tokens: [
      ['Text', '--color-text'],
      ['Muted text', '--color-text-muted'],
      ['Subtle text', '--color-text-subtle'],
      ['On primary', '--color-on-primary'],
      ['On accent', '--color-on-accent'],
    ],
  },
  {
    title: 'Status',
    tokens: [
      ['Success', '--color-success'],
      ['Warning', '--color-warning'],
      ['Danger', '--color-danger'],
      ['Info', '--color-info'],
    ],
  },
  {
    title: 'Seat map',
    tokens: [
      ['Available', '--seat-available'],
      ['Selected', '--seat-selected'],
      ['Booked', '--seat-booked'],
      ['Women only', '--seat-ladies'],
    ],
  },
] as const

const allTokens = groups.flatMap((g) => g.tokens.map(([, token]) => token))

const subscribeTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}

const getTheme = () => document.documentElement.dataset.theme ?? 'light'

/** Resolves CSS colour tokens (including color-mix values) to hex. */
function resolveHex(tokens: readonly string[]) {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 1
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  const resolved: Record<string, string> = {}
  if (!ctx) return resolved

  const probe = document.createElement('span')
  probe.style.display = 'none'
  document.body.appendChild(probe)
  for (const token of tokens) {
    probe.style.color = `var(${token})`
    ctx.clearRect(0, 0, 1, 1)
    ctx.fillStyle = getComputedStyle(probe).color
    ctx.fillRect(0, 0, 1, 1)
    const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
    resolved[token] = `#${[r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('')}`.toUpperCase()
  }
  probe.remove()
  return resolved
}

function useResolvedHex(tokens: readonly string[]) {
  const theme = useSyncExternalStore(subscribeTheme, getTheme)
  // theme is a dependency so values are re-read after every theme switch
  return useMemo(() => (theme ? resolveHex(tokens) : {}), [tokens, theme])
}

export function Colors() {
  const hex = useResolvedHex(allTokens)
  const [copied, setCopied] = useState<string | null>(null)
  const timer = useRef(0)

  const copy = async (token: string) => {
    const value = hex[token]
    if (!value) return
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      return
    }
    setCopied(token)
    clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(null), 1200)
  }

  return (
    <section className="sg-block reveal" aria-labelledby="sg-colors">
      <div className="sg-block__head">
        <h3 id="sg-colors">Colours</h3>
        <p>Teal & Sunset. Values update with the theme. Click a swatch to copy its hex.</p>
      </div>

      {groups.map((group) => (
        <div key={group.title} className="sg-group">
          <span className="sg-label">{group.title}</span>
          <div className="sg-swatches">
            {group.tokens.map(([name, token]) => (
              <button key={token} type="button" className="sg-swatch" onClick={() => copy(token)}>
                <span className="sg-swatch__chip" style={{ background: `var(${token})` }} />
                <span className="sg-swatch__meta">
                  <strong>{name}</strong>
                  <code className="sg-code">{token}</code>
                  <code className="sg-swatch__hex">{copied === token ? 'Copied' : (hex[token] ?? '')}</code>
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
