import './OnboardingPager.css'

interface OnboardingPagerProps {
  count: number
  active: number
  onSelect: (index: number) => void
}

export function OnboardingPager({ count, active, onSelect }: OnboardingPagerProps) {
  return (
    <div className="ob-pager" role="group" aria-label="Slides">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={`ob-pager__dot ${i === active ? 'is-on' : ''}`}
          aria-label={`Slide ${i + 1}`}
          aria-current={i === active}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  )
}
