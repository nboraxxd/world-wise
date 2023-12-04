import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PATH } from '@/constants/path'

export default function AppRoute() {
  const [isLoggedIn] = useState(false)

  return isLoggedIn ? <Outlet /> : <Navigate to={PATH.LOGIN} />
}
