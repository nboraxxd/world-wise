import { Navigate, Outlet } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { useAuth } from '@/contexts/auth.context'

export default function AppRoute() {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate replace to={PATH.LOGIN} />
}
