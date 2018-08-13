<template >
  <div>
    <div class="imagesWrapper">
      <div class="hello" v-for="(image, i) in images" :key="i">
        <span @click="addToFavourites(image)">WHAAAAAAAT</span>
        <img :src="image">
      </div>
    </div>
    <div id="triggering">TRIGGER BRO</div>
  </div>
</template>

<script>
  import {addToFavourites} from '../api/favourites'

export default {
  name: 'Images',
  mounted () {
    const trigger = document.getElementById('triggering')

    this.observer = new IntersectionObserver(this.observerCb)
    this.observer.observe(trigger)
  },
  destroyed () {
    this.observer.disconnect()
    this.observer = null
  },
  methods: {
    addToFavourites,
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
  },
  computed: {
    images () {
      return this.$store.state.images
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
