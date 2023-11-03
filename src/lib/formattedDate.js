export const formattedDate = (date) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric"
  }
  return new Date(date).toLocaleDateString("en-US", options)
}
