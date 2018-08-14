const getBreedsFromImages = (images) => {
  const allBreeds = images.reduce((breeds, image) => {
    // disable no-useless-escape
    /* eslint-disable-next-line */
    const regex = /\/breeds\/(.*)[\/|-]/g
    const breed = regex.exec(image)[1]
    return [...breeds, breed]
  }, [])

  return [...new Set(allBreeds)]
}

export default {
  favourites (state) {
    return state.favourites
  },
  images ({images, currentBreed}) {
    return currentBreed ? images.filter(image => image.includes(currentBreed)) : images
  },
  breeds (state) {
    return getBreedsFromImages(state.images)
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
