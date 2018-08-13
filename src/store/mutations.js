export default {
  setCurrentBreed (state, {breed}) {
    state.currentBreed = breed
  },
  setBreeds (state, {breeds}) {
    state.breeds = breeds
  },
  setLoadingState (state, {loadingState}) {
    state.isLoading = loadingState
  },
  setErrorState (state, {errorState}) {
    state.isError = errorState
  },
  setImages (state, {images}) {
    state.images = images
  }
}
