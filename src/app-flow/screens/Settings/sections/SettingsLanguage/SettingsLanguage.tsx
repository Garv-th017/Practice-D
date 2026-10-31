import { useState } from 'react'
import './SettingsLanguage.css'

const languages = ['English', 'हिंदी', 'தமிழ்', 'বাংলা', 'मराठी', 'తెలుగు']

export function SettingsLanguage() {
  const [language, setLanguage] = useState('English')

  return (
    <section className="k-section">
      <span className="k-label">App language</span>
      <div className="settings-languages" role="radiogroup" aria-label="App language">
        {languages.map((l) => (
          <button
            key={l}
            type="button"
            role="radio"
            aria-checked={language === l}
            className={`k-chip settings-languages__chip ${language === l ? 'is-on' : ''}`}
            onClick={() => setLanguage(l)}
          >
            {l}
          </button>
        ))}
      </div>
    </section>
  )
}
