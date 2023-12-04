import { createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { MainLayout } from '@/layouts/MainLayout'
import { Homepage } from '@/pages/Homepage'
import { Pricing } from '@/pages/Pricing'
import { Product } from '@/pages/Product'
import { Login } from '@/pages/Login'
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
      {
        path: PATH.LOGIN,
        element: <Login />,
      },
    ],
    errorElement: <PageNotFound />,
  },
])
