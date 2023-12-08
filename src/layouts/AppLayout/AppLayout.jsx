import { AppSidebar } from '@/components/AppSidebar'
import { Map } from '@/components/Map'
import styles from './AppLayout.module.css'

export default function AppLayout() {
  return (
    <div className={styles.app}>
      <AppSidebar />
      <Map />
    </div>
  )
}
