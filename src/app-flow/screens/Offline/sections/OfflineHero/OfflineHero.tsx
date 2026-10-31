import { Icon } from '../../../../../components/Icon/Icon'
import './OfflineHero.css'

export function OfflineHero({ checking }: { checking: boolean }) {
  return (
    <section className="offline-hero">
      <span className={`offline-hero__icon ${checking ? 'is-checking' : ''}`}>
        <Icon name={checking ? 'wifi' : 'wifiOff'} size={34} />
      </span>
      <h1>You’re offline</h1>
      <p>Check your mobile data or Wi-Fi. Your saved tickets still work without internet.</p>
    </section>
  )
}
