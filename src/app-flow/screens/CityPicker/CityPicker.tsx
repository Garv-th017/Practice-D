import { useState } from 'react'
import { useSearchParams } from 'react-router'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TopBar } from '../../kit/TopBar/TopBar'
import { CityList } from './sections/CityList/CityList'
import { CitySearch } from './sections/CitySearch/CitySearch'
import './CityPicker.css'

export function CityPicker() {
  const [params] = useSearchParams()
  const field = params.get('field') === 'to' ? 'to' : 'from'
  const [query, setQuery] = useState('')

  return (
    <AppScreen bare className="city-picker">
      <TopBar back="/app/home" backIcon="x" title={field === 'from' ? 'Leaving from' : 'Going to'} />
      <AppBody>
        <CitySearch value={query} onChange={setQuery} />
        <CityList field={field} query={query} />
      </AppBody>
    </AppScreen>
  )
}
