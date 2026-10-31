import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Icon } from '../../../../../components/Icon/Icon'
import './HelpChat.css'

interface Message {
  id: number
  from: 'me' | 'agent'
  text: string
}

const REPLY_MS = 1200

const replyFor = (text: string) => {
  const t = text.toLowerCase()
  if (t.includes('refund')) return 'Your refund of ₹764 has started and should reach your UPI account by tomorrow.'
  if (t.includes('bus') || t.includes('where')) return 'Your bus is near Azadpur and on time. It reaches Kashmere Gate in about 6 minutes.'
  if (t.includes('cancel')) return 'You can cancel from your ticket. I can also do it for you if you share the seat numbers.'
  return 'Thanks for the message! Let me check that for you.'
}

export function HelpChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: 'agent', text: 'Hi Aarav, I’m Neha from BusTopia support. How can I help you today?' },
  ])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  const replyTimer = useRef(0)
  useEffect(() => () => clearTimeout(replyTimer.current), [])

  const send = (text: string) => {
    const clean = text.trim()
    if (!clean) return
    setMessages((m) => [...m, { id: m.length + 1, from: 'me', text: clean }])
    setDraft('')
    setTyping(true)
    clearTimeout(replyTimer.current)
    replyTimer.current = window.setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { id: m.length + 1, from: 'agent', text: replyFor(clean) }])
    }, REPLY_MS)
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    send(draft)
  }

  return (
    <div className="help-chat">
      <div ref={listRef} className="help-chat__list">
        {messages.map((m) => (
          <p key={m.id} className={`help-chat__msg is-${m.from}`}>
            {m.text}
          </p>
        ))}
        {typing && (
          <span className="help-chat__typing" aria-label="Neha is typing">
            <i />
            <i />
            <i />
          </span>
        )}
      </div>
      <div className="help-chat__quick">
        {['Where is my bus?', 'Refund status', 'Cancel my ticket'].map((q) => (
          <button key={q} type="button" className="k-chip" onClick={() => send(q)}>
            {q}
          </button>
        ))}
      </div>
      <form className="help-chat__bar" onSubmit={submit}>
        <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder="Type a message" aria-label="Message" />
        <button type="submit" className="help-chat__send" aria-label="Send" disabled={!draft.trim()}>
          <Icon name="send" size={15} />
        </button>
      </form>
    </div>
  )
}
