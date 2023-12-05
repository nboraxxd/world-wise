import { Navigate } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { AppRoute } from '@/routes/AppRoute'
import { AppLayout } from '@/layouts/AppLayout'
import { CityList } from '@/components/CityList'

export const appRouter = {
  element: <AppRoute />,
  children: [
    {
      path: PATH.APP.INDEX,
      element: <Navigate replace to={PATH.APP.CITIES} />,
    },
    {
      element: <AppLayout />,
      children: [
        {
          path: PATH.APP.CITIES,
          element: <CityList />,
        },
        {
          path: PATH.APP.COUNTRIES,
          element: <p>Coutries</p>,
        },
      ],
    },
  ],
}
