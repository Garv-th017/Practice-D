import './SearchingSkeleton.css'

export function SearchingSkeleton() {
  return (
    <div className="searching-skeleton" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="k-card searching-skeleton__card">
          <span className="searching-skeleton__line is-wide" />
          <span className="searching-skeleton__line" />
          <span className="searching-skeleton__line is-short" />
        </div>
      ))}
    </div>
  )
}
