import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl } from 'react-leaflet'

import { useCities } from '@/contexts/cities.context'
import { useGeolocation } from '@/hooks/useGeolocation'
import useUrlPosition from '@/hooks/useUrlPosition'
import { CenterPosition } from '@/components/CenterPosition'
import { DetectClick } from '@/components/DetectClick'
import { Flag } from '@/components/Flag'
import { Button } from '@/components/Button'
import styles from './Map.module.css'

export default function Map() {
  const [mapPosition, setMapPosition] = useState(() => JSON.parse(localStorage.getItem('curr_latlng')) || [38, -77])
  const { mapLat, mapLng } = useUrlPosition()
  const { cities } = useCities()
  const { getPosition, isLoading: isLoadingPosition, position: geolocationPosition } = useGeolocation()

  useEffect(() => {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng])
      localStorage.setItem('curr_latlng', JSON.stringify([mapLat, mapLng]))
    }
  }, [mapLat, mapLng])

  useEffect(() => {
    if (geolocationPosition) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng])
    }
  }, [geolocationPosition])

  return (
    <div className={styles.mapContainer}>
      <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? 'Loading...' : 'Use your position'}
      </Button>

      <MapContainer center={mapPosition} zoom={6} zoomControl={false} className={styles.map}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          noWrap={true}
        />
        <ZoomControl position="topright" />
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
