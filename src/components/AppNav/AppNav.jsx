import { NavLink } from 'react-router-dom'
import styles from './AppNav.module.css'
import { PATH } from '@/constants/path'

export default function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={PATH.APP.CITIES}>Cities</NavLink>
        </li>
        <li>
          <NavLink to={PATH.APP.COUNTRIES}>Countries</NavLink>
        </li>
      </ul>
    </nav>
  )
}
