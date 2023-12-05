import { Flag } from '@/components/Flag'
import styles from './CountryItem.module.css'

export default function CountryItem({ country }) {
  const { name, code } = country

  return (
    <li className={styles.countryItem}>
      <div className={styles.flag}>
        <Flag countryCode={code} />
      </div>
      <span>{name}</span>
    </li>
  )
}
