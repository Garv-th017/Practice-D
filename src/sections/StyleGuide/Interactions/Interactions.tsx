import { useState, type CSSProperties } from 'react'
import { Button } from '../../../components/Button/Button'
import { Icon } from '../../../components/Icon/Icon'
import { ThemeToggle } from '../../../components/ThemeToggle/ThemeToggle'
import './Interactions.css'

const arrow = <Icon name="arrowRight" size={16} />

const easings = [
  { label: 'Ease out', token: '--ease-out', use: 'Entrances and most transitions' },
  { label: 'Ease in-out', token: '--ease-in-out', use: 'Theme switch and mobile menu' },
  { label: 'Spring', token: '--ease-spring', use: 'Pops and toggles' },
  { label: 'Bus', token: '--ease-bus', use: 'A bus moving along a route' },
]

const durations = [
  { label: 'Instant', token: '--dur-instant', value: '90ms' },
  { label: 'Fast', token: '--dur-fast', value: '160ms' },
  { label: 'Base', token: '--dur-base', value: '260ms' },
  { label: 'Slow', token: '--dur-slow', value: '480ms' },
  { label: 'Slower', token: '--dur-slower', value: '800ms' },
]

const entrances = [
  { label: 'Pop in', cls: 'sg-anim--pop' },
  { label: 'Fade up', cls: 'sg-anim--up' },
  { label: 'Slide in', cls: 'sg-anim--left' },
  { label: 'Fill', cls: 'sg-anim--fill' },
]

const tabs = ['All', 'Search', 'Payments']

export function Interactions() {
  const [switchOn, setSwitchOn] = useState(true)
  const [tab, setTab] = useState(0)
  const [replay, setReplay] = useState(0)

  return (
    <section className="sg-block reveal" aria-labelledby="sg-interactions">
      <div className="sg-block__head">
        <h3 id="sg-interactions">Buttons, hovers and motion</h3>
        <p>Everything here is live. Hover, click and press Tab to try each state.</p>
      </div>

      <div className="sg-group">
        <span className="sg-label">Button variants</span>
        <div className="sg-row">
          <Button icon={arrow}>Primary</Button>
          <Button variant="secondary" icon={arrow}>
            Secondary
          </Button>
          <Button variant="accent" icon={arrow}>
            Accent
          </Button>
          <Button variant="ghost" icon={arrow}>
            Ghost
          </Button>
          <Button disabled icon={arrow}>
            Disabled
          </Button>
        </div>
      </div>

      <div className="sg-group">
        <span className="sg-label">Button sizes</span>
        <div className="sg-row">
          <Button size="sm" icon={arrow}>
            Small
          </Button>
          <Button size="md" icon={arrow}>
            Medium
          </Button>
          <Button size="lg" icon={arrow}>
            Large
          </Button>
        </div>
        <ul className="sg-notes">
          <li>Hover: background or border gets slightly darker. Nothing moves, no shadow, no shine.</li>
          <li>The arrow slides out to the right and back in from the left on hover and on click.</li>
        </ul>
      </div>

      <div className="sg-group">
        <span className="sg-label">Controls and states</span>
        <div className="sg-states">
          <div className="sg-state">
            <ThemeToggle />
            <span>Theme toggle · circle reveal</span>
          </div>

          <div className="sg-state">
            <button
              type="button"
              role="switch"
              aria-checked={switchOn}
              className={`sg-switch ${switchOn ? 'is-on' : ''}`}
              onClick={() => setSwitchOn((v) => !v)}
            >
              <span className="visually-hidden">Example switch</span>
            </button>
            <span>Switch · spring knob</span>
          </div>

          <div className="sg-state">
            <div className="sg-tabs" role="group" aria-label="Example tabs">
              {tabs.map((t, i) => (
                <button key={t} type="button" aria-pressed={tab === i} onClick={() => setTab(i)}>
                  {t}
                </button>
              ))}
            </div>
            <span>Tabs · filled when selected</span>
          </div>

          <div className="sg-state">
            <div className="sg-chips">
              <span className="sg-chip">Default</span>
              <span className="sg-chip is-on">Selected</span>
              <span className="sg-chip sg-chip--success">Success</span>
              <span className="sg-chip sg-chip--accent">Accent</span>
            </div>
            <span>Chips</span>
          </div>

          <div className="sg-state">
            <a href="#style-guide" className="sg-link">
              Text link
            </a>
            <span>Link · turns primary on hover</span>
          </div>

          <div className="sg-state">
            <div className="sg-hover-card">Hover me</div>
            <span>Card · border darkens on hover</span>
          </div>

          <div className="sg-state">
            <button type="button" className="sg-focus">
              Press Tab to focus
            </button>
            <span>Focus ring · keyboard only</span>
          </div>

          <div className="sg-state">
            <div className="sg-seats">
              <span className="sg-seat" title="Available" />
              <span className="sg-seat is-selected" title="Selected" />
              <span className="sg-seat is-booked" title="Booked" />
              <span className="sg-seat is-ladies" title="Women only" />
            </div>
            <span>Seats · available, selected, booked, women only</span>
          </div>

          <div className="sg-state">
            <span className="sg-live-chip">
              <span className="sg-live" /> Live
            </span>
            <span>Live indicator · the only looping pulse</span>
          </div>
        </div>
      </div>

      <div className="sg-group">
        <span className="sg-label">Easing curves (hover a row to play)</span>
        <div className="sg-easings">
          {easings.map((e) => (
            <div key={e.token} className="sg-ease" style={{ '--ease': `var(${e.token})` } as CSSProperties}>
              <div className="sg-ease__meta">
                <strong>{e.label}</strong>
                <code className="sg-code">{e.token}</code>
                <span className="sg-ease__use">{e.use}</span>
              </div>
              <span className="sg-ease__track">
                <span className="sg-ease__dot" />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="sg-group">
        <span className="sg-label">Durations</span>
        <div className="sg-row">
          {durations.map((d) => (
            <span key={d.token} className="sg-duration">
              <strong>{d.label}</strong>
              <code className="sg-code">
                {d.token} · {d.value}
              </code>
            </span>
          ))}
        </div>
      </div>

      <div className="sg-group">
        <div className="sg-row sg-row--between">
          <span className="sg-label">Entrance animations (play once)</span>
          <Button size="sm" variant="ghost" onClick={() => setReplay((r) => r + 1)}>
            Replay
          </Button>
        </div>
        <div key={replay} className="sg-anims">
          {entrances.map((a) => (
            <div key={a.label} className="sg-anim">
              <span className="sg-anim__stage">
                <span className={`sg-anim__box ${a.cls}`} />
              </span>
              <span>{a.label}</span>
            </div>
          ))}
        </div>
        <ul className="sg-notes">
          <li>Sections and cards fade up as they scroll into view, a few at a time.</li>
          <li>Small interface animations play once when a card appears and don't loop.</li>
          <li>With reduced motion turned on, everything shows its final state straight away.</li>
        </ul>
      </div>
    </section>
  )
}
