import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/:breed',
      name: 'Breed',
      component: HelloWorld
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: HelloWorld
    }
  ]
})

// router is the single source of truth for current breed
router.afterEach(({name, params: {breed}}) => {
  return name === 'Breed'
    ? store.dispatch('selectBreed', {breed})
    : null
})

export default router
