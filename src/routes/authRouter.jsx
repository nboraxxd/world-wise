import { PATH } from '@/constants/path'
import { AuthRoute } from '@/routes/AuthRoute'
import { Login } from '@/pages/Login'

export const authRouter = {
  element: <AuthRoute />,
  children: [
    {
      path: PATH.LOGIN,
      element: <Login />,
    },
  ],
}
