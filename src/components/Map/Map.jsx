import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { useCities } from '@/contexts/cities.context'
import { CenterPosition } from '@/components/CenterPosition'
import { Flag } from '@/components/Flag'
import styles from './Map.module.css'
import { DetectClick } from '@/components/DetectClick'

export default function Map() {
  const [mapPosition, setMapPosition] = useState([40, 0])

  const { cities } = useCities()

  const [searchParams] = useSearchParams()
  const mapLat = searchParams.get('lat')
  const mapLng = searchParams.get('lng')

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng])
    }
  }, [mapLat, mapLng])

  return (
    <div className={styles.mapContainer}>
      <MapContainer center={mapPosition} zoom={6} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
            <Popup>
              <div style={{ maxHeight: '2.8rem', height: '2.8rem' }}>
                <Flag countryCode={city.countryCode} />
              </div>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <CenterPosition position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  )
}
