import { AppBody } from '../../kit/AppBody/AppBody'
import { AppScreen } from '../../kit/AppScreen/AppScreen'
import { TabBar } from '../../kit/TabBar/TabBar'
import { HomeHeader } from './sections/HomeHeader/HomeHeader'
import { HomeOffers } from './sections/HomeOffers/HomeOffers'
import { HomeRoutes } from './sections/HomeRoutes/HomeRoutes'
import { HomeSearch } from './sections/HomeSearch/HomeSearch'
import { HomeUpcoming } from './sections/HomeUpcoming/HomeUpcoming'
import './Home.css'

export function Home() {
  return (
    <AppScreen bare className="home">
      <AppBody className="app-body--top home__body">
        <HomeHeader />
        <HomeSearch />
        <HomeUpcoming />
        <HomeOffers />
        <HomeRoutes />
      </AppBody>
      <TabBar active="home" />
    </AppScreen>
  )
}
