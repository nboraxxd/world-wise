export function formatDate(date) {
  return new Intl.DateTimeFormat('vn', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}
