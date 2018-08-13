import axios from 'axios'

const API_BASE_URL = 'https://dog.ceo'

const BREED_LIST_ENDPOINT = `${API_BASE_URL}/breeds/list`

const createBreedRandomImagesEndpoint = ({breed, count}) =>
  `${API_BASE_URL}/breed/${breed}/images/random/${count}`

export const fetchBreedList = () => axios.get(BREED_LIST_ENDPOINT)

export const fetchRandomBreedImages = ({breed, count}) => {
  const endpoint = createBreedRandomImagesEndpoint({breed, count})
  return axios.get(endpoint)
}
