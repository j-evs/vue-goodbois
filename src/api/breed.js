import axios from 'axios'

const API_BASE_URL = 'https://dog.ceo/api'

const createRandomImagesEndpoint = ({count}) =>
  `${API_BASE_URL}/breeds/image/random/${count}`

export const fetchRandomBreedImages = ({count}) => {
  const endpoint = createRandomImagesEndpoint({count})

  return axios.get(endpoint)
    .then(data => data && data.data && data.data.message)
}
