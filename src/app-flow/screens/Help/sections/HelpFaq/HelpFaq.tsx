import { useState } from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import { AppBody } from '../../../../kit/AppBody/AppBody'
import { AppButton } from '../../../../kit/AppButton/AppButton'
import { ListRow } from '../../../../kit/ListRow/ListRow'
import './HelpFaq.css'

const faqs = [
  { q: 'How do I cancel my ticket?', a: 'Open the ticket from My trips and tap Cancel ticket. You see the refund before you confirm.' },
  { q: 'When will I get my refund?', a: 'Refunds start straight away and usually reach your account by the next working day.' },
  { q: 'Can I change my travel date?', a: 'Many operators allow a date change for a small fare difference. Open the ticket to see the options.' },
  { q: 'What do I show when boarding?', a: 'Show the QR code on your e-ticket. It also works offline once saved.' },
  { q: 'How do women-only seats work?', a: 'Pink seats on the seat map are kept for women travellers and can only be booked for them.' },
]

export function HelpFaq({ onChat }: { onChat: () => void }) {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const list = faqs.filter((f) => `${f.q} ${f.a}`.toLowerCase().includes(q))

  return (
    <AppBody className="help-faq">
      <label className="help-faq__search">
        <Icon name="search" size={15} />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for help" aria-label="Search for help" />
      </label>
      <div className="help-faq__list">
        {list.map((f) => (
          <details key={f.q} className="help-faq__item">
            <summary>
              {f.q}
              <Icon name="chevronRight" size={15} />
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
        {!list.length && <p className="k-empty">No answers match “{query}”. Try the chat instead.</p>}
      </div>
      <div className="k-card k-card--flush">
        <ListRow icon="bag" title="Report a lost item" sub="We contact the bus operator for you" to="/app/lost-found" />
      </div>
      <AppButton variant="outline" onClick={onChat}>
        Still need help? Chat with us
      </AppButton>
    </AppBody>
  )
}
