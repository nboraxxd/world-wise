import { useMap } from 'react-leaflet'

export default function CenterPosition({ position }) {
  const map = useMap()
  map.setView(position)

  return null
}
