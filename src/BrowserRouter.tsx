import { createBrowserRouter } from 'react-router-dom'
import Confirm from '~/components/book/Confirm'
import Payment from '~/components/book/Payment'
import Success from '~/components/book/Sucess'

import Explore from '~/components/explore'
import HomepageContents from '~/components/homepage'
import ToursContents from '~/components/tours'
import ProductDetails from '~/components/tours/products/details'
import Main from '~/pages/Main'
import Tours from '~/pages/Tours'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomepageContents />,
      },
      {
        path: 'tours',
        element: <Tours />,
        children: [
          {
            index: true,
            element: <ToursContents />,
          },
          {
            path: ':id',
            element: <ProductDetails />,
          },
          {
            path: 'book',
            element: <Confirm />,
          },
          {
            path: 'payment',
            element: <Payment />,
          },
          {
            path: 'success',
            element: <Success />,
          },
        ],
      },
      {
        path: 'explore',
        element: <Explore />,
      },
    ],
  },
])
