import type { CSSProperties, ReactNode } from 'react'
import './FeatureCard.css'

interface FeatureCardProps {
  title: string
  desc: string
  hidden: boolean
  index: number
  children: ReactNode
}

export function FeatureCard({ title, desc, hidden, index, children }: FeatureCardProps) {
  return (
    <article className="fcard reveal" hidden={hidden} style={{ '--reveal-index': index } as CSSProperties}>
      <div className="fcard__preview" aria-hidden="true">
        {children}
      </div>
      <div className="fcard__body">
        <h3 className="fcard__title">{title}</h3>
        <p className="fcard__desc">{desc}</p>
      </div>
    </article>
  )
}
