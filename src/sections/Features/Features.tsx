import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Icon } from '../../components/Icon/Icon'
import { TabPills, type TabPillItem } from '../../components/TabPills/TabPills'
import { useReveal } from '../../hooks/useReveal'
import { FeatureCard } from './FeatureCard/FeatureCard'
import { categories, features, type CategoryId, type Feature } from './featureList'
import './Features.css'

type Filter = CategoryId | 'all'

const tabs: TabPillItem<Filter>[] = [
  { id: 'all', label: 'All', count: features.length },
  ...categories.map((c) => ({
    id: c.id,
    label: c.label,
    count: features.filter((f) => f.category === c.id).length,
  })),
]

export function Features() {
  const ref = useReveal<HTMLElement>(0.1)
  const [active, setActive] = useState<Filter>('all')
  const [showAll, setShowAll] = useState(false)

  const isShown = (f: Feature) => (active === 'all' ? showAll || f.featured === true : f.category === active)
  const collapsed = active === 'all' && !showAll

  let shownIndex = 0

  return (
    <section id="features" className="features section" ref={ref}>
      <div className="container">
        <header className="features__head reveal">
          <span className="eyebrow">Features</span>
          <h2 className="features__title">
            Everything your trip needs, <span>in one app.</span>
          </h2>
          <p className="features__lead">
            {features.length} features, from finding the cheapest seat to tracking your bus live. Pick a category to
            explore.
          </p>
        </header>

        <TabPills
          className="features__tabs reveal"
          label="Filter features by category"
          items={tabs}
          active={active}
          onChange={setActive}
        />

        <div className="features__grid">
          {features.map((f) => {
            const shown = isShown(f)
            return (
              <FeatureCard
                key={f.title}
                title={f.title}
                desc={f.desc}
                hidden={!shown}
                index={shown ? shownIndex++ % 4 : 0}
              >
                <f.Preview />
              </FeatureCard>
            )
          })}
        </div>

        {collapsed && (
          <div className="features__more">
            <Button
              variant="ghost"
              iconPosition="start"
              onClick={() => setShowAll(true)}
              icon={<Icon name="plus" size={16} />}
            >
              Show all {features.length} features
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
