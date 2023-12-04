import { createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { Homepage } from '@/pages/Homepage'
import { PageNotFound } from '@/pages/PageNotFound'
import { Pricing } from '@/pages/Pricing'
import { Product } from '@/pages/Product'
import { MainLayout } from '@/layouts/MainLayout'

export const router = createBrowserRouter([
  {
    path: PATH.HOMEPAGE,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: PATH.PRICING,
        element: <Pricing />,
      },
      {
        path: PATH.PRODUCT,
        element: <Product />,
      },
    ],
    errorElement: <PageNotFound />,
  },
])
