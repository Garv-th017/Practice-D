/* ==========================================================================
   User flow data: journeys (rows), where each screen sits, the links
   between screens and a wireframe for every screen.
   Screen titles, phases and purposes come from app-flow/flow.ts.
   ========================================================================== */

export type EdgeKind = 'main' | 'alt' | 'error'

export interface Lane {
  id: string
  title: string
  rows: number
}

export interface NodePlace {
  lane: number
  row: number
  col: number
  /** Loading, error and overlay screens are drawn with a dashed frame */
  state?: boolean
}

export type BlockType =
  // Content, stacked from the top
  | 'top' | 'hello' | 'heading' | 'title' | 'text' | 'label' | 'card' | 'list' | 'cards' | 'skeleton'
  | 'chips' | 'tabs' | 'strip' | 'image' | 'map' | 'seats' | 'calendar' | 'fields' | 'otp' | 'dots'
  | 'button' | 'ghost' | 'link' | 'stats' | 'grid4' | 'slider' | 'textarea' | 'center' | 'route'
  | 'ticket' | 'steps' | 'banner' | 'ring' | 'row3' | 'account' | 'stars' | 'code' | 'form' | 'gap'
  // Pinned to the bottom of the screen
  | 'tabbar' | 'bottombar' | 'cta' | 'cta2' | 'fab' | 'sheet' | 'tracksheet' | 'loader'

export interface WireBlock {
  t: BlockType
  /** Height in wireframe units, where the type takes one */
  h?: number
  /** Count of rows, lines or cards */
  n?: number
  /** Variant, for example list row endings or a dark card */
  v?: string
  /** Section name, shown as a numbered note on the large wireframe */
  label?: string
}

export const lanes: Lane[] = [
  { id: 'start', title: 'Getting started', rows: 2 },
  { id: 'search', title: 'Search', rows: 2 },
  { id: 'book', title: 'Booking', rows: 2 },
  { id: 'trip', title: 'The trip', rows: 2 },
  { id: 'account', title: 'Account and support', rows: 2 },
]

export const places: Record<string, NodePlace> = {
  // Getting started
  splash: { lane: 0, row: 0, col: 0 },
  onboarding: { lane: 0, row: 0, col: 1 },
  login: { lane: 0, row: 0, col: 2 },
  otp: { lane: 0, row: 0, col: 3 },
  permissions: { lane: 0, row: 0, col: 4 },
  signup: { lane: 0, row: 1, col: 2 },
  // Search
  home: { lane: 1, row: 0, col: 0 },
  searching: { lane: 1, row: 0, col: 1, state: true },
  results: { lane: 1, row: 0, col: 2 },
  bus: { lane: 1, row: 0, col: 3 },
  city: { lane: 1, row: 1, col: 0 },
  date: { lane: 1, row: 1, col: 1 },
  filters: { lane: 1, row: 1, col: 2 },
  'fare-alerts': { lane: 1, row: 1, col: 3 },
  // Booking
  seats: { lane: 2, row: 0, col: 0 },
  boarding: { lane: 2, row: 0, col: 1 },
  passengers: { lane: 2, row: 0, col: 2 },
  review: { lane: 2, row: 0, col: 3 },
  payment: { lane: 2, row: 0, col: 4 },
  confirmed: { lane: 2, row: 0, col: 5 },
  return: { lane: 2, row: 0, col: 6 },
  'payment-failed': { lane: 2, row: 1, col: 4, state: true },
  // The trip
  trips: { lane: 3, row: 0, col: 0 },
  ticket: { lane: 3, row: 0, col: 1 },
  tracking: { lane: 3, row: 0, col: 2 },
  rate: { lane: 3, row: 1, col: 0 },
  cancel: { lane: 3, row: 1, col: 1 },
  reschedule: { lane: 3, row: 1, col: 2 },
  directions: { lane: 3, row: 1, col: 3 },
  offline: { lane: 3, row: 1, col: 4, state: true },
  // Account and support
  profile: { lane: 4, row: 0, col: 0 },
  wallet: { lane: 4, row: 0, col: 1 },
  rewards: { lane: 4, row: 0, col: 2 },
  refer: { lane: 4, row: 0, col: 3 },
  notifications: { lane: 4, row: 0, col: 4 },
  'edit-profile': { lane: 4, row: 1, col: 0 },
  help: { lane: 4, row: 1, col: 1 },
  'lost-found': { lane: 4, row: 1, col: 2 },
  settings: { lane: 4, row: 1, col: 3 },
  logout: { lane: 4, row: 1, col: 4, state: true },
}

export interface FlowEdge {
  from: string
  to: string
  kind: EdgeKind
  /** What the rider does to follow this link */
  action: string
}

const link = (from: string, to: string, kind: EdgeKind, action: string): FlowEdge => ({ from, to, kind, action })

/** Forward links only; Back buttons and the tab bar are left out */
export const edges: FlowEdge[] = [
  // The main booking path
  link('splash', 'onboarding', 'main', 'Opens by itself after loading'),
  link('onboarding', 'login', 'main', 'Get started'),
  link('login', 'otp', 'main', 'Continue with Google'),
  link('otp', 'permissions', 'main', 'Enter the 6-digit code'),
  link('permissions', 'home', 'main', 'Allow both and continue'),
  link('home', 'searching', 'main', 'Search buses'),
  link('searching', 'results', 'main', 'Results load by themselves'),
  link('results', 'bus', 'main', 'Tap a bus'),
  link('bus', 'seats', 'main', 'Select berths'),
  link('seats', 'boarding', 'main', 'Pick seats and continue'),
  link('boarding', 'passengers', 'main', 'Choose boarding and drop points'),
  link('passengers', 'review', 'main', 'Fill in each passenger'),
  link('review', 'payment', 'main', 'Proceed to pay'),
  link('payment', 'confirmed', 'main', 'Pay'),
  link('confirmed', 'ticket', 'main', 'View ticket'),
  link('ticket', 'tracking', 'main', 'Track bus'),
  // Other paths
  link('onboarding', 'signup', 'alt', 'Create an account'),
  link('login', 'signup', 'alt', 'Sign up instead'),
  link('signup', 'otp', 'alt', 'Create account'),
  link('home', 'city', 'alt', 'Tap From or To'),
  link('home', 'date', 'alt', 'Tap the travel date'),
  link('home', 'ticket', 'alt', 'Tap the upcoming trip'),
  link('home', 'notifications', 'alt', 'Tap the bell'),
  link('results', 'filters', 'alt', 'Sort and filter'),
  link('results', 'fare-alerts', 'alt', 'Get a fare alert'),
  link('confirmed', 'return', 'alt', 'Book the return trip'),
  link('trips', 'ticket', 'alt', 'Tap a trip'),
  link('trips', 'rate', 'alt', 'Rate a past trip'),
  link('ticket', 'cancel', 'alt', 'Cancel ticket'),
  link('ticket', 'reschedule', 'alt', 'Change travel date'),
  link('ticket', 'directions', 'alt', 'Walk to your bus'),
  link('offline', 'ticket', 'alt', 'Open the saved ticket'),
  link('profile', 'wallet', 'alt', 'Wallet'),
  link('profile', 'rewards', 'alt', 'Rewards'),
  link('profile', 'refer', 'alt', 'Refer and earn'),
  link('profile', 'edit-profile', 'alt', 'Edit profile'),
  link('profile', 'help', 'alt', 'Help and chat'),
  link('help', 'lost-found', 'alt', 'Report a lost item'),
  link('profile', 'settings', 'alt', 'Settings'),
  link('settings', 'logout', 'alt', 'Log out'),
  // When something goes wrong
  link('payment', 'payment-failed', 'error', 'The payment does not go through'),
]

const tabbar: WireBlock = { t: 'tabbar' }

const profileBody: WireBlock[] = [
  { t: 'gap', h: 4 },
  { t: 'account', label: 'Account card' },
  { t: 'stats', label: 'Stats' },
  { t: 'label' },
  { t: 'list', n: 5, v: 'chev', label: 'Menu' },
]

export const wires: Record<string, WireBlock[]> = {
  splash: [{ t: 'gap', h: 70 }, { t: 'center', v: 'logo', label: 'Brand' }, { t: 'loader', label: 'Loader' }],
  onboarding: [
    { t: 'link', v: 'right' },
    { t: 'image', h: 92, label: 'Slide' },
    { t: 'gap', h: 4 },
    { t: 'title', n: 2, v: 'center' },
    { t: 'text', n: 2, v: 'center' },
    { t: 'dots', label: 'Pager' },
    { t: 'cta2', v: 'link', label: 'Actions' },
  ],
  login: [
    { t: 'image', h: 96, label: 'Hero' },
    { t: 'gap', h: 4 },
    { t: 'title', n: 2 },
    { t: 'text', n: 2 },
    { t: 'gap', h: 6 },
    { t: 'ghost', v: 'icon', label: 'Options' },
    { t: 'cta', v: 'link', label: 'Switch' },
  ],
  signup: [
    { t: 'top', label: 'Header' },
    { t: 'ghost', v: 'icon', label: 'Google' },
    { t: 'text', n: 1, v: 'center' },
    { t: 'fields', n: 3, label: 'Form' },
    { t: 'text', n: 1 },
    { t: 'button' },
    { t: 'link', label: 'Switch' },
  ],
  otp: [
    { t: 'top', label: 'Header' },
    { t: 'title', n: 1 },
    { t: 'text', n: 2 },
    { t: 'gap', h: 4 },
    { t: 'otp', label: 'Code' },
    { t: 'link', label: 'Resend' },
    { t: 'cta', label: 'Verify' },
  ],
  home: [
    { t: 'hello', label: 'Header' },
    { t: 'title', n: 2 },
    { t: 'card', h: 44, v: 'search', label: 'Search' },
    { t: 'chips' },
    { t: 'button' },
    { t: 'card', h: 30, label: 'Upcoming trip' },
    { t: 'strip', h: 22, label: 'Offers' },
    tabbar,
  ],
  city: [
    { t: 'top' },
    { t: 'fields', n: 1, v: 'bare', label: 'Search' },
    { t: 'label' },
    { t: 'list', n: 7, v: 'chev', label: 'List' },
  ],
  date: [
    { t: 'top' },
    { t: 'chips', label: 'Quick picks' },
    { t: 'calendar', label: 'Calendar' },
    { t: 'cta' },
  ],
  results: [
    { t: 'top', v: 'action', label: 'Top bar' },
    { t: 'strip', h: 16, label: 'Day strip' },
    { t: 'chips', label: 'Quick filters and sort' },
    { t: 'tabs' },
    { t: 'cards', n: 3, label: 'Bus cards' },
    { t: 'fab', label: 'Sort and filter' },
  ],
  filters: [
    { t: 'top', v: 'action' },
    { t: 'label' },
    { t: 'chips', label: 'Bus type' },
    { t: 'label' },
    { t: 'grid4', label: 'Departure time' },
    { t: 'label' },
    { t: 'slider', label: 'Price' },
    { t: 'label' },
    { t: 'chips', label: 'Rating' },
    { t: 'cta', label: 'Apply' },
  ],
  bus: [
    { t: 'top' },
    { t: 'image', h: 54, label: 'Photos' },
    { t: 'chips', label: 'Overview' },
    { t: 'card', h: 26 },
    { t: 'label' },
    { t: 'grid4', label: 'Amenities' },
    { t: 'label' },
    { t: 'card', h: 26, label: 'Cancellation policy' },
    { t: 'bottombar' },
  ],
  seats: [
    { t: 'top' },
    { t: 'tabs', label: 'Deck and legend' },
    { t: 'grid4', v: 'legend' },
    { t: 'seats', label: 'Seat map' },
    { t: 'bottombar', label: 'Summary' },
  ],
  boarding: [
    { t: 'top' },
    { t: 'tabs', label: 'Tabs' },
    { t: 'list', n: 6, v: 'radio', label: 'Point list' },
    { t: 'bottombar' },
  ],
  passengers: [
    { t: 'top' },
    { t: 'strip', h: 12, label: 'Saved travellers' },
    { t: 'form', h: 64, label: 'Passenger forms' },
    { t: 'form', h: 44, label: 'Contact details' },
    { t: 'bottombar' },
  ],
  review: [
    { t: 'top' },
    { t: 'banner', label: 'Seat hold' },
    { t: 'card', h: 32, label: 'Trip summary' },
    { t: 'card', h: 18, label: 'Offers' },
    { t: 'list', n: 1, v: 'toggle', label: 'Insurance' },
    { t: 'card', h: 40, label: 'Fare breakdown' },
    { t: 'bottombar' },
  ],
  payment: [
    { t: 'top' },
    { t: 'banner', label: 'Seat hold' },
    { t: 'center', v: 'amount', label: 'Amount' },
    { t: 'list', n: 4, v: 'radio', label: 'Methods' },
    { t: 'cta', label: 'Pay and processing' },
  ],
  confirmed: [
    { t: 'gap', h: 10 },
    { t: 'center', v: 'check', label: 'Success' },
    { t: 'card', h: 62, label: 'Summary' },
    { t: 'cta2', label: 'Actions' },
  ],
  ticket: [{ t: 'top' }, { t: 'ticket', label: 'Ticket' }, { t: 'row3', label: 'Actions' }],
  trips: [
    { t: 'heading' },
    { t: 'tabs', label: 'Status tabs' },
    { t: 'cards', n: 4, label: 'Trip list' },
    { ...tabbar, label: 'Tab bar' },
  ],
  tracking: [
    { t: 'map', h: 140, v: 'bleed', label: 'Map' },
    { t: 'tracksheet', label: 'Trip sheet and SOS' },
    tabbar,
  ],
  cancel: [
    { t: 'top' },
    { t: 'list', n: 2, v: 'check', label: 'Seats' },
    { t: 'chips', label: 'Reason' },
    { t: 'card', h: 34, label: 'Refund preview' },
    { t: 'steps', n: 3, label: 'Refund tracker' },
    { t: 'cta' },
  ],
  profile: [...profileBody, tabbar],
  wallet: [
    { t: 'top' },
    { t: 'card', h: 48, v: 'dark', label: 'Balance' },
    { t: 'label' },
    { t: 'list', n: 3, label: 'History' },
    { t: 'label' },
    { t: 'card', h: 24, label: 'Offers' },
  ],
  notifications: [
    { t: 'top', v: 'action', label: 'Mark all read' },
    { t: 'tabs', label: 'Filters' },
    { t: 'label', label: 'Day groups' },
    { t: 'list', n: 3, v: 'tall', label: 'Rows' },
    { t: 'label' },
    { t: 'list', n: 2, v: 'tall' },
  ],
  help: [
    { t: 'top' },
    { t: 'fields', n: 1, v: 'bare' },
    { t: 'label' },
    { t: 'list', n: 4, v: 'chev', label: 'Common questions' },
    { t: 'card', h: 34, label: 'Chat' },
  ],
  settings: [
    { t: 'top' },
    { t: 'label' },
    { t: 'list', n: 1, v: 'chev', label: 'Language' },
    { t: 'label' },
    { t: 'tabs', label: 'Appearance' },
    { t: 'label' },
    { t: 'list', n: 3, v: 'toggle', label: 'Notifications' },
    { t: 'label' },
    { t: 'list', n: 2, v: 'chev', label: 'Account' },
  ],
  permissions: [
    { t: 'gap', h: 4 },
    { t: 'route', label: 'Intro' },
    { t: 'title', n: 2 },
    { t: 'text', n: 2 },
    { t: 'list', n: 2, v: 'button', label: 'Permission cards' },
    { t: 'cta', v: 'link', label: 'Continue' },
  ],
  searching: [
    { t: 'top' },
    { t: 'route', label: 'Progress' },
    { t: 'skeleton', n: 3, label: 'Skeleton' },
  ],
  'payment-failed': [
    { t: 'gap', h: 18 },
    { t: 'center', v: 'alert', label: 'Message' },
    { t: 'card', h: 42, label: 'Details' },
    { t: 'cta2', label: 'Actions' },
  ],
  rate: [
    { t: 'top' },
    { t: 'card', h: 28, label: 'Trip' },
    { t: 'stars', label: 'Stars' },
    { t: 'chips', label: 'Tags' },
    { t: 'textarea', label: 'Comment' },
    { t: 'cta' },
  ],
  'edit-profile': [
    { t: 'top' },
    { t: 'center', v: 'avatar', label: 'Photo' },
    { t: 'fields', n: 4, label: 'Form' },
    { t: 'cta', label: 'Save' },
  ],
  logout: [...profileBody, { t: 'sheet', h: 92, label: 'Confirmation sheet' }],
  offline: [
    { t: 'gap', h: 40 },
    { t: 'center', v: 'alert', label: 'Message' },
    { t: 'text', n: 2, v: 'center' },
    { t: 'cta2', label: 'Actions' },
  ],
  reschedule: [
    { t: 'top' },
    { t: 'card', h: 28, label: 'Current trip' },
    { t: 'strip', h: 16, label: 'New date' },
    { t: 'cards', n: 2 },
    { t: 'card', h: 26, label: 'Cost' },
    { t: 'cta', label: 'Done' },
  ],
  return: [
    { t: 'top' },
    { t: 'banner', label: 'Saving' },
    { t: 'strip', h: 16, label: 'Return date' },
    { t: 'cards', n: 3, label: 'Bus' },
    { t: 'cta', label: 'Done' },
  ],
  rewards: [
    { t: 'top' },
    { t: 'ring', label: 'Points card' },
    { t: 'label' },
    { t: 'strip', h: 26, label: 'Levels' },
    { t: 'label' },
    { t: 'list', n: 3, v: 'link', label: 'Use your points' },
    { t: 'label' },
    { t: 'list', n: 2, label: 'Ways to earn' },
  ],
  refer: [
    { t: 'top' },
    { t: 'image', h: 50, label: 'Offer' },
    { t: 'code', label: 'Invite code' },
    { t: 'label' },
    { t: 'steps', n: 3, label: 'How it works' },
    { t: 'label' },
    { t: 'list', n: 2, label: 'Your invites' },
  ],
  'fare-alerts': [
    { t: 'top' },
    { t: 'form', h: 74, v: 'slider', label: 'New alert' },
    { t: 'label' },
    { t: 'list', n: 3, v: 'toggle', label: 'Your alerts' },
  ],
  directions: [
    { t: 'top' },
    { t: 'map', h: 100, label: 'Map' },
    { t: 'banner', label: 'Departure' },
    { t: 'steps', n: 3, label: 'Steps' },
    { t: 'cta' },
  ],
  'lost-found': [
    { t: 'top' },
    { t: 'list', n: 2, v: 'radio', label: 'Trip' },
    { t: 'chips', label: 'Item' },
    { t: 'textarea', label: 'Details' },
    { t: 'cta', label: 'Done' },
  ],
}

/** Where one screen leads */
export const linksOf = (id: string) => ({
  to: edges.filter((e) => e.from === id).map((e) => ({ id: e.to, action: e.action })),
})
