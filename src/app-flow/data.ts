import type { IconName } from '../components/Icon/Icon'

/* ---------- Cities ---------- */
export const cities = [
  { name: 'New Delhi', state: 'Delhi', stop: 'ISBT Kashmere Gate' },
  { name: 'Jaipur', state: 'Rajasthan', stop: 'Sindhi Camp' },
  { name: 'Manali', state: 'Himachal Pradesh', stop: 'Private Bus Stand' },
  { name: 'Agra', state: 'Uttar Pradesh', stop: 'Idgah Bus Stand' },
  { name: 'Chandigarh', state: 'Punjab', stop: 'ISBT Sector 43' },
  { name: 'Dehradun', state: 'Uttarakhand', stop: 'ISBT Dehradun' },
  { name: 'Rishikesh', state: 'Uttarakhand', stop: 'ISBT Rishikesh' },
  { name: 'Mumbai', state: 'Maharashtra', stop: 'Borivali' },
  { name: 'Pune', state: 'Maharashtra', stop: 'Swargate' },
  { name: 'Goa', state: 'Goa', stop: 'Panaji' },
  { name: 'Bengaluru', state: 'Karnataka', stop: 'Majestic' },
  { name: 'Hyderabad', state: 'Telangana', stop: 'Ameerpet' },
]

export const cityStop = (name: string) => cities.find((c) => c.name === name)?.stop ?? ''

/* ---------- Buses ---------- */
export type BusType = 'AC' | 'Non-AC' | 'Sleeper' | 'Seater'
export type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'night'

export interface Bus {
  id: string
  name: string
  type: string
  tags: BusType[]
  depart: string
  arrive: string
  minutes: number
  slot: TimeSlot
  rating: number
  reviews: number
  seatsLeft: number
  price: number
  amenities: IconName[]
  freeCancel: boolean
}

export const buses: Bus[] = [
  { id: 'greenline', name: 'GreenLine Travels', type: 'AC Sleeper (2+1)', tags: ['AC', 'Sleeper'], depart: '06:45', arrive: '11:20', minutes: 275, slot: 'morning', rating: 4.6, reviews: 1240, seatsLeft: 12, price: 849, amenities: ['wifi', 'plug', 'droplet', 'moon'], freeCancel: true },
  { id: 'royal', name: 'Royal Express', type: 'AC Seater (2+2)', tags: ['AC', 'Seater'], depart: '07:30', arrive: '11:50', minutes: 260, slot: 'morning', rating: 4.4, reviews: 860, seatsLeft: 5, price: 699, amenities: ['plug', 'droplet'], freeCancel: false },
  { id: 'volvo', name: 'Volvo Sky', type: 'Volvo Multi-axle (2+2)', tags: ['AC', 'Seater'], depart: '09:00', arrive: '13:10', minutes: 250, slot: 'morning', rating: 4.8, reviews: 2310, seatsLeft: 18, price: 1099, amenities: ['wifi', 'plug', 'droplet', 'moon'], freeCancel: true },
  { id: 'citylink', name: 'City Link', type: 'Non-AC Seater (2+2)', tags: ['Non-AC', 'Seater'], depart: '13:15', arrive: '18:00', minutes: 285, slot: 'afternoon', rating: 4.1, reviews: 410, seatsLeft: 22, price: 499, amenities: ['droplet'], freeCancel: false },
  { id: 'sunset', name: 'Sunset Travels', type: 'AC Seater (2+2)', tags: ['AC', 'Seater'], depart: '17:40', arrive: '22:05', minutes: 265, slot: 'evening', rating: 4.5, reviews: 980, seatsLeft: 9, price: 749, amenities: ['wifi', 'plug', 'droplet'], freeCancel: true },
  { id: 'nightowl', name: 'Night Owl', type: 'AC Sleeper (2+1)', tags: ['AC', 'Sleeper'], depart: '22:30', arrive: '03:10', minutes: 280, slot: 'night', rating: 4.3, reviews: 640, seatsLeft: 7, price: 799, amenities: ['plug', 'droplet', 'moon'], freeCancel: true },
]

export const findBus = (id: string) => buses.find((b) => b.id === id) ?? buses[0]
export const formatDuration = (minutes: number) => `${Math.floor(minutes / 60)}h ${minutes % 60}m`
export const rupees = (n: number) => `₹${Math.round(n).toLocaleString('en-IN')}`

/* ---------- Boarding & drop points ---------- */
export const boardingPoints = [
  { name: 'Kashmere Gate', address: 'ISBT, Gate 4', time: '06:45' },
  { name: 'Majnu Ka Tilla', address: 'Near metro station', time: '07:00' },
  { name: 'Azadpur', address: 'Mandi bus stop', time: '07:15' },
  { name: 'Dhaula Kuan', address: 'Flyover bus stop', time: '07:40' },
]

export const dropPoints = [
  { name: 'Sindhi Camp', address: 'Main bus stand', time: '11:20' },
  { name: 'Narayan Singh Circle', address: 'Near Rambagh', time: '11:35' },
  { name: 'Durgapura', address: 'Tonk Road', time: '11:50' },
]

/* ---------- Offers ---------- */
export const coupons = [
  { code: 'BUSFIRST', title: '₹120 off your first trip', off: (base: number) => Math.min(120, base) },
  { code: 'SAVE10', title: '10% off, up to ₹150', off: (base: number) => Math.min(150, Math.round(base * 0.1)) },
]

/* ---------- Dates ---------- */
export const TODAY = '2026-10-30'

export const toDate = (iso: string) => new Date(`${iso}T00:00:00`)
export const isoDate = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
export const addDays = (iso: string, days: number) => {
  const d = toDate(iso)
  d.setDate(d.getDate() + days)
  return isoDate(d)
}
export const formatDate = (iso: string) =>
  toDate(iso).toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })

/** Lowest fare for a day: deterministic so the calendar always looks the same */
export const fareForDay = (iso: string) => {
  const day = toDate(iso).getDate()
  return 499 + ((day * 37) % 7) * 50
}

/* ---------- Notifications ---------- */
export type NoticeKind = 'trip' | 'offer'
export type NoticeDay = 'Today' | 'Yesterday' | 'Earlier'

export interface Notice {
  id: string
  kind: NoticeKind
  icon: IconName
  title: string
  text: string
  day: NoticeDay
  when: string
  unread: boolean
  action?: { label: string; to: string }
  tone?: 'default' | 'warning'
}

export const notices: Notice[] = [
  { id: 'n1', kind: 'trip', icon: 'bus', title: 'Your bus leaves tomorrow', text: 'GreenLine Travels departs Kashmere Gate at 06:45. Reach 15 min early.', day: 'Today', when: '2 min ago', unread: true, action: { label: 'View ticket', to: '/app/ticket' } },
  { id: 'n2', kind: 'trip', icon: 'alert', title: 'Running 12 min late', text: 'Your Jaipur → New Delhi bus now arrives at 18:42.', day: 'Today', when: '1 hr ago', unread: true, tone: 'warning', action: { label: 'Track bus', to: '/app/tracking' } },
  { id: 'n3', kind: 'offer', icon: 'percent', title: 'Weekend sale is live', text: 'Use SAVE10 for 10% off trips this Saturday and Sunday.', day: 'Yesterday', when: '6:30 pm', unread: true, action: { label: 'See offer', to: '/app/wallet' } },
  { id: 'n4', kind: 'trip', icon: 'check', title: 'Booking confirmed', text: 'Seats L10 and L11 on GreenLine Travels are booked.', day: 'Yesterday', when: '9:12 am', unread: false, action: { label: 'View ticket', to: '/app/ticket' } },
  { id: 'n5', kind: 'offer', icon: 'gift', title: '₹50 cashback added', text: 'Cashback from your Delhi → Agra trip is in your wallet.', day: 'Earlier', when: '16 Oct', unread: false, action: { label: 'Open wallet', to: '/app/wallet' } },
]
