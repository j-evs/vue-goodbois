<template>
  <images-wrapper>
    <div v-for="(image, i) in images" :key="i">
      <dog-image :src="image" :is-fav="isFavourite(image)"></dog-image>
    </div>
    <div id="triggering">TRIGGER BRO</div>
  </images-wrapper>
</template>

<script>
import DogImage from '../components/DogImage'
import ImagesWrapper from '../components/ImagesWrapper'

export default {
  name: 'AllImages',
  components: {
    DogImage,
    ImagesWrapper
  },
  mounted () {
    const trigger = document.getElementById('triggering')

    this.observer = new IntersectionObserver(this.observerCb)
    this.observer.observe(trigger)
  },
  destroyed () {
    this.observer.disconnect()
    this.observer = null
  },
  computed: {
    favourites () {
      return this.$store.state.favourites
    },
    images () {
      return this.$store.state.images
    }
  },
  methods: {
    isFavourite (image) {
      return this.favourites.includes(image)
    },
    observerCb: function (entries) {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          this.$store.dispatch('addBreedImages')
        }
      })
    }
  },
  data () {
    return {
      observer: null
    }
  }
}
</script>

<style scoped>

</style>
