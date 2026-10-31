import type { CSSProperties } from 'react'
import { rupees } from '../../../../data'
import { MAX_PRICE } from '../../../../kit/demoStore'
import './FilterPrice.css'

const MIN_PRICE = 499

interface FilterPriceProps {
  value: number
  onChange: (value: number) => void
}

export function FilterPrice({ value, onChange }: FilterPriceProps) {
  return (
    <section className="k-section">
      <div className="k-section__head">
        <span className="k-label">Price per seat</span>
        <b className="filter-price__value">{value >= MAX_PRICE ? 'Any price' : `Up to ${rupees(value)}`}</b>
      </div>
      <input
        className="filter-price__range"
        type="range"
        min={MIN_PRICE}
        max={MAX_PRICE}
        step={50}
        value={value}
        style={{ '--fill': `${((value - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100}%` } as CSSProperties}
        aria-label="Maximum price per seat"
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="k-row k-muted">
        <span>{rupees(MIN_PRICE)}</span>
        <span>{rupees(MAX_PRICE)}</span>
      </div>
    </section>
  )
}
