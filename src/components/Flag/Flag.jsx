export default function Flag({ countryCode, countryName }) {
  if (!countryCode) return null

  const baseUrl = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
  const countryNameFallback = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode)

  return <img src={baseUrl} alt={`Flag of ${countryName || countryNameFallback}`} height="100%" />
}
