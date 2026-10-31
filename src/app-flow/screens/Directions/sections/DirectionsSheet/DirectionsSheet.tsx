import { useState } from 'react'
import { Icon, type IconName } from '../../../../../components/Icon/Icon'
import { findBus } from '../../../../data'
import { AppButton } from '../../../../kit/AppButton/AppButton'
import { useDemo } from '../../../../kit/demoStore'
import './DirectionsSheet.css'

const steps: { icon: IconName; text: string }[] = [
  { icon: 'arrowRight', text: 'Walk north on Lothian Road for 200 m' },
  { icon: 'chevronRight', text: 'Turn right at the metro exit' },
  { icon: 'pin', text: 'Enter ISBT at Gate 4, bay 12' },
]

export function DirectionsSheet() {
  const { busId } = useDemo()
  const bus = findBus(busId)
  const [opened, setOpened] = useState(false)

  return (
    <section className="dir-sheet">
      <div className="dir-sheet__depart">
        <Icon name="bus" size={15} />
        <span className="k-grow">
          Bus leaves at <b>{bus.depart}</b>. Reach 15 minutes early.
        </span>
      </div>
      <ol className="dir-sheet__steps">
        {steps.map((s) => (
          <li key={s.text}>
            <span className="dir-sheet__step-icon">
              <Icon name={s.icon} size={13} />
            </span>
            {s.text}
          </li>
        ))}
      </ol>
      <AppButton variant={opened ? 'outline' : 'primary'} onClick={() => setOpened(true)}>
        {opened ? 'Opening your maps app…' : 'Open in maps'}
      </AppButton>
    </section>
  )
}
