import { TextArea } from '../../../../kit/TextArea/TextArea'
import './LostDetails.css'

interface LostDetailsProps {
  value: string
  onChange: (value: string) => void
}

export function LostDetails({ value, onChange }: LostDetailsProps) {
  return (
    <section className="lost-details">
      <TextArea
        label="Describe it (optional)"
        value={value}
        placeholder="Colour, brand, where you left it — e.g. black backpack under seat 7"
        onChange={(e) => onChange(e.target.value)}
      />
    </section>
  )
}
