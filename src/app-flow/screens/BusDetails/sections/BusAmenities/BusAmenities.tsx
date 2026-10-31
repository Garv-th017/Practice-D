import { Icon, type IconName } from '../../../../../components/Icon/Icon'
import type { Bus } from '../../../../data'
import './BusAmenities.css'

const labels: Partial<Record<IconName, string>> = {
  wifi: 'Wi-Fi',
  plug: 'Charging point',
  droplet: 'Water bottle',
  moon: 'Blanket',
}

export function BusAmenities({ bus }: { bus: Bus }) {
  return (
    <section className="k-section">
      <span className="k-label">Amenities</span>
      <div className="bus-amenities">
        {bus.amenities.map((a) => (
          <span key={a} className="bus-amenities__item">
            <Icon name={a} size={15} />
            {labels[a]}
          </span>
        ))}
      </div>
    </section>
  )
}
