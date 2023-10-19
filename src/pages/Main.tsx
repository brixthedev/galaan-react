import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '~/components/footer'
import Navbar from '~/components/navigation'

export default function Homepage() {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  )
}
