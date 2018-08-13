import Vue from 'vue'
import Router from 'vue-router'
import Images from '@/components/Images'
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
      path: '/:breed',
      name: 'Images',
      component: Images
    }
  ]
})

// router is the single source of truth for current breed
router.afterEach(({name, params: {breed}}) => {
  return name === 'Images'
    ? store.dispatch('selectBreed', {breed})
    : null
})

export default router
