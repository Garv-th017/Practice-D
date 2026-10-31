import { Icon, type IconName } from '../../../components/Icon/Icon'
import { AppButton } from '../AppButton/AppButton'
import './ConfirmSheet.css'

interface ConfirmSheetProps {
  title: string
  text: string
  confirmLabel: string
  icon?: IconName
  tone?: 'danger' | 'primary'
  onConfirm: () => void
  onCancel: () => void
}

/** Bottom sheet asking the rider to confirm an action. Sits over the current app screen. */
export function ConfirmSheet({ title, text, confirmLabel, icon = 'alert', tone = 'danger', onConfirm, onCancel }: ConfirmSheetProps) {
  return (
    <div className="confirm-sheet" role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className="confirm-sheet__backdrop" aria-label="Close" onClick={onCancel} />
      <div className="confirm-sheet__panel">
        <span className={`confirm-sheet__icon is-${tone}`}>
          <Icon name={icon} size={22} />
        </span>
        <b className="confirm-sheet__title">{title}</b>
        <p className="confirm-sheet__text">{text}</p>
        <button type="button" className={`confirm-sheet__confirm is-${tone}`} onClick={onConfirm}>
          {confirmLabel}
        </button>
        <AppButton variant="text" onClick={onCancel}>
          Cancel
        </AppButton>
      </div>
    </div>
  )
}
