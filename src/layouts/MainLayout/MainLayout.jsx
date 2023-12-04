import { Outlet } from 'react-router-dom'

import { MainNav } from '@/components/MainNav'
import styles from './MainLayout.module.css'

export default function MainLayout() {
  return (
    <main className={styles.homepage}>
      <MainNav />
      <Outlet />
    </main>
  )
}
