import { createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { Homepage } from '@/pages/Homepage'
import { PageNotFound } from '@/pages/PageNotFound'
import { Pricing } from '@/pages/Pricing'
import { Product } from '@/pages/Product'

export const router = createBrowserRouter([
  {
    path: PATH.HOMEPAGE,
    element: <Homepage />,
    errorElement: <PageNotFound />,
  },
  {
    path: PATH.PRICING,
    element: <Pricing />,
  },
  {
    path: PATH.PRODUCT,
    element: <Product />,
  },
])
