import { createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { authRouter } from '@/routes/authRouter'
import { appRouter } from '@/routes/appRouter'
import { MainLayout } from '@/layouts/MainLayout'
import { Homepage } from '@/pages/Homepage'
import { Pricing } from '@/pages/Pricing'
import { Product } from '@/pages/Product'
import { PageNotFound } from '@/pages/PageNotFound'

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
      authRouter,
    ],
    errorElement: <PageNotFound />,
  },

  appRouter,
])
