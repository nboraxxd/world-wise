import { Navigate } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { AppRoute } from '@/routes/AppRoute'
import { AppLayout } from '@/layouts/AppLayout'
import { CityList } from '@/components/CityList'
import { CountryList } from '@/components/CountryList'
import { City } from '@/pages/City'
import Form from '@/components/Form/Form'

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
          element: <CountryList />,
        },
        {
          path: PATH.APP.FORM,
          element: <Form />,
        },
        {
          path: PATH.APP.CITY,
          element: <City />,
        },
      ],
    },
  ],
}
