import { Link } from 'react-router-dom'

import { PATH } from '@/constants/path'
import { useAuth } from '@/contexts/auth.context'
import styles from './Homepage.module.css'

export default function Homepage() {
  const { isAuthenticated } = useAuth()

  return (
    <section className={styles.homepage}>
      <h1 className={styles.title}>
        You travel the world.
        <br />
        WorldWise keeps track of your adventures.
      </h1>
      <h2 className={styles.desc}>
        A world map that tracks your footsteps into every city you can think of. Never forget your wonderful
        experiences, and show your friends how you have wandered the world.
      </h2>

      <Link to={isAuthenticated ? PATH.APP.CITIES : PATH.LOGIN} className="cta">
        Start tracking now
      </Link>
    </section>
  )
}
