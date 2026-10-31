import type { TextareaHTMLAttributes } from 'react'
import './TextArea.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

export function TextArea({ label, className = '', ...rest }: TextAreaProps) {
  return (
    <label className={`app-textarea ${className}`}>
      <span className="app-textarea__label">{label}</span>
      <textarea rows={3} {...rest} />
    </label>
  )
}
