export default function formatDateTime(datetime: string | number | Date): string {
  const date = new Date(datetime)
  const now = new Date()

  const pad = (num: number): string => num.toString().padStart(2, '0')

  const diffTime = now.getTime() - date.getTime()
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

  const dayNames: string[] = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  const monthNames: string[] = [
    '01', '02', '03', '04', '05', '06',
    '07', '08', '09', '10', '11', '12',
  ]

  const day = pad(date.getDate())
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()
  const shortYear = year.toString().slice(-2)

  if (date.toDateString() === now.toDateString()) {
    const hours = pad(date.getHours())
    const minutes = pad(date.getMinutes())
    return `${hours}:${minutes}`
  } else if (diffDays < 7 && date.getFullYear() === now.getFullYear()) {
    return dayNames[date.getDay()]
  } else if (year === now.getFullYear()) {
    return `${day}.${month}`
  } else {
    return `${day}.${month}.${shortYear}`
  }
}
