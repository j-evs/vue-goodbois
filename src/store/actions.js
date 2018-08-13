import {fetchBreedList, fetchRandomBreedImages} from '../api/breed'

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

const getBreeds = (store) =>
  fetchDataHelper({
    store,
    apiFn: fetchBreedList,
    onSuccess: (data) => store.commit('setBreeds', {breeds: data}),
    onFail: () => store.commit('setBreeds', {breeds: []})
  })

const selectBreed = (store, { breed }) =>
  fetchDataHelper({
    store,
    apiFn: fetchRandomBreedImages.bind(this, {breed, count: 20}),
    onSuccess: (data) => {
      store.commit('setImages', {images: data})
      store.commit('setCurrentBreed', {breed})
    },
    onFail: () => store.commit('setCurrentBreed', {breed: ''})
  })

export default {
  getBreeds,
  selectBreed
}
