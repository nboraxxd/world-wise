import { Link } from 'react-router-dom'

import { PATH } from '@/constants/path'
import styles from './Homepage.module.css'

export default function Homepage() {
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

      <Link to={PATH.APP} className="cta">
        Start tracking now
      </Link>
    </section>
  )
}
