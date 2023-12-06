import { Link, generatePath } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { formatDate } from '@/utils/common'
import { Flag } from '@/components/Flag'
import styles from './CityItem.module.css'

export default function CityItem({ city }) {
  const { id, cityName, countryCode, country, date } = city

  const cityPath = generatePath(PATH.APP.CITY, { id })

  return (
    <li>
      <Link to={cityPath} className={styles.cityItem}>
        <div className={styles.flag}>
          <Flag countryCode={countryCode} countryName={country} />
        </div>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  )
}
