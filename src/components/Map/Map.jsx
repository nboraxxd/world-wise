import { useNavigate, useSearchParams } from 'react-router-dom'

import { PATH } from '@/constants/path'
import styles from './Map.module.css'

export default function Map() {
  const [searchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')
  const navigate = useNavigate()

  return (
    <div className={styles.mapContainer} onClick={() => navigate(PATH.APP.FORM)}>
      <h1>Map</h1>
      <h2>
        Position: {lat}, {lng}
      </h2>
    </div>
  )
}
