import { Outlet, useLocation } from 'react-router-dom'

import { MainNav } from '@/components/MainNav'
import { PATH } from '@/constants/path'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  const { pathname } = useLocation()

  return (
    <main className={pathname === PATH.HOMEPAGE ? styles.homepage : styles.rest}>
      <MainNav />
      <Outlet />
    </main>
  )
}
