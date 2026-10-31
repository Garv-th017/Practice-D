import { Link, Navigate, useLocation, useParams } from 'react-router'
import { flowScreens, phases } from '../../app-flow/flow'
import { Button } from '../../components/Button/Button'
import { Icon } from '../../components/Icon/Icon'
import { PhoneFrame } from '../../components/PhoneFrame/PhoneFrame'
import './AppScreenPage.css'

export function AppScreenPage() {
  const { screenId } = useParams()
  const location = useLocation()
  const index = flowScreens.findIndex((s) => s.id === screenId)

  // Screens from later phases are not built yet
  if (index === -1) return <Navigate to="/app" replace />

  const screen = flowScreens[index]
  const phase = phases.find((p) => p.id === screen.phase)
  const prev = flowScreens[index - 1]
  const next = flowScreens[index + 1]

  return (
    <section className="viewer section">
      <title>{`${screen.title} · BusTopia app`}</title>
      <div className="container viewer__inner">
        <div className="viewer__device">
          <PhoneFrame label={`${screen.title} screen`}>
            {/* key restarts the screen (and its timers) on every visit */}
            <screen.Screen key={location.key} />
          </PhoneFrame>
        </div>

        <aside className="viewer__notes">
          <Link to="/app" className="viewer__back">
            <Icon name="arrowLeft" size={16} /> App flow
          </Link>

          <span className="eyebrow">
            Phase {screen.phase} · {phase?.title} · Step {index + 1} of {flowScreens.length}
          </span>
          <h1 className="viewer__title">{screen.title}</h1>
          <p className="viewer__purpose">{screen.purpose}</p>

          <h2 className="viewer__label">Sections on this screen</h2>
          <ol className="viewer__sections">
            {screen.sections.map((s) => (
              <li key={s.name}>
                <b>{s.name}</b>
                <span>{s.desc}</span>
              </li>
            ))}
          </ol>

          {screen.tip && (
            <p className="viewer__tip">
              <Icon name="check" size={14} strokeWidth={2.6} /> {screen.tip}
            </p>
          )}

          <div className="viewer__nav">
            {prev && (
              <Button
                to={`/app/${prev.id}`}
                variant="ghost"
                iconPosition="start"
                icon={<Icon name="arrowLeft" size={16} />}
              >
                {prev.title}
              </Button>
            )}
            {next && (
              <Button to={`/app/${next.id}`} icon={<Icon name="arrowRight" size={16} />}>
                {next.title}
              </Button>
            )}
          </div>
        </aside>
      </div>
    </section>
  )
}
