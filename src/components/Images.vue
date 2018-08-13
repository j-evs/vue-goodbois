<template >
  <div>
    <div class="imagesWrapper">
      <div class="hello" v-for="(image, i) in images" :key="i">
        <dog-image :src="image" :is-fav="isFavourite(image)"></dog-image>
      </div>
    </div>
    <div id="triggering">TRIGGER BRO</div>
  </div>
</template>

<script>
import DogImage from './DogImage'

export default {
  name: 'Images',
  components: {
    DogImage
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  border: 1px solid black;
}
.imagesWrapper {
  min-height: 100vh;
}
</style>
