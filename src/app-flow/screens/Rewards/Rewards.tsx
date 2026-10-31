import { useState } from 'react'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TopBar } from '../../kit/TopBar/TopBar'
import { RewardsCard } from './sections/RewardsCard/RewardsCard'
import { RewardsEarn } from './sections/RewardsEarn/RewardsEarn'
import { RewardsRedeem } from './sections/RewardsRedeem/RewardsRedeem'
import { RewardsTiers } from './sections/RewardsTiers/RewardsTiers'
import './Rewards.css'

export function Rewards() {
  const [points, setPoints] = useState(2450)
  const [redeemed, setRedeemed] = useState<string[]>([])

  return (
    <AppScreen bare>
      <TopBar back="/app/profile" title="Rewards" subtitle="Earn points on every trip" />
      <AppBody className="rewards__body">
        <RewardsCard points={points} />
        <RewardsTiers />
        <RewardsRedeem
          points={points}
          redeemed={redeemed}
          onRedeem={(id, cost) => {
            setPoints((p) => p - cost)
            setRedeemed((r) => [...r, id])
          }}
        />
        <RewardsEarn />
      </AppBody>
    </AppScreen>
  )
}
