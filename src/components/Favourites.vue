<template>
  <images-wrapper>
    <div v-for="(favourite, i) in favourites" :key="i">
      <dog-image class="dogImage" :src="favourite" is-fav></dog-image>
    </div>
  </images-wrapper>
</template>

<script>
import DogImage from './DogImage'
import ImagesWrapper from './ImagesWrapper'

export default {
  name: 'Favourites',
  components: {
    ImagesWrapper,
    DogImage
  },
  computed: {
    favourites () {
      return this.$store.state.favourites
    }
  }
}
</script>

<style scoped>

</style>
