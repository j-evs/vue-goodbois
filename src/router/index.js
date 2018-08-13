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

// router is the single source of truth for current breed
router.afterEach(({name, params: {breed: toBreed}}, {params: {breed: fromBreed}}) => {
  return name === 'Images' && (fromBreed !== toBreed)
    ? store.dispatch('selectBreed', {toBreed})
    : null
})

export default router
