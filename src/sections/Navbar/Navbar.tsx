import { useEffect, useState, type CSSProperties, type FocusEvent, type MouseEvent } from 'react'
import { NavLink } from 'react-router'
import { Button } from '../../components/Button/Button'
import { Icon } from '../../components/Icon/Icon'
import { Logo } from '../../components/Logo/Logo'
import { ThemeToggle } from '../../components/ThemeToggle/ThemeToggle'
import { useScrolled } from '../../hooks/useScrolled'
import './Navbar.css'

// One entry per page; add a route in router.tsx when a new page is built
const links = [
  { to: '/features', label: 'Features' },
  { to: '/app', label: 'App flow' },
  { to: '/user-flow', label: 'User flow' },
  { to: '/style-guide', label: 'Style guide' },
]

export function Navbar() {
  const scrolled = useScrolled(24)
  const [open, setOpen] = useState(false)
  const [pill, setPill] = useState({ x: 0, w: 0, visible: false })

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const desktop = window.matchMedia('(min-width: 901px)')
    const onResize = () => desktop.matches && setOpen(false)

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onResize)
    }
  }, [open])

  const movePill = (e: MouseEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    setPill({ x: el.offsetLeft, w: el.offsetWidth, visible: true })
  }

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container">
        <div className="nav__bar">
          <Logo />

          <nav
            className="nav__links"
            aria-label="Primary"
            onMouseLeave={() => setPill((p) => ({ ...p, visible: false }))}
          >
            <span
              className="nav__pill"
              data-visible={pill.visible}
              style={{ '--pill-x': `${pill.x}px`, '--pill-w': `${pill.w}px` } as CSSProperties}
              aria-hidden="true"
            />
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="nav__link" onMouseEnter={movePill} onFocus={movePill}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__actions">
            <ThemeToggle />
            <Button to="/app/splash" size="sm" className="nav__cta" icon={<Icon name="arrowRight" size={16} />}>
              Try the demo
            </Button>
            <button
              type="button"
              className="nav__burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="nav__drawer" inert={!open}>
        <nav className="nav__drawer-links" aria-label="Mobile">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="nav__drawer-link"
              style={{ '--i': i } as CSSProperties}
              onClick={() => setOpen(false)}
            >
              <span className="nav__drawer-num">0{i + 1}</span>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <Button
          to="/app/splash"
          size="lg"
          className="nav__drawer-cta"
          icon={<Icon name="arrowRight" size={18} />}
          onClick={() => setOpen(false)}
        >
          Try the demo
        </Button>
      </div>
    </header>
  )
}
