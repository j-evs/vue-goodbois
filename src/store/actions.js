import {fetchRandomBreedImages} from '../api/breed'

const fetchDataHelper = ({store: {commit}, apiFn, onSuccess, onFail}) => {
  commit('setLoadingState', {isLoading: true})
  commit('setErrorState', {isError: null})

  return apiFn()
    .then(data => {
      commit('setLoadingState', {isLoading: false})
      onSuccess && typeof onSuccess === 'function' && onSuccess(data)
    })
    .catch(error => {
      commit('setLoadingState', {isLoading: false})
      commit('setErrorState', {isError: error})
      onFail && typeof onFail === 'function' && onFail(error)
    })
}

const addBreedImages = (store) =>
  fetchDataHelper({
    store,
    apiFn: fetchRandomBreedImages.bind(this, {breed: store.state.currentBreed, count: 20}),
    onSuccess: (data) => {
      store.commit('addImages', {images: data})
    },
    onFail: () => store.commit('setImages', [])
  })

export default {
  addBreedImages
}
