export function formatDate(startDate: string, endDate: string): string {
  let startingDateToShow = ''
  let endingDateToShow = ''
  let endingDate = ''

  if (startDate !== null) {
    const sDateArray = startDate.split('-')
    const sDate = new Date(
      Date.UTC(
        parseInt(sDateArray[0]),
        parseInt(sDateArray[1]) - 1,
        parseInt(sDateArray[2])
      )
    )
    startingDateToShow = sDate.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC'
    })
  }

  if (endDate !== null) {
    const eDateArray = endDate.split('-')
    const eDate = new Date(
      Date.UTC(
        parseInt(eDateArray[0]),
        parseInt(eDateArray[1]) - 1,
        parseInt(eDateArray[2])
      )
    )
    endingDate = eDate.toLocaleString('en-US', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC'
    })
  }

  endingDateToShow = endDate != null ? endingDate : 'Current'
  const years = `${startingDateToShow} / ${endingDateToShow}`
  return years
}
