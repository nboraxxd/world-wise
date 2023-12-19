import { NavLink } from 'react-router-dom'

import { PATH } from '@/constants/path'
import styles from './AppNav.module.css'

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
