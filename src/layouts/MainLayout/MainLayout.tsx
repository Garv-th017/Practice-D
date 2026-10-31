import { Outlet, ScrollRestoration } from 'react-router'
import { Navbar } from '../../sections/Navbar/Navbar'

export function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  )
}
