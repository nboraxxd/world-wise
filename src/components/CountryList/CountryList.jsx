import { v4 as uuidv4 } from 'uuid'

import { useCities } from '@/contexts/cities.context'
import { Message } from '@/components/Message'
import { Spinner } from '@/components/Spinner'
import { CountryItem } from '@/components/CountryItem'
import styles from './CountryList.module.css'

export default function CountryList() {
  const { cities, fetchStatus, fetchError } = useCities()

  const isLoading = fetchStatus === 'pending' || fetchStatus === 'idle'

  if (isLoading) return <Spinner />

  if (fetchError || cities.length === 0)
    return <Message message={fetchError || 'Add your first city by clicking on a city on the map'} />

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
