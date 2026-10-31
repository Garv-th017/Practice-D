import { SegTabs } from '../../../../kit/SegTabs/SegTabs'
import type { ThemeMode } from '../../../../../theme/ThemeContext'
import { useTheme } from '../../../../../theme/useTheme'
import './SettingsAppearance.css'

const modes: { id: ThemeMode; label: string }[] = [
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
]

export function SettingsAppearance() {
  const { mode, toggleMode } = useTheme()

  return (
    <section className="k-section settings-appearance">
      <span className="k-label">Appearance</span>
      <SegTabs label="Theme" items={modes} active={mode} onChange={(id) => id !== mode && toggleMode()} />
      <p className="k-muted">This switches the theme for the whole site too.</p>
    </section>
  )
}
