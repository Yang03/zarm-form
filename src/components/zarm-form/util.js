export const getFieldError = (errors, key) => {
  let error = ''
  for(let i = 0, len = errors.length; i < len; i++) {
    if (errors[i].field === key) {
      error = errors[i].message
    }
  }
  return error
}