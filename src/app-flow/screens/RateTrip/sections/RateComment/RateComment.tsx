import { TextArea } from '../../../../kit/TextArea/TextArea'
import './RateComment.css'

interface RateCommentProps {
  value: string
  onChange: (value: string) => void
}

export function RateComment({ value, onChange }: RateCommentProps) {
  return (
    <section className="rate-comment">
      <TextArea
        label="Anything else? (optional)"
        value={value}
        maxLength={240}
        placeholder="Tell other riders about your trip"
        onChange={(e) => onChange(e.target.value)}
      />
      <span className="rate-comment__count">{value.length}/240</span>
    </section>
  )
}
