import { useState } from 'react'
import { AppBody } from '../../kit/AppBody/AppBody'
import { AppButton } from '../../kit/AppButton/AppButton'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { BottomBar } from '../../kit/BottomBar/BottomBar'
import { TopBar } from '../../kit/TopBar/TopBar'
import { RateComment } from './sections/RateComment/RateComment'
import { RateDone } from './sections/RateDone/RateDone'
import { RateStars } from './sections/RateStars/RateStars'
import { RateTags } from './sections/RateTags/RateTags'
import { RateTripCard } from './sections/RateTripCard/RateTripCard'
import './RateTrip.css'

export function RateTrip() {
  const [rating, setRating] = useState(0)
  const [tags, setTags] = useState<string[]>([])
  const [comment, setComment] = useState('')
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <AppScreen bare>
        <TopBar back="/app/trips" title="Thanks for rating" />
        <AppBody>
          <RateDone rating={rating} />
        </AppBody>
        <BottomBar>
          <AppButton to="/app/trips">Back to my trips</AppButton>
        </BottomBar>
      </AppScreen>
    )
  }

  return (
    <AppScreen bare>
      <TopBar back="/app/trips" title="Rate your trip" subtitle="Your review helps other riders" />
      <AppBody className="rate-trip__body">
        <RateTripCard />
        <RateStars
          value={rating}
          onChange={(r) => {
            setRating(r)
            setTags([])
          }}
        />
        {rating > 0 && <RateTags rating={rating} value={tags} onChange={setTags} />}
        {rating > 0 && <RateComment value={comment} onChange={setComment} />}
      </AppBody>
      <BottomBar>
        <AppButton disabled={rating === 0} onClick={() => setSent(true)}>
          {rating === 0 ? 'Tap a star to rate' : 'Submit review'}
        </AppButton>
      </BottomBar>
    </AppScreen>
  )
}
