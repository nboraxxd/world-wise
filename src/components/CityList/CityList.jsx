import { useOutletContext } from 'react-router-dom'
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
        <li key={city.id}>{city.cityName}</li>
      ))}
    </ul>
  )
}
