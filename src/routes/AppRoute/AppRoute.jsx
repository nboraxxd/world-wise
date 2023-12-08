import { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { PATH } from '@/constants/path'

export default function AppRoute() {
  const [isLoggedIn] = useState(true)

  return isLoggedIn ? <Outlet /> : <Navigate replace to={PATH.LOGIN} />
}
