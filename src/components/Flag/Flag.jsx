export default function Flag({ countryCode }) {
  if (!countryCode) return null

  const baseUrl = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
  const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode)

  return <img src={baseUrl} alt={`Flag of ${countryName}`} height="100%" />
}
