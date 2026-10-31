import { useEffect, useRef } from 'react'
import { flowScreens } from '../../../app-flow/flow'
import { Button } from '../../../components/Button/Button'
import { Icon } from '../../../components/Icon/Icon'
import { linksOf } from '../userFlowData'
import { Wireframe, WireNotes } from '../Wireframe/Wireframe'
import './ScreenPanel.css'

interface ScreenPanelProps {
  id: string
  onClose: () => void
  onSelect: (id: string) => void
}

const titleOf = (id: string) => flowScreens.find((s) => s.id === id)?.title ?? id

/** One screen: its wireframe with sections, and where it leads */
export function ScreenPanel({ id, onClose, onSelect }: ScreenPanelProps) {
  const heading = useRef<HTMLHeadingElement>(null)
  const screen = flowScreens.find((s) => s.id === id)
  const next = linksOf(id).to

  useEffect(() => {
    heading.current?.focus({ preventScroll: true })
  }, [id])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!screen) return null

  return (
    <aside className="uf-panel" role="dialog" aria-labelledby="uf-panel-title">
      <header className="uf-panel__head">
        <h2 id="uf-panel-title" ref={heading} tabIndex={-1}>
          {screen.title}
        </h2>
        <button type="button" className="uf-panel__close" onClick={onClose} aria-label="Close details">
          <Icon name="x" size={18} />
        </button>
      </header>

      <p className="uf-panel__purpose">{screen.purpose}</p>

      <div className="uf-panel__wire">
        <Wireframe id={id} annotate />
        <WireNotes id={id} />
      </div>

      {next.length > 0 && (
        <div className="uf-panel__group">
          <h3>Leads to</h3>
          <ul className="uf-links">
            {next.map((l) => (
              <li key={l.id}>
                <button type="button" className="uf-link" onClick={() => onSelect(l.id)}>
                  <span className="uf-link__text">
                    <b>{titleOf(l.id)}</b>
                    <small>{l.action}</small>
                  </span>
                  <Icon name="chevronRight" size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <Button to={`/app/${id}`} className="uf-panel__open" icon={<Icon name="arrowRight" size={18} />}>
        Open screen
      </Button>
    </aside>
  )
}
