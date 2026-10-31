import { useDemo } from '../../../../kit/demoStore'
import { RouteLine } from '../../../../kit/RouteLine/RouteLine'
import './SearchingProgress.css'

export function SearchingProgress() {
  const { from, to } = useDemo()

  return (
    <section className="searching-progress" role="status">
      <RouteLine moving from={from} to={to} />
      <b>Finding the best buses</b>
      <span className="k-muted">Comparing 4,500+ operators, prices and seats</span>
    </section>
  )
}
