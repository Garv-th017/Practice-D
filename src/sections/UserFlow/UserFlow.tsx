import { useCallback, useState } from 'react'
import { FlowList } from './FlowList/FlowList'
import { FlowMap } from './FlowMap/FlowMap'
import { ScreenPanel } from './ScreenPanel/ScreenPanel'
import './UserFlow.css'

export function UserFlow() {
  const [selected, setSelected] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section className="uf section">
      <div className="container uf__inner">
        <header className="uf__head">
          <h1 className="uf__title">User flow</h1>
          <p className="uf__lead">How every screen of the app connects. Select a screen to see its details.</p>
          <ul className="uf__key" aria-label="Key">
            <li className="uf__key-main">Main path</li>
            <li className="uf__key-alt">Other path</li>
            <li className="uf__key-error">Error</li>
          </ul>
        </header>

        <div className="uf__map">
          <FlowMap hot={hovered ?? selected} selected={selected} onHover={setHovered} onSelect={setSelected} />
        </div>
        <div className="uf__list">
          <FlowList selected={selected} onSelect={setSelected} />
        </div>
      </div>

      {selected && <ScreenPanel id={selected} onClose={close} onSelect={setSelected} />}
    </section>
  )
}
