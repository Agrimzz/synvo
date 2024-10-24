export const formatTime = (time: string) => {
  const date = new Date(time)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  return `${hours}:${formattedMinutes}`
}

export const truncateText = (text: string, maxLength: number) => {
  if (text?.length <= maxLength) {
    return text
  }
  return `${text?.slice(0, maxLength)}...`
}
