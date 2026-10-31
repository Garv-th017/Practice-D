import { BusBerth, BusOutside, BusSeats, BusWashroom } from '../../../../kit/Illustrations/Illustrations'
import './BusGallery.css'

const photos = [
  { label: 'Outside', Art: BusOutside },
  { label: 'Seats', Art: BusSeats },
  { label: 'Sleeper berth', Art: BusBerth },
  { label: 'Washroom', Art: BusWashroom },
]

export function BusGallery() {
  return (
    <div className="k-scroll-x bus-gallery">
      {photos.map(({ label, Art }, i) => (
        <figure key={label} className="bus-gallery__photo">
          <Art />
          <figcaption>
            {label} · {i + 1}/{photos.length}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
