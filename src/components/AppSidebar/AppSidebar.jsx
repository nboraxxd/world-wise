import { Outlet } from 'react-router-dom'

import { Logo } from '@/components/Logo'
import { AppNav } from '@/components/AppNav'
import { AppFooter } from '@/components/AppFooter'
import styles from './AppSidebar.module.css'

export default function AppSidebar({ cities }) {
  return (
    <div className={styles.sidebar}>
      <Logo className={styles.logo} />
      <AppNav />

      <Outlet context={{ cities }} />

      <AppFooter />
    </div>
  )
}