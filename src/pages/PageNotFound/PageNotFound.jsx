import { Link } from 'react-router-dom'
import { PATH } from '@/constants/path'
import styles from './PageNotFound.module.css'

export default function PageNotFound() {
  return (
    <section className={styles.pageNotFound}>
      <section>
        <h1>404</h1>
        <h2>Sorry, page not found 😢</h2>
        <Link to={PATH.HOMEPAGE} className="cta">
          Go back home
        </Link>
      </section>
    </section>
  )
}
