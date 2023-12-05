export default function Flag({ countryCode }) {
  if (!countryCode) return null

  countryCode = countryCode.toLowerCase()
  const baseUrl = `https://flagcdn.com/${countryCode}.svg`
  const countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode)

  return <img src={baseUrl} alt={`Flag of ${countryName}`} height="100%" />
}
