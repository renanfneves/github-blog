import dayjs from 'dayjs'

export function handleDisplayDiffDays(dayToDiff: Date) {
  const today = dayjs(new Date()).startOf('day')

  const diff = today.diff(dayjs(dayToDiff).startOf('day'), 'day')

  switch (diff) {
    case 1:
      return `Há ${diff} dia`

    case 2:
      return `Há ${diff} dias`

    default:
      return 'Hoje'
  }
}
