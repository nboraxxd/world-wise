import { Logo } from '@/components/Logo'
import { AppNav } from '@/components/AppNav'
import { SidebarFooter } from '@/components/SidebarFooter'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo className={styles.logo} />
      <AppNav />

      <p>List of cities</p>

      <SidebarFooter />
    </div>
  )
}
