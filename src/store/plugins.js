import {FAVOURITES_KEY} from '../api/favourites'

const localStoragePlugin = store => {
  store.subscribe((mutation, {favourites}) => {
    localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favourites))
  })
}

export default [localStoragePlugin]
