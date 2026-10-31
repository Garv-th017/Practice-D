import { useSyncExternalStore } from 'react'
import { buses, coupons, findBus, type Bus, type BusType, type TimeSlot } from '../data'

export interface Passenger {
  name: string
  age: string
  gender: 'Male' | 'Female' | 'Other'
}

export interface Filters {
  types: BusType[]
  slots: TimeSlot[]
  maxPrice: number
  minRating: number
}

export type SortBy = 'cheapest' | 'fastest' | 'rating'

export interface Profile {
  name: string
  phone: string
  email: string
  emergency: string
}

export interface ReturnTrip {
  date: string
  busId: string
}

/** Choices the rider makes while tapping through the demo, shared by every screen. */
export interface DemoState {
  from: string
  to: string
  date: string
  busId: string
  sort: SortBy
  filters: Filters
  seats: string[]
  boarding: string
  drop: string
  passengers: Passenger[]
  coupon: string | null
  insurance: boolean
  payMethod: string
  cancelled: boolean
  profile: Profile
  returnTrip: ReturnTrip | null
}

export const MAX_PRICE = 1200

export const defaultFilters: Filters = { types: [], slots: [], maxPrice: MAX_PRICE, minRating: 0 }

export const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')

const initial: DemoState = {
  from: 'New Delhi',
  to: 'Jaipur',
  date: '2026-10-31',
  busId: 'greenline',
  sort: 'cheapest',
  filters: defaultFilters,
  seats: ['L10', 'L11'],
  boarding: 'Kashmere Gate',
  drop: 'Sindhi Camp',
  passengers: [
    { name: 'Aarav Kumar', age: '28', gender: 'Male' },
    { name: 'Priya Kumar', age: '26', gender: 'Female' },
  ],
  coupon: 'BUSFIRST',
  insurance: false,
  payMethod: 'upi',
  cancelled: false,
  profile: { name: 'Aarav Kumar', phone: '98765 43210', email: 'aarav@email.com', emergency: '98111 22334' },
  returnTrip: null,
}

let state = initial
const listeners = new Set<() => void>()

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function setDemo(patch: Partial<DemoState>) {
  state = { ...state, ...patch }
  listeners.forEach((l) => l())
}

export function useDemo() {
  return useSyncExternalStore(subscribe, () => state)
}

/** Fare for the current selection */
export function fareOf(s: DemoState) {
  const bus = findBus(s.busId)
  const seats = Math.max(s.seats.length, 1)
  const base = bus.price * seats
  const coupon = coupons.find((c) => c.code === s.coupon)
  const discount = coupon ? coupon.off(base) : 0
  const insurance = s.insurance ? 19 * seats : 0
  const taxes = Math.round(base * 0.05)
  return { bus, seats, base, discount, insurance, taxes, total: base - discount + insurance + taxes }
}

export const PNR = 'BT-48Q2X'

const CLIMATE: BusType[] = ['AC', 'Non-AC']
const BERTH: BusType[] = ['Sleeper', 'Seater']

/** Buses that match the filters (OR inside a group, AND across groups), sorted */
export function filterBuses(filters: Filters, sort: SortBy = 'cheapest'): Bus[] {
  const climate = filters.types.filter((t) => CLIMATE.includes(t))
  const berth = filters.types.filter((t) => BERTH.includes(t))
  const list = buses.filter(
    (b) =>
      (!climate.length || climate.some((t) => b.tags.includes(t))) &&
      (!berth.length || berth.some((t) => b.tags.includes(t))) &&
      (!filters.slots.length || filters.slots.includes(b.slot)) &&
      b.price <= filters.maxPrice &&
      b.rating >= filters.minRating,
  )
  const by: Record<SortBy, (a: Bus, b: Bus) => number> = {
    cheapest: (a, b) => a.price - b.price,
    fastest: (a, b) => a.minutes - b.minutes,
    rating: (a, b) => b.rating - a.rating,
  }
  return [...list].sort(by[sort])
}

export const activeFilterCount = (f: Filters) =>
  f.types.length + f.slots.length + (f.maxPrice < MAX_PRICE ? 1 : 0) + (f.minRating > 0 ? 1 : 0)

export type SeatState = 'free' | 'booked' | 'ladies'
export const MAX_SEATS = 6

export const isSleeper = (busId: string) => findBus(busId).tags.includes('Sleeper')

/**
 * Seat layout for a deck, five rows. Sleepers are 1 + aisle + 2 berths (15 per deck),
 * seaters 2 + aisle + 2 (20 per deck). Deterministic per bus so it never jumps around.
 */
export function deckSeats(busId: string, deck: 'L' | 'U'): { name: string; state: SeatState }[] {
  const seed = busId.length + (deck === 'U' ? 2 : 0)
  return Array.from({ length: isSleeper(busId) ? 15 : 20 }, (_, i) => {
    const h = (i * 3 + seed) % 7
    const state: SeatState = h === 0 || h === 3 ? 'booked' : h === 5 ? 'ladies' : 'free'
    return { name: `${deck}${i + 1}`, state }
  })
}
