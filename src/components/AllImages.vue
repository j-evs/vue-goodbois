<template>
  <div>
    <images-wrapper>
      <div v-for="(image, i) in images" :key="i">
        <dog-image :src="image" :is-fav="isFavourite(image)"></dog-image>
      </div>
      <loader v-if="isLoading"></loader>
    </images-wrapper>
    <div id="trigger" class="trigger"></div>
  </div>
</template>

<script>
import DogImage from '../components/DogImage'
import ImagesWrapper from '../components/ImagesWrapper'
import Loader from './Loader'

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AllImages',
  components: {
    DogImage,
    ImagesWrapper,
    Loader
  },
  mounted () {
    const trigger = document.getElementById('trigger')

    this.observer = new IntersectionObserver(this.observerCb)
    this.observer.observe(trigger)
  },
  destroyed () {
    this.observer.disconnect()
    this.observer = null
  },
  computed: {
    ...mapGetters(['favourites', 'images', 'isLoading', 'breed'])
  },
  methods: {
    isFavourite (image) {
      return this.favourites.includes(image)
    },
    observerCb: function (entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0 && !this.breed) {
          this.addBreedImages()
        }
      })
    },
    ...mapActions(['addBreedImages'])
  },
  data () {
    return {
      observer: null
    }
  }
}
</script>

<style scoped>
.trigger {
  visibility: hidden;
}
</style>
