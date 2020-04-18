export const getError = (errors, name) => {
  if (!errors) return null
  let str = null
  for (const error of errors) {
    if (error.field === name) {
      str = error['message']
      break;
    }
  }
  return str
}