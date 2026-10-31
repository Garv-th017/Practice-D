import './SplashLoader.css'

export function SplashLoader() {
  return (
    <div className="splash-loader" role="status">
      <span className="splash-loader__track">
        <span className="splash-loader__fill" />
      </span>
      <span className="splash-loader__text">Finding the best buses for you</span>
      <span className="splash-loader__version">Version 1.0</span>
    </div>
  )
}
