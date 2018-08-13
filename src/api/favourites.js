const FAVOURITES_KEY = 'favourites'

const getByKey = (key) => JSON.parse(localStorage.getItem(key))
const saveToLocalStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data))

export const addToFavourites = (imageSrc) => {
  const favourites = getByKey(FAVOURITES_KEY) || []
  const newFavourites = [...new Set([...favourites, imageSrc])]

  return saveToLocalStorage(FAVOURITES_KEY, newFavourites)
}

export const removeFromFavourites = (imageSrc) => {
  const favourites = getByKey(FAVOURITES_KEY)
  const newFavourites = favourites.filter(fav => fav !== imageSrc)

  return saveToLocalStorage(FAVOURITES_KEY, newFavourites)
}

export const getFavourites = () => getByKey(FAVOURITES_KEY)
