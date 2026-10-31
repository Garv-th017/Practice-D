import { Icon } from '../../../../../components/Icon/Icon'
import './CitySearch.css'

interface CitySearchProps {
  value: string
  onChange: (value: string) => void
}

export function CitySearch({ value, onChange }: CitySearchProps) {
  return (
    <label className="city-search">
      <Icon name="search" size={16} />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search a city or bus stop"
        aria-label="Search a city"
      />
      {value && (
        <button type="button" className="city-search__clear" aria-label="Clear" onClick={() => onChange('')}>
          <Icon name="x" size={14} />
        </button>
      )}
    </label>
  )
}
