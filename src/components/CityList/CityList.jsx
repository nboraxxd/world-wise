import { useOutletContext } from 'react-router-dom'
import { CityItem } from '@/components/CityItem'
import styles from './CityList.module.css'

export default function CityList() {
  const {
    cities: { data: cities, status: citiesStatus, error: citiesError },
  } = useOutletContext()
  const isLoading = citiesStatus === 'pending' || citiesStatus === 'idle'

  if (isLoading) return <div>Loading...</div>

  if (citiesError) return <div>{citiesError}</div>

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  )
}
