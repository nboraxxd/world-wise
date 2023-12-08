import { useCities } from '@/contexts/cities.context'
import { CityItem } from '@/components/CityItem'
import { Message } from '@/components/Message'
import { Spinner } from '@/components/Spinner'
import styles from './CityList.module.css'

export default function CityList() {
  const { cities, status, error } = useCities()

  const isLoading = status === 'pending' || status === 'idle'

  if (isLoading) return <Spinner />

  if (error || cities.length === 0)
    return <Message message={error || 'Add your first city by clicking on a city on the map'} />

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  )
}
