import { NavLink } from 'react-router-dom'

import { PATH } from '@/constants/path'
import styles from './MainNav.module.css'
import Logo from '../Logo/Logo'

export default function MainNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to={PATH.PRICING}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={PATH.PRODUCT}>Product</NavLink>
        </li>
        <li>
          <NavLink to={PATH.LOGIN} className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
