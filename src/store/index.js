import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'
import getters from './getters'

import {getFavourites} from '../api/favourites'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentBreed: '',
    breeds: [],
    images: [],
    favourites: getFavourites() || []
  },
  getters,
  actions,
  mutations,
  plugins
})
