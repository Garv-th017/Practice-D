import { SegTabs } from '../../../../kit/SegTabs/SegTabs'
import './SeatDeck.css'

interface SeatDeckProps {
  deck: 'L' | 'U'
  onDeckChange: (deck: 'L' | 'U') => void
}

const decks: { id: 'L' | 'U'; label: string }[] = [
  { id: 'L', label: 'Lower deck' },
  { id: 'U', label: 'Upper deck' },
]

export function SeatDeck({ deck, onDeckChange }: SeatDeckProps) {
  return (
    <div className="seat-deck">
      <SegTabs label="Deck" items={decks} active={deck} onChange={onDeckChange} />
      <div className="seat-deck__legend">
        <span><i className="seat-key" /> Available</span>
        <span><i className="seat-key is-selected" /> Selected</span>
        <span><i className="seat-key is-booked" /> Booked</span>
        <span><i className="seat-key is-ladies" /> Women</span>
      </div>
    </div>
  )
}
