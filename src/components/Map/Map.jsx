import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { useCities } from '@/contexts/cities.context'
import { Flag } from '@/components/Flag'
import styles from './Map.module.css'

export default function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0])

  const navigate = useNavigate()
  const { cities } = useCities()

  const [searchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  return (
    <div className={styles.mapContainer}>
      <MapContainer center={mapPosition} zoom={13} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <div>
                <Flag countryCode={city.countryCode} style={{ maxHeight: '2.8rem', height: '2.8rem' }} />
              </div>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
