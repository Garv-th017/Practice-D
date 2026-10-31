# BusTopia design rules

The rules every section of the BusTopia site follows. Check new work against this list before adding it.

A live version of every colour, font, surface, hover state and animation is on the site itself, on the **Style guide** page (`/style-guide`, code in `src/sections/StyleGuide/`). When a token changes, the style guide updates automatically.

## Text

- **Use sentence case everywhere.** Capitalise only the first word and proper nouns.
  - Good: `Everything your trip needs`, `Live travel`, `Get the app`
  - Bad: `EVERYTHING YOUR TRIP NEEDS`, `Live Travel`, `GET THE APP`
- Never use `text-transform: uppercase` or wide letter-spacing to fake capitals.
- Keep capitals only where the real-world thing is written that way: ticket and PNR codes (`BT-48Q2X`), promo codes (`BUSFIRST`), number plates (`DL 1PC 4821`), short forms (`AC`, `UPI`, `SOS`, `GPS`, `ETA`).
- Section labels use the `.eyebrow` class: small, sentence case, primary colour, with an orange dot.

## Colour: Teal & Sunset

Defined in `src/styles/themes.css`. Components only use the semantic `--color-*` tokens and never hard-code hex values.

**Palette:** Teal & Sunset is the only palette (chosen 2026-10-31; the other options were removed).

| Token | Light | Dark |
|---|---|---|
| Primary (teal) | `#0A7480` | `#2CC5D3` |
| Accent (sunset) | `#FF7A1A` | `#FF9547` |
| Background | `#F3F8F8` | `#061112` |
| Surface | `#FFFFFF` | `#0E1C1E` |
| Text | `#0A1C1E` | `#EDF6F6` |
| Muted text | `#43585B` | `#8FA7A9` |
| Success | `#116F35` | `#4ADE80` |
| Danger | `#D63339` | `#FF6B6B` |

Every screen must work in both light and dark themes.

- **Contrast:** text must reach 4.5:1 (3:1 for large text) in both themes.
- Text on solid success or danger fills uses `--color-on-success` / `--color-on-danger`, never a hard-coded `#fff`. They are dark in dark mode.
- `--color-text-subtle` is for hints and disabled text only. Readable labels use `--color-text-muted` or stronger.
- Orange words on light backgrounds use `--color-accent-text`, and women-only seat text uses `--seat-ladies-text`. The raw accent and pink are for fills, dots and icons only.

**What each colour means:**
- **Teal:** actions and the selected state only (buttons, selected chips, toggles, links). Not for decoration, icons in rows or avatars, which use soft teal.
- **Orange:** money and offers, the destination, unread and highlights (reward level, cheapest).
- **Green / red:** status only (on time, free cancellation, seats left, errors, SOS).
- **One primary per screen.** Other actions are outline, text links or chips. Danger actions that aren't the main task (SOS) are red outlines.

## Typography

- **Headings:** Bricolage Grotesque
- **Body:** DM Sans
- **Codes, times, prices in tickets:** JetBrains Mono
- **Weights in the app:** bold body text is 600. Only headings, prices, codes and the bottom-bar total use 700.

## Buttons

- Flat: no shadows, no glass shine, no lift or shrink on hover or click. Floating buttons (Results "Sort and filter") use a 3px page-colour outline, not a shadow.
- Hover changes only the colour or the border.
- An arrow icon at the end slides out to the right and comes back in from the left on hover and on click.
- Outlines are real `border`s, not inset shadows.
- Always use the shared `Button` component so these rules apply automatically.

## Cards

- Flat surface, 1px border, large rounded corners, no shadow.
- Hover darkens the border only.
- Keep cards simple. Feature cards show only the small app interface on a plain soft panel, then a title and one line of description. No tags, numbers or decorative patterns.

## Sizes in the app screens

- Text is at least 11px everywhere in the app (map labels included). Feature-card previews may go down to 10px.
- Every tap target is at least 28px high, ideally 36px. Chips are 36px. Text links get a padded hit area. Toggles are 46 × 28px.
- Frequent actions go in the thumb zone: the bottom bar or a floating button, not the top bar.
- Form fields show errors inline (red border and message) when you leave the field or submit. Don't just disable the button.
- Seat maps follow the bus type: sleepers are 1 + 2 berths, seaters are 2 + 2 seats.

## Motion

- Sections fade up as they scroll into view (`.reveal` + `useReveal()`).
- Small interface animations play **once**, when the card appears. They don't loop forever, except tiny live indicators such as the "live" dot and typing dots.
- QR codes are real and scannable: use the `QrCode` component, never fake squares.
- Use the shared timing values from `tokens.css` (`--ease-*`, `--dur-*`).
- Respect reduced motion: everything must look complete when animations are turned off.

## Code structure

- The site is a single-page app with React Router. Routes are listed in `src/router.tsx`.
- Every page lives in `src/pages/<Name>Page/` and is built from sections. It sets its own browser-tab title with `<title>`.
- The shared layout (`src/layouts/MainLayout/`) shows the Navbar on every page. Add a navbar link in `Navbar.tsx` when a new page is added.
- For links inside the app use the router: `<Button to="/features">` or `NavLink`. Use `href` only for external links.
- The app demo lives in `src/app-flow/`:
  - Each app screen is a folder in `screens/<Name>/`, with one sub-folder per section in `sections/`.
  - Shared app parts are in `kit/`.
  - Screens are registered in `flow.ts`.
  - They show at `/app` (flow map) and `/app/<screen-id>` (single screen with notes).
- Choices made in the demo (cities, date, bus, seats, passengers, offers) live in `kit/demoStore.ts`, so every screen shows the same trip. Sample data lives in `app-flow/data.ts`.
- Full app screens use `<AppScreen bare>` with `TopBar` + `AppBody` (scrolls) + `TabBar` or `BottomBar`. Shared in-app utility classes start with `k-`.
- App screens are designed at 280px wide (inside the 300px `PhoneFrame`) with fixed px sizes. Timers and auto-navigation must check `usePreviewMode()` so thumbnails stay still.
- Each section has its own folder: `src/sections/<Name>/<Name>.tsx` + `<Name>.css`.
- Shared UI goes in `src/components/<Name>/` with its own `.tsx` + `.css`.
- No Tailwind and no CSS-in-JS. Plain CSS files using the design tokens.

## Shared brand pieces (app kit)

- `OperatorLogo`: monogram tile per operator (Results, Bus details).
- `FareSummary`: sticky "N seats · incl. taxes" total with a breakdown, used in the bottom bar of every booking step.
- `RouteLine`: the signature route visual (start ring, dashed road, bus, orange end). Used on Permissions, Searching and Tracking.
- `MapArt`: the styled map (land, river, parks, roads, labels) under every map screen. Keep labels below the 44px status bar.
- `Illustrations`: drawn bus scenes in token colours; use them instead of placeholder photo boxes.

## User flow page (`/user-flow`)

- Code in `src/sections/UserFlow/`. All data is in `userFlowData.ts`: journey rows (`lanes`), each screen's position (`places`), the links (`edges`, kind main / alt / error) and a wireframe per screen (`wires`).
- **Adding a screen:** add it to `app-flow/flow.ts`, then give it a place, its links and a wireframe in `userFlowData.ts`. Only draw forward links; Back buttons and the tab bar are left out.
- Every link has an `action`: what the rider taps, in sentence case ("Tap a bus", "Pay"). The main path (`mainPath`) is worked out from the `main` links, starting at Splash, and drives the step numbers and the panel's previous / next buttons.
- The toolbar sticks under the navbar. Jump targets use `scroll-margin-top: 64px`, which adds to the page's 88px navbar padding.
- Wireframes are greyscale on purpose (shades mixed from the text and surface tokens), so they work in every palette and theme. Only filled shapes mean "primary"; images and maps are boxes with a cross or plain roads.
- Rows are journeys, not phases: edge-case screens sit next to the screen they come from. Each card still shows its phase.
- Links between journeys run down the left channel; links inside a journey use the gaps between rows, so no line crosses a screen.
