export const formatTime = (time: string) => {
  const date = new Date(time)
  const hours = date.getHours() % 12 || 12
  const minutes = date.getMinutes()
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  const amPm = date.getHours() >= 12 ? "PM" : "AM"
  return `${hours}:${formattedMinutes} ${amPm}`
}

export const truncateText = (text: string, maxLength: number) => {
  if (text?.length <= maxLength) {
    return text
  }
  return `${text?.slice(0, maxLength)}...`
}
