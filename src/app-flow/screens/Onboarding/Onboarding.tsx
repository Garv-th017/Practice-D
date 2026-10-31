import { useState } from 'react'
import { Link } from 'react-router'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { OnboardingActions } from './sections/OnboardingActions/OnboardingActions'
import { OnboardingPager } from './sections/OnboardingPager/OnboardingPager'
import { OnboardingSlide, SLIDE_COUNT } from './sections/OnboardingSlide/OnboardingSlide'
import './Onboarding.css'

export function Onboarding() {
  const [slide, setSlide] = useState(0)
  const isLast = slide === SLIDE_COUNT - 1

  return (
    <AppScreen className="onboarding">
      <div className="onboarding__top">
        {!isLast && (
          <Link to="/app/login" className="onboarding__skip">
            Skip
          </Link>
        )}
      </div>
      <OnboardingSlide key={slide} index={slide} />
      <OnboardingPager count={SLIDE_COUNT} active={slide} onSelect={setSlide} />
      <OnboardingActions isLast={isLast} onNext={() => setSlide((s) => s + 1)} />
    </AppScreen>
  )
}
