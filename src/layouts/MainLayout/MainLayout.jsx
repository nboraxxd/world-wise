import { Outlet, useLocation } from 'react-router-dom'

import { MainNav } from '@/components/MainNav'
import styles from './MainLayout.module.css'
import { PATH } from '@/constants/path'

export default function MainLayout() {
  const { pathname } = useLocation()

  return (
    <main className={pathname !== PATH.HOMEPAGE ? styles[pathname.replace('/', '')] : styles.homepage}>
      <MainNav />
      <Outlet />
    </main>
  )
}
