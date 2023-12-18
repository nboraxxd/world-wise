import { PATH } from '@/constants/path'
import { useCities } from '@/contexts/cities.context'
import { useMapEvent } from 'react-leaflet'
import { createSearchParams, useNavigate } from 'react-router-dom'

export default function DetectClick() {
  const navigate = useNavigate()
  const { setCurrentCity } = useCities()

  useMapEvent({
    click: (e) => {
      const latlngSearchParams = createSearchParams({ lat: e.latlng.lat, lng: e.latlng.lng }).toString()
      setCurrentCity({})
      navigate({ pathname: PATH.APP.FORM, search: latlngSearchParams })
    },
  })
}
