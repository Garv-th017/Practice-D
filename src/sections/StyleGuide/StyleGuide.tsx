import { useReveal } from '../../hooks/useReveal'
import { Colors } from './Colors/Colors'
import { Interactions } from './Interactions/Interactions'
import { Surfaces } from './Surfaces/Surfaces'
import { Typography } from './Typography/Typography'
import './StyleGuide.css'

export function StyleGuide() {
  const ref = useReveal<HTMLElement>(0.05)

  return (
    <section id="style-guide" className="sg section" ref={ref}>
      <div className="container sg__inner">
        <header className="sg__head reveal">
          <span className="eyebrow">Style guide</span>
          <h2 className="sg__title">
            The BusTopia <span>design system.</span>
          </h2>
          <p className="sg__lead">
            Every colour, font, surface, hover state and animation used on this site. Switch the theme at the top right
            to see the dark values.
          </p>
        </header>

        <Colors />
        <Typography />
        <Surfaces />
        <Interactions />
      </div>
    </section>
  )
}
