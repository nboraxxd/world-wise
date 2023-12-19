import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { useAuth } from '@/contexts/auth.context'

export default function AuthRoute() {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Navigate to={PATH.APP.CITIES} replace /> : <Outlet />
}
