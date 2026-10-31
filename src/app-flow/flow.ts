import type { ComponentType } from 'react'
import { Boarding } from './screens/Boarding/Boarding'
import { BusDetails } from './screens/BusDetails/BusDetails'
import { Cancel } from './screens/Cancel/Cancel'
import { CityPicker } from './screens/CityPicker/CityPicker'
import { Confirmed } from './screens/Confirmed/Confirmed'
import { Directions } from './screens/Directions/Directions'
import { DatePicker } from './screens/DatePicker/DatePicker'
import { EditProfile } from './screens/EditProfile/EditProfile'
import { FareAlerts } from './screens/FareAlerts/FareAlerts'
import { Filters } from './screens/Filters/Filters'
import { Help } from './screens/Help/Help'
import { Home } from './screens/Home/Home'
import { Login } from './screens/Login/Login'
import { Logout } from './screens/Logout/Logout'
import { LostFound } from './screens/LostFound/LostFound'
import { Notifications } from './screens/Notifications/Notifications'
import { Offline } from './screens/Offline/Offline'
import { Onboarding } from './screens/Onboarding/Onboarding'
import { Otp } from './screens/Otp/Otp'
import { Passengers } from './screens/Passengers/Passengers'
import { Payment } from './screens/Payment/Payment'
import { PaymentFailed } from './screens/PaymentFailed/PaymentFailed'
import { Permissions } from './screens/Permissions/Permissions'
import { Profile } from './screens/Profile/Profile'
import { RateTrip } from './screens/RateTrip/RateTrip'
import { Refer } from './screens/Refer/Refer'
import { Reschedule } from './screens/Reschedule/Reschedule'
import { Results } from './screens/Results/Results'
import { ReturnTrip } from './screens/ReturnTrip/ReturnTrip'
import { Review } from './screens/Review/Review'
import { Rewards } from './screens/Rewards/Rewards'
import { Searching } from './screens/Searching/Searching'
import { Seats } from './screens/Seats/Seats'
import { Settings } from './screens/Settings/Settings'
import { Signup } from './screens/Signup/Signup'
import { Splash } from './screens/Splash/Splash'
import { Ticket } from './screens/Ticket/Ticket'
import { Tracking } from './screens/Tracking/Tracking'
import { Trips } from './screens/Trips/Trips'
import { Wallet } from './screens/Wallet/Wallet'

export interface FlowPhase {
  id: number
  title: string
  desc: string
}

export interface FlowScreen {
  /** URL segment: /app/<id> */
  id: string
  phase: number
  title: string
  purpose: string
  sections: { name: string; desc: string }[]
  tip?: string
  Screen: ComponentType
}

export const phases: FlowPhase[] = [
  { id: 1, title: 'Opening the app', desc: 'First launch: the splash screen, welcome slides and getting signed in.' },
  { id: 2, title: 'Home and search', desc: 'Planning a trip: choosing cities and a date, then comparing buses.' },
  { id: 3, title: 'Booking', desc: 'From picking seats to a confirmed booking.' },
  { id: 4, title: 'The trip', desc: 'Using the ticket, following the bus live, and cancelling if plans change.' },
  { id: 5, title: 'Account', desc: 'Profile, wallet, notifications, help and settings.' },
  { id: 6, title: 'Essentials and states', desc: 'Permissions, loading, failures, offline, rating and account edits, so no tap is a dead end.' },
  { id: 7, title: 'More features', desc: 'The extra features promised on the Features page: changes, return trips, rewards and more.' },
]

export const flowScreens: FlowScreen[] = [
  {
    id: 'splash',
    phase: 1,
    title: 'Splash',
    purpose: 'The first thing people see when they open BusTopia, shown while the app loads.',
    sections: [
      { name: 'Brand', desc: 'The moving bus mark, the app name and the tagline.' },
      { name: 'Loader', desc: 'A loading bar, a short status line and the app version.' },
    ],
    tip: 'Moves on to the welcome slides by itself after about 3 seconds.',
    Screen: Splash,
  },
  {
    id: 'onboarding',
    phase: 1,
    title: 'Welcome slides',
    purpose: 'Three quick slides that explain what the app does, shown on first launch only.',
    sections: [
      { name: 'Slide', desc: 'An illustration, a title and one line of text. Three slides: search, seats, live tracking.' },
      { name: 'Pager', desc: 'Dots showing which slide you are on. Tap a dot to jump to it.' },
      { name: 'Actions', desc: 'Next button, Get started on the last slide, and a Log in link. Skip sits at the top.' },
    ],
    tip: 'Try Next, the dots and Skip. Get started opens Sign up.',
    Screen: Onboarding,
  },
  {
    id: 'login',
    phase: 1,
    title: 'Login',
    purpose: 'Returning riders log in with one tap. Google is the only option, so there are no passwords.',
    sections: [
      { name: 'Hero', desc: 'Illustration with a route and the bus mark, “Welcome back” and a short line.' },
      { name: 'Options', desc: 'Continue with Google and the terms line.' },
      { name: 'Switch', desc: '“New to BusTopia? Sign up” for first-time riders.' },
    ],
    Screen: Login,
  },
  {
    id: 'signup',
    phase: 1,
    title: 'Sign up',
    purpose: 'New riders create an account with Google or with their name, phone and email.',
    sections: [
      { name: 'Header', desc: 'Back button, title and a short line.' },
      { name: 'Google', desc: 'Sign up with Google, then an “or with your details” divider.' },
      { name: 'Form', desc: 'Full name, phone with +91, email and the terms checkbox. Create account unlocks once terms are ticked.' },
      { name: 'Switch', desc: '“Already have an account? Log in”.' },
    ],
    tip: 'Tick the terms box and tap Create account with empty fields to see the inline errors.',
    Screen: Signup,
  },
  {
    id: 'otp',
    phase: 1,
    title: 'Phone OTP',
    purpose: 'Confirms the phone number, so tickets and trip alerts reach the right rider.',
    sections: [
      { name: 'Header', desc: 'Back button, phone icon, title and the number the code was sent to.' },
      { name: 'Code', desc: 'Six boxes that move to the next box as you type. Pasting a code fills them all.' },
      { name: 'Resend', desc: 'A 30-second countdown, then a Resend code link.' },
      { name: 'Verify', desc: 'Unlocks when all six digits are filled, then asks for permissions.' },
    ],
    tip: 'Demo: type any 6 digits.',
    Screen: Otp,
  },

  // ---------- Phase 2: Home and search ----------
  {
    id: 'home',
    phase: 2,
    title: 'Home',
    purpose: 'The main screen after signing in. Plan a trip, see your next booking and find offers.',
    sections: [
      { name: 'Header', desc: 'Avatar, greeting, current city and the notifications bell.' },
      { name: 'Search', desc: 'From and To (tap to change), a swap button, travel date with quick picks, and Search buses.' },
      { name: 'Upcoming trip', desc: 'Your next booking with a link to the ticket.' },
      { name: 'Offers', desc: 'Swipeable offer cards with their codes.' },
      { name: 'Routes', desc: 'Recent searches and popular routes. Tapping one searches it straight away.' },
    ],
    tip: 'Tap From or To to pick a city, swap them, or change the date. Choices carry through the whole demo.',
    Screen: Home,
  },
  {
    id: 'city',
    phase: 2,
    title: 'City picker',
    purpose: 'Choose where the trip starts or ends.',
    sections: [
      { name: 'Search', desc: 'Type to filter cities, states and bus stops.' },
      { name: 'List', desc: 'Use current location, recent cities and popular cities. Choosing the other side’s city swaps them.' },
    ],
    tip: 'Type “goa” or “ut” to filter the list.',
    Screen: CityPicker,
  },
  {
    id: 'date',
    phase: 2,
    title: 'Date picker',
    purpose: 'Pick a travel date, with the lowest fare shown for each day.',
    sections: [
      { name: 'Quick picks', desc: 'Today, tomorrow, this weekend and next week.' },
      { name: 'Calendar', desc: 'Month view with fares under each day. Past days are disabled and the cheapest day is green.' },
    ],
    Screen: DatePicker,
  },
  {
    id: 'results',
    phase: 2,
    title: 'Search results',
    purpose: 'Every bus on the route, ready to compare.',
    sections: [
      { name: 'Top bar', desc: 'Route, date and number of buses, with an Edit button to change the search.' },
      { name: 'Day strip', desc: 'Nearby days with their lowest fare; tap to switch day without going back.' },
      { name: 'Quick filters and sort', desc: 'AC, sleeper, seater and non-AC chips, then cheapest, fastest or top rated.' },
      { name: 'Bus cards', desc: 'Operator badge, times, duration, boarding and drop points, rating, free cancellation, seats left and price per seat.' },
      { name: 'Sort and filter', desc: 'A floating button at the bottom, within thumb reach, showing how many filters are on.' },
    ],
    tip: 'Tap another day in the strip: the date updates everywhere.',
    Screen: Results,
  },
  {
    id: 'filters',
    phase: 2,
    title: 'Filters',
    purpose: 'Narrow the list down to buses that suit you.',
    sections: [
      { name: 'Bus type', desc: 'AC, non-AC, sleeper and seater.' },
      { name: 'Departure time', desc: 'Morning, afternoon, evening and night.' },
      { name: 'Price', desc: 'A slider for the maximum price per seat.' },
      { name: 'Rating', desc: 'Any, 4.0 and above, or 4.5 and above.' },
      { name: 'Apply', desc: 'Shows how many buses match before you apply. Reset clears everything.' },
    ],
    Screen: Filters,
  },
  {
    id: 'bus',
    phase: 2,
    title: 'Bus details',
    purpose: 'Everything about one bus before choosing seats.',
    sections: [
      { name: 'Photos', desc: 'Swipeable photos of the bus inside and out.' },
      { name: 'Overview', desc: 'Rating, seats left, departure and arrival with stops and duration.' },
      { name: 'Amenities', desc: 'Wi-Fi, charging, water, blanket and more.' },
      { name: 'Cancellation policy', desc: 'How much you get back depending on when you cancel.' },
      { name: 'Reviews', desc: 'Recent rider reviews with star ratings.' },
    ],
    Screen: BusDetails,
  },

  // ---------- Phase 3: Booking ----------
  {
    id: 'seats',
    phase: 3,
    title: 'Seat selection',
    purpose: 'Choose exactly where you sit, on either deck.',
    sections: [
      { name: 'Deck and legend', desc: 'Switch between lower and upper deck, with a key for each seat state.' },
      { name: 'Seat map', desc: 'Tap seats to select them, up to 6. Booked seats are disabled and women-only seats are pink.' },
      { name: 'Summary', desc: 'Selected seats and total price, with Continue.' },
    ],
    tip: 'Tap seats on both decks. Try picking a seventh seat.',
    Screen: Seats,
  },
  {
    id: 'boarding',
    phase: 3,
    title: 'Boarding and drop points',
    purpose: 'Pick where you get on and where you get off.',
    sections: [
      { name: 'Tabs', desc: 'Boarding point and drop point.' },
      { name: 'Point list', desc: 'Stops with address and time. Choosing a boarding point moves you to drop points.' },
    ],
    Screen: Boarding,
  },
  {
    id: 'passengers',
    phase: 3,
    title: 'Passenger details',
    purpose: 'Who is travelling in each seat, and where to send the ticket.',
    sections: [
      { name: 'Saved travellers', desc: 'Tap a saved person to fill the next empty passenger.' },
      { name: 'Passenger forms', desc: 'Name, age and gender for every selected seat.' },
      { name: 'Contact details', desc: 'Email and phone for the ticket and trip alerts.' },
    ],
    tip: 'Continue unlocks once every passenger has a name and age.',
    Screen: Passengers,
  },
  {
    id: 'review',
    phase: 3,
    title: 'Review and offers',
    purpose: 'One last check of the whole trip, with offers and add-ons.',
    sections: [
      { name: 'Seat hold', desc: 'A countdown showing how long your seats stay held.' },
      { name: 'Trip summary', desc: 'Route, date, bus, seats, boarding, drop and passengers.' },
      { name: 'Offers', desc: 'Apply or remove a promo code and see the saving.' },
      { name: 'Insurance', desc: 'Optional travel insurance for ₹19 per seat.' },
      { name: 'Fare breakdown', desc: 'Base fare, offer, insurance, taxes and the total.' },
    ],
    tip: 'Switch offers and insurance on and off: the total updates everywhere.',
    Screen: Review,
  },
  {
    id: 'payment',
    phase: 3,
    title: 'Payment',
    purpose: 'Pay for the booking with your preferred method.',
    tip: 'Choose Net banking to see what happens when a payment fails.',
    sections: [
      { name: 'Seat hold', desc: 'The same countdown, so riders know how long they have.' },
      { name: 'Amount', desc: 'Total to pay with a short trip summary.' },
      { name: 'Methods', desc: 'UPI, card, BusTopia Wallet (disabled if the balance is too low) and net banking.' },
      { name: 'Processing', desc: 'A short processing state before the booking is confirmed.' },
    ],
    Screen: Payment,
  },
  {
    id: 'confirmed',
    phase: 3,
    title: 'Booking confirmed',
    purpose: 'Confirms the booking and points to the ticket.',
    sections: [
      { name: 'Success', desc: 'A green tick, the confirmation and where the ticket was sent.' },
      { name: 'Summary', desc: 'Booking ID, route, date, bus, seats, boarding point and amount paid.' },
      { name: 'Actions', desc: 'View ticket or go back home.' },
    ],
    Screen: Confirmed,
  },

  // ---------- Phase 4: The trip ----------
  {
    id: 'ticket',
    phase: 4,
    title: 'E-ticket',
    purpose: 'The ticket riders show when boarding, with everything the conductor needs.',
    sections: [
      { name: 'Ticket', desc: 'Status, route with times, passengers, seats, boarding point, bus and a real QR code with the PNR.' },
      { name: 'Actions', desc: 'Track your bus, save offline, share, and cancel ticket.' },
    ],
    tip: 'Scan the QR code with your phone: it is real.',
    Screen: Ticket,
  },
  {
    id: 'trips',
    phase: 4,
    title: 'My trips',
    purpose: 'All bookings in one place, sorted by status.',
    sections: [
      { name: 'Status tabs', desc: 'Upcoming, completed and cancelled.' },
      { name: 'Trip list', desc: 'Route, date, bus and status for each trip. Your current booking opens its ticket.' },
      { name: 'Tab bar', desc: 'Home, Trips, Track and Profile.' },
    ],
    Screen: Trips,
  },
  {
    id: 'tracking',
    phase: 4,
    title: 'Live tracking',
    purpose: 'Follow the bus on the map and know exactly when to head out.',
    sections: [
      { name: 'Map', desc: 'The route with the travelled part in teal, the bus position and the arrival time.' },
      { name: 'Trip sheet', desc: 'Bus number, stops progress, the driver with a call button, and share trip.' },
      { name: 'SOS', desc: 'An emergency alert that shares your live location with contacts and the safety team.' },
    ],
    tip: 'Tap SOS to see the emergency flow.',
    Screen: Tracking,
  },
  {
    id: 'cancel',
    phase: 4,
    title: 'Cancel and refund',
    purpose: 'Cancel some or all seats and see the refund before confirming.',
    sections: [
      { name: 'Seats', desc: 'Choose which passengers’ seats to cancel.' },
      { name: 'Reason', desc: 'A quick reason, used to improve the service.' },
      { name: 'Refund preview', desc: 'Amount paid, cancellation fee and what you get back.' },
      { name: 'Refund tracker', desc: 'After confirming: the refund amount and its progress.' },
    ],
    tip: 'Cancelling every seat marks the trip as cancelled across Home, Trips and the ticket.',
    Screen: Cancel,
  },

  // ---------- Phase 5: Account ----------
  {
    id: 'profile',
    phase: 5,
    title: 'Profile',
    purpose: 'The rider’s account hub, with quick links to everything personal.',
    sections: [
      { name: 'Account card', desc: 'Photo initials, name, phone, email and an edit button.' },
      { name: 'Stats', desc: 'Trips taken, money saved and loyalty points.' },
      { name: 'Menu', desc: 'My trips, saved travellers, wallet, notifications, help, settings and log out.' },
    ],
    Screen: Profile,
  },
  {
    id: 'wallet',
    phase: 5,
    title: 'Wallet and offers',
    purpose: 'Money kept in the app for quick payments and instant refunds, plus every offer.',
    sections: [
      { name: 'Balance', desc: 'Current balance with quick amounts and an Add button.' },
      { name: 'History', desc: 'Cashback, refunds, payments and top-ups.' },
      { name: 'Offers', desc: 'Promo codes. Tap a code to copy it.' },
    ],
    tip: 'Add money and watch the balance and history update.',
    Screen: Wallet,
  },
  {
    id: 'notifications',
    phase: 5,
    title: 'Notifications',
    purpose: 'Trip reminders, delays and offers, grouped by day, each with a quick action.',
    sections: [
      { name: 'Filters', desc: 'All, trips and offers, each with a count.' },
      { name: 'Day groups', desc: 'Today, yesterday and earlier, one clean list per day.' },
      { name: 'Rows', desc: 'Icon by type, title with time, two-line text, and an action like View ticket or Track bus. New items are tinted with a dot.' },
      { name: 'Mark all read', desc: 'Clears every new item at once. Tapping a row marks it read.' },
    ],
    tip: 'Tap a notification to mark it read, or use its action to jump to the ticket, tracking or wallet.',
    Screen: Notifications,
  },
  {
    id: 'help',
    phase: 5,
    title: 'Help and chat',
    purpose: 'Answers to common questions and a live chat with support.',
    sections: [
      { name: 'Common questions', desc: 'Searchable questions that open to show the answer.' },
      { name: 'Chat', desc: 'Message support or tap a quick question. The agent replies within seconds.' },
    ],
    tip: 'Open the chat and ask “Where is my bus?” or “Refund status”.',
    Screen: Help,
  },
  {
    id: 'settings',
    phase: 5,
    title: 'Settings',
    purpose: 'Make the app work the way the rider likes.',
    sections: [
      { name: 'Language', desc: 'English and five Indian languages.' },
      { name: 'Appearance', desc: 'Light or dark. This also switches the whole site’s theme.' },
      { name: 'Notifications', desc: 'Trip reminders, delay alerts and offers on or off.' },
      { name: 'Account', desc: 'Privacy, app version and log out.' },
    ],
    Screen: Settings,
  },

  // ---------- Phase 6: Essentials and states ----------
  {
    id: 'permissions',
    phase: 6,
    title: 'Permissions',
    purpose: 'Asks for location and notifications right after sign-in, explaining why each is needed.',
    sections: [
      { name: 'Intro', desc: 'Why the app needs two permissions, and a privacy promise.' },
      { name: 'Permission cards', desc: 'Location and notifications, each with an Allow button that turns into “Allowed”.' },
      { name: 'Continue', desc: 'Goes to Home whether or not both are allowed.' },
    ],
    Screen: Permissions,
  },
  {
    id: 'searching',
    phase: 6,
    title: 'Searching',
    purpose: 'The short loading state between tapping Search and seeing results.',
    sections: [
      { name: 'Progress', desc: 'A bus driving along a dashed road with a status line.' },
      { name: 'Skeleton', desc: 'Placeholder cards in the shape of the results, so the jump to results feels smooth.' },
    ],
    tip: 'Opens the results by itself after about 2 seconds.',
    Screen: Searching,
  },
  {
    id: 'payment-failed',
    phase: 6,
    title: 'Payment failed',
    purpose: 'What riders see when the bank doesn’t confirm a payment, with a calm way forward.',
    sections: [
      { name: 'Message', desc: 'Red cross, a plain explanation, and reassurance that no money was taken.' },
      { name: 'Details', desc: 'Amount, method, reference and a tip about refunds.' },
      { name: 'Actions', desc: 'Try again, or get help.' },
    ],
    Screen: PaymentFailed,
  },
  {
    id: 'rate',
    phase: 6,
    title: 'Rate your trip',
    purpose: 'Riders rate a completed trip, which helps others choose buses.',
    sections: [
      { name: 'Trip', desc: 'The completed trip being rated.' },
      { name: 'Stars', desc: 'Five large stars with a label for each score.' },
      { name: 'Tags', desc: 'Quick tags that change between “what went well” and “what went wrong”.' },
      { name: 'Comment', desc: 'An optional note with a character count. A thank-you screen follows.' },
    ],
    tip: 'Try 5 stars, then 2 stars: the tags change.',
    Screen: RateTrip,
  },
  {
    id: 'edit-profile',
    phase: 6,
    title: 'Edit profile',
    purpose: 'Change name, phone, email and the emergency contact used for SOS.',
    sections: [
      { name: 'Photo', desc: 'Initials or a photo, with a change button.' },
      { name: 'Form', desc: 'Name, phone, email and emergency contact.' },
      { name: 'Save', desc: 'Unlocks only when something changed and the details are valid. Profile updates straight away.' },
    ],
    tip: 'Change the name and save: Profile shows the new name and initials.',
    Screen: EditProfile,
  },
  {
    id: 'logout',
    phase: 6,
    title: 'Log out confirmation',
    purpose: 'Asks before logging out, from Profile or Settings.',
    sections: [{ name: 'Confirmation sheet', desc: 'Explains tickets stay saved, with Log out and Cancel.' }],
    Screen: Logout,
  },
  {
    id: 'offline',
    phase: 6,
    title: 'Offline',
    purpose: 'A friendly screen when there’s no internet, pointing to what still works.',
    sections: [
      { name: 'Message', desc: 'No-signal icon and what to check.' },
      { name: 'Actions', desc: 'Try again (checks, then returns Home) and open the saved ticket.' },
    ],
    Screen: Offline,
  },

  // ---------- Phase 7: More features ----------
  {
    id: 'reschedule',
    phase: 7,
    title: 'Change travel date',
    purpose: 'Move a booking to another day without cancelling. Same bus, seats and boarding point.',
    sections: [
      { name: 'Current trip', desc: 'The booking being moved.' },
      { name: 'New date', desc: 'The next seven days with the lowest fare for each.' },
      { name: 'Cost', desc: 'Fare difference plus a ₹50 change fee. Cheaper days refund the difference.' },
      { name: 'Done', desc: 'Confirmation, and the ticket shows the new date.' },
    ],
    tip: 'Pick different days: the cost updates, and cheaper days show money back.',
    Screen: Reschedule,
  },
  {
    id: 'return',
    phase: 7,
    title: 'Return trip',
    purpose: 'Book the way back right after booking, with a round-trip saving.',
    sections: [
      { name: 'Saving', desc: '₹100 off, applied automatically.' },
      { name: 'Return date', desc: 'The next few days after the onward trip.' },
      { name: 'Bus', desc: 'Three buses for the way back, with times and ratings.' },
      { name: 'Done', desc: 'Confirmation; the trip appears in My trips.' },
    ],
    Screen: ReturnTrip,
  },
  {
    id: 'rewards',
    phase: 7,
    title: 'Rewards',
    purpose: 'Loyalty points, membership level and what points can be used for.',
    sections: [
      { name: 'Points card', desc: 'Progress ring to the next level and the points balance.' },
      { name: 'Levels', desc: 'Silver, Gold and Platinum with their perks.' },
      { name: 'Use your points', desc: 'Redeem rewards; points go down and the reward is marked redeemed.' },
      { name: 'Ways to earn', desc: 'Trips, ratings and referrals.' },
    ],
    tip: 'Redeem a reward and watch the points and ring update.',
    Screen: Rewards,
  },
  {
    id: 'refer',
    phase: 7,
    title: 'Refer and earn',
    purpose: 'Invite friends with a personal code; both get ₹100.',
    sections: [
      { name: 'Offer', desc: 'Give ₹100, get ₹100, and how much has been earned.' },
      { name: 'Invite code', desc: 'Copy the code or share an invite link.' },
      { name: 'How it works', desc: 'Three simple steps.' },
      { name: 'Your invites', desc: 'Friends who joined and what each earned.' },
    ],
    Screen: Refer,
  },
  {
    id: 'fare-alerts',
    phase: 7,
    title: 'Fare alerts',
    purpose: 'Get notified when a route drops below a chosen price.',
    sections: [
      { name: 'New alert', desc: 'The current route with a price slider and Create alert.' },
      { name: 'Your alerts', desc: 'Each alert can be paused or removed; dropped prices are highlighted.' },
    ],
    Screen: FareAlerts,
  },
  {
    id: 'directions',
    phase: 7,
    title: 'Walk to your bus',
    purpose: 'Walking directions to the boarding point so riders don’t miss the bus.',
    sections: [
      { name: 'Map', desc: 'Your position, the walking route and the boarding point.' },
      { name: 'Departure', desc: 'When the bus leaves and when to arrive.' },
      { name: 'Steps', desc: 'Three short turn-by-turn steps and Open in maps.' },
    ],
    Screen: Directions,
  },
  {
    id: 'lost-found',
    phase: 7,
    title: 'Lost and found',
    purpose: 'Report something left on a bus; BusTopia contacts the operator.',
    sections: [
      { name: 'Trip', desc: 'Choose which recent trip.' },
      { name: 'Item', desc: 'Bag, phone, wallet, documents and more.' },
      { name: 'Details', desc: 'An optional description.' },
      { name: 'Done', desc: 'A reference number and what happens next.' },
    ],
    Screen: LostFound,
  },
]
