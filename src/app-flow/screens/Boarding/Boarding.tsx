import { useState } from 'react'
import { boardingPoints, dropPoints } from '../../data'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { setDemo, useDemo } from '../../kit/demoStore'
import { SegTabs } from '../../kit/SegTabs/SegTabs'
import { FareSummary } from '../../kit/FareSummary/FareSummary'
import { TopBar } from '../../kit/TopBar/TopBar'
import { PointList } from './sections/PointList/PointList'
import './Boarding.css'

type Tab = 'boarding' | 'drop'

const tabs: { id: Tab; label: string }[] = [
  { id: 'boarding', label: 'Boarding point' },
  { id: 'drop', label: 'Drop point' },
]

export function Boarding() {
  const { boarding, drop, from, to } = useDemo()
  const [tab, setTab] = useState<Tab>('boarding')

  return (
    <AppScreen bare className="boarding">
      <TopBar back="/app/seats" title="Boarding and drop" subtitle={`${from} → ${to}`} />
      <AppBody>
        <SegTabs label="Point type" items={tabs} active={tab} onChange={setTab} />
        {tab === 'boarding' ? (
          <PointList
            key="boarding"
            label={`Pick up in ${from}`}
            points={boardingPoints}
            value={boarding}
            onChange={(name) => {
              setDemo({ boarding: name })
              setTab('drop')
            }}
          />
        ) : (
          <PointList
            key="drop"
            label={`Drop off in ${to}`}
            points={dropPoints}
            value={drop}
            onChange={(name) => setDemo({ drop: name })}
          />
        )}
      </AppBody>
      <BottomBar
        info={<FareSummary />}
      >
        <AppButton to="/app/passengers">Continue</AppButton>
      </BottomBar>
    </AppScreen>
  )
}
