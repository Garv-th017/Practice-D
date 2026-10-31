import { flushSync } from 'react-dom'

export function runThemeTransition(update: () => void, origin: { x: number; y: number }) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!document.startViewTransition || reduceMotion) {
    update()
    return
  }

  const root = document.documentElement
  root.style.setProperty('--vt-x', `${origin.x}px`)
  root.style.setProperty('--vt-y', `${origin.y}px`)
  root.classList.add('theme-reveal')

  const transition = document.startViewTransition(() => flushSync(update))
  transition.finished.finally(() => root.classList.remove('theme-reveal'))
}
