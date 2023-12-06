import { useParams } from 'react-router-dom'
import styles from './City.module.css'

export default function City() {
  // TEMP DATA
  const currentCity = {
    cityName: 'Barcelona',
    country: 'Spain',
    countryCode: 'ES',
    date: '2027-08-10T08:22:53.976Z',
    notes: '',
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    id: 1258673,
  }

  const { cityName, countryCode, date, notes } = currentCity

  const { id: cityId } = useParams()
  console.log('🔥 ~ City ~ cityId:', cityId)

  return <h1>City</h1>
}
