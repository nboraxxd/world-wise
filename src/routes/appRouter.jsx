import { Navigate } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { AppRoute } from '@/routes/AppRoute'
import { AppLayout } from '@/layouts/AppLayout'

export const appRouter = {
  path: PATH.APP.INDEX,
  element: <AppRoute />,
  children: [
    {
      index: true,
      element: <Navigate replace to={PATH.APP.CITIES} />,
    },
    {
      path: PATH.APP.CITIES,
      element: <AppLayout />,
    },
  ],
}
