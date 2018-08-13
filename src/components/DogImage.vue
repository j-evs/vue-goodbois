<template>
  <div>
    <div @click="toggleFavourite(src)">
      <IconHeart :class="{favourite: isFav}"></IconHeart>
    </div>
    <img :src="src">
  </div>
</template>

<script>
import IconHeart from './IconHeart'
export default {
  name: 'DogImage',
  components: {
    IconHeart
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    isFav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addToFavourites (image) {
      return this.$store.commit('addToFavourites', {
        image
      })
    },
    removeFromFavourites (image) {
      return this.$store.commit('removeFromFavourites', {
        image
      })
    },
    toggleFavourite (image) {
      return this.isFav
        ? this.removeFromFavourites(image)
        : this.addToFavourites(image)
    }
  }
}
</script>

<style>
 .favourite path {
   fill: #C03A2B;
 }
</style>
