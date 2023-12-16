import { useEffect, useState } from 'react'

import useUrlPosition from '@/hooks/useUrlPosition'
import useFetch from '@/hooks/useFetch'
import { citiesService } from '@/services/cities.service'
import { Button } from '@/components/Button'
import { BackButton } from '@/components/BackButton'
import { Flag } from '@/components/Flag'
import { Message } from '@/components/Message'
import { Spinner } from '@/components/Spinner'
import styles from './Form.module.css'

export default function Form() {
  const [cityName, setCityName] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [date, setDate] = useState(new Date())
  const [notes, setNotes] = useState('')

  const { mapLat, mapLng } = useUrlPosition()

  const { data, error, status } = useFetch(citiesService.getCityData, [mapLat, mapLng])
  const isLoading = status === 'pending' || status === 'idle'

  useEffect(() => {
    if (data) {
      setCityName(data.city || data.locality || 'Unknown city')
      setCountryCode(data.countryCode || '')
    }
  }, [data])

  if (isLoading) return <Spinner />

  if (!countryCode || error) return <Message message="That doesn't seen to be a city. Click somewhere else 🌍" />

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={(e) => setCityName(e.target.value)} value={cityName} />
        <div className={styles.flag}>
          <Flag countryCode={countryCode} />
        </div>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input id="date" onChange={(e) => setDate(e.target.value)} value={date} />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes} />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  )
}
