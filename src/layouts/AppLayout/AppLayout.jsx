import { AppSidebar } from '@/components/AppSidebar'
import { Map } from '@/components/Map'
import useFetch from '@/hooks/useFetch'
import { citiesService } from '@/services/cities.service'
import styles from './AppLayout.module.css'

export default function AppLayout() {
  const cities = useFetch(citiesService.getCities)

  return (
    <div className={styles.app}>
      <AppSidebar cities={cities} />
      <Map />
    </div>
  )
}
