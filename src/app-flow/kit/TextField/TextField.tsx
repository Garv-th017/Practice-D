import type { InputHTMLAttributes } from 'react'
import './TextField.css'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  prefix?: string
  /** Shown under the field in red; also marks the input invalid */
  error?: string
}

export function TextField({ label, prefix, error, className = '', ...input }: TextFieldProps) {
  return (
    <label className={`app-field ${error ? 'is-error' : ''} ${className}`}>
      <span className="app-field__label">{label}</span>
      <span className="app-field__box">
        {prefix && <span className="app-field__prefix">{prefix}</span>}
        <input aria-invalid={error ? true : undefined} {...input} />
      </span>
      {error && <span className="app-field__error">{error}</span>}
    </label>
  )
}
