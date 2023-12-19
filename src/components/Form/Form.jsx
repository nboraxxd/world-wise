import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'

import { PATH } from '@/constants/path'
import useUrlPosition from '@/hooks/useUrlPosition'
import useFetch from '@/hooks/useFetch'
import { citiesService } from '@/services/cities.service'
import { useCities } from '@/contexts/cities.context'
import { Button } from '@/components/Button'
import { BackButton } from '@/components/BackButton'
import { Flag } from '@/components/Flag'
import { Message } from '@/components/Message'
import { Spinner } from '@/components/Spinner'

import 'react-datepicker/dist/react-datepicker.css'
import styles from './Form.module.css'
import clsx from 'clsx'

export default function Form() {
  const [cityName, setCityName] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [date, setDate] = useState(new Date())
  const [notes, setNotes] = useState('')

  const navigate = useNavigate()
  const { mapLat, mapLng } = useUrlPosition()

  const { createCity, cityStatus } = useCities()
  const isCreatingCity = cityStatus === 'pending'

  const { data, error, status } = useFetch(citiesService.getCityData, [mapLat, mapLng], { disable: !mapLat && !mapLng })
  const isLoading = status === 'pending' || status === 'idle'

  useEffect(() => {
    if (data) {
      setCityName(data.city || data.locality || 'Unknown city')
      setCountryCode(data.countryCode || '')
    }
  }, [data])

  async function handleSubmit(ev) {
    ev.preventDefault()

    if (!cityName || !date) return

    const country = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode) || 'Unknown country'
    const newCity = {
      cityName,
      country,
      countryCode,
      date,
      notes,
      position: { lat: mapLat, lng: mapLng },
    }

    await createCity(newCity)
    navigate(PATH.APP.CITIES)
  }

  if (!mapLat && !mapLng) return <Message message="Start by clicking somewhere on the map" />

  if (isLoading) return <Spinner />

  if (!countryCode || error) return <Message message="That doesn't seen to be a city. Click somewhere else" />

  return (
    <form className={clsx(styles.form, { [styles['loading']]: isCreatingCity })} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={(e) => setCityName(e.target.value)} value={cityName} />
        <div className={styles.flag}>
          <Flag countryCode={countryCode} />
        </div>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker calendarStartDay={1} dateFormat="dd/MM/yyyy" id="date" onChange={setDate} selected={date} />
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
