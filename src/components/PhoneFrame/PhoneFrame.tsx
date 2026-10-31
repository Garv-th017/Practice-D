import type { ReactNode } from 'react'
import './PhoneFrame.css'

interface PhoneFrameProps {
  children: ReactNode
  label: string
  className?: string
}

export function PhoneFrame({ children, label, className = '' }: PhoneFrameProps) {
  return (
    <figure className={`phone ${className}`} aria-label={label}>
      <div className="phone__screen">
        <div className="phone__island" />
        <div className="phone__status" aria-hidden="true">
          <span>9:41</span>
          <span className="phone__indicators">
            <svg width="17" height="11" viewBox="0 0 17 11">
              <rect x="0" y="7" width="3" height="4" rx="1" />
              <rect x="4.5" y="5" width="3" height="6" rx="1" />
              <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
              <rect x="13.5" y="0" width="3" height="11" rx="1" />
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12">
              <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" fill="none" stroke="currentColor" opacity="0.4" />
              <rect x="2" y="2" width="16" height="8" rx="2" />
              <rect x="22.5" y="4" width="1.8" height="4" rx="0.9" opacity="0.5" />
            </svg>
          </span>
        </div>
        <div className="phone__content">{children}</div>
        <div className="phone__home" />
      </div>
    </figure>
  )
}
