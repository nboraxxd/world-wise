import { Navigate, createBrowserRouter } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { MainLayout } from '@/layouts/MainLayout'
import { AuthRoute } from '@/routes/AuthRoute'
import { Homepage } from '@/pages/Homepage'
import { Pricing } from '@/pages/Pricing'
import { Product } from '@/pages/Product'
import { Login } from '@/pages/Login'
import { PageNotFound } from '@/pages/PageNotFound'

import { AppRoute } from '@/routes/AppRoute'
import { App } from '@/pages/App'

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
        element: <AuthRoute />,
        children: [
          {
            path: PATH.LOGIN,
            element: <Login />,
          },
        ],
      },
    ],
    errorElement: <PageNotFound />,
  },
  {
    path: PATH.APP.INDEX,
    element: <AppRoute />,
    children: [
      {
        index: true,
        element: <Navigate replace to={PATH.APP.CITIES} />,
      },
      {
        path: PATH.APP.CITIES,
        element: <App />,
      },
    ],
  },
])
