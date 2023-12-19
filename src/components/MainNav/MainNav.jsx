import { NavLink, useLocation } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { useAuth } from '@/contexts/auth.context'
import { Logo } from '@/components/Logo'
import styles from './MainNav.module.css'
import { Button } from '../Button'

export default function MainNav() {
  const { pathname } = useLocation()
  const { isAuthenticated, logout } = useAuth()

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
        {pathname !== PATH.LOGIN && (
          <li>
            {isAuthenticated ? (
              <Button type="primary" onClick={logout}>
                Logout
              </Button>
            ) : (
              <NavLink to={PATH.LOGIN} className={styles.ctaLink}>
                Login
              </NavLink>
            )}
          </li>
        )}
      </ul>
    </nav>
  )
}
