import { Icon } from '../../../../../components/Icon/Icon'
import './LostDone.css'

const steps = ['Report sent to Royal Express', 'Driver checks the bus at the depot', 'We call you within 24 hours']

export function LostDone({ item }: { item: string }) {
  return (
    <section className="lost-done">
      <span className="lost-done__badge">
        <Icon name="check" size={30} strokeWidth={3} />
      </span>
      <b>We’re looking for your {item.toLowerCase()}</b>
      <span className="k-mono lost-done__ref">Reference LF-2291</span>
      <ol className="lost-done__steps">
        {steps.map((s, i) => (
          <li key={s} className={i === 0 ? 'is-done' : ''}>
            <span className="lost-done__dot">{i === 0 && <Icon name="check" size={10} strokeWidth={3} />}</span>
            {s}
          </li>
        ))}
      </ol>
    </section>
  )
}
