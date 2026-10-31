import { Button } from '../../components/Button/Button'
import { Icon } from '../../components/Icon/Icon'
import './NotFoundPage.css'

export function NotFoundPage() {
  return (
    <section className="not-found section">
      <title>Page not found · BusTopia</title>
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">This stop isn’t on our route.</h1>
        <p className="not-found__text">The page you’re looking for doesn’t exist or has moved.</p>
        <Button to="/" icon={<Icon name="arrowRight" size={18} />}>
          Back to home
        </Button>
      </div>
    </section>
  )
}
