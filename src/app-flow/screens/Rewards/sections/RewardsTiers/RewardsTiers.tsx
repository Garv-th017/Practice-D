import './RewardsTiers.css'

const tiers = [
  { name: 'Silver', at: '0', perk: '1 point per ₹10' },
  { name: 'Gold', at: '1,500', perk: '1.5× points' },
  { name: 'Platinum', at: '3,000', perk: '2× points, free changes' },
]

export function RewardsTiers() {
  return (
    <section className="k-section">
      <span className="k-label">Membership levels</span>
      <div className="rewards-tiers">
        {tiers.map((t) => (
          <div key={t.name} className={`rewards-tier ${t.name === 'Gold' ? 'is-on' : ''}`}>
            <b>{t.name}</b>
            <span className="k-muted">{t.at} pts</span>
            <span className="rewards-tier__perk">{t.perk}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
