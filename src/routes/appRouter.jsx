import { Navigate } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { AppRoute } from '@/routes/AppRoute'
import { App } from '@/pages/App'

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
      element: <App />,
    },
  ],
}
