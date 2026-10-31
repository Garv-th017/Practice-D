import './ReferSteps.css'

const steps = [
  { title: 'Share your code', text: 'Send it to friends and family.' },
  { title: 'They book a trip', text: 'They get ₹100 off their first booking.' },
  { title: 'You both win', text: 'You get ₹100 in your wallet after their trip.' },
]

export function ReferSteps() {
  return (
    <section className="k-section">
      <span className="k-label">How it works</span>
      <ol className="refer-steps">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="refer-steps__num">{i + 1}</span>
            <span className="k-grow">
              <b>{s.title}</b>
              <span className="k-muted">{s.text}</span>
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
