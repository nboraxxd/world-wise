import { useOutletContext } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { Message } from '@/components/Message'
import { Spinner } from '@/components/Spinner'
import { CountryItem } from '@/components/CountryItem'
import styles from './CountryList.module.css'

export default function CountryList() {
  const {
    cities: { data: cities, status: citiesStatus, error: citiesError },
  } = useOutletContext()

  const isLoading = citiesStatus === 'pending' || citiesStatus === 'idle'

  if (isLoading) return <Spinner />

  if (citiesError || cities.length === 0)
    return <Message message={citiesError || 'Add your first city by clicking on a city on the map'} />

  const countries = cities.reduce((arr, city) => {
    const isExist = arr.some((country) => country.code === city.countryCode)

    if (!isExist) {
      arr.push({
        id: uuidv4(),
        code: city.countryCode,
        name: city.country,
      })
    }

    return arr
  }, [])

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  )
}