import { PATH } from '@/constants/path'
import { useMapEvent } from 'react-leaflet'
import { createSearchParams, useNavigate } from 'react-router-dom'

export default function DetectClick() {
  const navigate = useNavigate()

  useMapEvent({
    click: (e) => {
      const latlngSearchParams = createSearchParams({ lat: e.latlng.lat, lng: e.latlng.lng }).toString()
      navigate({ pathname: PATH.APP.FORM, search: latlngSearchParams })
    },
  })
}
