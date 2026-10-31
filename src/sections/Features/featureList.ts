import type { ComponentType } from 'react'
import * as Booking from './previews/BookingPreviews/BookingPreviews'
import * as Extra from './previews/ExtraPreviews/ExtraPreviews'
import * as Live from './previews/LivePreviews/LivePreviews'
import * as Payment from './previews/PaymentPreviews/PaymentPreviews'
import * as Safety from './previews/SafetyPreviews/SafetyPreviews'
import * as Search from './previews/SearchPreviews/SearchPreviews'
import * as Support from './previews/SupportPreviews/SupportPreviews'
import * as Ticket from './previews/TicketPreviews/TicketPreviews'

export const categories = [
  { id: 'search', label: 'Search' },
  { id: 'booking', label: 'Booking & seats' },
  { id: 'payments', label: 'Payments' },
  { id: 'tickets', label: 'Tickets & trips' },
  { id: 'live', label: 'Live travel' },
  { id: 'safety', label: 'Safety' },
  { id: 'support', label: 'Support' },
  { id: 'extras', label: 'Extras' },
] as const

export type CategoryId = (typeof categories)[number]['id']

export interface Feature {
  category: CategoryId
  title: string
  desc: string
  Preview: ComponentType
  /** Shown in the first 12 before "Show all" */
  featured?: boolean
}

export const features: Feature[] = [
  // Search & discovery
  { category: 'search', title: 'Smart route search', desc: 'Type a city, pick a stop, swap in one tap.', Preview: Search.RouteSearchPreview, featured: true },
  { category: 'search', title: 'Date strip picker', desc: 'See the cheapest day before you choose it.', Preview: Search.DateStripPreview },
  { category: 'search', title: 'Recent searches', desc: 'Repeat your usual routes with one tap.', Preview: Search.RecentSearchesPreview },
  { category: 'search', title: 'Popular routes', desc: 'Trending trips with live starting prices.', Preview: Search.PopularRoutesPreview },
  { category: 'search', title: 'Smart filters', desc: 'AC, sleeper, timings and more in a few toggles.', Preview: Search.FiltersPreview },
  { category: 'search', title: 'Sort results', desc: 'Cheapest, fastest or top rated first.', Preview: Search.SortPreview },
  { category: 'search', title: 'Clear bus results', desc: 'Times, rating, seats left and price at a glance.', Preview: Search.BusResultPreview },
  { category: 'search', title: 'Price calendar', desc: 'A month of fares to find the best day.', Preview: Search.PriceCalendarPreview, featured: true },
  { category: 'search', title: 'Nearby boarding points', desc: 'Pickup stops sorted by distance from you.', Preview: Search.NearbyPointsPreview },
  { category: 'search', title: 'Fare drop alerts', desc: 'Get notified when your route gets cheaper.', Preview: Search.FareAlertPreview, featured: true },
  { category: 'search', title: 'Free cancellation', desc: 'Spot buses you can cancel at no cost.', Preview: Search.FreeCancellationPreview },

  // Booking & seats
  { category: 'booking', title: 'Pick your exact seat', desc: 'A live seat map with every seat’s status.', Preview: Booking.SeatMapPreview, featured: true },
  { category: 'booking', title: 'Women-reserved seats', desc: 'Seats kept only for women travellers.', Preview: Booking.WomenSeatsPreview, featured: true },
  { category: 'booking', title: 'Seat-wise pricing', desc: 'Window or aisle, see each seat’s price.', Preview: Booking.SeatPricePreview },
  { category: 'booking', title: 'Boarding & drop points', desc: 'Choose the stop that suits you, with times.', Preview: Booking.BoardingPickerPreview },
  { category: 'booking', title: 'Saved travellers', desc: 'Fill passenger details once, reuse every trip.', Preview: Booking.SavedTravellersPreview },
  { category: 'booking', title: 'Group booking', desc: 'Book up to 6 seats together in one go.', Preview: Booking.GroupBookingPreview },
  { category: 'booking', title: 'Seat hold timer', desc: 'Your seats stay held while you pay.', Preview: Booking.HoldTimerPreview },
  { category: 'booking', title: 'Round trips', desc: 'Book onward and return together and save.', Preview: Booking.RoundTripPreview },
  { category: 'booking', title: 'Bus photos', desc: 'See inside the bus before you book.', Preview: Booking.BusPhotosPreview },
  { category: 'booking', title: 'Luggage info', desc: 'Know each operator’s bag allowance upfront.', Preview: Booking.LuggagePreview },

  // Payments & wallet
  { category: 'payments', title: 'One-tap payment', desc: 'Your saved method, ready in a single tap.', Preview: Payment.OneTapPayPreview, featured: true },
  { category: 'payments', title: 'Every way to pay', desc: 'UPI, cards, wallet or net banking.', Preview: Payment.PayOptionsPreview },
  { category: 'payments', title: 'BusTopia Wallet', desc: 'A balance for faster checkout and instant refunds.', Preview: Payment.WalletPreview },
  { category: 'payments', title: 'Promo codes', desc: 'Apply offers and see the savings instantly.', Preview: Payment.PromoCodePreview },
  { category: 'payments', title: 'Scratch-card cashback', desc: 'Win cashback after every completed trip.', Preview: Payment.CashbackPreview, featured: true },
  { category: 'payments', title: 'Split the fare', desc: 'Share the cost with friends inside the app.', Preview: Payment.SplitFarePreview },
  { category: 'payments', title: 'Pay later & EMI', desc: 'Travel now, pay in easy 0% instalments.', Preview: Payment.PayLaterPreview },
  { category: 'payments', title: 'Travel insurance', desc: 'Add trip cover for a few rupees at checkout.', Preview: Payment.InsurancePreview },

  // Tickets & trips
  { category: 'tickets', title: 'Instant e-ticket', desc: 'A QR ticket the moment you pay.', Preview: Ticket.ETicketPreview, featured: true },
  { category: 'tickets', title: 'Ticket by SMS & chat', desc: 'Your ticket lands on your phone right away.', Preview: Ticket.TicketMessagePreview },
  { category: 'tickets', title: 'My trips', desc: 'Upcoming, past and cancelled trips in one place.', Preview: Ticket.MyTripsPreview },
  { category: 'tickets', title: 'Add to calendar', desc: 'Trip times saved straight to your calendar.', Preview: Ticket.AddCalendarPreview },
  { category: 'tickets', title: 'Offline tickets', desc: 'Show your ticket even with no signal.', Preview: Ticket.OfflineTicketPreview },
  { category: 'tickets', title: 'Reschedule', desc: 'Change your travel date without cancelling.', Preview: Ticket.ReschedulePreview },

  // Live travel
  { category: 'live', title: 'Live bus tracking', desc: 'See exactly where your bus is on the route.', Preview: Live.LiveTrackingPreview, featured: true },
  { category: 'live', title: 'Arrival ETA', desc: 'A live countdown to your bus reaching you.', Preview: Live.EtaPreview, featured: true },
  { category: 'live', title: 'Share live trip', desc: 'Let family follow your journey in real time.', Preview: Live.ShareTripPreview },
  { category: 'live', title: 'Bus & driver details', desc: 'Bus number and driver contact before you board.', Preview: Live.BusDriverPreview },
  { category: 'live', title: 'Stop alerts', desc: 'A wake-up alert before your stop.', Preview: Live.StopAlertPreview },
  { category: 'live', title: 'Delay alerts', desc: 'Know about delays before you reach the stop.', Preview: Live.DelayAlertPreview },
  { category: 'live', title: 'Walk to your bus', desc: 'Directions to your boarding point.', Preview: Live.DirectionsPreview },

  // Safety & comfort
  { category: 'safety', title: 'SOS button', desc: 'Alert your contacts and the helpline instantly.', Preview: Safety.SosPreview, featured: true },
  { category: 'safety', title: 'Verified operators', desc: 'Only checked operators, with safety scores.', Preview: Safety.VerifiedOperatorPreview },
  { category: 'safety', title: 'Women safety mode', desc: 'Extra safety settings for women travellers.', Preview: Safety.WomenSafetyPreview },
  { category: 'safety', title: 'Amenities at a glance', desc: 'Wi-Fi, charging, water, blankets and more.', Preview: Safety.AmenitiesPreview },
  { category: 'safety', title: 'GPS-tracked buses', desc: 'Every bus tracked, updated every few seconds.', Preview: Safety.GpsTrackedPreview },
  { category: 'safety', title: 'Accessible buses', desc: 'Filter for wheelchair-friendly buses and help.', Preview: Safety.AccessiblePreview },

  // After trip & support
  { category: 'support', title: 'Ratings & reviews', desc: 'Rate trips and read honest rider reviews.', Preview: Support.ReviewsPreview },
  { category: 'support', title: 'Easy cancellation', desc: 'See your refund before you cancel.', Preview: Support.CancellationPreview, featured: true },
  { category: 'support', title: 'Refund tracker', desc: 'Follow your refund until it lands.', Preview: Support.RefundTrackerPreview },
  { category: 'support', title: '24/7 chat support', desc: 'Real help at any hour, inside the app.', Preview: Support.ChatSupportPreview },
  { category: 'support', title: 'Lost & found', desc: 'Report a lost item in under a minute.', Preview: Support.LostFoundPreview },

  // Personal & extras
  { category: 'extras', title: 'Loyalty points', desc: 'Earn points on every trip and level up.', Preview: Extra.LoyaltyPreview },
  { category: 'extras', title: 'Refer & earn', desc: 'Invite friends and you both get rewarded.', Preview: Extra.ReferPreview },
  { category: 'extras', title: 'Your language', desc: 'Use the app in English or your Indian language.', Preview: Extra.LanguagePreview },
]
