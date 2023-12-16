import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import useFetch from '@/hooks/useFetch'
import { citiesService } from '@/services/cities.service'
import { formatDate } from '@/utils/common'
import { useCities } from '@/contexts/cities.context'
import { Flag } from '@/components/Flag'
import { Spinner } from '@/components/Spinner'
import { BackButton } from '@/components/BackButton'
import styles from './City.module.css'

export default function City() {
  const { id: cityId } = useParams()
  const { setCurrentCity } = useCities()

  const { data: city, status, error } = useFetch(citiesService.getCity, cityId)
  const { countryCode, cityName, date, notes } = city
  const isLoading = status === 'pending' || status === 'idle'

  useEffect(() => {
    setCurrentCity(city)
  }, [setCurrentCity, city])

  if (isLoading) return <Spinner />

  if (error) return null

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <div className={styles.flag}>
          <Flag countryCode={countryCode} />
          <span>{cityName}</span>
        </div>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a href={`https://en.wikipedia.org/wiki/${cityName}`} target="_blank" rel="noreferrer">
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <BackButton />
      </div>
    </div>
  )
}
