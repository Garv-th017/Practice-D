import { useState } from 'react'
import { useNavigate } from 'react-router'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { defaultFilters, filterBuses, setDemo, useDemo, type Filters as FilterState } from '../../kit/demoStore'
import { TopBar } from '../../kit/TopBar/TopBar'
import { FilterBusType } from './sections/FilterBusType/FilterBusType'
import { FilterPrice } from './sections/FilterPrice/FilterPrice'
import { FilterRating } from './sections/FilterRating/FilterRating'
import { FilterTime } from './sections/FilterTime/FilterTime'
import './Filters.css'

export function Filters() {
  const navigate = useNavigate()
  const { filters } = useDemo()
  const [draft, setDraft] = useState<FilterState>(filters)
  const update = (patch: Partial<FilterState>) => setDraft((d) => ({ ...d, ...patch }))
  const count = filterBuses(draft).length

  return (
    <AppScreen bare>
      <TopBar
        back="/app/results"
        backIcon="x"
        title="Filters"
        action={
          <button type="button" className="k-link filters__reset" onClick={() => setDraft(defaultFilters)}>
            Reset
          </button>
        }
      />
      <AppBody className="filters__body">
        <FilterBusType value={draft.types} onChange={(types) => update({ types })} />
        <FilterTime value={draft.slots} onChange={(slots) => update({ slots })} />
        <FilterPrice value={draft.maxPrice} onChange={(maxPrice) => update({ maxPrice })} />
        <FilterRating value={draft.minRating} onChange={(minRating) => update({ minRating })} />
      </AppBody>
      <BottomBar>
        <AppButton
          disabled={count === 0}
          onClick={() => {
            setDemo({ filters: draft })
            navigate('/app/results')
          }}
        >
          {count === 0 ? 'No buses match' : `Show ${count} bus${count === 1 ? '' : 'es'}`}
        </AppButton>
      </BottomBar>
    </AppScreen>
  )
}
