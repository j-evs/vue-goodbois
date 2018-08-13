export default {
  favourites (state) {
    return state.favourites
  },
  images (state) {
    return state.images
  },
  breeds (state) {
    return state.breeds
  },
  breed (state) {
    return state.currentBreed
  },
  isLoading (state) {
    return state.isLoading
  },
  isError (state) {
    return state.isError
  }
}
