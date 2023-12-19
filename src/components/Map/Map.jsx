import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, ZoomControl, useMapEvents } from 'react-leaflet'

import { useCities } from '@/contexts/cities.context'
import { useGeolocation } from '@/hooks/useGeolocation'
import useUrlPosition from '@/hooks/useUrlPosition'
import { AppSidebar } from '@/components/AppSidebar'
import { CenterPosition } from '@/components/CenterPosition'
import { DetectClick } from '@/components/DetectClick'
import { Flag } from '@/components/Flag'
import { Button } from '@/components/Button'
import { Hamburger } from '@/components/Hamburger'
import styles from './Map.module.css'

export default function Map() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
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
    <>
      <AppSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className={styles.mapContainer}>
        <Hamburger isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} type="hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Hamburger>
        <Button type="position" className="geolocation" onClick={getPosition}>
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
          <ToggleSideBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </MapContainer>
      </div>
    </>
  )
}

function ToggleSideBar({ setIsSidebarOpen }) {
  const handleClick = () => setIsSidebarOpen(true)

  useMapEvents({
    click: handleClick,
  })

  return null
}
