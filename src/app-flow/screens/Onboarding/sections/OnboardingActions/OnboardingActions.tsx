import { Icon } from '../../../../../components/Icon/Icon'
import { AppButton } from '../../../../kit/AppButton/AppButton'
import { AuthSwitch } from '../../../../kit/AuthSwitch/AuthSwitch'
import './OnboardingActions.css'

interface OnboardingActionsProps {
  isLast: boolean
  onNext: () => void
}

export function OnboardingActions({ isLast, onNext }: OnboardingActionsProps) {
  return (
    <div className="ob-actions">
      {isLast ? (
        <AppButton to="/app/signup" icon={<Icon name="arrowRight" size={16} />}>
          Get started
        </AppButton>
      ) : (
        <AppButton onClick={onNext} icon={<Icon name="arrowRight" size={16} />}>
          Next
        </AppButton>
      )}
      <AuthSwitch text="Already have an account?" linkText="Log in" to="/app/login" />
    </div>
  )
}
