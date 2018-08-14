import Vue from 'vue'
import Router from 'vue-router'
import AllImages from '@/components/AllImages'
import Favourites from '@/components/Favourites'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites
    },
    {
      path: '/:breed?',
      name: 'AllImages',
      component: AllImages
    }
  ]
})

router.afterEach(({name, params: {breed: toBreed}}) => {
  const currentBreed = store.state.currentBreed
  return name === 'AllImages' && (currentBreed !== toBreed)
    ? store.commit('setCurrentBreed', {breed: toBreed})
    : null
})

export default router
