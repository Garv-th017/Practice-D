import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { flowScreens, phases } from '../../app-flow/flow'
import { PreviewModeContext } from '../../app-flow/kit/previewMode'
import { Button } from '../../components/Button/Button'
import { Icon } from '../../components/Icon/Icon'
import { PhoneFrame } from '../../components/PhoneFrame/PhoneFrame'
import { useReveal } from '../../hooks/useReveal'
import './AppFlowPage.css'

export function AppFlowPage() {
  const ref = useReveal<HTMLElement>(0.1)

  return (
    <section className="flow section" ref={ref}>
      <title>App flow · BusTopia</title>
      <div className="container">
        <header className="flow__head reveal">
          <span className="eyebrow">App flow</span>
          <h1 className="flow__title">
            Walk through the <span>BusTopia app.</span>
          </h1>
          <p className="flow__lead">
            Every screen of the app in the order riders see it. Open any screen to try it, or start from the splash
            screen and tap through.
          </p>
          <Button to="/app/splash" icon={<Icon name="arrowRight" size={18} />}>
            Start the demo
          </Button>
        </header>

        {phases.map((phase) => (
          <div key={phase.id} className="flow__phase">
            <div className="flow__phase-head reveal">
              <span className="flow__phase-num">Phase {phase.id}</span>
              <h2>{phase.title}</h2>
              <p>{phase.desc}</p>
            </div>

            <div className="flow__grid">
              {flowScreens
                .filter((s) => s.phase === phase.id)
                .map((s, i) => (
                  <article key={s.id} className="flow-card reveal" style={{ '--reveal-index': i } as CSSProperties}>
                    <div className="flow-card__thumb" inert aria-hidden="true">
                      <PreviewModeContext.Provider value={true}>
                        <PhoneFrame label={s.title}>
                          <s.Screen />
                        </PhoneFrame>
                      </PreviewModeContext.Provider>
                    </div>
                    <div className="flow-card__body">
                      <span className="flow-card__step">Step {flowScreens.indexOf(s) + 1}</span>
                      <h3>{s.title}</h3>
                      <p>{s.purpose}</p>
                    </div>
                    <Link
                      to={`/app/${s.id}`}
                      className="flow-card__link"
                      aria-label={`Open the ${s.title} screen`}
                    />
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
