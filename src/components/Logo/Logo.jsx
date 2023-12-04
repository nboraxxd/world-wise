import { Link } from 'react-router-dom'

import { PATH } from '@/constants/path'
import styles from './Logo.module.css'

function Logo() {
  return (
    <Link to={PATH.HOMEPAGE}>
      <img src="/images/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  )
}

export default Logo
