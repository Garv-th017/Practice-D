import { createContext, useContext } from 'react'

/** True when a screen is rendered as a small thumbnail: timers and auto-navigation must stay off. */
export const PreviewModeContext = createContext(false)

export const usePreviewMode = () => useContext(PreviewModeContext)
