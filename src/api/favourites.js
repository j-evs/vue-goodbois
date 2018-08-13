export const FAVOURITES_KEY = 'favourites'

const getByKey = (key) => {
  const data = localStorage.getItem(key)
  let result
  try {
    result = JSON.parse(data)
  } catch (e) {
    result = null
  }
  return result
}

export const getFavourites = () => getByKey(FAVOURITES_KEY)
