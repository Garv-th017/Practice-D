import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TopBar } from '../../kit/TopBar/TopBar'
import { DateCalendar } from './sections/DateCalendar/DateCalendar'
import { DateQuick } from './sections/DateQuick/DateQuick'
import './DatePicker.css'

export function DatePicker() {
  return (
    <AppScreen bare className="date-picker">
      <TopBar back="/app/home" backIcon="x" title="Travel date" subtitle="Lowest fare shown under each day" />
      <AppBody>
        <DateQuick />
        <DateCalendar />
        <p className="date-picker__note">
          Fares are the lowest price per seat for that day. The final price depends on the bus and seat you choose.
        </p>
      </AppBody>
    </AppScreen>
  )
}
