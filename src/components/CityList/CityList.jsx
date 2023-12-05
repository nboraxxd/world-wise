import { useOutletContext } from 'react-router-dom'
import { CityItem } from '@/components/CityItem'
import styles from './CityList.module.css'
import { Message } from '@/components/Message'
import { Spinner } from '@/components/Spinner'

export default function CityList() {
  const {
    cities: { data: cities, status: citiesStatus, error: citiesError },
  } = useOutletContext()
  const isLoading = citiesStatus === 'pending' || citiesStatus === 'idle'

  if (isLoading) return <Spinner />

  if (citiesError || cities.length === 0)
    return <Message message={citiesError || 'Add your first city by clicking on a city on the map'} />

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  )
}
