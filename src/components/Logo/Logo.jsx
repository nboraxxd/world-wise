import { Link } from 'react-router-dom'
import clsx from 'clsx'

import { PATH } from '@/constants/path'
import styles from './Logo.module.css'

function Logo({ className }) {
  return (
    <Link to={PATH.HOMEPAGE}>
      <img src="/images/logo.png" alt="WorldWise logo" className={clsx(styles.logo, { [className]: className })} />
    </Link>
  )
}

export default Logo
