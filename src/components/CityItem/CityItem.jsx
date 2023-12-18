import { Link, createSearchParams, generatePath } from 'react-router-dom'
import clsx from 'clsx'

import { PATH } from '@/constants/path'
import { formatDate } from '@/utils/common'
import { useCities } from '@/contexts/cities.context'
import { Flag } from '@/components/Flag'
import styles from './CityItem.module.css'

export default function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities()
  const { id, cityName, countryCode, country, date, position } = city

  const cityPath = generatePath(PATH.APP.CITY, { id })
  const citySearchParams = createSearchParams({ lat: position.lat, lng: position.lng }).toString()

  async function handleDeleteCity(ev) {
    ev.preventDefault()
    deleteCity(id)
  }

  return (
    <li>
      <Link
        to={{ pathname: cityPath, search: citySearchParams }}
        className={clsx(styles.cityItem, { [styles['cityItem--active']]: currentCity?.id === id })}
      >
        <div className={styles.flag}>
          <Flag countryCode={countryCode} countryName={country} />
        </div>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleDeleteCity}>
          &times;
        </button>
      </Link>
    </li>
  )
}
